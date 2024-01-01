<?php

namespace DevOwl\RealCookieBanner\overrides\interfce\settings;

// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
interface IOverrideMultisite
{
    /**
     * Initially add PRO-only options.
     */
    public function overrideEnableOptionsAutoload();
    /**
     * Register PRO-only options.
     */
    public function overrideRegister();
    /**
     * Check if consent is aggregated.
     *
     * @return boolean
     */
    public function isConsentForwarding();
    /**
     * Get forward to URLs.
     *
     * @return string[]|false
     */
    public function getForwardTo();
    /**
     * Get consent aggregation cross domains.
     *
     * @return string[]|false
     */
    public function getCrossDomains();
}
