<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\RealQueue;

use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\PackageLocalization;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Package localization for `real-product-manager-wp-client` package.
 * @internal
 */
class Localization extends PackageLocalization
{
    /**
     * C'tor.
     */
    protected function __construct()
    {
        parent::__construct(REAL_QUEUE_ROOT_SLUG, \dirname(__DIR__));
    }
    /**
     * Create instance.
     *
     * @codeCoverageIgnore
     */
    public static function instanceThis()
    {
        return new Localization();
    }
}
