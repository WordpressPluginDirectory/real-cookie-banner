<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\SelectorSyntaxMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxAttributeFunction;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\finder\match\MatchPluginCallbacks;
/**
 * This plugin registers the selector syntax `eval()`.
 *
 * ```
 * div[class="my-div":eval(js={{ .myJs }})]
 * :$myJs=console.log("test");
 * ```
 *
 * Parameters:
 *
 * - `js` (string): JavaScript which gets executed when node gets unblocked
 * - `[scope=once]` (string): Can be `node` (executed for each unblocked node, use JavaScript variable `this` to access the HTML node) or `once` (when content blocker gets unblocked and runs for all unblocked nodes)
 * @internal
 */
class EvalJs extends AbstractPlugin
{
    const SCRIPT_PLACEHOLDER = '<' . self::class . '/>';
    private $i = 0;
    private $counters = [];
    private $js = ['code' => [], 'node' => [], 'once' => [], 'blocker' => []];
    // Documented in AbstractPlugin
    public function init()
    {
        $this->getHeadlessContentBlocker()->addSelectorSyntaxFunction('eval', [$this, 'fn']);
        $this->getHeadlessContentBlocker()->addCallback([$this, 'addScript']);
    }
    /**
     * Add the `<script` with the proper event listeners to the document.
     *
     * @param string $html
     */
    public function addScript($html)
    {
        $script = '<script>(()=>{';
        // Register all JavaScript functions
        foreach ($this->js['code'] as $key => $code) {
            $script .= \sprintf('function %s(){%s}', $key, $code);
        }
        $script .= 'document.addEventListener(\'RCB/OptIn/ContentBlocker/All\',({detail:{load:l,unblockedNodes:u}})=>l.then(()=>{';
        $script .= 'const b=u.map(({blocker:{id}})=>id);';
        // unblocked blocker IDs
        // Register scope `once`
        foreach ($this->js['once'] as $fn) {
            $script .= \sprintf('b.indexOf(%s)>-1&&%s.apply(u,[]);', $this->js['blocker'][$fn], $fn);
        }
        // Register scope `node`
        foreach ($this->js['node'] as $fn) {
            $script .= \sprintf('for(const {node:d} of u){d.hasAttribute("%1$s%2$s")&&%2$s.apply(d,[]);}', Constants::HTML_ATTRIBUTE_EVALJS_PREFIX, $fn);
        }
        $script .= '}));';
        $script .= '})();</script>';
        $html = \str_replace(self::SCRIPT_PLACEHOLDER, $script, $html);
        return $html;
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
        $js = $fn->getArgument('js', '');
        $scope = $fn->getArgument('scope', 'once');
        MatchPluginCallbacks::getFromMatch($match)->addBlockedMatchCallback(function ($result) use($match, $js, $scope) {
            if ($result->isBlocked()) {
                $blockerId = $match->getAttribute(Constants::HTML_ATTRIBUTE_BLOCKER_ID);
                $hash = \md5($js);
                if (!isset($this->counters[$hash])) {
                    $this->counters[$hash] = \count($this->counters);
                }
                $uniqueId = \sprintf('f%s', $this->counters[$hash]);
                if ($scope === 'node') {
                    $match->setAttribute(Constants::HTML_ATTRIBUTE_EVALJS_PREFIX . $uniqueId, \true);
                }
                // Add a placeholder where we can add our script which registers the listeners
                if ($this->i === 0) {
                    $match->setBeforeTag(self::SCRIPT_PLACEHOLDER . "\n" . $match->getBeforeTag());
                }
                if (!isset($this->js['code'][$uniqueId])) {
                    $this->js['code'][$uniqueId] = $js;
                }
                if (!\in_array($uniqueId, $this->js[$scope], \true)) {
                    $this->js[$scope][] = $uniqueId;
                    // Save the blocker ID which needs to be resolved for this function
                    if ($scope === 'once') {
                        $this->js['blocker'][$uniqueId] = $blockerId;
                    }
                }
                $this->i++;
            }
        });
        return \true;
    }
}
