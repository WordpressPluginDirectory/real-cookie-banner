<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CacheInvalidate\caches;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CacheInvalidate\AbstractCache;
use seraph_accel\API;
/**
 * Seraphinite Accelerator.
 *
 * @see https://www.s-sols.com/products/wordpress/accelerator
 * @codeCoverageIgnore
 * @internal
 */
class SeraphiniteAcceleratorImpl extends AbstractCache
{
    const IDENTIFIER = 'seraphinite-accelerator';
    // Documented in AbstractCache
    public function isActive()
    {
        return \class_exists(API::class);
    }
    // Documented in AbstractCache
    public function invalidate()
    {
        return API::OperateCache(API::CACHE_OP_DEL);
    }
    // Documented in AbstractCache
    public function label()
    {
        return 'Seraphinite Accelerator';
    }
}
