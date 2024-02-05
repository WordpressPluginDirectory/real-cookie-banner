<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings;

/**
 * Abstract implementation of the settings for a multisite network (Consent Forwarding).
 * @internal
 */
abstract class AbstractMultisite extends BaseSettings
{
    /**
     * Check if consent should be forwarded.
     *
     * @return boolean
     */
    public abstract function isConsentForwarding();
    /**
     * Get forward to URLs within the network.
     *
     * @return string[]|false
     */
    public abstract function getForwardTo();
    /**
     * Get forward to external URLs.
     *
     * @return string[]|false
     */
    public abstract function getCrossDomains();
}
