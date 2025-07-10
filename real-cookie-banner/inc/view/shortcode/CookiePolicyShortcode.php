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
        $atts = \shortcode_atts([
            'sections' => null,
            // comma separated list of sections to include
            'remove-headlines' => \false,
        ], $atts, self::TAG);
        $sections = $atts['sections'] ? \explode(',', $atts['sections']) : null;
        $removeHeadlines = $atts['remove-headlines'] === 'true' ? \true : \false;
        $core = Core::getInstance();
        // Force to load banner assets
        $core->getAssets()->enqueue_scripts_and_styles(Constants::ASSETS_TYPE_FRONTEND);
        return \do_shortcode($core->getCookieConsentManagement()->getCookiePolicy()->renderHtml(!$core->getCompLanguage()->isCurrentlyInEditorPreview(), $sections, $removeHeadlines));
    }
}
