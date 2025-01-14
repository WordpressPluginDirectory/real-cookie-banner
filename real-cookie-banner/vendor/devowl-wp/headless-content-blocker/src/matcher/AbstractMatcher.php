<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AttributesHelper;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\BlockedResult;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\finder\match\MatchPluginCallbacks;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\HeadlessContentBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Markup;
/**
 * A matcher describes a class which gets a match from the `FastHtmlTag` and will
 * modify the tag as needed.
 * @internal
 */
abstract class AbstractMatcher
{
    private $headlessContentBlocker;
    private $currentlyInIterateBlockablesInString = \false;
    /**
     * C'tor.
     *
     * @param HeadlessContentBlocker $headlessContentBlocker
     */
    public function __construct($headlessContentBlocker)
    {
        $this->headlessContentBlocker = $headlessContentBlocker;
    }
    /**
     * Modify the result of a tag with attributes. Please use this in conjunction
     * with `checkMatch`.
     *
     * @param AbstractMatch $match
     * @return BlockedResult
     */
    public abstract function match($match);
    /**
     * Check if a given match is blocked and return a `BlockedResult` instance.
     *
     * @param AbstractMatch $match
     * @return BlockedResult
     */
    public abstract function createResult($match);
    /**
     * Create a basic `BlockedResult` from an `AbstractMatch`.
     *
     * @param AbstractMatch $match
     */
    public function createPlainResultFromMatch($match)
    {
        return new BlockedResult($match->getTag(), $match->getAttributes(), Markup::persist($match->getOriginalMatch(), $this->getHeadlessContentBlocker()));
    }
    /**
     * Disable blocked result if it has the skipped-attribute.
     *
     * @param BlockedResult $result
     * @param AbstractMatch $match
     */
    public function probablyDisableDueToSkipped($result, $match)
    {
        if ($result->isBlocked() && AttributesHelper::isSkipped($match->getAttributes())) {
            $result->disableBlocking();
        }
    }
    /**
     * Iterate our blockables in a given string and save results to the `BlockedResult`.
     *
     * @param BlockedResult $result
     * @param string $string
     * @param boolean $useContainsRegularExpression
     * @param boolean $multilineRegexp
     * @param string[] $useRegularExpressionFromMap
     * @param AbstractBlockable $useBlockables
     */
    public function iterateBlockablesInString($result, $string, $useContainsRegularExpression = \false, $multilineRegexp = \false, $useRegularExpressionFromMap = null, $useBlockables = null)
    {
        $cb = $this->getHeadlessContentBlocker();
        $allowMultiple = $cb->isAllowMultipleBlockerResults();
        $string = $this->prepareChunksFromString($string);
        $blockables = $useBlockables === null ? $cb->getBlockables() : $useBlockables;
        foreach ($blockables as $blockable) {
            $regularExpressions = $useContainsRegularExpression ? $blockable->getContainsRegularExpressions() : $blockable->getRegularExpressions();
            foreach ($regularExpressions as $expression => $regex) {
                $useRegex = $useRegularExpressionFromMap === null ? $regex : $useRegularExpressionFromMap[$expression] ?? \false;
                if (!$useRegex) {
                    continue;
                }
                foreach ($string as $chunkString) {
                    // Before doing an expensive regular expression match, check if the string generally exists in our chunk
                    // Do not create the cache for custom maps as they can differ from expression -> regular expression mapping (e.g. `blockablesToHosts`)
                    // This could lead to wrong `strpos` assertions in the inner `foreach`
                    if ($useRegularExpressionFromMap === null && !$blockable->matchesExpressionLoose($expression, $chunkString)) {
                        continue;
                    }
                    if (\preg_match($useRegex . ($multilineRegexp ? 'm' : ''), $chunkString)) {
                        $pluginResult = \true;
                        if (!$this->currentlyInIterateBlockablesInString) {
                            $this->currentlyInIterateBlockablesInString = \true;
                            $pluginResult = $this->getHeadlessContentBlocker()->runBeforeSetBlockedInResultCallback($result, $blockable, $expression, $this);
                            $this->currentlyInIterateBlockablesInString = \false;
                        }
                        // @codeCoverageIgnoreStart
                        if ($pluginResult === \false) {
                            continue;
                        }
                        // @codeCoverageIgnoreEnd
                        // This link is definitely blocked by configuration
                        if (!$result->isBlocked()) {
                            $result->setBlocked([$blockable]);
                            $result->setBlockedExpressions([$expression]);
                        }
                        if ($allowMultiple) {
                            $result->addBlocked($blockable);
                            $result->addBlockedExpression($expression);
                            continue 2;
                        } else {
                            break 3;
                        }
                    }
                }
            }
        }
    }
    /**
     * Prepare chunks cause `pcre.jit` can lead to `PREG_JIT_STACKLIMIT_ERROR` errors
     * In a customer scenario, it lead to an error with a string length of `8191`.
     *
     * As we are using `preg_match` we need to ensure, that the blockable expression can find
     * strings between two chunks (yeah, this can happen). So, add a small part of the previous
     * and next chunk (`$copySiblingChunkStringLength`).
     *
     * @param string $string
     * @param int $maxChunkLength
     * @param int $copySiblingChunkStringLength
     */
    protected function prepareChunksFromString($string, $maxChunkLength = 5000, $copySiblingChunkStringLength = 100)
    {
        $string = \str_split($string, $maxChunkLength);
        $chunks = [];
        foreach ($string as $chunkIdx => $chunkString) {
            // Previous sibling
            if ($chunkIdx > 0) {
                $siblingChunkString = $string[$chunkIdx - 1] ?? '';
                $siblingChunkString = \strlen($siblingChunkString) >= $copySiblingChunkStringLength ? \substr($siblingChunkString, $copySiblingChunkStringLength * -1) : $siblingChunkString;
                // @codeCoverageIgnoreEnd
                $chunkString = $siblingChunkString . $chunkString;
            }
            // Next sibling
            $siblingChunkString = \substr($string[$chunkIdx + 1] ?? '', 0, $copySiblingChunkStringLength);
            $chunks[] = $chunkString . $siblingChunkString;
        }
        return $chunks;
    }
    /**
     * Apply common attributes for our blocked element:
     *
     * - Visual parent
     * - Replaced link attribute (optional)
     * - Consent attributes depending on blocked item (`consent-required`, ...)
     * - Replace always attributes
     *
     * @param BlockedResult $result
     * @param AbstractMatch $match
     * @param string $linkAttribute
     * @param string $link
     */
    protected function applyCommonAttributes($result, $match, $linkAttribute = null, $link = null)
    {
        $this->applyVisualParent($match);
        $newLinkAttribute = null;
        if ($linkAttribute !== null) {
            $newLinkAttribute = $this->applyNewLinkElement($match, $linkAttribute, $link);
        }
        $scriptType = $match->getAttribute(Constants::HTML_ATTRIBUTE_TYPE_NAME, $match->getTag() === 'script' ? Constants::HTML_ATTRIBUTE_TYPE_JS : Constants::HTML_ATTRIBUTE_TYPE_CSS);
        $this->applyConsentAttributes($result, $match);
        $this->applyReplaceAlwaysAttributes($match);
        if (\in_array($match->getTag(), Constants::HTML_ATTRIBUTE_TYPE_FOR, \true) && $scriptType !== Constants::HTML_ATTRIBUTE_TYPE_VALUE) {
            $newTypeAttribute = AttributesHelper::transformAttribute(Constants::HTML_ATTRIBUTE_TYPE_NAME);
            $match->setAttribute($newTypeAttribute, $scriptType);
            $match->setAttribute(Constants::HTML_ATTRIBUTE_TYPE_NAME, Constants::HTML_ATTRIBUTE_TYPE_VALUE);
        }
        $result->setData('newLinkAttribute', $newLinkAttribute);
    }
    /**
     * Replace all known attributes which should be always replaced.
     *
     * @param AbstractMatch $match
     */
    protected function applyReplaceAlwaysAttributes($match)
    {
        $tag = $match->getTag();
        $replaceAlwaysAttributes = $this->getHeadlessContentBlocker()->getReplaceAlwaysAttributes();
        if (isset($replaceAlwaysAttributes[$tag])) {
            foreach ($replaceAlwaysAttributes[$tag] as $attr) {
                $newAttrName = AttributesHelper::transformAttribute($attr);
                if ($match->hasAttribute($attr) && !$match->hasAttribute($newAttrName)) {
                    $match->setAttribute($newAttrName, $match->getAttribute($attr));
                    $match->setAttribute($attr, null);
                }
            }
        }
    }
    /**
     * Create HTML attributes for the content blocker.
     *
     * @param BlockedResult $result
     * @param AbstractMatch $match
     */
    public function applyConsentAttributes($result, $match)
    {
        $blocker = $result->getFirstBlocked();
        if ($blocker->hasBlockerId()) {
            $requiredIds = $blocker->getRequiredIds();
            $alreadyRequiredIds = [];
            if ($match->hasAttribute(Constants::HTML_ATTRIBUTE_COOKIE_IDS)) {
                $alreadyRequiredIds = \explode(',', $match->getAttribute(Constants::HTML_ATTRIBUTE_COOKIE_IDS));
            }
            $match->setAttribute(Constants::HTML_ATTRIBUTE_COOKIE_IDS, \join(',', \array_unique(\array_merge($requiredIds, $alreadyRequiredIds))));
            if (!$match->hasAttribute(Constants::HTML_ATTRIBUTE_BY)) {
                $match->setAttribute(Constants::HTML_ATTRIBUTE_BY, $blocker->getCriteria());
            }
            if (!$match->hasAttribute(Constants::HTML_ATTRIBUTE_BLOCKER_ID)) {
                $match->setAttribute(Constants::HTML_ATTRIBUTE_BLOCKER_ID, $blocker->getBlockerId());
            }
            return \true;
        }
        // @codeCoverageIgnoreStart
        return \false;
        // @codeCoverageIgnoreEnd
    }
    /**
     * Prepare the new transformed link attribute.
     *
     * @param AbstractMatch $match
     * @param string $linkAttribute
     * @param string $link
     */
    protected function applyNewLinkElement($match, $linkAttribute, $link)
    {
        $newLinkAttribute = AttributesHelper::transformAttribute($linkAttribute);
        // Special case: `<embed` needs to have a `src`
        if ($match->getTag() === 'embed' && $linkAttribute === 'src') {
            $match->setAttribute('src', 'about:blank');
            $match->setAttribute($newLinkAttribute, $link);
            return $newLinkAttribute;
        }
        if (\in_array($linkAttribute, $this->calculateAllKeepAttributes($match), \true)) {
            $match->setAttribute($linkAttribute, $link);
        } else {
            $match->setAttribute($linkAttribute, null);
            $match->setAttribute($newLinkAttribute, $link);
        }
        return $newLinkAttribute;
    }
    /**
     * Calculate all keep-attributes from plugins and configuration.
     *
     * @param AbstractMatch $match
     * @return string[]
     */
    public function calculateAllKeepAttributes($match)
    {
        $matchPluginCallbacks = MatchPluginCallbacks::getFromMatch($match);
        $cb = $this->getHeadlessContentBlocker();
        $keepAttributes = \array_values(\array_merge($cb->getKeepAlwaysAttributes(), $matchPluginCallbacks->getKeepAlwaysAttributes()));
        if ($match->hasAttribute('class')) {
            $classes = \explode(' ', $match->getAttribute('class'));
            foreach ($classes as $class) {
                $class = \strtolower($class);
                foreach ($cb->getKeepAlwaysAttributesIfClass() as $key => $classKeepAttributes) {
                    if ($class === $key) {
                        $keepAttributes = \array_merge($keepAttributes, $classKeepAttributes);
                    }
                }
            }
        }
        $keepAttributes = $this->getHeadlessContentBlocker()->runKeepAlwaysAttributesCallback($keepAttributes, $this, $match);
        return $keepAttributes;
    }
    /**
     * Prepare visual parent depending on class.
     *
     * @param AbstractMatch $match
     */
    protected function applyVisualParent($match)
    {
        // Short cancel
        if ($match->hasAttribute(Constants::HTML_ATTRIBUTE_VISUAL_PARENT)) {
            return;
        }
        $useVisualParent = \false;
        if ($match->hasAttribute('class')) {
            $classes = \explode(' ', $match->getAttribute('class'));
            $visualParentIfClass = $this->getHeadlessContentBlocker()->getVisualParentIfClass();
            foreach ($classes as $class) {
                $class = \strtolower($class);
                foreach ($visualParentIfClass as $key => $visualParent) {
                    if ($class === $key) {
                        $useVisualParent = $visualParent;
                        break 2;
                    }
                }
            }
        }
        $useVisualParent = $this->getHeadlessContentBlocker()->runVisualParentCallback($useVisualParent, $this, $match);
        if ($useVisualParent !== \false) {
            $match->setAttribute(Constants::HTML_ATTRIBUTE_VISUAL_PARENT, $useVisualParent === \true ? 'true' : $useVisualParent);
        }
    }
    /**
     * Allows to run hooks on a blocked result instance.
     *
     * @param BlockedResult $result
     * @param AbstractMatch $match
     */
    protected function applyCheckResultHooks($result, $match)
    {
        $result = $this->getHeadlessContentBlocker()->runCheckResultCallback($result, $this, $match);
        // Is the match also covered by another selector syntax?
        $attributes = $match->getAttributes();
        $matchCallbacks = MatchPluginCallbacks::getFromMatch($match);
        foreach ($this->getHeadlessContentBlocker()->findPotentialSelectorSyntaxFindersForMatch($match->getTag(), \array_keys($attributes)) as $finder) {
            $matcher = $this->getHeadlessContentBlocker()->getFinderToMatcher()[$finder] ?? null;
            // @codeCoverageIgnoreStart
            if ($matcher === null) {
                continue;
            }
            // @codeCoverageIgnoreEnd
            $matchCallbacks->startTransaction();
            $matchesAttributes = $finder->matchesAttributes($attributes, $match);
            if ($matchesAttributes) {
                $matchCallbacks->commit();
                $applyAttributes = [];
                foreach ($finder->getAttributes() as $attr) {
                    $applyAttributes[$attr->getAttribute()] = $attributes[$attr->getAttribute()];
                }
                if ($matcher instanceof SelectorSyntaxMatcher && $matcher->getBlockable() !== null) {
                    $result->addBlocked($matcher->getBlockable());
                    $result->addBlockedExpression($finder->getExpression());
                }
                $matchCallbacks->addBlockedMatchCallback(function ($result) use($match, $applyAttributes) {
                    foreach ($applyAttributes as $attribute => $value) {
                        $this->applyNewLinkElement($match, $attribute, $value);
                    }
                });
            } else {
                $matchCallbacks->rollback();
            }
        }
        return $result;
    }
    /**
     * Getter.
     */
    public function getHeadlessContentBlocker()
    {
        return $this->headlessContentBlocker;
    }
    /**
     * Getter.
     *
     * @return AbstractBlockable[]
     * @codeCoverageIgnore
     */
    public function getBlockables()
    {
        return $this->getHeadlessContentBlocker()->getBlockables();
    }
}
