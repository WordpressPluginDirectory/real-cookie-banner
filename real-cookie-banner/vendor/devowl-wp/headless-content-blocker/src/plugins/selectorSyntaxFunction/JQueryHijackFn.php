<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxAttributeFunction;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\finder\match\MatchPluginCallbacks;
/**
 * This plugin registers the selector syntax `jQueryHijackFn()`.
 *
 * ```
 * div[class="my-class":keepAttributes(value=class),jQueryHijackFn(function=myFunction)]
 * ```
 *
 * When you use `jQuery.fn.myFunction` on a specific selector (in this case `.my-class`), using `jQueryHijackFn` will "delay"
 * the execution of the callback until consent is obtained. In the frontend, make sure to call `hijackJqueryFn()` to
 * enable this feature.
 * @internal
 */
class JQueryHijackFn extends AbstractPlugin
{
    // Documented in AbstractPlugin
    public function init()
    {
        $this->getHeadlessContentBlocker()->addSelectorSyntaxFunction('jQueryHijackFn', [$this, 'fn']);
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
        $function = $fn->getArgument('function');
        MatchPluginCallbacks::getFromMatch($match)->addBlockedMatchCallback(function ($result) use($match, $function) {
            if ($result->isBlocked()) {
                // Allow multiple functions
                $previous = \json_decode($match->getAttribute(Constants::HTML_ATTRIBUTE_JQUERY_HIJACK_FN, '[]'), ARRAY_A);
                if (!isset($previous[$function])) {
                    $previous[$function] = \true;
                    $match->setAttribute(Constants::HTML_ATTRIBUTE_JQUERY_HIJACK_FN, \json_encode($previous));
                }
            }
        });
        return \true;
    }
}
