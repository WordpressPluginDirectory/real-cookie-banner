<?php

namespace DevOwl\RealCookieBanner\view\shortcode;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\settings\General;
use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Constants;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Shortcode to print a cookie policy.
 * @internal
 */
class CookiePolicyShortcode
{
    use UtilsProvider;
    const TAG = 'rcb-cookie-policy';
    /**
     * Render shortcode HTML.
     *
     * @param mixed $atts
     * @return string
     */
    public static function render($atts)
    {
        $atts = \shortcode_atts([], $atts, self::TAG);
        $core = Core::getInstance();
        // Force to load banner assets
        $core->getAssets()->enqueue_scripts_and_styles(Constants::ASSETS_TYPE_FRONTEND);
        return $core->getCookieConsentManagement()->getCookiePolicy()->renderHtml(!$core->getCompLanguage()->isCurrentlyInEditorPreview());
    }
}
