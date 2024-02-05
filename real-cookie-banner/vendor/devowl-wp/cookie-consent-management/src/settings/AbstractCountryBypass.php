<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings;

/**
 * Abstract implementation of the settings for country bypass settings.
 * @internal
 */
abstract class AbstractCountryBypass extends BaseSettings
{
    const TYPE_ALL = 'all';
    const TYPE_ESSENTIALS = 'essentials';
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
     * Check if compatibility is enabled.
     *
     * @return boolean
     */
    public abstract function isActive();
    /**
     * Get the list of countries where the banner should be shown.
     *
     * @return string[]
     */
    public abstract function getCountriesRaw();
    /**
     * Get the list of countries where the banner should be shown, expanded with predefined lists (ISO 3166-1 alpha2).
     *
     * @return string[]
     */
    public function getCountries()
    {
        $result = [];
        // Expand predefined lists
        foreach ($this->getCountriesRaw() as $code) {
            if (\strlen($code) !== 2) {
                $predefinedList = self::PREDEFINED_COUNTRY_LISTS[$code] ?? [];
                $result = \array_merge($result, $predefinedList);
            } else {
                $result[] = $code;
            }
        }
        return $result;
    }
    /**
     * Get the type for the Country Bypass. Can be `all` or `essentials` (see class constants).
     *
     * @return string
     */
    public abstract function getType();
    /**
     * Changes to the country database are published daily, but we do this only once a week.
     */
    public static function getNextUpdateTime()
    {
        return \strtotime('next sunday 11:59 PM');
    }
}
