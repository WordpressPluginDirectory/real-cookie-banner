<?php

namespace DevOwl\RealCookieBanner\lite\settings;

use DevOwl\RealCookieBanner\settings\Consent as SettingsConsent;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
trait Consent
{
    // Documented in IOverrideGeneral
    public function overrideEnableOptionsAutoload()
    {
        // Silence is golden.
    }
    // Documented in IOverrideConsent
    public function overrideRegister()
    {
        // Silence is golden.
    }
    // Documented in IOverrideConsent
    public function isDataProcessingInUnsafeCountries()
    {
        return \false;
    }
    // Documented in IOverrideConsent
    public function getDataProcessingInUnsafeCountriesSafeCountries()
    {
        return \explode(',', SettingsConsent::DEFAULT_DATA_PROCESSING_IN_UNSAFE_COUNTRIES_SAFE_COUNTRIES);
    }
}
