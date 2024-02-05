<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\tcf\VendorConfiguration;
/**
 * Abstract implementation of the settings for the TCF compatibility.
 * @internal
 */
abstract class AbstractTcf extends BaseSettings
{
    const SCOPE_OF_CONSENT_SERVICE = 'service-specific';
    const ALLOWED_SCOPE_OF_CONSENT = [self::SCOPE_OF_CONSENT_SERVICE];
    /**
     * Check if compatibility is enabled.
     *
     * @return boolean
     */
    public abstract function isActive();
    /**
     * Get scope of consent.
     *
     * @return string Can be `service`
     */
    public abstract function getScopeOfConsent();
    /**
     * Get the list of created TCF vendor configurations.
     *
     * @return VendorConfiguration[]
     */
    public abstract function getVendorConfigurations();
    /**
     * Fetch a list of vendors by arguments and return an array of vendors matching
     * the schema of the official `vendor-list.json`.
     *
     * @see https://vendor-list.consensu.org/v3/vendor-list.json
     * @param array $args
     * @return array[]
     */
    public abstract function queryVendors($args = []);
    /**
     * Changes to the Global Vendor List are published weekly at 5:00 PM Central European Time on Thursdays.
     */
    public static function getNextUpdateTime()
    {
        return \strtotime('next thursday 4:00 PM');
        // convert CET to UTC (+01:00)
    }
}
