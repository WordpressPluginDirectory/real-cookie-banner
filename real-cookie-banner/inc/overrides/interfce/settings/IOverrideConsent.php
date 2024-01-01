<?php

namespace DevOwl\RealCookieBanner\overrides\interfce\settings;

// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
interface IOverrideConsent
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
     * Check if data processing in unsafe countries is enabled.
     *
     * @return boolean
     */
    public function isDataProcessingInUnsafeCountries();
    /**
     * Get safe countries for the data-processing-in-unsafe-countries option.
     *
     * @return string[]
     */
    public function getDataProcessingInUnsafeCountriesSafeCountries();
}
