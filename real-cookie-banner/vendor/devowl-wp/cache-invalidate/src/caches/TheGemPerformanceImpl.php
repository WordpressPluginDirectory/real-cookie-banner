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
        return \function_exists('thegem_delay_js_active') && \thegem_delay_js_active();
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
