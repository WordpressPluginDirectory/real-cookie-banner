<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\SelectorSyntaxMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AttributesHelper;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\BlockedResult;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\HeadlessContentBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\Image;
/**
 * Block a HTML element by CSS-like selectors, e.g. `div[class="my-class"]`.
 * @internal
 */
class SelectorSyntaxMatcher extends AbstractMatcher
{
    /**
     * Allows to force-use this result for the blocking mechanism. This allows to block elements already
     * through the `addSelectorSyntaxMap()` functionality.
     */
    const DATA_FORCE_RESULT = 'SelectorSyntaxMatcher.forceResult';
    private $blockable;
    private $blockAutomatically;
    /**
     * C'tor.
     *
     * @param HeadlessContentBlocker $headlessContentBlocker
     * @param AbstractBlockable $blockable
     * @param boolean $blockAutomatically By default a selector-syntax matcher automatically blocks the found matches
     */
    public function __construct($headlessContentBlocker, $blockable, $blockAutomatically = \true)
    {
        parent::__construct($headlessContentBlocker);
        $this->blockable = $blockable;
        $this->blockAutomatically = $blockAutomatically;
    }
    /**
     * See `AbstractMatcher`.
     *
     * @param SelectorSyntaxMatch $match
     */
    public function match($match)
    {
        $result = $this->createResult($match);
        if (!$result->isBlocked()) {
            return $result;
        }
        $this->applyCommonAttributes($result, $match);
        // Disable all blocked items
        foreach ($match->getFinder()->getAttributes() as $attributeInstance) {
            $attribute = $attributeInstance->getAttribute();
            $this->applyNewLinkElement($match, $attribute, $match->getAttribute($attribute));
        }
        // Disable known loading attributes like `href` or `src`
        $tagAttributeMap = $this->getHeadlessContentBlocker()->getTagAttributeMap();
        $loadingAttributes = $tagAttributeMap[HeadlessContentBlocker::TAG_ATTRIBUTE_MAP_LINKABLE]['attr'] ?? [];
        // Edge cases: Plugins
        $loadingAttributes[] = Image::HTML_ATTRIBUTE_SRCSET;
        $keepAttributes = $this->calculateAllKeepAttributes($match);
        foreach ($loadingAttributes as $loadingAttr) {
            if ($match->hasAttribute($loadingAttr) && !\in_array($loadingAttr, $keepAttributes, \true)) {
                $newAttribute = AttributesHelper::transformAttribute($loadingAttr);
                $match->setAttribute($newAttribute, $match->getAttribute($loadingAttr));
                $match->setAttribute($loadingAttr, null);
            }
        }
        return $result;
    }
    /**
     * See `AbstractMatcher`.
     *
     * @param SelectorSyntaxMatch $match
     */
    public function createResult($match)
    {
        $result = $this->createPlainResultFromMatch($match);
        if ($this->blockAutomatically) {
            if ($this->getHeadlessContentBlocker()->isAllowMultipleBlockerResults()) {
                // When multiple blocker results are allowed (e.g. scanner) save all blockables and expressions
                // to the result for the current match
                foreach ($this->getHeadlessContentBlocker()->getBlockables() as $blockable) {
                    foreach ($blockable->getSelectorSyntaxFinder() as $selectorSyntaxFinder) {
                        if ($selectorSyntaxFinder->matchesAttributes($match->getAttributes(), $match)) {
                            $result->addBlocked($blockable);
                            $result->addBlockedExpression($selectorSyntaxFinder->getExpression());
                        }
                    }
                }
            } else {
                $result->setBlocked([$this->blockable]);
                $result->setBlockedExpressions([$match->getFinder()->getExpression()]);
            }
        } else {
            $attributes = $match->getAttributes();
            $finder = $match->getFinder();
            if ($finder->matchesAttributesLoose($match->getOriginalMatch())) {
                $matchesAttributes = $finder->matchesAttributes($attributes, $match);
                $forceResult = $match->getData(self::DATA_FORCE_RESULT);
                if ($matchesAttributes && $forceResult instanceof BlockedResult) {
                    foreach ($forceResult->getBlocked() as $blockable) {
                        $result->addBlocked($blockable);
                    }
                    foreach ($forceResult->getBlockedExpressions() as $expression) {
                        $result->addBlockedExpression($expression);
                    }
                }
            }
        }
        $this->probablyDisableDueToSkipped($result, $match);
        return $this->applyCheckResultHooks($result, $match);
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function isBlockAutomatically()
    {
        return $this->blockAutomatically;
    }
    /**
     * Getter.
     */
    public function getBlockable()
    {
        return $this->blockable;
    }
}
