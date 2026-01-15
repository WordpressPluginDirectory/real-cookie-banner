<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\Utils;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\BlockedResult;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\AbstractMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Utils as HeadlessContentBlockerUtils;
/**
 * This plugin registers a prefix for rules (not applied to selector syntax rules!) that allows to merge required IDs across all
 * registered blockers and uses the "at least one" logic to block the content (uses `consent-condition="or"`). Example:
 *
 * Hubspot uses an initiator script to load multiple services dynamically (Hubspot Chat, Hubspot Forms, etc.):
 *
 * ```
 * <script src="https://js.hs-scripts.com/111111.js?integration=WordPress&ver=11.3.21" defer></script>
 * ```
 *
 * This script uses `document.createElement("script")` to load the services and adds them to the DOM. For every content blocker we
 * block the respective dynamically loaded script with `client-side:` rules. But we also need to make sure that the
 * initiator script is loaded as soon as one of the services is requested and should be loaded:
 *
 * Hubspot Chat:
 *
 * - Rule #1 `shared_at_least_one:*.hs-scripts.com*`
 * - Rule #2 `client-side:*hubspot.com/livechat-public*`
 * - Connected to service "Hubspot Chat"
 *
 * Hubspot Forms:
 *
 * - Rule #1 `shared_at_least_one:*.hs-scripts.com*`
 * - Rule #2 `client-side:*.hsforms.net/forms/*`
 * - Connected to service "Hubspot Forms"
 *
 * **Without this plugin:** The first matching blocker "wins" the race and uses the blockables' required IDs without processing
 * the other blockable rules. In this example, the `<script` is associated to the service "Hubspot Chat" only. Therefore, when accepting
 * the consent for "Hubspot Forms" but **not** the consent for "Hubspot Chat", the Hubspot Forms service will not be loaded as the
 * `<script` is still blocked. Technically: `<script consent-required="hubspot-chat" ...`.
 *
 * **With this plugin:** All blockers will merge their required IDs and use the "at least one" logic to block the content.
 * In this example, the `<script` is associated to both services "Hubspot Chat" and "Hubspot Forms". Therefore, when accepting
 * the consent for "Hubspot Forms" but **not** the consent for "Hubspot Chat", the Hubspot Forms service will be loaded as the
 * `<script` is not blocked. Technically: `<script consent-required="hubspot-chat,hubspot-forms" consent-condition="or" ...`.
 *
 * @see https://app.clickup.com/t/f535x6?comment=90120174996121&threadedComment=90120178415140
 * @internal
 */
class SharedAtLeastOne extends AbstractPlugin
{
    const PREFIX = 'shared_at_least_one:';
    private $currentlyRunning = \false;
    /**
     * See `AbstractPlugin`.
     *
     * @param AbstractMatcher $matcher
     * @param BlockedResult $result
     * @param string $string
     * @param boolean $useContainsRegularExpression
     * @param boolean $multilineRegexp
     * @param string[] $useRegularExpressionFromMap
     * @param AbstractBlockable[] $useBlockables
     * @param boolean $allowMultiple
     */
    public function iterateBlockablesInString($matcher, $result, $string, $useContainsRegularExpression, $multilineRegexp, $useRegularExpressionFromMap, $useBlockables, $allowMultiple)
    {
        if ($this->currentlyRunning) {
            return;
        }
        // Iterate all blockables and calculate the expressions on each blockable
        $sharedAtLeastOneBlockables = [];
        $sharedRegularExpressionFromMap = [];
        $cacheKey = \sprintf('%s:%s', self::class, $useContainsRegularExpression ? 'contains' : 'regular');
        foreach ($useBlockables as $blockable) {
            $cache = $blockable->getData($cacheKey);
            if ($cache) {
                $sharedRegularExpressionFromMap = \array_merge($sharedRegularExpressionFromMap, $cache);
                $sharedAtLeastOneBlockables[] = $blockable;
                continue;
            }
            $regularExpressions = $useContainsRegularExpression ? $blockable->getContainsRegularExpressions() : $blockable->getRegularExpressions();
            $cache = [];
            foreach ($regularExpressions as $expression => $regularExpression) {
                if (Utils::startsWith($expression, self::PREFIX)) {
                    $sharedRegularExpressionFromMap[$expression] = HeadlessContentBlockerUtils::removeDuplicateAsterisksInRegex(\str_replace('shared_at_least_one\\:', '', $regularExpression));
                    $cache[$expression] = $sharedRegularExpressionFromMap[$expression];
                }
            }
            $blockable->setData($cacheKey, $cache);
            if (\count($cache) > 0) {
                $sharedAtLeastOneBlockables[] = $blockable;
            }
        }
        // If we found a `shared_at_least_one:*` expression, we need to iterate the blockables in the string again
        if (\count($sharedAtLeastOneBlockables) > 0) {
            $beforeBlockedExpressionsCount = \count($result->getBlockedExpressions());
            $this->currentlyRunning = \true;
            $matcher->iterateBlockablesInString($result, $string, $useContainsRegularExpression, $multilineRegexp, $sharedRegularExpressionFromMap, $sharedAtLeastOneBlockables, \true);
            $this->currentlyRunning = \false;
            $afterBlockedExpressionsCount = \count($result->getBlockedExpressions());
            if ($afterBlockedExpressionsCount > $beforeBlockedExpressionsCount) {
                $result->addBlockedMatchCallback(function ($matcher, $match) use($result) {
                    $match->setAttribute(Constants::HTML_ATTRIBUTE_CONDITION, Constants::HTML_ATTRIBUTE_CONDITION_VALUE_OR);
                });
            }
        }
    }
}
