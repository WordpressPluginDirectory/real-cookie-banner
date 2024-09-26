<?php

namespace DevOwl\RealCookieBanner\lite\settings;

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
    // Documented in AbstractConsent
    public function isDataProcessingInUnsafeCountries()
    {
        return \false;
    }
    // Documented in AbstractConsent
    public function isBannerLessConsent()
    {
        return \false;
    }
    // Documented in AbstractConsent
    public function getBannerLessConsentShowOnPageIds()
    {
        return [];
    }
}
