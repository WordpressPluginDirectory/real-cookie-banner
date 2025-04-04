<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CacheInvalidate\caches;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CacheInvalidate\AbstractCache;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CacheInvalidate\ExcludeAssets;
/**
 * TheGem currently supports only to delay the JS but it does not provide a caching mechanism.
 *
 * @see https://themeforest.net/item/thegem-creative-multipurpose-highperformance-wordpress-theme/16061685
 * @codeCoverageIgnore
 * @internal
 */
class TheGemPerformanceImpl extends AbstractCache
{
    const IDENTIFIER = 'the-gem-performance';
    // Documented in AbstractCache
    public function isActive()
    {
        /**
         * `thegem_delay_js_active` cannot be used here as it causes issues with the TheGem theme.
         *
         * The TheGem support writes the following:
         *
         * > The file /thegem(-elementor)/inc/post-types/init.php contains the function thegem_init_global_page_settings
         * > hooked to the init action with the default priority of 10. In this function, the default page/post settings
         * > are initialized into the global variable $thegem_global_page_settings.
         * > Later, in the header.php template or elsewhere (such as in the thegem_delay_js_active function), we retrieve
         * > the settings of the current page using the thegem_get_output_page_settings function. It is assumed that
         * > thegem_get_output_page_settings will be called after thegem_init_global_page_settings has executed. On its
         * > first call, thegem_get_output_page_settings caches the settings for the current page.
         * > However, in the Real Cookie Banner plugin, the function thegem_delay_js_active (and consequently the
         * > function thegem_get_output_page_settings) is called via the init hook with a priority of 0. Since the
         * > global variable $thegem_global_page_settings has not been initialized at this point, incorrect page
         * > settings are cached.
         * > Thus, in the Real Cookie Banner plugin, the function from our theme is called earlier than we intended.
         * > As a result, incorrect page settings are being used on the frontend.
         *
         * @see https://app.clickup.com/t/8696rncw0?comment=90120111508546
         */
        // return function_exists('thegem_delay_js_active') && thegem_delay_js_active();
        return \function_exists('thegem_delay_js_active');
    }
    // Documented in AbstractCache
    public function invalidate()
    {
        // Nothing to do here
        return null;
    }
    /**
     * Exclude JavaScript and CSS assets.
     *
     * @param ExcludeAssets $excludeAssets
     */
    public function excludeAssetsHook($excludeAssets)
    {
        \add_filter('thegem_delay_js_exclusions', function ($excluded) use($excludeAssets) {
            $path = $excludeAssets->getAllUrlPath('js');
            $path = \array_map(function ($item) {
                return \preg_quote($item, '#');
            }, $path);
            return \array_merge($excluded, $path);
        });
    }
    // Documented in AbstractCache
    public function label()
    {
        return 'TheGem Delay JS';
    }
}
