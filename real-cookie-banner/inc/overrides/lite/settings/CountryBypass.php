<?php

namespace DevOwl\RealCookieBanner\lite\settings;

use WP_Error;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
trait CountryBypass
{
    // Documented in IOverrideGeneral
    public function overrideEnableOptionsAutoload()
    {
        // Silence is golden.
    }
    // Documented in IOverrideCountryBypass
    public function overrideRegister()
    {
        // Silence is golden.
    }
    // Documented in IOverrideCountryBypass
    public function probablyUpdateDatabase()
    {
        // Silence is golden.
    }
    // Documented in IOverrideCountryBypass
    public function updateDatabase($force = \false)
    {
        return new WP_Error('rcb_update_country_bypass_needs_pro', \__('This functionality is only available in the PRO version.', RCB_TD), ['status' => 500]);
    }
    // Documented in IOverrideCountryBypass
    public function clearDatabase()
    {
        // Silence is golden.
    }
    // Documented in IOverrideCountryBypass
    public function isActive()
    {
        return \false;
    }
    // Documented in IOverrideCountryBypass
    public function getCountries()
    {
        return [];
    }
    // Documented in IOverrideCountryBypass
    public function getType()
    {
        return null;
    }
    // Documented in IOverrideCountryBypass
    public function getDatabaseDownloadTime()
    {
        return '';
    }
}
