<?php

namespace DevOwl\RealCookieBanner\overrides\interfce\settings;

use WP_Error;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
interface IOverrideCountryBypass
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
     * If we need to update the location database (scheduled), let's do this.
     */
    public function probablyUpdateDatabase();
    /**
     * Update the IP database and persist to our own database.
     *
     * @param boolean $force Skip `isActive` check and download immediate
     * @return true|WP_Error
     */
    public function updateDatabase($force = \false);
    /**
     * Completely clear all database tables.
     */
    public function clearDatabase();
    /**
     * Check if compatibility is enabled.
     *
     * @return boolean
     */
    public function isActive();
    /**
     * Get the list of countries where the banner should be shown (ISO 3166-1 alpha2).
     *
     * @return string[]
     */
    public function getCountries();
    /**
     * Get the type for the Country Bypass. Can be `all` or `essentials` (see class constants).
     *
     * @return string
     */
    public function getType();
    /**
     * Check when the database got downloaded at latest.
     *
     * @return string|null
     */
    public function getDatabaseDownloadTime();
}
