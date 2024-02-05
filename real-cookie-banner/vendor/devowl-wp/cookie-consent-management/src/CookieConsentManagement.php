<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\frontend\Frontend;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\Settings;
/**
 * Main consent management class.
 * @internal
 */
class CookieConsentManagement
{
    /**
     * See `Settings`.
     *
     * @var Settings
     */
    private $settings;
    /**
     * See `Frontend`.
     *
     * @var Frontend
     */
    private $frontend;
    /**
     * C'tor.
     *
     * @param Settings $settings
     * @codeCoverageIgnore
     */
    public function __construct($settings)
    {
        $this->settings = $settings;
        $this->settings->setCookieConsentManagement($this);
        $this->frontend = new Frontend($this);
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getSettings()
    {
        return $this->settings;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getFrontend()
    {
        return $this->frontend;
    }
}
