<?php

namespace DevOwl\RealCookieBanner\view\blocker;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\ScriptInlineMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\StyleInlineMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\TagAttributeMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\BlockedResult;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\finder\match\StyleInlineAttributeMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\ScriptInlineMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\SelectorSyntaxMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\StyleInlineAttributeMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\StyleInlineMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\TagAttributeMatcher;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\imagePreview\ImagePreview;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\StandardPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\tcf\TcfForwardGdprStringInUrl;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\view\blocker\WordPressImagePreviewCache;
use DevOwl\RealCookieBanner\settings\TCF;
use DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\CSSList\Document;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Real Cookie Banner plugin for `HeadlessContentBlocker`.
 * @internal
 */
class Plugin extends AbstractPlugin
{
    use UtilsProvider;
    const TABLE_NAME_BLOCKER_THUMBNAILS = 'blocker_thumbnails';
    private $wpContentDir;
    // Documented in AbstractPlugin
    public function init()
    {
        $this->wpContentDir = \basename(\constant('WP_CONTENT_DIR'));
        $cb = $this->getHeadlessContentBlocker();
        $cb->setInlineStyleDummyUrlPath(\plugins_url('public/images/', RCB_FILE));
        $cb->addPlugin(StandardPlugin::class);
        $cb->addPlugin(\DevOwl\RealCookieBanner\view\blocker\PluginAutoplay::class);
        // This class only exists in PRO Version
        if ($this->isPro()) {
            $imagePreviewCache = WordPressImagePreviewCache::create();
            if ($imagePreviewCache !== \false) {
                /**
                 * Plugin.
                 *
                 * @var ImagePreview
                 */
                $imagePreviewPlugin = $cb->addPlugin(ImagePreview::class);
                $imagePreviewPlugin->setCache($imagePreviewCache);
                // [Plugin Comp] Divi video slider
                $imagePreviewPlugin->addRevertAttribute('div[class*="et_pb_video_slider_item_"]');
            }
        }
        if ($this->isPro() && TCF::getInstance()->isActive()) {
            /**
             * Plugin.
             *
             * @var TcfForwardGdprStringInUrl
             */
            $tcfForwardGdprStringInUrl = $cb->addPlugin(TcfForwardGdprStringInUrl::class);
            $vendorConfigurations = TCF::getInstance()->getVendorConfigurations();
            foreach ($vendorConfigurations as $vendorConfiguration) {
                $vendor = $vendorConfiguration->getVendor();
                if (isset($vendor['deviceStorageDisclosure']) && isset($vendor['deviceStorageDisclosure']['domains'])) {
                    $tcfForwardGdprStringInUrl->addVendorDisclosureDomains($vendorConfiguration->getVendorId(), $vendor['deviceStorageDisclosure']['domains']);
                }
            }
        }
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param BlockedResult $result
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    public function blockedMatch($result, $matcher, $match)
    {
        if ($matcher instanceof TagAttributeMatcher) {
            /**
             * Var.
             *
             * @var TagAttributeMatch
             */
            $match = $match;
            /**
             * A tag got blocked, e. g. `iframe`. We can now modify the attributes again to add an additional attribute to
             * the blocked content.
             *
             * @hook RCB/Blocker/HTMLAttributes
             * @param {array} $attributes
             * @param {BlockedResult} $isBlocked Since 3.0.0 this is an instance of [BlockedResult](../php/classes/DevOwl-HeadlessContentBlocker-BlockedResult.html)
             * @param {string} $newLinkAttribute
             * @param {string} $linkAttribute
             * @param {string} $link
             * @return {array}
             */
            $attributes = \apply_filters('RCB/Blocker/HTMLAttributes', $match->getAttributes(), $result, $result->getData('newLinkAttribute'), $match->getLinkAttribute(), $match->getLink());
            $match->setAttributes($attributes);
        } elseif ($match instanceof ScriptInlineMatcher) {
            /**
             * Var.
             *
             * @var ScriptInlineMatch
             */
            $match = $match;
            /**
             * An inline script got blocked, e. g. `iframe`. We can now modify the attributes again to add an additional attribute to
             * the blocked script. Do not forget to hook into the frontend and transform the modified attributes!
             *
             * @hook RCB/Blocker/InlineScript/HTMLAttributes
             * @param {array} $attributes
             * @param {array} $isBlocked Since 3.0.0 this is an instance of [BlockedResult](../php/classes/DevOwl-HeadlessContentBlocker-BlockedResult.html)
             * @param {string} $script
             * @return {array}
             */
            $attributes = \apply_filters('RCB/Blocker/InlineScript/HTMLAttributes', $match->getAttributes(), $result, $match->getAttribute(Constants::HTML_ATTRIBUTE_INLINE));
            $match->setAttributes($attributes);
        }
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param BlockedResult $result
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    public function checkResult($result, $matcher, $match)
    {
        if ($matcher instanceof TagAttributeMatcher) {
            /**
             * Var.
             *
             * @var TagAttributeMatch
             */
            $match = $match;
            /**
             * Check if a given tag, link attribute and link is blocked.
             *
             * @hook RCB/Blocker/IsBlocked
             * @param {BlockedResult} $isBlocked Since 3.0.0 this is an instance of [BlockedResult](../php/classes/DevOwl-HeadlessContentBlocker-BlockedResult.html)
             * @param {string} $linkAttribute
             * @param {string} $link
             * @return {BlockedResult}
             */
            $result = \apply_filters('RCB/Blocker/IsBlocked', $result, $match->getLinkAttribute(), $match->getLink());
        } elseif ($matcher instanceof ScriptInlineMatcher) {
            /**
             * Var.
             *
             * @var ScriptInlineMatch
             */
            $match = $match;
            /**
             * Check if a given inline script is blocked.
             *
             * @hook RCB/Blocker/InlineScript/IsBlocked
             * @param {BlockedResult} $isBlocked Since 3.0.0 this is an instance of [BlockedResult](../php/classes/DevOwl-HeadlessContentBlocker-BlockedResult.html)
             * @param {string} $script
             * @return {BlockedResult}
             */
            $result = \apply_filters('RCB/Blocker/InlineScript/IsBlocked', $result, $match->getScript());
        } elseif ($matcher instanceof StyleInlineMatcher) {
            /**
             * Var.
             *
             * @var StyleInlineMatch
             */
            $match = $match;
            /**
             * Check if a given inline style is blocked.
             *
             * @hook RCB/Blocker/InlineStyle/IsBlocked
             * @param {BlockedResult} $isBlocked Since 3.0.0 this is an instance of [BlockedResult](../php/classes/DevOwl-HeadlessContentBlocker-BlockedResult.html)
             * @param {string} $style
             * @return {BlockedResult}
             */
            $result = \apply_filters('RCB/Blocker/InlineStyle/IsBlocked', $result, $match->getStyle());
        } elseif ($matcher instanceof SelectorSyntaxMatcher) {
            /**
             * Check if a element blocked by custom element blocking (Selector Syntax) is blocked.
             *
             * @hook RCB/Blocker/SelectorSyntax/IsBlocked
             * @param {BlockedResult} $isBlocked Since 3.0.0 this is an instance of [BlockedResult](../php/classes/DevOwl-HeadlessContentBlocker-BlockedResult.html)
             * @param {SelectorSyntaxMatch} $match
             * @return {BlockedResult}
             * @since 2.6.0
             */
            $result = \apply_filters('RCB/Blocker/SelectorSyntax/IsBlocked', $result, $match);
        }
        return $result;
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param string[] $keepAttributes
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     * @return string[]
     */
    public function keepAlwaysAttributes($keepAttributes, $matcher, $match)
    {
        if ($matcher instanceof TagAttributeMatcher) {
            /**
             * Var.
             *
             * @var TagAttributeMatch
             */
            $match = $match;
            /**
             * In some cases we need to keep the attributes as original instead of prefix it with `consent-original-`.
             * Keep in mind, that no external data should be loaded if the attribute is set!
             *
             * @hook RCB/Blocker/KeepAttributes
             * @param {string[]} $keepAttributes
             * @param {string} $tag
             * @param {array} $attributes
             * @param {string} $linkAttribute
             * @param {string} $link
             * @return {string[]}
             * @since 1.5.0
             */
            $keepAttributes = \apply_filters('RCB/Blocker/KeepAttributes', $keepAttributes, $match->getTag(), $match->getAttributes(), $match->getLinkAttribute(), $match->getLink());
        }
        return $keepAttributes;
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param string[] $names
     * @param ScriptInlineMatcher $matcher
     * @param ScriptInlineMatch $match
     * @return string[]
     */
    public function skipInlineScriptVariableAssignment($names, $matcher, $match)
    {
        /**
         * Check if a given inline script is blocked by a localized variable name (e.g. `wp_localize_script`).
         *
         * @hook RCB/Blocker/InlineScript/AvoidBlockByLocalizedVariable
         * @param {string[]} $variables
         * @param {string} $script
         * @return {string[]}
         * @since 1.14.1
         */
        return \apply_filters('RCB/Blocker/InlineScript/AvoidBlockByLocalizedVariable', $names, $match->getScript());
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param boolean $extract
     * @param StyleInlineMatcher|StyleInlineAttributeMatcher $matcher
     * @param StyleInlineMatch|StyleInlineAttributeMatch $match
     * @return boolean
     */
    public function inlineStyleShouldBeExtracted($extract, $matcher, $match)
    {
        /**
         * Determine, if the current inline style should be split into two inline styles. One inline style
         * with only CSS rules without blocked URLs and the second one with only CSS rules with blocked URLs.
         *
         * @hook RCB/Blocker/InlineStyle/Extract
         * @param {boolean} $extract
         * @param {string} $style
         * @param {array} $attributes
         * @return {boolean}
         * @since 1.13.2
         */
        return \apply_filters('RCB/Blocker/InlineStyle/Extract', \true, $match->getStyle(), $match->getAttributes());
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param Document $document
     * @param Document $extractedDocument
     * @param StyleInlineMatcher|StyleInlineAttributeMatcher $matcher
     * @param StyleInlineMatch|StyleInlineAttributeMatch $match
     * @return boolean
     */
    public function inlineStyleModifyDocuments($document, $extractedDocument, $matcher, $match)
    {
        /**
         * An inline style got blocked. We can now modify the rules again with the help of `\Sabberworm\CSS\CSSList\Document`.
         *
         * @hook RCB/Blocker/InlineStyle/Document
         * @param {Document} $document `\Sabberworm\CSS\CSSList\Document`
         * @param {Document} $extractedDocument `\Sabberworm\CSS\CSSList\Document`
         * @param {array} $attributes
         * @param {AbstractBlockable[]} $blockables
         * @param {string} $style
         * @see https://github.com/sabberworm/PHP-CSS-Parser
         * @since 1.13.2
         */
        \do_action('RCB/Blocker/InlineStyle/Document', $document, $extractedDocument, $match->getAttributes(), $this->getHeadlessContentBlocker()->getBlockables(), $match->getStyle());
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param BlockedResult $result
     * @param string $url
     * @param StyleInlineMatcher|StyleInlineAttributeMatcher $matcher
     * @param StyleInlineMatch|StyleInlineAttributeMatch $match
     * @return boolean
     */
    public function inlineStyleBlockRule($result, $url, $matcher, $match)
    {
        /**
         * Check if a given inline CSS rule is blocked.
         *
         * @hook RCB/Blocker/InlineStyle/Rule/IsBlocked
         * @param {BlockedResult} $isBlocked Since 3.0.0 this is an instance of [BlockedResult](../php/classes/DevOwl-HeadlessContentBlocker-BlockedResult.html)
         * @param {string} $url
         * @return {BlockedResult}
         * @since 1.13.2
         */
        return \apply_filters('RCB/Blocker/InlineStyle/Rule/IsBlocked', $result, $url);
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param boolean|string|number $visualParent
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     * @return boolean|string|number
     */
    public function visualParent($visualParent, $matcher, $match)
    {
        if ($matcher instanceof TagAttributeMatcher) {
            /**
             * Var.
             *
             * @var TagAttributeMatch
             */
            $match = $match;
            /**
             * A tag got blocked, e. g. `iframe`. We can now determine the "Visual Parent". The visual parent is the
             * closest parent where the content blocker should be placed to. The visual parent can be configured as follow:
             *
             *- `false` = Use original element
             * - `true` = Use parent element
             * - `number` = Go upwards x element (parentElement)
             * - `string` = Go upwards until parentElement matches a selector
             * - `string` = Starting with `children:` you can `querySelector` down to create the visual parent for a children (since 2.0.4)
             *
             * @hook RCB/Blocker/VisualParent
             * @param {boolean|string|number} $useVisualParent
             * @param {string} $tag
             * @param {array} $attributes
             * @return {boolean|string|number}
             * @since 1.5.0
             */
            $visualParent = \apply_filters('RCB/Blocker/VisualParent', $visualParent, $match->getTag(), $match->getAttributes());
        }
        return $visualParent;
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param string $html
     */
    public function modifyHtmlAfterProcessing($html)
    {
        /**
         * Modify HTML content for content blockers. This is called directly after the core
         * content blocker has done its job for common HTML tags (iframe, scripts, ... ) and
         * inline scripts.
         *
         * @hook RCB/Blocker/HTML
         * @param {string} $html
         * @return {string}
         */
        return \apply_filters('RCB/Blocker/HTML', $html);
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param string $expression
     * @param AbstractBlockable $blockable
     */
    public function blockableStringExpression($expression, $blockable)
    {
        // Modify `wp-content/{themes,plugins}` to the configured folder
        $expression = \str_replace(['wp-content/themes', 'wp-content/plugins'], [$this->wpContentDir . '/themes', $this->wpContentDir . '/plugins'], $expression);
        return $expression;
    }
}
