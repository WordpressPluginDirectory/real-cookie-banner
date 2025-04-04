<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\scanner;

use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
/**
 * Put in a list of `ScanEntry`'s and sort out false-positives and deduplicate. Keep
 * in mind, that this processor can also touch your `ScanEntry` properties as well!
 * @internal
 */
class FalsePositivesProcessor
{
    private $blockableScanner;
    private $entries;
    /**
     * C'tor.
     *
     * @param BlockableScanner $blockableScanner
     * @param ScanEntry[] $entries
     */
    public function __construct($blockableScanner, $entries)
    {
        $this->blockableScanner = $blockableScanner;
        $this->entries = $entries;
    }
    /**
     * Prepare the passed results and do some optimizations on them (e.g. remove duplicates).
     */
    public function process()
    {
        $this->convertTemplatesWithNonMatchingQueryArgsToExternalUrl();
        $this->convertTemplatesWithNonMatchingGroupsToExternalUrl();
        $this->deduplicate();
        $this->convertStandaloneLinkRelTemplateToExternalUrl();
        $this->removeExternalUrlsWithTemplateDuplicate();
        $this->removeDuplicateScannedItems();
        return $this->getEntries();
    }
    /**
     * Convert templates with non-matching query args of the blocked URL to an external URL.
     */
    public function convertTemplatesWithNonMatchingQueryArgsToExternalUrl()
    {
        foreach ($this->entries as $scanEntry) {
            if (empty($scanEntry->template) || empty($scanEntry->blocked_url)) {
                continue;
            }
            $blockable = $scanEntry->blockable;
            foreach ($scanEntry->expressions as $expression) {
                $rules = $blockable->getRulesByExpression($expression);
                if (\count($rules) === 0) {
                    continue;
                }
                // The same expression can be assigned to multiple rules, e.g. Google Analytics with different query args (`isOptional` and `assignedToGroups`)
                $ruleMatches = 0;
                foreach ($rules as $rule) {
                    if ($rule->urlMatchesQueryArgumentValidations($scanEntry->blocked_url)) {
                        ++$ruleMatches;
                    }
                }
                if ($ruleMatches === 0) {
                    $scanEntry->template = '';
                    break;
                }
            }
        }
    }
    /**
     * Remove all entries when there is not a scan entry with the needed host and convert it to an external URL.
     */
    public function convertTemplatesWithNonMatchingGroupsToExternalUrl()
    {
        $remove = [];
        $resetTemplates = [];
        $templateGroups = [];
        // Group entries by template and collect expressions
        foreach ($this->entries as $scanEntry) {
            if (empty($scanEntry->template)) {
                continue;
            }
            $template = $scanEntry->template;
            if (!isset($templateGroups[$template])) {
                $templateGroups[$template] = ['entries' => [], 'expressions' => []];
            }
            $templateGroups[$template]['entries'][] = $scanEntry;
            $templateGroups[$template]['expressions'] = \array_merge($templateGroups[$template]['expressions'], $scanEntry->expressions);
        }
        // Process each template group
        foreach ($templateGroups as $template => $group) {
            $firstEntry = $group['entries'][0];
            $blockable = $firstEntry->blockable;
            $foundRules = [];
            // Process all expressions for this template at once
            foreach ($group['expressions'] as $foundExpression) {
                $rules = $blockable->getRulesByExpression($foundExpression);
                foreach ($rules as $rule) {
                    foreach ($rule->getAssignedToGroups() as $groupName) {
                        if (!isset($foundRules[$groupName])) {
                            $foundRules[$groupName] = [];
                        }
                        if (!\in_array($rule, $foundRules[$groupName], \true)) {
                            $foundRules[$groupName][] = $rule;
                        }
                    }
                }
            }
            if (!$blockable->checkFoundRulesMatchesGroups($foundRules)) {
                foreach ($group['entries'] as $scanEntry) {
                    if (!empty($scanEntry->blocked_url) && $this->blockableScanner->isNotAnExcludedUrl($scanEntry->blocked_url) && !$this->canExternalUrlBeBypassed($scanEntry)) {
                        $resetTemplates[] = $scanEntry;
                        $scanEntry->lock = \true;
                    } else {
                        $remove[] = $scanEntry;
                    }
                }
            }
        }
        // Lazily reset templates and remove non-URL items so above calculations can calculate with original items
        foreach ($this->entries as $key => $value) {
            if (\in_array($value, $remove, \true)) {
                unset($this->entries[$key]);
            } elseif (\in_array($value, $resetTemplates, \true)) {
                $this->entries[$key]->template = '';
            }
        }
        // Reset indexes
        $this->entries = \array_values($this->entries);
    }
    /**
     * Deduplicate coexisting templates. Examples:
     *
     * - CF7 with reCaptcha over Google reCaptcha
     * - MonsterInsights > Google Analytics (`extended`)
     */
    public function deduplicate()
    {
        $removeByIdentifier = [];
        $entriesWithTemplate = [];
        $hostsByEntry = [];
        $hostCountByEntry = [];
        $extendedByEntry = [];
        // Collect data for each entry to avoid duplicate calculations in nested loops
        foreach ($this->entries as $key => $value) {
            if (empty($value->template)) {
                continue;
            }
            $entriesWithTemplate[$key] = $value;
            $currentHosts = $value->blockable->getOriginalExpressions();
            $hostsByEntry[$key] = $currentHosts;
            $hostCountByEntry[$key] = \count($currentHosts);
            $extendedByEntry[$key] = $value->blockable->getExtended();
        }
        // Index entries by host count for faster comparison
        $entriesByHostCount = [];
        foreach ($hostCountByEntry as $key => $count) {
            if (!isset($entriesByHostCount[$count])) {
                $entriesByHostCount[$count] = [];
            }
            $entriesByHostCount[$count][] = $key;
        }
        // Sort host counts in descending order for optimization
        $hostCounts = \array_keys($entriesByHostCount);
        \rsort($hostCounts);
        // Create a lookup map for hosts to quickly check containment
        $hostLookupByEntry = [];
        foreach ($hostsByEntry as $key => $hosts) {
            $hostLookupByEntry[$key] = \array_flip($hosts);
            // Use array_flip for O(1) lookups
        }
        // Identify entries to remove based on host coverage
        $keysToRemove = [];
        foreach ($entriesWithTemplate as $key => $value) {
            $currentHostCount = $hostCountByEntry[$key];
            $currentHosts = $hostsByEntry[$key];
            $foundBetterTemplate = \false;
            foreach ($hostCounts as $count) {
                // Only compare with larger host counts
                if ($count <= $currentHostCount) {
                    break;
                }
                foreach ($entriesByHostCount[$count] as $existingKey) {
                    $existingHostLookup = $hostLookupByEntry[$existingKey];
                    // Check if all current hosts are contained in the existing hosts
                    // Using array_flip lookup is much faster than in_array in loops
                    $allHostsContained = \true;
                    foreach ($currentHosts as $currentHost) {
                        if (!isset($existingHostLookup[$currentHost])) {
                            $allHostsContained = \false;
                            break;
                        }
                    }
                    if ($allHostsContained) {
                        $keysToRemove[] = $key;
                        $foundBetterTemplate = \true;
                        break 2;
                    }
                }
            }
            // Only check for extended templates if no better template was found
            if (!$foundBetterTemplate && !\is_null($extendedByEntry[$key])) {
                $removeByIdentifier[] = $extendedByEntry[$key];
            }
        }
        // Remove entries that are covered by better templates
        foreach ($keysToRemove as $key) {
            unset($this->entries[$key]);
        }
        // Remove entries with extended templates
        foreach ($this->entries as $key => $value) {
            if (\in_array($value->template, $removeByIdentifier, \true)) {
                unset($this->entries[$key]);
            }
        }
        // Reset indexes
        $this->entries = \array_values($this->entries);
    }
    /**
     * Convert a found `link[rel="preconnect|dns-prefetch"]` within a template and stands alone within this template
     * to an external URL as a DNS-prefetch and preconnect **must** be loaded in conjunction with another script.
     */
    public function convertStandaloneLinkRelTemplateToExternalUrl()
    {
        /**
         * Scan entries.
         *
         * @var ScanEntry[]
         */
        $convert = [];
        // Group entries by template and count unique markups per template
        $templateMarkupCounts = [];
        foreach ($this->entries as $scanEntry) {
            if (empty($scanEntry->template) || empty($scanEntry->markup)) {
                continue;
            }
            $template = $scanEntry->template;
            $markupContent = $scanEntry->markup->getContent();
            if (!isset($templateMarkupCounts[$template])) {
                $templateMarkupCounts[$template] = ['entries' => [], 'uniqueMarkups' => []];
            }
            $templateMarkupCounts[$template]['entries'][] = $scanEntry;
            if (!\in_array($markupContent, $templateMarkupCounts[$template]['uniqueMarkups'], \true)) {
                $templateMarkupCounts[$template]['uniqueMarkups'][] = $markupContent;
            }
        }
        // Find link[rel] entries that stand alone in their template
        foreach ($this->entries as $scanEntry) {
            if (empty($scanEntry->template) || empty($scanEntry->markup)) {
                continue;
            }
            $markup = $scanEntry->markup->getContent();
            if ($scanEntry->tag === 'link' && (\strpos($markup, 'dns-prefetch') !== \false || \strpos($markup, 'preconnect') !== \false) && isset($templateMarkupCounts[$scanEntry->template])) {
                // If there's only one unique markup for this template, it's a standalone
                if (\count($templateMarkupCounts[$scanEntry->template]['uniqueMarkups']) === 1) {
                    $convert[] = $scanEntry;
                }
            }
        }
        if (\count($convert) > 0) {
            $added = [];
            foreach ($convert as $convertScanEntry) {
                $key = \array_search($convertScanEntry, $this->entries, \true);
                $this->entries[] = $added[] = $entry = new ScanEntry();
                $entry->blocked_url = $convertScanEntry->blocked_url;
                $entry->source_url = $convertScanEntry->source_url;
                $entry->tag = $convertScanEntry->tag;
                $entry->attribute = $convertScanEntry->attribute;
                $entry->markup = $convertScanEntry->markup;
                unset($this->entries[$key]);
            }
        }
    }
    /**
     * Remove external URLs which are duplicated as template, too.
     * Performance optimized version that uses a hash map for faster lookups.
     */
    public function removeExternalUrlsWithTemplateDuplicate()
    {
        // Create a map of markup IDs to entries with templates
        $templatedMarkupIds = [];
        foreach ($this->entries as $entry) {
            if (!empty($entry->template) && $entry->markup) {
                $templatedMarkupIds[$entry->markup->getId()] = \true;
            }
        }
        $remove = [];
        foreach ($this->entries as $scanEntry) {
            if ($scanEntry->markup && empty($scanEntry->template) && isset($templatedMarkupIds[$scanEntry->markup->getId()])) {
                $remove[] = $scanEntry;
            }
        }
        foreach ($this->entries as $key => $value) {
            if (\in_array($value, $remove, \true)) {
                unset($this->entries[$key]);
            }
        }
        // Reset indexes
        $this->entries = \array_values($this->entries);
    }
    /**
     * Example: We have the following markup:
     *
     * ```
     * <link rel="stylesheet" id="everest-forms-google-fonts-css" href="https://fonts.googleapis.com/css?family=Josefin+Sans&#038;ver=1.1.6" />
     * ```
     *
     * And a content blocker for everest forms with the following rules:
     *
     * ```
     * *fonts.googleapis.com*
     * link[id="everest-forms-google-fonts-css"]
     * ```
     *
     * This would lead to duplicate entries in the scanner result list. Never show double-scanned elements when they e.g. caught by two rules
     * and a rerun through `Utils::preg_replace_callback_recursive`. In this case, we will modify the already existing scan entries' found expressions.
     */
    public function removeDuplicateScannedItems()
    {
        $contentBlocker = $this->blockableScanner->getHeadlessContentBlocker();
        $previousActive = $this->blockableScanner->setActive(\false);
        $previousBlockables = $contentBlocker->getBlockables();
        // Find all unique blockables within our found scan entries
        $scanEntriesBlockables = [];
        foreach ($this->entries as $scanEntry) {
            if ($scanEntry->blockable instanceof ScannableBlockable && !\in_array($scanEntry->blockable, $scanEntriesBlockables, \true)) {
                $scanEntriesBlockables[] = $scanEntry->blockable;
            }
        }
        // Run the content blocker for each found blockable and collect the results on a per-blockable basis
        // This is necessary because the content blocker does not support multiple blockables at once
        // Additionally, we are using a marker to join and split the HTML markups accordingly so we can use a
        // single HTML string for the expensive `modifyHtml` call.
        $blockablesScanEntries = [];
        $blockableMarkupsMarker = \uniqid('blockable-markups-');
        foreach ($scanEntriesBlockables as $blockable) {
            $contentBlocker->setBlockables([$blockable]);
            $blockableMarkups = [];
            foreach ($this->entries as $scanEntryKey => $scanEntry) {
                if (!empty($scanEntry->template) && $scanEntry->markup !== null && \strpos($scanEntry->markup->getContent(), \sprintf('%s="%s"', Constants::HTML_ATTRIBUTE_BY, 'scannable')) === \false) {
                    // Check if this blockable matches, with a cache for the markup as `modifyAny` is expensive
                    $markupCacheKey = $scanEntry->markup->getId();
                    if (!isset($blockableMarkups[$markupCacheKey])) {
                        $blockableMarkups[$markupCacheKey] = ['markup' => $scanEntry->markup, 'entries' => []];
                    }
                    $blockableMarkups[$markupCacheKey]['entries'][] = $scanEntryKey;
                }
            }
            // Run the content blocker once for all HTML markups and collect the results
            if (\count($blockableMarkups) > 0) {
                $html = '';
                foreach ($blockableMarkups as $markup) {
                    $html .= $blockableMarkupsMarker . "\n";
                    $html .= \join(',', $markup['entries']) . ';';
                    $html .= $markup['markup']->getId() . ';';
                    $html .= $markup['markup']->getContent() . "\n";
                }
                $html = $contentBlocker->modifyHtml($html);
                $html = \array_filter(\explode($blockableMarkupsMarker, $html));
                foreach ($html as $htmlPart) {
                    $htmlPart = \trim($htmlPart);
                    $htmlPart = \explode(';', $htmlPart, 3);
                    $entries = \array_map('intval', \explode(',', $htmlPart[0]));
                    $markupId = $htmlPart[1];
                    $markup = $htmlPart[2];
                    $isBlocked = \preg_match(\sprintf('/%s="([^"]+)"/m', Constants::HTML_ATTRIBUTE_BLOCKER_ID), $markup, $consentIdMatches);
                    $blockablesScanEntriesKey = \sprintf('%s-%s', $markupId, $blockable->getIdentifier());
                    if (!$isBlocked) {
                        continue;
                    }
                    if (!isset($blockablesScanEntries[$blockablesScanEntriesKey])) {
                        $blockablesScanEntries[$blockablesScanEntriesKey] = [];
                    }
                    foreach ($entries as $entry) {
                        $blockablesScanEntries[$blockablesScanEntriesKey][] = $this->entries[$entry];
                    }
                }
            }
        }
        $contentBlocker->setBlockables($previousBlockables);
        // Merge duplicate scan entries
        foreach ($this->entries as $idx => $scanEntry) {
            if (!empty($scanEntry->template) && $scanEntry->markup !== null && \strpos($scanEntry->markup->getContent(), \sprintf('%s="%s"', Constants::HTML_ATTRIBUTE_BY, 'scannable')) !== \false) {
                $originalMarkup = $contentBlocker->findOriginalMarkup($scanEntry->markup);
                $blockableScanEntriesKey = \sprintf('%s-%s', $originalMarkup->getId(), $scanEntry->blockable->getIdentifier());
                $blockableScanEntries = $blockablesScanEntries[$blockableScanEntriesKey] ?? [];
                foreach ($blockableScanEntries as $anotherEntry) {
                    $anotherEntry->expressions = \array_values(\array_unique(\array_merge($anotherEntry->expressions, $scanEntry->expressions)));
                    // Copy some fields which could be interesting for the first found scan entry, too
                    foreach (['blocked_url', 'source_url'] as $copyAttr) {
                        if (empty($anotherEntry->{$copyAttr})) {
                            $anotherEntry->{$copyAttr} = $scanEntry->{$copyAttr};
                        }
                    }
                }
                unset($this->entries[$idx]);
            }
        }
        // Reset indexes
        $this->blockableScanner->setActive($previousActive);
        $this->entries = \array_values($this->entries);
    }
    /**
     * Example: A blocked form does not have reCAPTCHA, got found as "CleverReach". The `form[action]` does
     * not need to get blocked due to the fact the server is only contacted through submit-interaction (a privacy
     * policy needs to be linked / checkbox).
     *
     * @param ScanEntry $entry
     */
    public function canExternalUrlBeBypassed($entry)
    {
        if ($entry->blocked_url !== null && $entry->tag === 'form' && $entry->attribute === 'action') {
            return \true;
        }
        return \false;
    }
    /**
     * Getter.
     */
    public function getEntries()
    {
        return $this->entries;
    }
}
