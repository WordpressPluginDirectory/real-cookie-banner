<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\SelectorSyntaxMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxAttributeFunction;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\SelectorSyntaxMatcher;
/**
 * This plugin registers the selector syntax `matchesUrl()`.
 *
 * ```
 * div[data-href:matchesUrl()]
 * ```
 *
 * Imagine you have created a Content Blocker with the following rules:
 *
 * ```
 * *youtube.com*
 * *youtu.be*
 * div[data-href*="youtube.com"]
 * div[data-href*="youtu.be"]
 * ```
 *
 * Instead of writing two rules for the `div` we can solve this with `div[data-href:matchesUrl()]`.
 * It automatically takes all non-selector-syntax rules of the Content Blocker and matches with data-href:
 *
 * ```
 * *youtube.com*
 * *youtu.be*
 * div[data-href:matchesUrl()]
 * ```
 *
 * Parameters:
 *
 * - `[withHost="self"]` (boolean): If `true`, it will parse the hosts from the rules within the blockable and matches on them if no match was found previously (e.g. `youtube.com/embed/` -> `youtube.com`)
 * @internal
 */
class MatchesUrl extends AbstractPlugin
{
    // Documented in AbstractPlugin
    public function init()
    {
        $this->getHeadlessContentBlocker()->addSelectorSyntaxFunction('matchesUrl', [$this, 'fn']);
    }
    /**
     * Function implementation.
     *
     * @param SelectorSyntaxAttributeFunction $fn
     * @param SelectorSyntaxMatch $match
     * @param mixed $value
     */
    public function fn($fn, $match, $value)
    {
        $headlessContentBlocker = $this->getHeadlessContentBlocker();
        $matcher = $headlessContentBlocker->getFinderToMatcher()[$fn->getAttribute()->getFinder()] ?? null;
        if ($matcher !== null && $matcher instanceof SelectorSyntaxMatcher) {
            $blockedResult = $matcher->createPlainResultFromMatch($match);
            $blockable = $matcher->getBlockable();
            // $blockable can be `null` when used with `addSelectorSyntaxMap`
            $useBlockables = $blockable === null ? null : [$blockable];
            $withHost = $fn->getArgument('withHost', '') === 'true';
            $matcher->iterateBlockablesInString($blockedResult, $value, \false, \false, null, $useBlockables);
            if (!$blockedResult->isBlocked() && $withHost) {
                $matcher->iterateBlockablesInString($blockedResult, $value, \false, \false, $headlessContentBlocker->blockablesToHosts(\true, $useBlockables));
                // When we are using the syntax within `addSelectorSyntaxMap`, the match will not be blocked
                // as the blockable probably will not have the same rule; we need to force use the block result
                if ($blockable === null && $blockedResult->isBlocked()) {
                    $match->setData(SelectorSyntaxMatcher::DATA_FORCE_RESULT, $blockedResult);
                }
            }
            return $blockedResult->isBlocked();
        }
        // @codeCoverageIgnoreStart
        return \true;
        // @codeCoverageIgnoreEnd
    }
}
