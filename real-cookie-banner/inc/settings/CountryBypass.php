<?php

namespace DevOwl\RealCookieBanner\settings;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\settings\CountryBypass as LiteCountryBypass;
use DevOwl\RealCookieBanner\overrides\interfce\settings\IOverrideCountryBypass;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Bypass the cookie banner for a specific set of countries.
 * @internal
 */
class CountryBypass implements IOverrideCountryBypass
{
    use LiteCountryBypass;
    use UtilsProvider;
    const OPTION_GROUP = 'options';
    /**
     * Name for the custom bypass saved in the database.
     */
    const CUSTOM_BYPASS = 'geolocation';
    const SETTING_COUNTRY_BYPASS_ACTIVE = RCB_OPT_PREFIX . '-country-bypass';
    const SETTING_COUNTRY_BYPASS_COUNTRIES = RCB_OPT_PREFIX . '-country-bypass-countries';
    const SETTING_COUNTRY_BYPASS_TYPE = RCB_OPT_PREFIX . '-country-bypass-type';
    const SETTING_COUNTRY_BYPASS_DB_DOWNLOAD_TIME = RCB_OPT_PREFIX . '-country-bypass-db-download-time';
    // This option should not be visible in any REST service, it is only used via `get_option` and `update_option`
    const OPTION_COUNTRY_DB_NEXT_DOWNLOAD_TIME = RCB_OPT_PREFIX . '-country-db-next-download-time';
    const TYPE_ALL = 'all';
    const TYPE_ESSENTIALS = 'essentials';
    const DEFAULT_COUNTRY_BYPASS_ACTIVE = \false;
    const DEFAULT_COUNTRY_BYPASS_COUNTRIES = 'GDPR,CCPA,GB,CH';
    // use the predefined lists of below
    const DEFAULT_COUNTRY_BYPASS_TYPE = self::TYPE_ALL;
    const DEFAULT_COUNTRY_BYPASS_DB_DOWNLOAD_TIME = '';
    /**
     * A list of predefined lists for e.g. `GDPR` or `CCPA`.
     */
    const PREDEFINED_COUNTRY_LISTS = [
        // EU: https://reciprocitylabs.com/resources/what-countries-are-covered-by-gdpr/
        // EEA: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:European_Economic_Area_(EEA)
        'GDPR' => ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'],
        'CCPA' => ['US'],
    ];
    /**
     * Singleton instance.
     *
     * @var CountryBypass
     */
    private static $me = null;
    /**
     * C'tor.
     */
    private function __construct()
    {
        // Silence is golden.
    }
    /**
     * Initially `add_option` to avoid autoloading issues.
     */
    public function enableOptionsAutoload()
    {
        $this->overrideEnableOptionsAutoload();
    }
    /**
     * Register settings.
     */
    public function register()
    {
        $this->overrideRegister();
    }
    /**
     * Add Switzerland (`CH`) to the country bypass list.
     *
     * @see https://app.clickup.com/t/863h7nj72
     * @param string|false $installed
     */
    public function new_version_installation_after_3_11_5($installed)
    {
        if ($this->isPro() && Core::versionCompareOlderThan($installed, '3.11.5', ['3.12.0', '3.11.6'])) {
            // We do not use `getCountries()` as we need the non-expanded country list
            $countries = \get_option(self::SETTING_COUNTRY_BYPASS_COUNTRIES);
            if (!empty($countries)) {
                $countries = \explode(',', $countries);
                if (!\in_array('CH', $countries, \true)) {
                    $countries[] = 'CH';
                    \update_option(self::SETTING_COUNTRY_BYPASS_COUNTRIES, \join(',', $countries));
                }
            }
        }
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     * @return CountryBypass
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\settings\CountryBypass() : self::$me;
    }
}
