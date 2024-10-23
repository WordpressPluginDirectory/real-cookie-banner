<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins;

use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\AdditionalAttributesBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\AttributeJsonBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\CustomElementBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\Image;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\RemoveAlwaysCSSClasses;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\LinkBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\LinkRelBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\ReattachDom;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\ScriptInlineJsonBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\Autoplay;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\DoNotBlockScriptTextTemplates;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\Confirm;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\DelegateClick;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\EvalJs;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\ForceVisual;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\JQueryHijackEach;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\KeepAttributes;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\MatchesUrl;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\Style;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\TransformAttribute;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\selectorSyntaxFunction\VisualParent;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\thirdParty\ElementorProActionsPlugin;
/**
 * Provide a standard configuration for the headless content blocker.
 *
 * @codeCoverageIgnore
 * @internal
 */
class StandardPlugin extends AbstractPlugin
{
    // Documented in AbstractPlugin
    public function init()
    {
        $cb = $this->getHeadlessContentBlocker();
        $cb->addTagAttributeMap([
            // [Plugin Comp] https://wordpress.org/plugins/presto-player/
            'presto-player',
        ], [
            // [Plugin Comp] JetElements for Elementor
            'data-lazy-load',
            // [Plugin Comp] Revolution Slider
            'data-lazyload',
        ]);
        $cb->addSelectorSyntaxMap([
            // [Plugin Comp] https://themenectar.com/salient/
            'a[href][class*="nectar_video_lightbox"]',
            // [Plugin Comp] Elementor media carousel
            'a[href][data-elementor-lightbox-video]',
            // [Plugin Comp] https://promo-theme.com/
            'a[data-popup-json]',
            // [Plugin Comp] Kadence Blocks
            'a[href][class*="kadence-video-popup-link":delegateClick()]',
            // [Plugin Comp] Bricks Builder
            'a[data-pswp-video-url:matchesUrl(),delegateClick()]',
            // [Plugin Comp] Elementor Lightbox
            'a[href][data-elementor-open-lightbox:confirm(),keepAttributes(value=href)]',
            // [Plugin Comp] Thrive Visual Editor
            'iframe[data-reporting-enabled="1":keepAttributes(value=data-reporting-enabled),jQueryHijackEach()]',
            // [Plugin Comp] Authentic theme using jarallax
            'div[data-video][class*="parallax-video":keepAttributes(value=class),jQueryHijackEach()]',
            // [Plugin Comp] https://wordpress.org/plugins/advanced-backgrounds/
            'div[data-awb-video][class*="nk-awb-wrap":eval(js=AWB.init())]',
            // [Plugin Comp] https://wordpress.org/plugins/wp-youtube-lyte/
            'div[id^="lyte_":visualParent(value=2)]',
            // [Plugin Comp] OMGF
            '!script[id="omgf-pro-remove-async-google-fonts"]',
            // [Plugin Comp] https://github.com/paulirish/lite-youtube-embed
            'a[href][rel="wp-video-lightbox"]',
            // [Plugin Comp] https://elementor.com/help/lightbox/
            'a[href][class*="awb-lightbox"]',
            // [Plugin Comp] Elementor Lightbox
            'div[data-elementor-lightbox]',
            // [Plugin Comp] https://oxygenbuilder.com/
            'div[onclick][class*="w-video"]',
            // [Plugin Comp] https://themeforest.net/item/enfold-responsive-multipurpose-theme/4519990
            'div[data-original_url][class*="avia-video"]',
            // [Plugin Comp] https://unlimited-elements.com/
            'a[class*="button_uc_blox_play_button":delegateClick(selector=.video-button)][href:matchesUrl(),visualParent(value=2)]',
            // [Plugin Comp] https://bandtheme.com/
            'video-js[data-setup][data-player-id]',
            // [Plugin Comp] https://videojs.com/
            'video-js[data-settings][class*="videojs-native"]',
        ]);
        /**
         * `<div>` elements are expensive in Regexp cause there a lot of them, let's assume only a
         * set of attributes to get a match. For example, WP Rockets' lazy loading technology modifies
         * iFrames and YouTube embeds.
         *
         * @see https://git.io/JLQSy
         */
        $cb->addTagAttributeMap(['div'], [
            // [Plugin Comp] WP Rocket
            'data-src',
            'data-lazy-src',
            // [Theme Comp] FloThemes
            'data-flo-video-embed-embed-code',
            // [Plugin Comp] JetElements for Elementor
            'style',
            // [Theme Comp] Themify
            'data-url',
            // [Theme Comp] https://themeforest.net/item/norebro-creative-multipurpose-wordpress-theme/20834703
            'data-video-module',
            // [Plugin Comp] OptimizePress page builder
            'data-op3-src',
            // [Plugin Comp] Multiview in Divi (e.g. Desktop / mobile / tablet)
            'data-et-multi-view',
            // [Plugin Comp] Avia Slider / Enfold
            'data-original_url',
            // [Plugin Comp] Avada
            'data-image',
        ], 'expensiveDiv');
        $cb->addTagAttributeMap(['iframe'], [
            // [Plugin Comp] WP Rocket
            'data-src',
            'data-lazy-src',
            // [Plugin Comp] Avada Fusion video shortcode
            'data-orig-src',
        ], 'iframeLazyLoad');
        $cb->addKeepAlwaysAttributes([
            'rel',
            // [Theme Comp] FloThemes
            'data-flo-video-embed-embed-code',
        ]);
        $cb->addKeepAlwaysAttributesIfClass([
            // [Plugin Comp] Ultimate Video (WP Bakery Page Builder)
            'ultv-video__play' => ['data-src'],
            // [Plugin Comp] Elementor Video Widget
            'elementor-widget-video' => ['data-settings'],
            // If you include two Podigee players, the 1st script podigee-podcast-player.js
            // will be executed directly when unblocking, and will also process the 2nd script
            // right away. At this point of the 1st unblocking, data-configuration of the 2nd script
            // is not yet unblocked consent-original-data-configuration. Podigee throws a
            // corresponding error here.
            // 2x `<p>
            //    <script class="podigee-podcast-player"
            //          src="https://player.podigee-cdn.net/podcast-player/javascripts/podigee-podcast-player.js"
            //          data-configuration="https://bundesrechtsanwaltskammer.podigee.io/31-folge_30/embed?context=external"
            //    ></script>
            // </p>`
            'podigee-podcast-player' => ['data-configuration'],
            // [Plugin Comp] https://themeforest.net/item/attornix-lawyer-wordpress-theme/24032543 (controlled by jQuery hijack to gMap plugin)
            'cmsmasters_google_map' => ['class'],
            // [Plugin Comp] Impreza (WP Bakery Page Builder)
            'w-video' => ['class'],
            'w-map' => ['class'],
            // [Plugin Comp] OnePress (controlled by jQuery hijack of `jQuery.each`)
            'onepress-map' => ['class'],
            // [Plugin Comp] https://themenectar.com/salient/ (controlled by jQuery hijack of `jQuery.fn.magnificPopup`)
            'nectar_video_lightbox' => ['class'],
            // [Plugin Comp] https://themeforest.net/item/sober-woocommerce-wordpress-theme/18332889 (controlled by jQuery hijack of `jQuery.each`)
            'sober-map' => ['class'],
            // [Plugin Comp] https://wordpress.org/plugins/bold-page-builder/
            'bt_bb_google_maps_map' => ['class'],
            // [Plugin Comp] Kadence Blocks
            'kadence-video-popup-link' => ['class', 'href'],
        ]);
        $cb->addVisualParentIfClass([
            // [Theme Comp] FloThemes
            'flo-video-embed__screen' => 2,
            // [Plugin Comp] Ultimate Video (WP Bakery Page Builder)
            'ultv-video__play' => 2,
            // [Plugin Comp] Elementor
            'elementor-widget' => 'children:.elementor-widget-container',
            // [Plugin Comp] Thrive Architect
            'thrv_responsive_video' => 'children:iframe',
            // [Plugin Comp] Ultimate Addons for Elementor
            'uael-video__play' => '.elementor-widget-container',
            // [Plugin Comp] WP Grid Builder
            'wpgb-map-facet' => '.wpgb-facet',
            // [Plugin Comp] tagDiv Composer
            'td_wrapper_playlist_player_youtube' => 1,
            // [Plugin Comp] https://wordpress.org/plugins/play-ht/
            'playht-iframe-player' => 1,
            // [Plugin Comp] https://themenectar.com/salient/
            'nectar_video_lightbox' => 2,
            // [Plugin Comp] https://wordpress.org/plugins/bold-page-builder/
            'bt_bb_google_maps_map' => 1,
        ]);
        $cb->addSkipInlineScriptVariableAssignments([
            '_wpCustomizeSettings',
            // [Plugin Comp] Divi
            'et_animation_data',
            'et_link_options_data',
            // [Plugin Comp] https://wordpress.org/plugins/groovy-menu-free/
            'groovyMenuSettings',
            // [Plugin Comp] https://wordpress.org/plugins/meow-lightbox/
            'mwl_data',
            // [Plugin Comp] https://wpadvancedads.com/
            'advads_tracking_ads',
            // [Plugin Comp] https://wordpress.org/plugins/podcast-player/
            'podcastPlayerData',
            // [Plugin Comp] FacetWP
            'FWP_JSON',
            // [Plugin Comp] RankMath
            'rankMath',
            // [Plugin Comp] https://wordpress.org/plugins/wp-google-maps/
            'WPGMZA_localized_data',
            // [Plugin Comp] Elementor (https://regex101.com/r/zeph0t/1)
            '/var elementor\\w+Config\\s*=/m',
            // [Plugin Comp] https://givewp.com/addons/stripe-gateway/
            'give_stripe_vars',
            // [Plugin Comp] https://woocommerce.com/products/point-of-sale-for-woocommerce/
            '/window\\.wc_pos_params\\s*=/m',
            // [Plugin Comp] https://wordpress.org/plugins/woocommerce-google-adwords-conversion-tracking-tag/
            '/window\\.wpmDataLayer\\s*=/m',
            // [Plugin Comp] https://woocommerce.com/de-de/products/point-of-sale-for-woocommerce/
            '/window\\.AppData\\s*=/m',
            // [Plugin Comp] https://woocommerce.com/de-de/products/woocommerce-gutenberg-products-block/
            'wcSettings',
            // [Plugin Comp] https://wordpress.org/plugins/ghostkit/
            'ghostkitVariables',
            // [Plugin Comp] FloTheme (https://regex101.com/r/YeTlqt/1)
            '/var flo_/m',
            // [Plugin Comp] SeoPress
            'SEOPRESS_DATA',
            // [Plugin Comp] https://codecanyon.net/item/superfly-responsive-wordpress-menu-plugin/8012790
            '/var SFM_template/m',
            // [Plugin Comp] Surecart
            '/window\\.surecartComponents\\s*=/m',
            '/window\\.SureCartAffiliatesConfig\\s*=/m',
            // [Plugin Comp] wl-api-connector
            'valuationConfig',
            // [Plugin Comp] Slider Revolution
            '/window\\.SR7\\s*\\?\\?=/m',
        ]);
        /**
         * DoNotBlockScriptTextTemplates.
         *
         * @var DoNotBlockScriptTextTemplates
         */
        $doNotBlockScriptTextTemplates = $cb->addPlugin(DoNotBlockScriptTextTemplates::class);
        // [Plugin Comp] https://www.elegantthemes.com/gallery/extra/
        $doNotBlockScriptTextTemplates->addExclusionIfMatches('script[class*="widget-video-item-"]');
        // Other plugins
        $cb->addPlugin(Autoplay::class);
        $cb->addPlugin(MatchesUrl::class);
        $cb->addPlugin(ForceVisual::class);
        $cb->addPlugin(JQueryHijackEach::class);
        $cb->addPlugin(VisualParent::class);
        $cb->addPlugin(KeepAttributes::class);
        $cb->addPlugin(Style::class);
        $cb->addPlugin(DelegateClick::class);
        $cb->addPlugin(TransformAttribute::class);
        $cb->addPlugin(EvalJs::class);
        $cb->addPlugin(Confirm::class);
        $cb->addPlugin(ElementorProActionsPlugin::class);
        /**
         * Plugin.
         *
         * @var AttributeJsonBlocker
         */
        $attributeJsonBlocker = $cb->addPlugin(AttributeJsonBlocker::class);
        $attributeJsonBlocker->addAttributes([
            // [Plugin Comp] Multiview in Divi (e.g. Desktop / mobile / tablet)
            'data-et-multi-view',
            // [Plugin Comp] https://promo-theme.com/
            'data-popup-json',
        ]);
        /**
         * Plugin.
         *
         * @var RemoveAlwaysCSSClasses
         */
        $removeAlwaysCssClasses = $cb->addPlugin(RemoveAlwaysCSSClasses::class);
        $removeAlwaysCssClasses->addClassNames(RemoveAlwaysCSSClasses::KNOWN_LAZY_LOADED_CLASSES);
        $removeAlwaysCssClasses->addClassNames([
            // [Plugin Comp] https://wpbeaveraddons.com/demo/video/
            'pp-video-iframe',
            // [Plugin Comp] Bricks Builder
            'bricks-lazy-hidden',
        ]);
        $cb->addPlugin(CustomElementBlocker::class);
        $cb->addPlugin(ReattachDom::class);
        AdditionalAttributesBlocker::defaults($cb);
        /**
         * Plugin.
         *
         * @var LinkRelBlocker
         */
        $linkRelBlockerPlugin = $cb->addPlugin(LinkRelBlocker::class);
        /**
         * Legal opinion: With `dns-prefetch`, only the DNS server specified by the website visitor
         * is requested and not, for example, Google Fonts. Consequently, data is only passed
         * on to servers that can be expected by the visitor and it is in his interest for the
         * website to load as quickly as possible. Consequently, we assume that there is a
         * legitimate interest of the website visitor (not website operator, as he has no advantage)
         * according to Art. 6 (1) (f) DSGVO.
         */
        $linkRelBlockerPlugin->setDoNotTouch(['dns-prefetch']);
        /**
         * Plugin.
         *
         * @var ScriptInlineJsonBlocker
         */
        $scriptInlineJsonBlocker = $cb->addPlugin(ScriptInlineJsonBlocker::class);
        $scriptInlineJsonBlocker->addSchema('wp.i18n.setLocaleData', '/(wp\\.i18n\\.setLocaleData\\(\\s*localeData,\\s*domain\\s*\\);\\s*}\\s*\\)\\s*\\(\\s*"[^"]+",\\s*)(.*)(\\)\\s*;\\s*<\\/script>)/m', '</script>');
        $scriptInlineJsonBlocker->addSchema('jetMenuMobileWidgetRenderData', '/(window\\.jetMenuMobileWidgetRenderData[^=]+=)(.*)(;)$/m');
        // [Plugin Comp] https://wordpress.org/plugins/ays-chatgpt-assistant/
        $scriptInlineJsonBlocker->addSchema('AysChatGPTChatSettings', '/(var\\s*AysChatGPTChatSettings[^=]+=)(.*)(;)$/ms');
        $cb->addPlugin(Image::class);
        /**
         * Plugin.
         *
         * @var LinkBlocker
         */
        $linkBlockerPlugin = $cb->addPlugin(LinkBlocker::class);
        $linkBlockerPlugin->addBlockIfClass([
            // [Plugin Comp] https://wordpress.org/plugins/foobox-image-lightbox/
            'foobox',
        ]);
    }
}
