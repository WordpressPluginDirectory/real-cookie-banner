<?php

namespace DevOwl\RealCookieBanner\settings;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\AbstractConsent;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\lite\settings\Consent as LiteConsent;
use DevOwl\RealCookieBanner\overrides\interfce\settings\IOverrideConsent;
use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Settings > Consent.
 * @internal
 */
class Consent extends AbstractConsent implements IOverrideConsent
{
    use LiteConsent;
    use UtilsProvider;
    const OPTION_GROUP = 'options';
    const SETTING_ACCEPT_ALL_FOR_BOTS = RCB_OPT_PREFIX . '-accept-all-for-bots';
    const SETTING_RESPECT_DO_NOT_TRACK = RCB_OPT_PREFIX . '-respect-do-not-track';
    const SETTING_COOKIE_DURATION = RCB_OPT_PREFIX . '-cookie-duration';
    const SETTING_COOKIE_VERSION = RCB_OPT_PREFIX . '-cookie-version';
    const SETTING_SAVE_IP = RCB_OPT_PREFIX . '-save-ip';
    const SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES = RCB_OPT_PREFIX . '-data-processing-in-unsafe-countries';
    const SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES_SAFE_COUNTRIES = RCB_OPT_PREFIX . '-data-processing-in-unsafe-countries-safe-countries';
    const SETTING_AGE_NOTICE = RCB_OPT_PREFIX . '-age-notice';
    const SETTING_AGE_NOTICE_AGE_LIMIT = RCB_OPT_PREFIX . '-age-notice-age-limit';
    const SETTING_LIST_SERVICES_NOTICE = RCB_OPT_PREFIX . '-list-services-notice';
    const SETTING_CONSENT_DURATION = RCB_OPT_PREFIX . '-consent-duration';
    const DEFAULT_ACCEPT_ALL_FOR_BOTS = \true;
    const DEFAULT_RESPECT_DO_NOT_TRACK = \false;
    const DEFAULT_COOKIE_DURATION = 365;
    const DEFAULT_SAVE_IP = \false;
    const DEFAULT_DATA_PROCESSING_IN_UNSAFE_COUNTRIES = \false;
    const DEFAULT_DATA_PROCESSING_IN_UNSAFE_COUNTRIES_SAFE_COUNTRIES = 'GDPR,ADEQUACY';
    const DEFAULT_AGE_NOTICE = \true;
    const DEFAULT_AGE_NOTICE_AGE_LIMIT = 'INHERIT';
    const DEFAULT_LIST_SERVICES_NOTICE = \true;
    const DEFAULT_CONSENT_DURATION = 120;
    const TRANSIENT_SCHEDULE_CONSENTS_DELETION = RCB_OPT_PREFIX . '-schedule-consents-deletion';
    /**
     * Singleton instance.
     *
     * @var Consent
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
        Utils::enableOptionAutoload(self::SETTING_ACCEPT_ALL_FOR_BOTS, self::DEFAULT_ACCEPT_ALL_FOR_BOTS, 'boolval');
        Utils::enableOptionAutoload(self::SETTING_RESPECT_DO_NOT_TRACK, self::DEFAULT_RESPECT_DO_NOT_TRACK, 'boolval');
        Utils::enableOptionAutoload(self::SETTING_COOKIE_DURATION, self::DEFAULT_COOKIE_DURATION, 'intval');
        Utils::enableOptionAutoload(self::SETTING_COOKIE_VERSION, self::DEFAULT_COOKIE_VERSION, 'intval');
        Utils::enableOptionAutoload(self::SETTING_SAVE_IP, self::DEFAULT_SAVE_IP, 'boolval');
        Utils::enableOptionAutoload(self::SETTING_AGE_NOTICE, self::DEFAULT_AGE_NOTICE, 'boolval');
        Utils::enableOptionAutoload(self::SETTING_AGE_NOTICE_AGE_LIMIT, self::DEFAULT_AGE_NOTICE_AGE_LIMIT);
        Utils::enableOptionAutoload(self::SETTING_LIST_SERVICES_NOTICE, self::DEFAULT_LIST_SERVICES_NOTICE, 'boolval');
        Utils::enableOptionAutoload(self::SETTING_CONSENT_DURATION, self::DEFAULT_CONSENT_DURATION, 'intval');
        $this->overrideEnableOptionsAutoload();
    }
    /**
     * Register settings.
     */
    public function register()
    {
        \register_setting(self::OPTION_GROUP, self::SETTING_ACCEPT_ALL_FOR_BOTS, ['type' => 'boolean', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_RESPECT_DO_NOT_TRACK, ['type' => 'boolean', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_COOKIE_DURATION, ['type' => 'number', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_COOKIE_VERSION, ['type' => 'number', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_SAVE_IP, ['type' => 'boolean', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_AGE_NOTICE, ['type' => 'boolean', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_AGE_NOTICE_AGE_LIMIT, ['type' => 'boolean', 'show_in_rest' => ['schema' => ['type' => 'string', 'enum' => \array_keys(self::AGE_NOTICE_COUNTRY_AGE_MAP)]]]);
        \register_setting(self::OPTION_GROUP, self::SETTING_LIST_SERVICES_NOTICE, ['type' => 'boolean', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_CONSENT_DURATION, ['type' => 'number', 'show_in_rest' => \true]);
        $this->overrideRegister();
    }
    // Documented in AbstractConsent
    public function isAcceptAllForBots()
    {
        return \get_option(self::SETTING_ACCEPT_ALL_FOR_BOTS);
    }
    // Documented in AbstractConsent
    public function isRespectDoNotTrack()
    {
        return \get_option(self::SETTING_RESPECT_DO_NOT_TRACK);
    }
    // Documented in AbstractConsent
    public function isSaveIpEnabled()
    {
        return \get_option(self::SETTING_SAVE_IP);
    }
    // Documented in AbstractConsent
    public function isAgeNoticeEnabled()
    {
        return \get_option(self::SETTING_AGE_NOTICE);
    }
    /**
     * Get the configured age limit for the age notice.
     *
     * @return int
     */
    public function getAgeNoticeAgeLimit()
    {
        $option = \get_option(self::SETTING_AGE_NOTICE_AGE_LIMIT);
        $operatorCountry = \DevOwl\RealCookieBanner\settings\General::getInstance()->getOperatorCountry();
        $defaultAge = self::AGE_NOTICE_COUNTRY_AGE_MAP['GDPR'];
        if ($option === 'INHERIT') {
            return self::AGE_NOTICE_COUNTRY_AGE_MAP[$operatorCountry] ?? $defaultAge;
        }
        return self::AGE_NOTICE_COUNTRY_AGE_MAP[$option] ?? $defaultAge;
    }
    // Documented in AbstractConsent
    public function isListServicesNoticeEnabled()
    {
        return \get_option(self::SETTING_LIST_SERVICES_NOTICE);
    }
    // Documented in AbstractConsent
    public function getCookieDuration()
    {
        return \get_option(self::SETTING_COOKIE_DURATION);
    }
    // Documented in AbstractConsent
    public function getCookieVersion()
    {
        return \get_option(self::SETTING_COOKIE_VERSION);
    }
    // Documented in AbstractConsent
    public function getConsentDuration()
    {
        return \get_option(self::SETTING_CONSENT_DURATION);
    }
    /**
     * The cookie duration may not be greater than 365 days.
     *
     * @param mixed $value
     * @since 1.10
     */
    public function option_cookie_duration($value)
    {
        // Use `is_numeric` as it can be a string
        if (\is_numeric($value) && \intval($value) > 365) {
            return 365;
        }
        return $value;
    }
    /**
     * The consent duration may not be greater than 120 months.
     *
     * @param mixed $value
     */
    public function option_consent_duration($value)
    {
        // Use `is_numeric` as it can be a string
        if (\is_numeric($value) && \intval($value) > 120) {
            return 120;
        }
        return $value;
    }
    /**
     *  Delete transient when settings are updated
     */
    public function update_option_consent_transient_deletion()
    {
        \delete_transient(self::TRANSIENT_SCHEDULE_CONSENTS_DELETION);
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\settings\Consent() : self::$me;
    }
    /**
     * Deactivate "Naming of all services in first view" as it should not be activated automatically for already existing users.
     *
     * @param string|false $installed
     */
    public static function new_version_installation_after_2_17_3($installed)
    {
        if (Core::versionCompareOlderThan($installed, '2.17.3', ['2.17.4', '2.18.0'])) {
            \update_option(self::SETTING_LIST_SERVICES_NOTICE, '');
        }
    }
    /**
     * Revert to cookie version 1 for users already using RCB.
     *
     * @param string|false $installed
     */
    public static function new_version_installation_after_3_0_1($installed)
    {
        if (Core::versionCompareOlderThan($installed, '3.0.1', ['3.0.2', '3.1.0'])) {
            \update_option(self::SETTING_COOKIE_VERSION, self::COOKIE_VERSION_1);
        }
    }
    /**
     * Automatically convert ePrivacy USA flag to data processing in unsafe countries.
     *
     * @see https://app.clickup.com/t/861m47jgm
     * @param string|false $installed
     */
    public static function new_version_installation_after_3_7_2($installed)
    {
        global $wpdb;
        if (Core::versionCompareOlderThan($installed, '3.7.2', ['3.7.3', '3.8.0'])) {
            // Enable new feature
            $legacyOptionName = RCB_OPT_PREFIX . '-eprivacy-usa';
            $option = \get_option($legacyOptionName);
            if ($option) {
                \update_option(self::SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES, \true);
            }
            //delete_option($legacyOptionName);
            // Get posts which hold post meta which needs to be renamed so we can clear the post cache for them
            $affectedPostIds = $wpdb->get_col($wpdb->prepare("SELECT p.ID FROM {$wpdb->postmeta} pm\n                    INNER JOIN {$wpdb->posts} p ON pm.post_id = p.ID\n                    WHERE pm.meta_key IN (\n                        'ePrivacyUSA'\n                    ) AND p.post_type IN (%s, %s)\n                    GROUP BY p.ID", \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME, 'rcb-tcf-vendor-conf'));
            if (\count($affectedPostIds) > 0) {
                // Rename the metadata directly through a plain SQL query so hooks like `update_post_meta` are not called
                // This avoids issues with WPML or PolyLang and their syncing process
                $wpdb->query($wpdb->prepare("UPDATE {$wpdb->postmeta} pm\n                        INNER JOIN {$wpdb->posts} p ON pm.post_id = p.ID\n                        SET pm.meta_key = CASE\n                            WHEN pm.meta_key = 'ePrivacyUSA' THEN 'dataProcessingInCountries'\n                            ELSE pm.meta_key\n                            END,\n                        pm.meta_value = CASE\n                            WHEN pm.meta_key = 'ePrivacyUSA' AND pm.meta_value = '1' THEN '[\"US\"]'\n                            WHEN pm.meta_key = 'ePrivacyUSA' AND pm.meta_value <> '1' THEN '[]'\n                            ELSE pm.meta_value\n                            END\n                        WHERE p.post_type IN (%s, %s)", \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME, 'rcb-tcf-vendor-conf'));
                foreach ($affectedPostIds as $affectedPostId) {
                    \clean_post_cache(\intval($affectedPostId));
                }
            }
        }
    }
    /**
     * Modify already given consents and adjust the "data processing in unsafe countries" field names for "List of consents".
     *
     * @see https://app.clickup.com/t/861m47jgm
     * @param array $revision
     * @param boolean $independent
     */
    public static function applyDataProcessingInUnsafeCountriesBackwardsCompatibility($revision, $independent)
    {
        if (!$independent) {
            if (!isset($revision['options']['SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES'])) {
                $revision['options']['SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES'] = \false;
                $revision['options']['SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES_SAFE_COUNTRIES'] = '';
            }
            foreach ($revision['groups'] as &$group) {
                foreach ($group['items'] as &$item) {
                    $item['dataProcessingInCountries'] = $item['dataProcessingInCountries'] ?? [];
                    $item['dataProcessingInCountriesSpecialTreatments'] = $item['dataProcessingInCountriesSpecialTreatments'] ?? [];
                }
            }
            if (isset($revision['tcf'])) {
                foreach ($revision['tcf']['vendorConfigurations'] as &$vendorConfiguration) {
                    $vendorConfiguration['dataProcessingInCountries'] = $vendorConfiguration['dataProcessingInCountries'] ?? [];
                    $vendorConfiguration['dataProcessingInCountriesSpecialTreatments'] = $vendorConfiguration['dataProcessingInCountriesSpecialTreatments'] ?? [];
                }
            }
        }
        return $revision;
    }
    /**
     * Modify already given consents and adjust the age limit for the age notice for "List of consents".
     *
     * @see https://app.clickup.com/t/866awy2fr
     * @param array $revision
     * @param boolean $independent
     */
    public static function applyAgeNoticeAgeLimitBackwardsCompatibility($revision, $independent)
    {
        if ($independent && !isset($revision['ageNoticeAgeLimit'])) {
            $revision['ageNoticeAgeLimit'] = 16;
        }
        return $revision;
    }
}
