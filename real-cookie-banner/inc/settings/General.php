<?php

namespace DevOwl\RealCookieBanner\settings;

use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\Iso3166OneAlpha2;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\settings\General as LiteGeneral;
use DevOwl\RealCookieBanner\overrides\interfce\settings\IOverrideGeneral;
use DevOwl\RealCookieBanner\Utils;
use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils as UtilsUtils;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * General settings.
 * @internal
 */
class General implements IOverrideGeneral
{
    use LiteGeneral;
    use UtilsProvider;
    const OPTION_GROUP = 'options';
    const SETTING_BANNER_ACTIVE = RCB_OPT_PREFIX . '-banner-active';
    const SETTING_BLOCKER_ACTIVE = RCB_OPT_PREFIX . '-blocker-active';
    const SETTING_OPERATOR_COUNTRY = RCB_OPT_PREFIX . '-operator-country';
    const SETTING_OPERATOR_CONTACT_ADDRESS = RCB_OPT_PREFIX . '-operator-contact-address';
    const SETTING_OPERATOR_CONTACT_PHONE = RCB_OPT_PREFIX . '-operator-contact-phone';
    const SETTING_OPERATOR_CONTACT_EMAIL = RCB_OPT_PREFIX . '-operator-contact-email';
    const SETTING_OPERATOR_CONTACT_FORM_ID = RCB_OPT_PREFIX . '-operator-contact-form-id';
    const SETTING_TERRITORIAL_LEGAL_BASIS = RCB_OPT_PREFIX . '-territorial-legal-basis';
    const SETTING_HIDE_PAGE_IDS = RCB_OPT_PREFIX . '-hide-page-ids';
    const SETTING_SET_COOKIES_VIA_MANAGER = RCB_OPT_PREFIX . '-set-cookies-via-manager';
    const DEFAULT_BANNER_ACTIVE = \false;
    const DEFAULT_BLOCKER_ACTIVE = \true;
    const DEFAULT_OPERATOR_CONTACT_ADDRESS = '';
    const DEFAULT_OPERATOR_CONTACT_PHONE = '';
    const DEFAULT_OPERATOR_CONTACT_EMAIL = '';
    const DEFAULT_OPERATOR_CONTACT_FORM_ID = 0;
    const DEFAULT_HIDE_PAGE_IDS = '';
    const DEFAULT_SET_COOKIES_VIA_MANAGER = 'none';
    const TERRITORIAL_LEGAL_BASIS_GDPR = 'gdpr-eprivacy';
    const TERRITORIAL_LEGAL_BASIS_DSG_SWITZERLAND = 'dsg-switzerland';
    const LEGAL_BASIS_ALLOWED = [self::TERRITORIAL_LEGAL_BASIS_GDPR, self::TERRITORIAL_LEGAL_BASIS_DSG_SWITZERLAND];
    /**
     * Singleton instance.
     *
     * @var General
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
        UtilsUtils::enableOptionAutoload(self::SETTING_BANNER_ACTIVE, self::DEFAULT_BANNER_ACTIVE, 'boolval');
        UtilsUtils::enableOptionAutoload(self::SETTING_BLOCKER_ACTIVE, self::DEFAULT_BLOCKER_ACTIVE, 'boolval');
        UtilsUtils::enableOptionAutoload(self::SETTING_OPERATOR_COUNTRY, $this->getDefaultOperatorCountry());
        UtilsUtils::enableOptionAutoload(self::SETTING_OPERATOR_CONTACT_ADDRESS, self::DEFAULT_OPERATOR_CONTACT_ADDRESS);
        UtilsUtils::enableOptionAutoload(self::SETTING_OPERATOR_CONTACT_PHONE, self::DEFAULT_OPERATOR_CONTACT_PHONE);
        UtilsUtils::enableOptionAutoload(self::SETTING_OPERATOR_CONTACT_EMAIL, $this->getDefaultOperatorContactEmail());
        UtilsUtils::enableOptionAutoload(self::SETTING_OPERATOR_CONTACT_FORM_ID, self::DEFAULT_OPERATOR_CONTACT_FORM_ID, 'intval');
        UtilsUtils::enableOptionAutoload(self::SETTING_TERRITORIAL_LEGAL_BASIS, \join(',', $this->getDefaultTerritorialLegalBasis()));
        $this->overrideEnableOptionsAutoload();
    }
    /**
     * Register settings.
     */
    public function register()
    {
        \register_setting(self::OPTION_GROUP, self::SETTING_BANNER_ACTIVE, ['type' => 'boolean', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_BLOCKER_ACTIVE, ['type' => 'boolean', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_OPERATOR_COUNTRY, ['type' => 'string', 'show_in_rest' => \true, 'show_in_rest' => ['schema' => ['type' => 'string', 'enum' => \array_merge(\array_keys(Iso3166OneAlpha2::getCodes()), [''])]]]);
        \register_setting(self::OPTION_GROUP, self::SETTING_OPERATOR_CONTACT_ADDRESS, ['type' => 'string', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_OPERATOR_CONTACT_PHONE, ['type' => 'string', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_OPERATOR_CONTACT_EMAIL, ['type' => 'string', 'show_in_rest' => \true]);
        \register_setting(self::OPTION_GROUP, self::SETTING_OPERATOR_CONTACT_FORM_ID, ['type' => 'number', 'show_in_rest' => \true]);
        // WP < 5.3 does not support array types yet, so we need to store serialized
        \register_setting(self::OPTION_GROUP, self::SETTING_TERRITORIAL_LEGAL_BASIS, ['type' => 'string', 'show_in_rest' => \true]);
        $this->overrideRegister();
    }
    /**
     * Localize data about the website operator for the frontend.
     */
    public function localizeWebsiteOperator()
    {
        $address = $this->getOperatorContactAddress();
        $contactFormId = Core::getInstance()->getCompLanguage()->getCurrentPostId(\get_option(self::SETTING_OPERATOR_CONTACT_FORM_ID, 0), 'page');
        $contactFormUrl = Utils::getPermalink($contactFormId);
        return ['address' => empty($address) ? \html_entity_decode(\get_bloginfo('name')) : $address, 'country' => $this->getOperatorCountry(), 'contactEmail' => $this->getOperatorContactEmail(), 'contactPhone' => $this->getOperatorContactPhone(), 'contactFormUrl' => $contactFormUrl];
    }
    /**
     * Is the banner active?
     *
     * @return boolean
     */
    public function isBannerActive()
    {
        return \get_option(self::SETTING_BANNER_ACTIVE);
    }
    /**
     * Is the content blocker active?
     *
     * @return boolean
     */
    public function isBlockerActive()
    {
        return \get_option(self::SETTING_BLOCKER_ACTIVE);
    }
    /**
     * Get configured legal basis.
     *
     * @return string[]
     */
    public function getTerritorialLegalBasis()
    {
        $option = \explode(',', \get_option(self::SETTING_TERRITORIAL_LEGAL_BASIS, ''));
        $option = \array_intersect($option, self::LEGAL_BASIS_ALLOWED);
        $option = \array_values($option);
        return \count($option) > 0 ? $option : [self::TERRITORIAL_LEGAL_BASIS_GDPR];
    }
    /**
     * Get configured operator country.
     *
     * @return string
     */
    public function getOperatorCountry()
    {
        return \get_option(self::SETTING_OPERATOR_COUNTRY, '');
    }
    /**
     * Get configured operator contact address.
     */
    public function getOperatorContactAddress()
    {
        return \get_option(self::SETTING_OPERATOR_CONTACT_ADDRESS, self::DEFAULT_OPERATOR_CONTACT_ADDRESS);
    }
    /**
     * Get configured operator contact phone.
     */
    public function getOperatorContactPhone()
    {
        return \get_option(self::SETTING_OPERATOR_CONTACT_PHONE, self::DEFAULT_OPERATOR_CONTACT_PHONE);
    }
    /**
     * Get configured operator contact email.
     */
    public function getOperatorContactEmail()
    {
        return \get_option(self::SETTING_OPERATOR_CONTACT_EMAIL, self::DEFAULT_OPERATOR_CONTACT_EMAIL);
    }
    /**
     * Get the operator contact form page URL.
     *
     * @param mixed $default
     * @return string
     */
    public function getOperatorContactFormUrl($default = \false)
    {
        $compLanguage = Core::getInstance()->getCompLanguage();
        $id = \get_option(self::SETTING_OPERATOR_CONTACT_FORM_ID);
        if ($id > 0) {
            $id = $compLanguage->getCurrentPostId($id, 'page');
            $permalink = Utils::getPermalink($id);
            if ($permalink !== \false) {
                return $permalink;
            }
        }
        return $default;
    }
    /**
     * Get default privacy policy post ID.
     */
    public function getDefaultPrivacyPolicy()
    {
        $privacyPolicy = \intval(\get_option('wp_page_for_privacy_policy', 0));
        return \in_array(\get_post_status($privacyPolicy), ['draft', 'publish'], \true) ? $privacyPolicy : 0;
    }
    /**
     * Get default operator contact email.
     */
    public function getDefaultOperatorContactEmail()
    {
        return \get_bloginfo('admin_email');
    }
    /**
     * Get default operator country. We try to calculate the country from the blog language.
     */
    public function getDefaultOperatorCountry()
    {
        $locale = \strtoupper(\get_locale());
        $potentialLocales = \array_reverse(\explode('_', $locale));
        $isoCodes = \array_keys(Iso3166OneAlpha2::getCodes());
        foreach ($potentialLocales as $pl) {
            if (\in_array($pl, $isoCodes, \true)) {
                return $pl;
            }
        }
        return '';
    }
    /**
     * Get default territorial legal basis.
     */
    public function getDefaultTerritorialLegalBasis()
    {
        $country = $this->getDefaultOperatorCountry();
        $legalBasis = [self::TERRITORIAL_LEGAL_BASIS_GDPR];
        switch ($country) {
            case 'CH':
                $legalBasis[] = self::TERRITORIAL_LEGAL_BASIS_DSG_SWITZERLAND;
                break;
            default:
                break;
        }
        return $legalBasis;
    }
    /**
     * When a page gets deleted, check if the value is our configured contact form page and reset the value accordingly.
     *
     * @param number $postId
     */
    public function delete_post($postId)
    {
        $contactFormId = \get_option(self::SETTING_OPERATOR_CONTACT_FORM_ID);
        if ($postId === $contactFormId) {
            \update_option(self::SETTING_OPERATOR_CONTACT_FORM_ID, self::DEFAULT_OPERATOR_CONTACT_FORM_ID);
        }
    }
    /**
     * Set the TCF publisher country as operator country when given from older installations.
     *
     * And, calculate the `isProviderCurrentWebsite` for all services.
     *
     * @see https://app.clickup.com/t/863h7nj72
     * @param string|false $installed
     */
    public function new_version_installation_after_3_11_5($installed)
    {
        global $wpdb;
        if (Core::versionCompareOlderThan($installed, '3.11.5', ['3.12.0', '3.11.6'])) {
            $deleteCountryForExistingUsers = \true;
            if ($this->isPro()) {
                $tcfPublisherCc = \get_option(\DevOwl\RealCookieBanner\settings\TCF::SETTING_TCF_PUBLISHER_CC);
                if (!empty($tcfPublisherCc)) {
                    // We need to call this after `enableOptionAutoload`
                    \add_action('init', function () use($tcfPublisherCc) {
                        \update_option(self::SETTING_OPERATOR_COUNTRY, $tcfPublisherCc);
                    }, 11);
                    \delete_option(\DevOwl\RealCookieBanner\settings\TCF::SETTING_TCF_PUBLISHER_CC);
                    $deleteCountryForExistingUsers = \false;
                }
            }
            if ($deleteCountryForExistingUsers) {
                // We need to call this after `enableOptionAutoload`
                \add_action('init', function () {
                    \update_option(self::SETTING_OPERATOR_COUNTRY, '');
                }, 11);
            }
            // Get posts which hold post meta which needs to be renamed so we can clear the post cache for them
            $affectedPostIds = $wpdb->get_col($wpdb->prepare("SELECT DISTINCT(p.ID)\n                    FROM {$wpdb->posts} p\n                    LEFT JOIN {$wpdb->postmeta} pm ON p.ID = pm.post_id AND pm.meta_key = 'isProviderCurrentWebsite'\n                    WHERE p.post_type = %s AND pm.meta_value IS NULL", \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME));
            if (\count($affectedPostIds) > 0) {
                // Insert the metadata directly through a plain SQL query so hooks like `update_post_meta` are not called
                // This avoids issues with WPML or PolyLang and their syncing process
                $wpdb->query($wpdb->prepare(
                    "INSERT INTO {$wpdb->postmeta} (post_id, meta_key, meta_value) SELECT p.ID, 'isProviderCurrentWebsite',\n                            CASE\n                                WHEN pmPrivacy.meta_value LIKE %s THEN '1'\n                                WHEN pmLegal.meta_value LIKE %s THEN '1'\n                                WHEN pmProvider.meta_value LIKE %s THEN '1'\n                                WHEN pmProvider.meta_value LIKE %s THEN '1'\n                                ELSE ''\n                            END AS isProviderCurrentWebsite\n                        FROM {$wpdb->posts} p\n                        LEFT JOIN {$wpdb->postmeta} pmProvider\n                            ON p.ID = pmProvider.post_id AND pmProvider.meta_key = 'provider'\n                        LEFT JOIN {$wpdb->postmeta} pmPrivacy\n                            ON p.ID = pmPrivacy.post_id AND pmPrivacy.meta_key = 'providerPrivacyPolicyUrl'\n                        LEFT JOIN {$wpdb->postmeta} pmLegal\n                            ON p.ID = pmLegal.post_id AND pmLegal.meta_key = 'providerLegalNoticeUrl'\n                        WHERE p.post_type = %s\n                        AND NOT EXISTS (\n                            SELECT 1 FROM {$wpdb->postmeta} pm\n                            WHERE pm.post_id = p.ID\n                            AND pm.meta_key = 'isProviderCurrentWebsite'\n                        )",
                    '%' . Utils::host(Utils::HOST_TYPE_MAIN) . '%',
                    '%' . Utils::host(Utils::HOST_TYPE_MAIN) . '%',
                    \get_bloginfo('name'),
                    // needed for backwards-compatibility due to a bug in older Real Cookie Banner versions
                    \html_entity_decode(\get_bloginfo('name')),
                    \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME
                ));
                foreach ($affectedPostIds as $affectedPostId) {
                    \clean_post_cache(\intval($affectedPostId));
                }
            }
        }
    }
    /**
     * Get singleton instance.
     *
     * @return General
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\settings\General() : self::$me;
    }
}
