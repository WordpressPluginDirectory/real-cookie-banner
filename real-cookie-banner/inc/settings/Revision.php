<?php

namespace DevOwl\RealCookieBanner\settings;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\settings\TcfVendorConfiguration;
use DevOwl\RealCookieBanner\UserConsent;
use DevOwl\RealCookieBanner\Utils;
use DevOwl\RealCookieBanner\view\Notices;
use DevOwl\RealCookieBanner\Vendor\DevOwl\RealProductManagerWpClient\license\License;
use ReflectionClass;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Create a mechanism to catch all settings and create an unique revision.
 * Note: A revision holds any option in "raw", so there isn't any filter or
 * postprocess like a getter.
 * @internal
 */
class Revision
{
    use UtilsProvider;
    const TABLE_NAME = 'revision';
    const TABLE_NAME_INDEPENDENT = 'revision_independent';
    const OPTION_PREFIX = 'SETTING_';
    const OPTION_NAME_CURRENT_HASH_PREFIX = RCB_OPT_PREFIX . '-revision-current-hash';
    const EXCLUDE_OPTIONS_FROM_REVISION = [\DevOwl\RealCookieBanner\settings\TCF::SETTING_TCF_FIRST_ACCEPTED_TIME, \DevOwl\RealCookieBanner\settings\TCF::SETTING_TCF_ACCEPTED_TIME, \DevOwl\RealCookieBanner\settings\TCF::SETTING_TCF_GVL_DOWNLOAD_TIME, \DevOwl\RealCookieBanner\settings\CountryBypass::SETTING_COUNTRY_BYPASS_DB_DOWNLOAD_TIME];
    const INDEPENDENT_OPTIONS = [\DevOwl\RealCookieBanner\settings\General::SETTING_BANNER_ACTIVE, \DevOwl\RealCookieBanner\settings\General::SETTING_BLOCKER_ACTIVE, \DevOwl\RealCookieBanner\settings\General::SETTING_HIDE_PAGE_IDS, \DevOwl\RealCookieBanner\settings\Consent::SETTING_RESPECT_DO_NOT_TRACK, \DevOwl\RealCookieBanner\settings\Consent::SETTING_SAVE_IP, \DevOwl\RealCookieBanner\settings\Consent::SETTING_CONSENT_DURATION];
    /**
     * Singleton instance.
     *
     * @var Revision
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
     * Get the current active revision. If there is not current revision (only after
     * activating the plugin itself), the current revision hash gets calculated from
     * initial settings.
     */
    public function getCurrentHash()
    {
        $hash = \get_option($this->getCurrentHashOptionName(), '');
        if (empty($hash)) {
            $hash = $this->create(\true)['hash'];
        }
        return $hash;
    }
    /**
     * Create a MD5 hash from all available settings of Real Cookie Banner and save also as "current".
     * If the hash differs, a new consent is needed! Note also, that some settings are excluded and prevent
     * a retrigger. See also `createIndependent`.
     *
     * @param boolean|string $persist Persist the revision in database, pass `force` to force-write into the database
     * @param boolean $forceNewConsent
     * @return array 'revision' and 'hash'
     */
    public function create($persist = \false, $forceNewConsent = \true)
    {
        global $wpdb;
        $currentHashOptionName = $this->getCurrentHashOptionName();
        // Automatically update to the latest cookie version
        if ($persist && $forceNewConsent) {
            \update_option(\DevOwl\RealCookieBanner\settings\Consent::SETTING_COOKIE_VERSION, \DevOwl\RealCookieBanner\settings\Consent::DEFAULT_COOKIE_VERSION);
        }
        // Create hashable revision
        $revision = \array_merge(['options' => $this->fromOptions(self::INDEPENDENT_OPTIONS, \false), 'groups' => Core::getInstance()->getBanner()->localizeGroups(), 'websiteOperator' => \DevOwl\RealCookieBanner\settings\General::getInstance()->localizeWebsiteOperator()], $this->getContextVariables());
        /**
         * Modify the revision array so specific data changes can cause a "Request new consent".
         *
         * @hook RCB/Revision/Array
         * @param {array} $result
         * @returns {array}
         */
        $revision = \apply_filters('RCB/Revision/Array', $revision);
        $json_revision = \json_encode($revision);
        $hash = \md5($json_revision);
        $result = ['revision' => $revision, 'hash' => $hash];
        if ($persist && (\get_option($currentHashOptionName) !== $hash || $persist === 'force')) {
            $table_name = $this->getTableName(self::TABLE_NAME);
            $wpdb->query(
                // phpcs:disable WordPress.DB.PreparedSQL
                $wpdb->prepare("INSERT IGNORE INTO {$table_name} (json_revision, `hash`, created) VALUES (%s, %s, %s)", $json_revision, $hash, \current_time('mysql'))
            );
            if ($forceNewConsent) {
                \update_option($currentHashOptionName, $hash, \true);
                Core::getInstance()->getNotices()->getStates()->set(Notices::NOTICE_REVISON_REQUEST_NEW_CONSENT_PREFIX . $this->getContextVariablesString(), '');
                /**
                 * A new consent is requested on the frontend. That means, the new revision
                 * hash is now present in the frontend.
                 *
                 * @hook RCB/Revision/Hash
                 * @param {array} $result
                 * @param {string} $hash Persisted hash to `wp_rcb_revision`
                 * @returns {array}
                 */
                return \apply_filters('RCB/Revision/Hash', $result, $hash);
            }
        }
        return $result;
    }
    /**
     * Create a MD5 hash from all available customize settings of Real Cookie Banner.
     * UI changes does not trigger any reconsent!
     *
     * @param boolean $persist Persist the revision in database
     * @return array 'revision' and 'hash'
     */
    public function createIndependent($persist = \false)
    {
        global $wpdb;
        $licenseActivation = Core::getInstance()->getRpmInitiator()->getPluginUpdater()->getCurrentBlogLicense()->getActivation();
        $isLicensed = !empty($licenseActivation->getCode());
        $isDevLicense = $licenseActivation->getInstallationType() === License::INSTALLATION_TYPE_DEVELOPMENT;
        // Create hashable revision
        $revision = ['options' => $this->fromOptions(self::INDEPENDENT_OPTIONS, \true), 'ageNoticeAgeLimit' => \DevOwl\RealCookieBanner\settings\Consent::getInstance()->getAgeNoticeAgeLimit(), 'banner' => Core::getInstance()->getBanner()->getCustomize()->localizeValues(), 'blocker' => Core::getInstance()->getBlocker()->localize(), 'links' => \DevOwl\RealCookieBanner\settings\BannerLink::getInstance()->localize(), 'languageSwitcher' => \array_map(function ($ls) {
            // Remove the `url` as this leads to a lot of revisions (per sub page)
            unset($ls['url']);
            return $ls;
        }, Core::getInstance()->getCompLanguage()->getLanguageSwitcher()), 'isPro' => $this->isPro(), 'isLicensed' => $isLicensed, 'isDevLicense' => $isDevLicense];
        /**
         * Modify the independent revision array. Changes do not cause a "Request new consent"!
         *
         * @hook RCB/Revision/Array/Independent
         * @param {array} $result
         * @returns {array}
         * @since 2.0.0
         */
        $revision = \apply_filters('RCB/Revision/Array/Independent', $revision);
        $json_revision = \json_encode($revision);
        $hash = \md5($json_revision);
        if ($persist) {
            $table_name = $this->getTableName(self::TABLE_NAME_INDEPENDENT);
            $wpdb->query(
                // phpcs:disable WordPress.DB.PreparedSQL
                $wpdb->prepare("INSERT IGNORE INTO {$table_name} (json_revision, `hash`, created) VALUES (%s, %s, %s)", $json_revision, $hash, \current_time('mysql'))
            );
        }
        return ['revision' => $revision, 'hash' => $hash];
    }
    /**
     * Checks if the given current revision (result of `getCurrent`) needs a retrigger.
     *
     * @param array $revision Result of `getCurrent`
     * @return boolean
     */
    public function needsRetrigger($revision)
    {
        $needsRetrigger = $revision['public_to_users'] !== $revision['calculated'];
        if ($needsRetrigger) {
            // Got this calculated hash dismissed?
            $dismissedHash = Core::getInstance()->getNotices()->getStates()->get(Notices::NOTICE_REVISON_REQUEST_NEW_CONSENT_PREFIX . $this->getContextVariablesString());
            if (!empty($dismissedHash) && $dismissedHash === $revision['calculated']) {
                $needsRetrigger = \false;
            }
        }
        /**
         * Checks if the revision(s) needs a retrigger. This can be useful if you create your own context
         * and you want to show a "Request new consents" button in the admin page.
         *
         * @hook RCB/Revision/NeedsRetrigger
         * @param {boolean} $needs_retrigger
         * @return {boolean}
         * @since 1.7.4
         */
        return \apply_filters('RCB/Revision/NeedsRetrigger', $needsRetrigger);
    }
    /**
     * Get the current revision as array. It also includes the following infos:
     *
     * - `public_to_users`: The revision hash currently published to users
     * - `calculated`: The current revision hash from the latest settings
     * - `has_manager`: Has a cookie with a valid Google/Matomo Tag Manager script (so you can show a notice in your config UI)
     * - `public_count`: A total count of public cookies
     *
     * @param boolean $recreate If true, a new revision gets created so new consents need to be made. Always recreates when no consents are given yet.
     */
    public function getCurrent($recreate = \false)
    {
        $create = $this->create($recreate || UserConsent::getInstance()->getCount() === 0);
        $calculated = $create['hash'];
        $publicToUsers = $this->getCurrentHash();
        $consentsDeletedAt = \mysql2date('c', \get_transient(\DevOwl\RealCookieBanner\settings\Consent::TRANSIENT_SCHEDULE_CONSENTS_DELETION), \false);
        // Search for all available tag managers
        $setCookiesViaManager = \DevOwl\RealCookieBanner\settings\General::getInstance()->getSetCookiesViaManager();
        if ($setCookiesViaManager === 'none') {
            $tagManagerResults['has_manager'] = \false;
        } else {
            $ids = \get_posts(Core::getInstance()->queryArguments(['post_type' => \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME, 'numberposts' => -1, 'nopaging' => \true, 'fields' => 'ids', 'meta_query' => [['key' => \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_PRESET_ID, 'value' => $setCookiesViaManager === 'googleTagManager' ? 'gtm' : 'mtm', 'compare' => '=']]], 'revisionGetManagerIds'));
            $tagManagerResults['has_manager'] = \count($ids) > 0 ? $ids[0] : \false;
        }
        $notices = Core::getInstance()->getNotices();
        $needsUpdate = $notices->servicesWithUpdatedTemplates();
        $successors = $notices->servicesWithSuccessorTemplates();
        /**
         * Modify the result for the `/wp-json/real-cookie-banner/v1/revision/current` route. Usually,
         * this filter should not be used publicly as it is only intent for internal usage.
         *
         * @hook RCB/Revision/Current
         * @param {array} $value
         * @return {array}
         * @since 2.0.0
         */
        return \apply_filters('RCB/Revision/Current', \array_merge($create, $tagManagerResults, ['public_to_users' => $publicToUsers, 'template_needs_update' => $needsUpdate, 'template_update_notice_html' => \count($needsUpdate) > 0 ? $notices->servicesWithUpdatedTemplatesHtml($needsUpdate) : null, 'template_successors_notice_html' => \count($successors) > 0 ? $notices->servicesWithSuccessorTemplatesHtml($successors) : null, 'services_data_processing_in_unsafe_countries_notice_html' => $notices->servicesDataProcessingInUnsafeCountriesNoticeHtml(), 'services_with_empty_privacy_policy_notice_html' => $notices->serviceWithEmptyPrivacyPolicyNoticeHtml(), 'contexts' => UserConsent::getInstance()->getPersistedContexts(), 'calculated' => $calculated, 'public_cookie_count' => \DevOwl\RealCookieBanner\settings\Cookie::getInstance()->getPublicCount(), 'all_cookie_count' => \DevOwl\RealCookieBanner\settings\Cookie::getInstance()->getAllCount(), 'all_blocker_count' => \DevOwl\RealCookieBanner\settings\Blocker::getInstance()->getAllCount(), 'cookie_counts' => \wp_count_posts(\DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME), 'consents_deleted_at' => $consentsDeletedAt], $this->isPro() ? ['all_tcf_vendor_configuration_count' => TcfVendorConfiguration::getInstance()->getAllCount(), 'tcf_vendor_configuration_counts' => \wp_count_posts(TcfVendorConfiguration::CPT_NAME)] : []));
    }
    /**
     * Read all available options. This does not impact the performance in any way,
     * because all `autoload=yes` options are loaded already.
     *
     * @param string[] $whiteBlackList Allows to skip / only options by option name
     * @param boolean $isInArray The needed result of `in_array` for `$whiteBlackList`
     * @param boolean $asOptionName If true, the returned map contains the option name instead of value
     */
    public function fromOptions($whiteBlackList = null, $isInArray = \false, $asOptionName = \false)
    {
        $clazzes = [\DevOwl\RealCookieBanner\settings\General::class, \DevOwl\RealCookieBanner\settings\Consent::class, \DevOwl\RealCookieBanner\settings\Multisite::class, \DevOwl\RealCookieBanner\settings\TCF::class, \DevOwl\RealCookieBanner\settings\CountryBypass::class];
        $options = [];
        foreach ($clazzes as $clazzName) {
            $clazz = new ReflectionClass($clazzName);
            $constants = $clazz->getConstants();
            foreach ($constants as $key => $value) {
                if (\substr($key, 0, \strlen(self::OPTION_PREFIX)) === self::OPTION_PREFIX && ($whiteBlackList === null ? \true : \in_array($value, $whiteBlackList, \true) === $isInArray) && !\in_array($value, self::EXCLUDE_OPTIONS_FROM_REVISION, \true)) {
                    if (!$asOptionName) {
                        $optionName = $value;
                        /**
                         * Get a given option value by option name. This can be e. g. useful for WPML
                         * so original post ID's gets transformed to the current active language post id.
                         *
                         * @hook RCB/Revision/Option/$optionName
                         * @param {mixed} $value
                         * @return {mixed}
                         */
                        $value = \apply_filters('RCB/Revision/Option/' . $optionName, \get_option($value));
                    }
                    $options[$key] = $value;
                }
            }
        }
        return $options;
    }
    /**
     * See filter RCB/Revision/Context.
     *
     * @param boolean $implicit If `true`, implicit context variables are parsed
     */
    public function getContextVariables($implicit = \false)
    {
        if ($implicit) {
            $cookieVersion = \DevOwl\RealCookieBanner\settings\Consent::getInstance()->getCookieVersion();
            $context = [];
            if ($cookieVersion > \DevOwl\RealCookieBanner\settings\Consent::COOKIE_VERSION_1) {
                $context['v'] = $cookieVersion;
            }
            // Add current blog ID to keep multisite intact (https://stackoverflow.com/q/4056306/5506547)
            $context['blog'] = \get_current_blog_id();
            // Include cookie domain and path in cookie name as `document.cookie` does not determine between pathes and this
            // leads to issues with WordPress installations in main folder, subfolders and subdomains concurrently.
            if ($cookieVersion > \DevOwl\RealCookieBanner\settings\Consent::COOKIE_VERSION_1) {
                $cookieDomainAndPathIdentifier = \untrailingslashit(Utils::getOriginalHomeUrl()) . \constant('COOKIEPATH');
                // Also make the fact if a cookie domain is a wildcard part of the hash. Why? Imagine, you configure
                // `.owlsrv.de`, then user gives consent, you change it to `owlsrv.de` -> the JavaScript can only
                // read the first one and the cookie banner can never be clicked away.
                if ($cookieVersion > \DevOwl\RealCookieBanner\settings\Consent::COOKIE_VERSION_2) {
                    $cookieDomain = \constant('COOKIE_DOMAIN');
                    $cookieDomainAndPathIdentifier .= ',' . \is_string($cookieDomain) && Utils::startsWith($cookieDomain, '.') ? 'wildcard' : 'no-wildcard';
                }
                $context['path'] = \substr(\md5($cookieDomainAndPathIdentifier), 0, 7);
            }
            /**
             * Get implicit context relevant options like blog id. Implicit context variables are not populated
             * to the context, nor to the revision. Use this only if you want to modify the cookie name!
             *
             * Warning: Cookie names cannot contain any of the following '=,; \t\r\n\013\014', so please make
             * sure such characters are not stored in your value (if so, they get replaced with underscore `_`).
             *
             * @hook RCB/Revision/Context/Implicit
             * @param {array} $context
             * @return {array}
             */
            return \apply_filters('RCB/Revision/Context/Implicit', $context);
        } else {
            /**
             * Get context relevant options like language code (WPML, PolyLang). If the language
             * changes, a new revision will be created or requested so they are completely independent.
             * They also get populated to the generated revision.
             *
             * Warning: Cookie names cannot contain any of the following '=,; \t\r\n\013\014', so please make
             * sure such characters are not stored in your value (if so, they get replaced with underscore `_`).
             *
             * @hook RCB/Revision/Context
             * @param {array} $context
             * @return {array}
             */
            return \apply_filters('RCB/Revision/Context', []);
        }
    }
    /**
     * Get context relevant options as string so they can be used as cookie name or option name.
     *
     * @param boolean $implicit If `true`, implicit context variables are parsed
     */
    public function getContextVariablesString($implicit = \false)
    {
        $value = \json_encode($this->getContextVariables($implicit));
        $value = \str_replace(['{', '"', '}', '[', ']'], '', $value);
        // Warning: Cookie names cannot contain any of the following '=,; \t\r\n\013\014'
        $value = \str_replace(['=', ',', ';'], '_', $value);
        return $value;
    }
    /**
     * See filter RCB/Revision/Context/Translate.
     *
     * @param string $context
     * @return string
     */
    public function translateContextVariablesString($context)
    {
        /**
         * Translate a context variable string to human readable form. E. g. replace `lang:de` with `Sprache: Deutsch`
         *
         * @hook RCB/Revision/Context/Translate
         * @param {string} $context
         * @return {string}
         */
        $translated = \apply_filters('RCB/Revision/Context/Translate', $context);
        if (empty($translated)) {
            $translated = \__('Without context', RCB_TD);
        }
        return $translated;
    }
    /**
     * Get the option for the current hash option name in `wp_options`.
     */
    public function getCurrentHashOptionName()
    {
        return self::OPTION_NAME_CURRENT_HASH_PREFIX . '-' . $this->getContextVariablesString();
    }
    /**
     * Get the revision(s) by hash(es).
     *
     * @param string|string[] $hash
     * @param boolean $independent
     * @param boolean $applyBackwardsCompatibility See method `applyBackwardsCompatibility`
     */
    public function getByHash($hash, $independent = \false, $applyBackwardsCompatibility = \false)
    {
        global $wpdb;
        $table_name = $this->getTableName($independent ? self::TABLE_NAME_INDEPENDENT : self::TABLE_NAME);
        if (\is_array($hash)) {
            // Read multiple
            $hashes = \array_map('sanitize_key', \array_unique($hash));
            $result = [];
            // phpcs:disable WordPress.DB.PreparedSQL
            $rows = $wpdb->get_results(\sprintf("SELECT `hash`, json_revision FROM {$table_name} WHERE `hash` IN ('%s')", \join("','", $hashes)), ARRAY_A);
            // phpcs:enable WordPress.DB.PreparedSQL
            // Zip to key value map
            foreach ($rows as $key => $value) {
                $decoded = \json_decode($value['json_revision'], ARRAY_A);
                $result[$value['hash']] = $applyBackwardsCompatibility ? $this->applyBackwardsCompatibility($decoded, $independent) : $decoded;
                unset($rows[$key]);
            }
            return $result;
        } else {
            // Read single
            // phpcs:disable WordPress.DB.PreparedSQL
            $row = $wpdb->get_var($wpdb->prepare("SELECT json_revision FROM {$table_name} WHERE `hash` = %s", $hash));
            // phpcs:enable WordPress.DB.PreparedSQL
            if ($row === null) {
                return null;
            }
            $decoded = \json_decode($row, ARRAY_A);
            return $applyBackwardsCompatibility ? $this->applyBackwardsCompatibility($decoded, $independent) : $decoded;
        }
    }
    /**
     * See filter `RCB/Revision/BackwardsCompatibility`.
     *
     * @param array $revision
     * @param boolean $independent
     */
    public function applyBackwardsCompatibility($revision, $independent = \false)
    {
        // Backwards-compatibility changes which we introduced directly in `create` or `createIndependent`
        if ($independent && !isset($revision['isPro'])) {
            $revision['isPro'] = \false;
            $revision['isLicensed'] = \true;
            $revision['isDevLicense'] = \false;
        }
        /**
         * Apply backwards compatible variables to an already saved revision. This can be useful e.g. new texts were added
         * to the revision which previously were read from `wp_localize_script`.
         *
         * Do this filter use with caution because it can be a legal risk!
         *
         * @hook RCB/Revision/BackwardsCompatibility
         * @param {array} $revision
         * @param {boolean} $independent
         * @returns {array}
         * @since 1.10
         * @ignore
         */
        return \apply_filters('RCB/Revision/BackwardsCompatibility', $revision, $independent);
    }
    /**
     * Update the MD5 hash of truncated JSON strings in the revision database tables.
     *
     * @see https://app.clickup.com/t/861n6fudh
     * @param string|false $installed
     */
    public function new_version_installation_after_3_9_5($installed)
    {
        global $wpdb;
        $table_name = $this->getTableName(self::TABLE_NAME);
        $table_name_independent = $this->getTableName(self::TABLE_NAME_INDEPENDENT);
        if (Core::versionCompareOlderThan($installed, '3.9.5', ['3.9.6', '3.10.0'])) {
            // phpcs:disable WordPress.DB
            $wpdb->query("UPDATE {$table_name} SET `hash` = MD5(json_revision)");
            $wpdb->query("UPDATE {$table_name_independent} SET `hash` = MD5(json_revision)");
            // phpcs:enable WordPress.DB
        }
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\settings\Revision() : self::$me;
    }
}
