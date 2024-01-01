<?php

namespace DevOwl\RealCookieBanner\view;

use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\Iso3166OneAlpha2;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\settings\TcfVendorConfiguration;
use DevOwl\RealCookieBanner\settings\Blocker;
use DevOwl\RealCookieBanner\settings\Consent;
use DevOwl\RealCookieBanner\settings\Cookie;
use DevOwl\RealCookieBanner\settings\CookieGroup;
use DevOwl\RealCookieBanner\settings\TCF;
use DevOwl\RealCookieBanner\templates\StorageHelper;
use DevOwl\RealCookieBanner\templates\TemplateConsumers;
use DevOwl\RealCookieBanner\Utils;
use DevOwl\RealCookieBanner\view\checklist\Scanner;
use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\KeyValueMapOption;
use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils as UtilsUtils;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Notices management.
 * @internal
 */
class Notices
{
    use UtilsProvider;
    const OPTION_NAME = RCB_OPT_PREFIX . '-notice-states';
    const NOTICE_SCANNER_RERUN_AFTER_PLUGIN_TOGGLE = 'scanner-rerun-after-plugin-toggle';
    const NOTICE_GET_PRO_MAIN_BUTTON = 'get-pro-main-button';
    const NOTICE_GET_PRO_MAIN_BUTTON_NEXT = 60 * 60 * 24 * 30;
    // 30 days
    const NOTICE_REVISON_REQUEST_NEW_CONSENT_PREFIX = 'revision-request-new-consent-';
    const NOTICE_SERVICE_DATA_PROCESSING_IN_UNSAFE_COUNTRIES = 'service-data-processing-in-unsafe-countries';
    const NOTICE_USING_TEMPLATES_WHICH_GOT_DELETED = 'using-templates-which-got-deleted';
    const NOTICE_TCF_TOO_MUCH_VENDORS = 'tcf-too-much-vendors';
    const NOTICE_SERVICES_WITH_EMPTY_PRIVACY_POLICY = 'services-with-empty-privacy-policy';
    const NOTICE_SERVICES_WITH_UPDATED_TEMPLATES = 'services-with-updated-templates';
    const TCF_TOO_MUCH_VENDORS = 30;
    const CHECKLIST_PREFIX = 'checklist-';
    const MODAL_HINT_PREFIX = 'modal-hint-';
    const SCANNER_IGNORE_ADMIN_BAR_PREFIX = 'scanner-ignore-admin-bar-';
    const DISMISS_SERVICES_WITH_UPDATED_TEMPLATES_NOTICE_QUERY_ARG = 'rcb-dismiss-upgrade-notice';
    private $states;
    /**
     * C'tor.
     *
     * @param Core $core
     */
    public function __construct($core)
    {
        $this->states = new KeyValueMapOption(self::OPTION_NAME, $core);
        $this->createStates();
    }
    /**
     * Create the notice states key-value option with migrations from older Real Cookie Banner versions.
     */
    protected function createStates()
    {
        $this->states->registerModifier(function ($key, $value) {
            return $key === self::NOTICE_GET_PRO_MAIN_BUTTON && $value === \true ? \time() + self::NOTICE_GET_PRO_MAIN_BUTTON_NEXT : $value;
        })->registerMigrationForKey(self::NOTICE_SCANNER_RERUN_AFTER_PLUGIN_TOGGLE, function () {
            $optionName = RCB_OPT_PREFIX . '-any-plugin-toggle-state';
            $result = \boolval(\get_option($optionName));
            \delete_option($optionName);
            return $result;
        })->registerMigrationForKey(self::NOTICE_GET_PRO_MAIN_BUTTON, function () {
            $optionName = RCB_OPT_PREFIX . '-config-next-pro-notice';
            $result = \get_option($optionName, \false);
            if ($result !== \false) {
                $result = \intval($result);
            }
            \delete_option($optionName);
            return $result;
        })->registerMigration(function ($result) {
            global $wpdb;
            $table_name = $wpdb->options;
            // phpcs:disable WordPress.DB.PreparedSQL
            $checklistItems = $wpdb->get_col($wpdb->prepare("SELECT option_name FROM {$table_name} WHERE option_value = '1' AND option_name LIKE %s", RCB_OPT_PREFIX . '-checklist-%'));
            // phpcs:enable WordPress.DB.PreparedSQL
            foreach ($checklistItems as $checklistItem) {
                $name = \substr($checklistItem, \strlen(RCB_OPT_PREFIX . '-checklist-'));
                $result[self::CHECKLIST_PREFIX . $name] = \true;
            }
            // phpcs:disable WordPress.DB.PreparedSQL
            $checklistItems = $wpdb->query($wpdb->prepare("DELETE FROM {$table_name} WHERE option_name LIKE %s OR option_name LIKE %s", RCB_OPT_PREFIX . '-checklist-%', RCB_OPT_PREFIX . '-revision-dismissed-hash-%'));
            // phpcs:enable WordPress.DB.PreparedSQL
            return $result;
        })->registerMigration(function ($result) {
            $optionName = RCB_OPT_PREFIX . '-modal-hints';
            $modalHints = \json_decode(\get_option($optionName, '[]'), ARRAY_A);
            foreach ($modalHints as $modalHint) {
                $result[self::MODAL_HINT_PREFIX . $modalHint] = \true;
            }
            \delete_option($optionName);
            return $result;
        })->registerMigration(function ($result) {
            $optionName = RCB_OPT_PREFIX . '-scanner-notice-dismissed';
            $scannerIgnoreAdminBar = \get_option($optionName, []);
            foreach ($scannerIgnoreAdminBar as $service) {
                $result[self::SCANNER_IGNORE_ADMIN_BAR_PREFIX . $service] = \true;
            }
            \delete_option($optionName);
            return $result;
        })->registerRestForKey(Core::MANAGE_MIN_CAPABILITY, \sprintf('/%s[a-z_-]+/', self::MODAL_HINT_PREFIX), ['type' => 'boolean'])->registerRestForKey(Core::MANAGE_MIN_CAPABILITY, self::NOTICE_SCANNER_RERUN_AFTER_PLUGIN_TOGGLE, ['type' => 'boolean'])->registerRestForKey(Core::MANAGE_MIN_CAPABILITY, self::NOTICE_TCF_TOO_MUCH_VENDORS, ['type' => 'boolean'])->registerRestForKey(Core::MANAGE_MIN_CAPABILITY, self::NOTICE_GET_PRO_MAIN_BUTTON, ['type' => 'boolean'])->registerRestForKey(Core::MANAGE_MIN_CAPABILITY, self::NOTICE_SERVICE_DATA_PROCESSING_IN_UNSAFE_COUNTRIES, ['type' => 'boolean'])->registerRestForKey(Core::MANAGE_MIN_CAPABILITY, self::NOTICE_USING_TEMPLATES_WHICH_GOT_DELETED, ['type' => 'boolean']);
    }
    /**
     * When a plugin got toggled show scanner notice.
     *
     * @param string $plugin Plugin slug
     * @param bool $network_wide Is it activated network wide
     */
    public function anyPluginToggledState($plugin, $network_wide)
    {
        $isScannerChecked = \DevOwl\RealCookieBanner\view\Checklist::getInstance()->isChecked(Scanner::IDENTIFIER);
        if (!Utils::startsWith($plugin, RCB_SLUG) && $isScannerChecked) {
            if ($network_wide) {
                $network_blogs = \get_sites(['number' => 0, 'fields' => 'ids']);
                foreach ($network_blogs as $blog) {
                    $blogId = \intval($blog);
                    \switch_to_blog($blogId);
                    $this->getStates()->set(self::NOTICE_SCANNER_RERUN_AFTER_PLUGIN_TOGGLE, \true);
                    \restore_current_blog();
                }
            } else {
                $this->getStates()->set(self::NOTICE_SCANNER_RERUN_AFTER_PLUGIN_TOGGLE, \true);
            }
        }
    }
    /**
     * When a service / TCF vendor got updated check if the service is now processing data in unsafe countries.
     *
     * @param null|boolean $check
     * @param int $object_id
     * @param string $meta_key
     * @param mixed $meta_value
     */
    public function update_post_meta_data_processing_in_unsafe_countries($check, $object_id, $meta_key, $meta_value)
    {
        $postType = \get_post_type($object_id);
        if (\in_array($meta_key, [Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES, Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES_SPECIAL_TREATMENTS], \true) && ($postType === Cookie::CPT_NAME || $this->isPro() && $postType === TcfVendorConfiguration::CPT_NAME)) {
            $prev_value = \get_post_meta($object_id, Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES, \true);
            if (empty($prev_value)) {
                return $check;
            }
            // Reset the notice at the end of the request, as we need to get special treatments meta, too
            \add_action('shutdown', function () use($meta_value, $prev_value, $object_id) {
                $currentCountries = UtilsUtils::isJson($meta_value, []);
                $oldCountries = UtilsUtils::isJson($prev_value, []);
                $specialTreatments = UtilsUtils::isJson(\get_post_meta($object_id, Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES_SPECIAL_TREATMENTS, \true));
                $addedCountries = \array_values(\array_diff($currentCountries, $oldCountries));
                $addedUnsafeCountries = $this->calculateUnsafeCountries($addedCountries, $specialTreatments === \false ? [] : $specialTreatments);
                if (\count($addedUnsafeCountries) > 0) {
                    $this->getStates()->set(self::NOTICE_SERVICE_DATA_PROCESSING_IN_UNSAFE_COUNTRIES, \true);
                }
            });
        }
        return $check;
    }
    /**
     * When a service / TCF vendor got created check if the services does processing data in unsafe countries.
     *
     * @param int $meta_id
     * @param int $object_id
     * @param string $meta_key
     * @param mixed $meta_value
     */
    public function added_post_meta_data_processing_in_unsafe_countries($meta_id, $object_id, $meta_key, $meta_value)
    {
        $postType = \get_post_type($object_id);
        if (\in_array($meta_key, [Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES, Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES_SPECIAL_TREATMENTS], \true) && ($postType === Cookie::CPT_NAME || $this->isPro() && $postType === TcfVendorConfiguration::CPT_NAME)) {
            // Reset the notice at the end of the request, as we need to get special treatments meta, too
            \add_action('shutdown', function () use($meta_value, $object_id) {
                $currentCountries = UtilsUtils::isJson($meta_value, []);
                $specialTreatments = UtilsUtils::isJson(\get_post_meta($object_id, Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES_SPECIAL_TREATMENTS, \true));
                $unsafeCountries = $this->calculateUnsafeCountries($currentCountries, $specialTreatments === \false ? [] : $specialTreatments);
                if (\count($unsafeCountries)) {
                    $this->getStates()->set(self::NOTICE_SERVICE_DATA_PROCESSING_IN_UNSAFE_COUNTRIES, \true);
                }
            });
        }
    }
    /**
     * Calculate unsafe countries from a given array of countries.
     *
     * See also `frontend-packages/react-cookie-banner/src/components/common/groups/cookiePropertyList.tsx` method
     * `calculateUnsafeCountries` method.
     *
     * @param string[] $countries
     * @param string[] $specialTreatments See `api-packages/api-real-cookie-banner/src/entity/template/service/service.ts` the enum `EServiceTemplateDataProcessingInCountriesSpecialTreatment`
     * @return string[]
     */
    protected function calculateUnsafeCountries($countries, $specialTreatments = [])
    {
        if (\in_array('standard-contractual-clauses', $specialTreatments, \true)) {
            return [];
        }
        $safeCountries = [];
        foreach (Consent::PREDEFINED_DATA_PROCESSING_IN_SAFE_COUNTRIES_LISTS as $listCountries) {
            $safeCountries = \array_merge($safeCountries, $listCountries);
        }
        $unsafeCountries = [];
        // Check if one service country is not safe
        foreach ($countries as $country) {
            if (!\in_array($country, $safeCountries, \true) || $country === 'US' && !\in_array('provider-is-self-certified-trans-atlantic-data-privacy-framework', $specialTreatments, \true)) {
                $unsafeCountries[] = $country;
            }
        }
        return $unsafeCountries;
    }
    /**
     * Show a notice of services and content blockers with a template update.
     */
    public function admin_notice_services_with_updated_templates()
    {
        $needsUpdate = $this->servicesWithUpdatedTemplates();
        if (isset($_GET[self::DISMISS_SERVICES_WITH_UPDATED_TEMPLATES_NOTICE_QUERY_ARG])) {
            foreach ($needsUpdate as $update) {
                \update_post_meta($update->post_id, Blocker::META_NAME_PRESET_VERSION, $update->should);
            }
            $this->getStates()->set(self::NOTICE_SERVICES_WITH_UPDATED_TEMPLATES, []);
            return;
        }
        if (\current_user_can(Core::MANAGE_MIN_CAPABILITY) && \count($needsUpdate) > 0 && !Core::getInstance()->getConfigPage()->isVisible()) {
            echo \sprintf('<div class="notice notice-warning">%s</div>', $this->servicesWithUpdatedTemplatesHtml($needsUpdate));
        }
    }
    /**
     * Get the notice HTML of services and content blockers with a template update.
     *
     * @param array $needsUpdate
     * @param string $context Can be `notice` or `tile-migration`
     */
    public function servicesWithUpdatedTemplatesHtml($needsUpdate, $context = 'notice')
    {
        $configPage = Core::getInstance()->getConfigPage();
        $output = $context === 'notice' ? '<p>' . \__('Changes have been made to the templates you use in Real Cookie Banner. You should review the proposed changes and adjust your services if necessary to be able to remain legally compliant. The following services are affected:', RCB_TD) . '</p><ul>' : '<ul>';
        foreach ($needsUpdate as $update) {
            $configPageUrl = $configPage->getUrl();
            switch ($update->post_type) {
                case Blocker::CPT_NAME:
                    $typeLabel = \__('Content Blocker', RCB_TD);
                    $editLink = $configPageUrl . '#/blocker/edit/' . $update->post_id;
                    break;
                case Cookie::CPT_NAME:
                    $groupIds = \wp_get_post_terms($update->post_id, CookieGroup::TAXONOMY_NAME, ['fields' => 'ids']);
                    $typeLabel = \__('Service (Cookie)', RCB_TD);
                    $editLink = $configPageUrl . '#/cookies/' . $groupIds[0] . '/edit/' . $update->post_id;
                    break;
                default:
                    break;
            }
            $output .= \sprintf('<li><strong>%s</strong> (%s) - <a href="%s">%s</a></li>', \esc_html($update->post_title), $typeLabel, $editLink, \__('Review changes', RCB_TD));
        }
        $dismissLink = \add_query_arg(self::DISMISS_SERVICES_WITH_UPDATED_TEMPLATES_NOTICE_QUERY_ARG, '1');
        $output .= $context === 'notice' ? '</ul><p><a href="' . \esc_url($dismissLink) . '">' . \__('Dismiss this notice', RCB_TD) . '</a></p>' : '</ul>';
        return $output;
    }
    /**
     * Read all services and content blockers which have an updated template version.
     *
     * @return array
     */
    public function servicesWithUpdatedTemplates()
    {
        global $wpdb;
        $noticeState = $this->getStates()->get(self::NOTICE_SERVICES_WITH_UPDATED_TEMPLATES, null);
        if (\is_array($noticeState)) {
            return $noticeState;
        }
        $table_name = $this->getTableName(StorageHelper::TABLE_NAME);
        // Probably refresh template cache
        $serviceConsumer = TemplateConsumers::getCurrentServiceConsumer();
        if ($serviceConsumer->getStorage()->shouldInvalidate()) {
            $serviceConsumer->retrieve();
        }
        $needsUpdate = $wpdb->get_results(
            // phpcs:disable WordPress.DB.PreparedSQL
            $wpdb->prepare("SELECT\n                    pm.meta_id AS post_version_meta_id,\n                    pm.post_id,\n                    pm.meta_value AS post_template_version,\n                    prid.meta_value AS post_template_identifier,\n                    p.post_title, p.post_type,\n                    templates.version as should\n                FROM {$wpdb->postmeta} pm\n                INNER JOIN {$wpdb->postmeta} prid\n                    ON prid.post_id = pm.post_id\n                INNER JOIN {$wpdb->posts} p\n                    ON p.ID = pm.post_id\n                INNER JOIN {$table_name} templates\n                    ON BINARY templates.identifier = BINARY prid.meta_value\n                    AND templates.context = %s\n                    AND templates.is_outdated = 0\n                    AND templates.type = (\n                        CASE\n                            WHEN p.post_type = %s THEN %s\n                            ELSE %s\n                        END\n                    )\n                WHERE pm.meta_key = %s\n                    AND pm.meta_value > 0\n                    AND prid.meta_key = %s\n                    AND p.post_type IN (%s, %s)\n                    AND templates.version <> pm.meta_value", TemplateConsumers::getContext(), Cookie::CPT_NAME, StorageHelper::TYPE_SERVICE, StorageHelper::TYPE_BLOCKER, Blocker::META_NAME_PRESET_VERSION, Blocker::META_NAME_PRESET_ID, Blocker::CPT_NAME, Cookie::CPT_NAME)
        );
        // Remove rows of languages other than current and cast to correct types
        foreach ($needsUpdate as $key => &$row) {
            $row->post_version_meta_id = \intval($row->post_version_meta_id);
            $row->post_id = \intval($row->post_id);
            $row->post_template_version = \intval($row->post_template_version);
            $row->should = \intval($row->should);
            if (\intval(Core::getInstance()->getCompLanguage()->getCurrentPostId($row->post_id, $row->post_type)) !== \intval($row->post_id)) {
                unset($needsUpdate[$key]);
            }
        }
        $result = \array_values($needsUpdate);
        $this->getStates()->set(self::NOTICE_SERVICES_WITH_UPDATED_TEMPLATES, $result);
        return $result;
    }
    /**
     * Create an admin notice for services without privacy policy set.
     */
    public function admin_notices_services_with_empty_privacy_policy()
    {
        if (Core::getInstance()->getConfigPage()->isVisible()) {
            return;
        }
        $html = $this->serviceWithEmptyPrivacyPolicyNoticeHtml();
        if (\is_string($html)) {
            echo \sprintf('<div class="notice notice-warning">%s</div>', $html);
        }
    }
    /**
     * Create an admin notice for services without privacy policy set and return the HTML.
     */
    public function serviceWithEmptyPrivacyPolicyNoticeHtml()
    {
        global $typenow;
        $url = Core::getInstance()->getConfigPage()->getUrl();
        $noticeState = $this->getStates()->get(self::NOTICE_SERVICES_WITH_EMPTY_PRIVACY_POLICY, null);
        if (!\is_array($noticeState)) {
            // Divi & Elementor Pro overrides the meta query in a wrong way, but instead of contacting them (slow response)
            // we just reset the post type which gets read by their filters. Learn more about it here: https://app.clickup.com/t/2jzg30c
            $oldTypeNow = $typenow;
            $oldWpQueryVarTypeNow = \get_query_var('post_type');
            $typenow = Cookie::CPT_NAME;
            \set_query_var('post_type', Cookie::CPT_NAME);
            $servicesWithoutPrivacyPolicy = \get_posts(Core::getInstance()->queryArguments(['post_type' => Cookie::CPT_NAME, 'fields' => 'ids', 'numberposts' => -1, 'nopaging' => \true, 'meta_query' => ['relation' => 'OR', ['key' => Cookie::META_NAME_PROVIDER_PRIVACY_POLICY_URL, 'value' => '', 'compare' => '='], ['key' => Cookie::META_NAME_PROVIDER_PRIVACY_POLICY_URL, 'value' => '', 'compare' => 'NOT EXISTS']], 'post_status' => ['publish', 'private', 'draft']], 'ConfigPage::admin_notices_services_with_empty_privacy_policy'));
            $typenow = $oldTypeNow;
            \set_query_var('post_type', $oldWpQueryVarTypeNow);
            if (\count($servicesWithoutPrivacyPolicy) === 0) {
                return;
            }
            $noticeState = [];
            foreach ($servicesWithoutPrivacyPolicy as $serviceId) {
                $service = \get_post($serviceId);
                $cookieGroup = \get_the_terms($service, CookieGroup::TAXONOMY_NAME)[0] ?? null;
                $isProviderCurrentWebsite = \get_post_meta($serviceId, Cookie::META_NAME_IS_PROVIDER_CURRENT_WEBSITE, \true);
                if ($cookieGroup === null || $service === null || $isProviderCurrentWebsite) {
                    continue;
                }
                $noticeState[] = ['id' => $serviceId, 'groupId' => $cookieGroup->term_id, 'title' => $service->post_title];
            }
            $this->getStates()->set(self::NOTICE_SERVICES_WITH_EMPTY_PRIVACY_POLICY, $noticeState);
        }
        if (\count($noticeState) > 0) {
            return \sprintf('<p>%s</p><ul>%s</ul>', \__('There are no privacy policies with further information linked for the following services in your cookie banner. We now consider these to be mandatory in order to comply with the information obligations under the GDPR. Please provide a privacy policy for each service!', RCB_TD), \join('', \array_map(function ($row) use($url) {
                return \sprintf('<li data-id="%d">%s &bull; <a href="%s">%s</a></li>', $row['id'], $row['title'], \esc_attr($url . '#/cookies/' . $row['groupId'] . '/edit/' . $row['id']), \__('Set privacy policy URL', RCB_TD));
            }, $noticeState)));
        }
        return null;
    }
    /**
     * Checks if the notice about services which are processing data in unsafe countries should be shown,
     * and returns the titles of the services which process data in unsafe countries
     */
    public function servicesDataProcessingInUnsafeCountriesNoticeHtml()
    {
        $noticeState = $this->getStates()->get(self::NOTICE_SERVICE_DATA_PROCESSING_IN_UNSAFE_COUNTRIES, null);
        // Should it be recalculated by metadata change or should it be initially checked?
        if (($noticeState === \true || $noticeState === null) && !Consent::getInstance()->isDataProcessingInUnsafeCountries()) {
            $safeCountries = [];
            foreach (Consent::PREDEFINED_DATA_PROCESSING_IN_SAFE_COUNTRIES_LISTS as $listCountries) {
                $safeCountries = \array_merge($safeCountries, $listCountries);
            }
            $servicesHtml = [];
            $iso3166OneAlpha2 = Iso3166OneAlpha2::getSortedCodes();
            $candidates = [];
            foreach (CookieGroup::getInstance()->getOrdered() as $group) {
                foreach (Cookie::getInstance()->getOrdered($group->term_id) as $cookie) {
                    $candidates[] = ['dataProcessingInCountries' => $cookie->metas[Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES], 'dataProcessingInCountriesSpecialTreatments' => $cookie->metas[Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES_SPECIAL_TREATMENTS], 'name' => $cookie->post_title];
                }
            }
            // List also TCF vendors
            if (TCF::getInstance()->isActive()) {
                $tcfQuery = Core::getInstance()->getTcfVendorListNormalizer()->getQuery();
                $vendorIds = [];
                foreach (TcfVendorConfiguration::getInstance()->getOrdered() as $vendor) {
                    $vendorId = $vendor->metas[TcfVendorConfiguration::META_NAME_VENDOR_ID];
                    $candidates[] = ['dataProcessingInCountries' => $vendor->metas[TcfVendorConfiguration::META_NAME_DATA_PROCESSING_IN_COUNTRIES], 'dataProcessingInCountriesSpecialTreatments' => $vendor->metas[TcfVendorConfiguration::META_NAME_DATA_PROCESSING_IN_COUNTRIES_SPECIAL_TREATMENTS], 'name' => $vendorId, 'tcf' => \true];
                    $vendorIds[] = $vendorId;
                }
                // Read TCF vendor names
                if (\count($vendorIds) > 0) {
                    $vendors = $tcfQuery->vendors(['in' => $vendorIds])['vendors'];
                    foreach ($candidates as $key => $candidate) {
                        if (isset($candidate['tcf'])) {
                            $candidates[$key]['name'] = $vendors[$candidate['name']]['name'];
                        }
                    }
                }
            }
            foreach ($candidates as $candidate) {
                $unsafeCountries = $this->calculateUnsafeCountries($candidate['dataProcessingInCountries'], $candidate['dataProcessingInCountriesSpecialTreatments']);
                if (\count($unsafeCountries) > 0) {
                    $servicesHtml[] = \sprintf(
                        // translators:s
                        \__('<strong>%1$s</strong> is processing data to %2$s', RCB_TD),
                        \esc_html($candidate['name']),
                        \join(', ', \array_map(function ($country) use($iso3166OneAlpha2) {
                            return $iso3166OneAlpha2[$country] ?? $country;
                        }, $unsafeCountries))
                    );
                }
            }
            if (\count($servicesHtml) > 0) {
                return \sprintf('<p>%s</p><ul><li>%s</li></ul>', \__('Some services carries out data processing in insecure third countries as defined by data protection regulations. You should obtain specific consent for this or only use services with data processing in secure countries as defined by the European Commission.', RCB_TD), \join('</li><li>', $servicesHtml));
            }
        }
        return null;
    }
    /**
     * Checks if the notice about service and blocker templates which got deleted should be shown,
     * and returns the titles of the services with some special instructions.
     */
    public function admin_notice_service_using_template_which_got_deleted()
    {
        $state = $this->getStates()->get(self::NOTICE_USING_TEMPLATES_WHICH_GOT_DELETED, \true);
        if ($state) {
            $posts = \get_posts(Core::getInstance()->queryArguments(['post_type' => [Cookie::CPT_NAME, Blocker::CPT_NAME], 'fields' => 'ids', 'numberposts' => -1, 'nopaging' => \true, 'meta_query' => [['key' => Blocker::META_NAME_PRESET_ID, 'compare' => 'IN', 'value' => ['google-adsense']]], 'post_status' => ['publish', 'private', 'draft']], 'admin_notice_service_using_template_which_got_deleted'));
            if (\count($posts) > 0) {
                echo \sprintf('<div class="notice notice-warning" style="position:relative"><p>%s</p><p>%s</p><p><a target="_blank" href="%s">%s</a></p>%s</div>', \__('<strong>[ACTION REQUIRED]</strong> As of January 16, 2024, Google AdSense will only display advertising on your website if you obtain consent in accordance with the TCF standard. You must act now to continue earning advertising revenue!', RCB_TD), \__('You are currently obtaining non-standard compliant consent for Google Adsense via Real Cookie Banner. Please delete the Google AdSense service and Google AdSense content blocker in the Real Cookie Banner settings and then configure the TCF integration.', RCB_TD), \__('https://devowl.io/knowledge-base/google-adsense-tcf-consent-wordpress/', RCB_TD), \__('Read instructions for Google AdSense configuration with TCF consents', RCB_TD), \sprintf('<button type="button" class="notice-dismiss" onClick="%s"></button>', \esc_js($this->getStates()->noticeDismissOnClickHandler(self::NOTICE_USING_TEMPLATES_WHICH_GOT_DELETED, 'false'))));
            } else {
                $this->getStates()->set(self::NOTICE_USING_TEMPLATES_WHICH_GOT_DELETED, \false);
            }
        }
        return null;
    }
    /**
     * Check if the Pro notice should be shown in config page. See `proHeadlineButton.tsx`.
     */
    public function isConfigProNoticeVisible()
    {
        $next = $this->getStates()->get(self::NOTICE_GET_PRO_MAIN_BUTTON, 0);
        if ($next === 0) {
            $this->getStates()->set(self::NOTICE_GET_PRO_MAIN_BUTTON, \true);
            return \false;
        }
        return \time() > $next;
    }
    /**
     * Create an notice that the scanner should be rerun after any plugin got toggled.
     */
    public function admin_notice_scanner_rerun_after_plugin_toggle()
    {
        if ($this->getStates()->get(self::NOTICE_SCANNER_RERUN_AFTER_PLUGIN_TOGGLE, \false)) {
            echo \sprintf('<div class="notice notice-warning" style="position:relative"><p>%s &bull; <a onClick="%s" href="#">%s</a></p>%s</div>', \__('You have enabled or disabled plugins on your website, which may require your cookie banner to be adjusted. Please scan your website again as soon as you have finished the changes!', RCB_TD), \esc_js($this->getStates()->noticeDismissOnClickHandler(self::NOTICE_SCANNER_RERUN_AFTER_PLUGIN_TOGGLE, 'false', Core::getInstance()->getConfigPage()->getUrl() . '#/scanner?start=1')), \__('Scan website again', RCB_TD), \sprintf('<button type="button" class="notice-dismiss" onClick="%s"></button>', \esc_js($this->getStates()->noticeDismissOnClickHandler(self::NOTICE_SCANNER_RERUN_AFTER_PLUGIN_TOGGLE, 'false'))));
        }
    }
    /**
     * Create an notice and inform the user about too many TCF vendors.
     */
    public function admin_notice_tcf_too_much_vendors()
    {
        if ($this->isPro() && TCF::getInstance()->isActive() && $this->getStates()->get(self::NOTICE_TCF_TOO_MUCH_VENDORS, \false) && TcfVendorConfiguration::getInstance()->getAllCount() > self::TCF_TOO_MUCH_VENDORS) {
            echo \sprintf('<div class="notice notice-warning" style="position:relative"><p>%s &bull; <a href="%s">%s</a></p>%s</div>', \__('Are you really embedding ads and content from all created TCF vendors on your website? <strong>Asking for consent from vendors you don\'t use could be an abuse of rights and could make the entire consent ineffective.</strong> You make it difficult for your website visitors to make an informed choice by using too many vendors. We therefore recommend you to create only TCF vendors that you actually use!', RCB_TD), Core::getInstance()->getConfigPage()->getUrl() . '#/cookies/tcf-vendors', \__('Configure TCF vendors', RCB_TD), \sprintf('<button type="button" class="notice-dismiss" onClick="%s"></button>', \esc_js($this->getStates()->noticeDismissOnClickHandler(self::NOTICE_TCF_TOO_MUCH_VENDORS, 'false'))));
        }
    }
    /**
     * Set checklist item as open/closed.
     *
     * @param string $id
     * @param boolean $state
     */
    public function setChecklistItem($id, $state)
    {
        return $this->getStates()->set(\DevOwl\RealCookieBanner\view\Notices::CHECKLIST_PREFIX . $id, $state);
    }
    /**
     * Get checklist item state.
     *
     * @param string $id
     * @param boolean $state
     */
    public function isChecklistItem($id)
    {
        return $this->getStates()->get(\DevOwl\RealCookieBanner\view\Notices::CHECKLIST_PREFIX . $id);
    }
    /**
     * Get list of clicked modal hints.
     *
     * @return string[]
     */
    public function getClickedModalHints()
    {
        return \array_keys($this->getStates()->getKeysStartingWith(self::MODAL_HINT_PREFIX));
    }
    /**
     * With the introduction of TCF 2.2, IAB Europe recommends to only use TCF vendors which are really used
     * while data processing. When there are more than x vendors created previsouly, show a notice.
     *
     * @see https://app.clickup.com/t/863gt04va
     * @param string|false $installed
     */
    public function new_version_installation_after_4_0_0($installed)
    {
        if (Core::versionCompareOlderThan($installed, '4.0.0', ['4.1.0', '4.0.1']) && $this->isPro()) {
            \add_action('init', function () {
                if (TCF::getInstance()->isActive()) {
                    $count = TcfVendorConfiguration::getInstance()->getAllCount();
                    if ($count > self::TCF_TOO_MUCH_VENDORS) {
                        $this->getStates()->set(self::NOTICE_TCF_TOO_MUCH_VENDORS, \true);
                    }
                }
            }, 8);
        }
    }
    /**
     * Reset states of notices which needs to get recalculated when a service / content blocker got updated / deleted.
     */
    public function recalculatePostDependingNotices()
    {
        $states = $this->getStates();
        $states->set(self::NOTICE_SERVICES_WITH_EMPTY_PRIVACY_POLICY, null);
        $states->set(self::NOTICE_SERVICES_WITH_UPDATED_TEMPLATES, null);
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getStates()
    {
        return $this->states;
    }
}
