<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxAttributeFunction;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AttributesHelper;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\finder\match\MatchPluginCallbacks;
/**
 * This plugin registers the selector syntax `keepAttributes()`.
 *
 * ```
 * a[class*="my-lightbox":keepAttributes(value=class)]
 * a[class*="my-lightbox":keepAttributes(class=my-lightbox)]
 * ```
 *
 * Parameters:
 *
 * - `value` (string): A comma-separated list of attributes which should not be converted to `consent-original-...`
 * - `class` (string|string[]): A class name which should be kept as is. Do not add `class` to the list of attributes.
 * @internal
 */
class KeepAttributes extends AbstractPlugin
{
    // Documented in AbstractPlugin
    public function init()
    {
        $this->getHeadlessContentBlocker()->addSelectorSyntaxFunction('keepAttributes', [$this, 'fn']);
    }
    /**
     * Function implementation.
     *
     * @param SelectorSyntaxAttributeFunction $fn
     * @param AbstractMatch $match
     * @param mixed $value
     */
    public function fn($fn, $match, $value)
    {
        $attributes = $fn->getArgument('value');
        $keepClasses = $fn->getArgument('class');
        $keepClasses = $keepClasses === null ? [] : (\is_array($keepClasses) ? $keepClasses : \explode(',', $keepClasses));
        $existingClassesStr = $match->getAttribute('class');
        $matcherCallbacks = MatchPluginCallbacks::getFromMatch($match);
        if (!empty($attributes)) {
            $matcherCallbacks->addKeepAlwaysAttributes(\explode(',', $attributes));
        }
        if (\count($keepClasses) > 0 && !empty($existingClassesStr) && $fn->getAttributeName() === 'class') {
            $matcherCallbacks->addBlockedMatchCallback(function ($result) use($match, $keepClasses) {
                $consentClass = AttributesHelper::transformAttribute('class');
                $blockedClasses = $match->getAttribute($consentClass);
                if ($result->isBlocked() && !empty($blockedClasses)) {
                    $match->setAttribute('class', \implode(' ', \array_intersect($keepClasses, \explode(' ', $blockedClasses))));
                }
                $match->lockAttribute('class');
                $match->lockAttribute($consentClass);
            });
        }
        return \true;
    }
}
