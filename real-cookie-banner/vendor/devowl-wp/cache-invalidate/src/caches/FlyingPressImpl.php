<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CacheInvalidate\caches;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CacheInvalidate\AbstractCache;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CacheInvalidate\ExcludeAssets;
use FlyingPress\Purge;
/**
 * WP Rocket.
 *
 * @see https://flyingpress.com/
 * @codeCoverageIgnore
 * @internal
 */
class FlyingPressImpl extends AbstractCache
{
    const IDENTIFIER = 'flyingpress';
    // Documented in AbstractCache
    public function isActive()
    {
        return \class_exists(Purge::class);
    }
    // Documented in AbstractCache
    public function invalidate()
    {
        return Purge::purge_everything();
    }
    /**
     * Exclude JavaScript and CSS assets.
     *
     * @param ExcludeAssets $excludeAssets
     * @see https://docs.flyingpress.com/en/article/exclude-files-from-javascript-defer-and-delay-1uywyjq/
     */
    public function excludeAssetsHook($excludeAssets)
    {
        foreach (['flying_press_exclude_from_defer:js', 'flying_press_exclude_from_delay:js'] as $filter) {
            \add_filter($filter, function ($excluded) use($excludeAssets) {
                $path = $excludeAssets->getAllUrlPath('js');
                $handles = $excludeAssets->getHandles()['js'];
                return \array_merge($excluded, $path, $handles);
            });
        }
    }
    // Documented in AbstractCache
    public function label()
    {
        return 'FlyingPress';
    }
}
