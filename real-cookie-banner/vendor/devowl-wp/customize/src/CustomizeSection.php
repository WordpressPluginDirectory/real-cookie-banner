<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\Customize;

use WP_Customize_Section;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Extend the core customize section class.
 * @internal
 */
class CustomizeSection extends WP_Customize_Section
{
    /**
     * Allows to pass custom params to the customizer so it can be retrieved via:
     *
     * ```
     * wp.customize.section("my-section", function(({ params: { customParams } })) {
     *  console.log(customParams);
     * })
     * ```
     *
     * @var array
     */
    public $customParams;
    // Documented in WP_Customize_Section
    public function json()
    {
        $array = parent::json();
        if (\is_array($this->customParams)) {
            $array['customParams'] = $this->customParams;
        }
        return $array;
    }
}
