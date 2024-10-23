<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\internal;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\BlockedResult;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\HeadlessContentBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\AbstractMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\scanner\BlockableScanner;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Utils;
/**
 * Allow to negate a rule with a prefixed `!` before each rule.
 * @internal
 */
class NegatePlugin extends AbstractPlugin
{
    const PREFIX = NegatePlugin::class . '!!';
    /**
     * Disable blocking for matches which match also for a negate rule.
     *
     * @param BlockedResult $result
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    public function checkResult($result, $matcher, $match)
    {
        if ($result->isBlocked()) {
            $headlessContentBlocker = $this->getHeadlessContentBlocker();
            // Get all selector syntax map strings starting with `!`
            $negateSelectorSyntaxMap = \array_values(\array_filter($headlessContentBlocker->getSelectorSyntaxMap(), function ($item) {
                return Utils::startsWith($item, '!');
            }));
            $negateSelectorSyntaxMap = \array_map(function ($item) {
                return new NegateBlockable($this->getHeadlessContentBlocker(), [\substr($item, 1)]);
            }, $negateSelectorSyntaxMap);
            foreach ($result->getBlocked() as $blocked) {
                $negateRules = $headlessContentBlocker->getBlockableRulesStartingWith(self::PREFIX, \true, [$blocked]);
                if (\count($negateRules) > 0 || \count($negateSelectorSyntaxMap) > 0) {
                    // Simulate a negate blockable and search for results in the processed original match
                    $contentBlocker = new HeadlessContentBlocker();
                    if (\count($negateRules) > 0) {
                        $contentBlocker->addBlockables([new NegateBlockable($contentBlocker, $negateRules)]);
                    }
                    if (\count($negateSelectorSyntaxMap) > 0) {
                        $contentBlocker->addBlockables($negateSelectorSyntaxMap);
                    }
                    $contentBlocker->setup();
                    $processed = $contentBlocker->modifyHtml($match->getOriginalMatch());
                    if (\strpos($processed, \sprintf('%s="%s"', Constants::HTML_ATTRIBUTE_BY, NegateBlockable::CRITERIA)) !== \false) {
                        $diff = \array_values(\array_filter($result->getBlocked(), function ($item) use($blocked) {
                            return $item !== $blocked;
                        }));
                        $result->setBlocked($diff);
                        if (!$result->isBlocked()) {
                            $result->setData(BlockableScanner::BLOCKED_RESULT_DATA_KEY_IGNORE_IN_SCANNER, \true);
                        }
                        $match->setAttribute(Constants::HTML_ATTRIBUTE_NEGATE, \true);
                    }
                }
            }
        }
        return $result;
    }
    /**
     * "Disable" negate rules by appending a prefix which will never match. But keep in rules list so
     * `blockedMatch` can call `getBlockableRulesStartingWith` on that rules.
     *
     * @param string $expression
     * @param AbstractBlockable $blockable
     */
    public function blockableStringExpression($expression, $blockable)
    {
        if (Utils::startsWith($expression, '!')) {
            return self::PREFIX . \substr($expression, 1);
        }
        return $expression;
    }
}
