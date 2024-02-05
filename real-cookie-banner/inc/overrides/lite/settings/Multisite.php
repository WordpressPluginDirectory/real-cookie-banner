<?php

namespace DevOwl\RealCookieBanner\lite\settings;

// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
trait Multisite
{
    // Documented in IOverrideGeneral
    public function overrideEnableOptionsAutoload()
    {
        // Silence is golden.
    }
    // Documented in IOverrideMultisite
    public function overrideRegister()
    {
        // Silence is golden.
    }
    // Documented in AbstractMultisite
    public function isConsentForwarding()
    {
        return \false;
    }
    // Documented in AbstractMultisite
    public function getForwardTo()
    {
        return $this->isConsentForwarding();
    }
    // Documented in AbstractMultisite
    public function getCrossDomains()
    {
        return $this->isConsentForwarding();
    }
}
