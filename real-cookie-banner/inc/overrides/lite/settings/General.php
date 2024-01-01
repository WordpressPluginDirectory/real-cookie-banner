<?php

namespace DevOwl\RealCookieBanner\lite\settings;

// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
trait General
{
    // Documented in IOverrideGeneral
    public function overrideEnableOptionsAutoload()
    {
        // Silence is golden.
    }
    // Documented in IOverrideGeneral
    public function overrideRegister()
    {
        // Silence is golden.
    }
    // Documented in IOverrideGeneral
    public function getAdditionalPageHideIds()
    {
        return [];
    }
    // Documented in IOverrideGeneral
    public function getSetCookiesViaManager()
    {
        return 'none';
    }
}
