<?php

namespace DevOwl\RealCookieBanner\comp\migration;

use DevOwl\RealCookieBanner\Activator;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\settings\TcfVendorConfiguration;
use DevOwl\RealCookieBanner\settings\Blocker;
use DevOwl\RealCookieBanner\settings\Consent;
use DevOwl\RealCookieBanner\settings\Cookie;
use DevOwl\RealCookieBanner\settings\CookieGroup;
use DevOwl\RealCookieBanner\settings\General;
use DevOwl\RealCookieBanner\settings\GoogleConsentMode;
use DevOwl\RealCookieBanner\settings\Reset;
use DevOwl\RealCookieBanner\settings\TCF;
use DevOwl\RealCookieBanner\view\customize\banner\BasicLayout;
use DevOwl\RealCookieBanner\view\customize\banner\individual\Group;
use DevOwl\RealCookieBanner\view\customize\banner\individual\Texts as IndividualTexts;
use DevOwl\RealCookieBanner\view\customize\banner\StickyLinks;
use DevOwl\RealCookieBanner\view\customize\banner\Texts;
use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Utils as UtilsUtils;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Migration for Major version 5.
 *
 * @see https://app.clickup.com/t/869657xp3
 * @internal
 */
class DashboardTileMigrationMajor5 extends \DevOwl\RealCookieBanner\comp\migration\AbstractDashboardTileMigration
{
    const DELETE_LANGUAGES = ['hu', 'ro', 'el', 'fi', 'sk'];
    const DELETE_OPTIONS_TEXTS = [Texts::SETTING_HEADLINE, Texts::SETTING_DESCRIPTION, Texts::SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES, Texts::SETTING_AGE_NOTICE, Texts::SETTING_AGE_NOTICE_BLOCKER, Texts::SETTING_LIST_SERVICES_NOTICE, Texts::SETTING_LIST_LEGITIMATE_INTEREST_SERVICES_NOTICE, Texts::SETTING_CONSENT_FORWARDING, Texts::SETTING_ACCEPT_ALL, Texts::SETTING_ACCEPT_ESSENTIALS, Texts::SETTING_ACCEPT_INDIVIDUAL, Texts::SETTING_POWERED_BY_TEXT, Texts::SETTING_BLOCKER_HEADLINE, Texts::SETTING_BLOCKER_LINK_SHOW_MISSING, Texts::SETTING_BLOCKER_LOAD_BUTTON, Texts::SETTING_BLOCKER_ACCEPT_INFO, Texts::SETTING_STICKY_CHANGE, Texts::SETTING_STICKY_HISTORY, Texts::SETTING_STICKY_REVOKE, Texts::SETTING_STICKY_REVOKE_SUCCESS_MESSAGE, IndividualTexts::SETTING_HEADLINE, IndividualTexts::SETTING_DESCRIPTION, IndividualTexts::SETTING_SAVE, IndividualTexts::SETTING_SHOW_MORE, IndividualTexts::SETTING_HIDE_MORE];
    /**
     * Initialize hooks and listen to saves to content blockers so we can update the transient of `fetchBlockersWithBetterPotentialVisualType`.
     */
    public function init()
    {
        parent::init();
    }
    // Documented in AbstractDashboardTileMigration
    public function actions()
    {
        $coreInstance = Core::getInstance();
        $consentInstance = Consent::getInstance();
        $bannerCustomize = $coreInstance->getBanner()->getCustomize();
        $compLanguage = $coreInstance->getCompLanguage();
        $installationDate = \get_option(Activator::OPTION_NAME_INSTALLATION_DATE);
        $isDataProcessingInUnsafeCountriesEnabled = $consentInstance->isDataProcessingInUnsafeCountries();
        $isGcmEnabled = GoogleConsentMode::getInstance()->isEnabled();
        $isTcfEnabled = TCF::getInstance()->isActive();
        $isBannerLessConsentEnabled = $consentInstance->isBannerLessConsent();
        $isCookiePolicyEnabled = General::getInstance()->getCookiePolicyId() > 0;
        $isStickyLegalLinksEnabled = $bannerCustomize->getSetting(StickyLinks::SETTING_ENABLED);
        $isBannerMaximumHeightEnabled = $bannerCustomize->getSetting(BasicLayout::SETTING_MAX_HEIGHT_ENABLED);
        $isBannerHideLessRelevantDetailsEnabled = $bannerCustomize->getSetting(Group::SETTING_DETIALS_HIDE_LESS_RELEVANT);
        $servicesWithGcmUsage = \false;
        $servicesWithoutDataProcessingCountries = '';
        $blockers = Blocker::getInstance()->getOrdered();
        $groups = CookieGroup::getInstance()->getOrdered();
        $tcfVendorConfigurations = $this->isPro() ? TcfVendorConfiguration::getInstance()->getOrdered() : [];
        $tcfVendorIds = \array_map(function ($tcfVendorConfiguration) {
            return $tcfVendorConfiguration->metas[TcfVendorConfiguration::META_NAME_VENDOR_ID];
        }, $tcfVendorConfigurations);
        $showLegacyTcfUsage = $isTcfEnabled && \in_array(755, $tcfVendorIds, \true);
        $configUrlPage = $this->getConfigUrl('/cookies');
        $activeLanguages = $compLanguage->getActiveLanguages();
        $usedNewTranslations = \array_values(\array_unique(\array_filter(\array_merge($activeLanguages, [\get_locale()]), function ($language) {
            return \in_array(\substr($language, 0, 2), self::DELETE_LANGUAGES, \true);
        })));
        foreach ($groups as $group) {
            $cookies = Cookie::getInstance()->getOrdered($group->term_id);
            foreach ($cookies as $cookie) {
                $name = $cookie->post_title;
                $countries = $cookie->metas[Cookie::META_NAME_DATA_PROCESSING_IN_COUNTRIES];
                $optInScript = $cookie->metas[Cookie::META_NAME_CODE_OPT_IN];
                if (\count($countries) === 0 && $cookie->metas[Blocker::META_NAME_PRESET_ID] !== 'real-cookie-banner') {
                    $servicesWithoutDataProcessingCountries .= \sprintf('<li><strong>%s</strong> - <a href="%s">%s</a></li>', \esc_html($cookie->post_title), \sprintf('%s/%d/edit/%d', $configUrlPage, $group->term_id, $cookie->ID), \__('Configure data processing countries', RCB_TD));
                }
                if (\strpos($optInScript, 'googletagmanager.com') !== \false || \strpos($optInScript, 'gtm.js') !== \false || \strpos($name, 'Google') !== \false) {
                    $servicesWithGcmUsage = \true;
                }
            }
        }
        foreach ($blockers as $blocker) {
            $rules = \join(';', $blocker->metas[Blocker::META_NAME_RULES]);
            if (\strpos($rules, 'googletagmanager.com') !== \false || \strpos($rules, 'gtm.js') !== \false) {
                $servicesWithGcmUsage = \true;
            }
            if ($isTcfEnabled && $blocker->metas[Blocker::META_NAME_PRESET_ID] === 'google-adsense') {
                $showLegacyTcfUsage = \true;
            }
        }
        if (\count($usedNewTranslations) > 0 && $installationDate && \strtotime($installationDate) < \strtotime('2024-04-09')) {
            $this->addAction('translations', \__('Legal adjustments of texts and translations in 5 more languages', RCB_TD), \join(' ', [\__('Real Cookie Banner is now fully translated into Greek, Finnish, Slovak, Hungarian and Romanian and adapted to the legal details of the countries.', RCB_TD), \sprintf(
                // translators:
                \__('We recommend that you use the official translations for <strong>%s</strong> to obtain the most compliant consents possible.', RCB_TD),
                UtilsUtils::joinWithAndSeparator(\array_values(\array_map(function ($language) use($compLanguage) {
                    return $compLanguage->getTranslatedName($language);
                }, $usedNewTranslations)), \__(' and ', RCB_TD))
            )]), ['linkText' => \__('Apply new texts', RCB_TD), 'linkDisabled' => 'performed', 'confirmText' => \__('We will overwrite all texts in your cookie banner with new text suggestions. Please check afterwards if all adjustments are correct for your individual requirements and reconfigure your cookie banner yourself if necessary. Are you sure you want to apply the changes?', RCB_TD), 'callback' => function ($result) use($usedNewTranslations) {
                $result = $this->applyNewTexts($result, $usedNewTranslations);
                return $result;
            }]);
        }
        $this->addAction('cdn', \__('Legally compliant use of used Content Delivery Networks (CDNs)', RCB_TD), \join('<br /><br/ >', [\__('Maybe you use one or more content delivery networks (CDNs) on your website. CDNs are networks of servers distributed around the world that cache content and deliver it faster based on the location of your visitors. This reduces the loading time of your website. Servers can also be located in countries that are considered insecure from a data protection perspective.', RCB_TD), \__('The scanner of Real Cookie Banner can now automatically detect popular CDNs and explain to you what steps you need to take to use the service in a privacy-compliant way. <strong>Scan your entire website again to get recommendations for CDNs you may be using!</strong>', RCB_TD)]), ['linkText' => \__('Start scanner', RCB_TD), 'linkDisabled' => 'performed', 'performedLabel' => \__('Already started', RCB_TD), 'previewImage' => $coreInstance->getBaseAssetsUrl(\__('upgrade-wizard/v5/cdn.png', RCB_TD)), 'callback' => function ($result) {
            // Use a callback so we can show a success message when we clicked the button once
            $result['success'] = \true;
            $result['redirect'] = $this->getConfigUrl('/scanner?start=1');
            return $result;
        }])->addAction('data-processing-in-unsafe-countries', \__('Safety mechanisms for third-country data processing reworked', RCB_TD), \join('<br /><br/ >', \array_filter([\__('Most cookie banners address data processing in third countries by only offering a special consent according to Art. 49 GDPR for the US. Real Cookie Banner has been taking this into account for all countries of the world for a long time. In the latest version, Real Cookie Banner goes one step further and only considers Art. 49 GDPR as a last resort for data processing in third countries. Before relying on consent, factors such as adequacy decisions should be considered (with special cases such as the TADPF in the USA). Alternatively, standard contractual clauses with providers should be considered to ensure safe data processing. Real Cookie Banner covers all these scenarios under both the GDPR (EU) and the DSG (Switzerland) and provides simple, guided questions for users to make this complex process easier to navigate.', RCB_TD), $isDataProcessingInUnsafeCountriesEnabled ? \__('<strong>You should adopt the new standard text for third-country data processing in the cookie banner to correctly inform about all possible safety mechanisms!</strong> The settings for the security mechanisms themselves can be configured for each service.', RCB_TD) : null])), $isDataProcessingInUnsafeCountriesEnabled ? ['linkText' => \__('Apply new texts', RCB_TD), 'linkDisabled' => 'performed', 'callback' => function ($result) {
            $result = $this->applyNewDataProcessingInUnsafeCountriesTexts($result);
            return $result;
        }, 'needsPro' => \true, 'previewImage' => Core::getInstance()->getBaseAssetsUrl(\__('upgrade-wizard/v5/safety-mechanisms-for-data-processing-in-third-countries.png', RCB_TD))] : ['linkText' => \__('Obtain consent for data processing in unsecure third countries', RCB_TD), 'linkDisabled' => 'performed', 'performed' => \false, 'callback' => function ($result) {
            $result = $this->applyNewDataProcessingInUnsafeCountriesTexts($result, $this->getConfigUrl('/settings/consent'));
            return $result;
        }, 'info' => !empty($servicesWithoutDataProcessingCountries) ? \sprintf('<p>%s</p><ul>%s</ul>', \__('The following services should be reviewed:', RCB_TD), $servicesWithoutDataProcessingCountries) : null, 'previewImage' => Core::getInstance()->getBaseAssetsUrl(\__('upgrade-wizard/v5/safety-mechanisms-for-data-processing-in-third-countries.png', RCB_TD))])->addAction('sticky-legal-links', \__('Show sticky legal links widget on all pages', RCB_TD), \join('<br /><br/ >', [\__('Changing or revoking consent must be as easy as giving consent itself. Therefore, you need to provide legal links for these actions on every subpage of your website, which was previously only possible via shortcodes or menus.', RCB_TD), \__('Real Cookie Banner now offers you a sticky widget that, for example, displays a fingerprint icon in the bottom left corner of every subpage, making the corresponding links easily accessible at all times. It takes just one click to set up and increases transparency for your website visitors by making the features particularly easy to access. The design of the widget and the icon can be fully customized.', RCB_TD), \sprintf('<strong>%s</strong>', \__('Activate the sticky legal links widget on your website now!', RCB_TD))]), ['linkText' => \__('Activate sticky legal links', RCB_TD), 'linkDisabled' => 'performed', 'performedLabel' => \__('Feature is enabled', RCB_TD), 'performed' => $isStickyLegalLinksEnabled, 'callback' => function ($result) {
            \update_option(StickyLinks::SETTING_ENABLED, '1');
            $result['success'] = \true;
            $result['overrideAction'] = ['performed' => \true, 'linkDisabled' => \true];
            $result['redirect'] = \add_query_arg(['autofocus[section]' => StickyLinks::SECTION, 'return' => \wp_get_raw_referer()], \admin_url('customize.php'));
            return $result;
        }, 'previewImage' => Core::getInstance()->getBaseAssetsUrl(\__('pro-modal/sticky-legal-links.webm', RCB_TD))])->addAction('design-options', \__('More clarity in the cookie banner thanks to new design options', RCB_TD), \join('<br /><br/ >', [\__('Your cookie banner can quickly become overwhelming if you comply with all legal requirements – especially if you use services that set or read numerous cookies and cookie-like information.', RCB_TD), \__('That\'s why we\'re offering new design options that provide more clarity while complying with the law. With the <strong>"Define a maximum height for the cookie banner"</strong> option, you can limit the size of the banner so that it still displays all the necessary information but remains more compact. Website visitors can see when it is possible to scroll. With <strong>"Initially hide less relevant details about services"</strong>, more detailed technical and legal information about the individual services can be hidden by default in the individual privacy settings. This significantly improves the overview for all services, while the information remains accessible with a single click when needed.', RCB_TD)]), ['linkText' => \__('Activate new design options', RCB_TD), 'linkDisabled' => 'performed', 'performedLabel' => \__('Feature is enabled', RCB_TD), 'performed' => $isBannerMaximumHeightEnabled && $isBannerHideLessRelevantDetailsEnabled, 'callback' => function ($result) {
            \update_option(BasicLayout::SETTING_MAX_HEIGHT_ENABLED, '1');
            \update_option(Group::SETTING_DETIALS_HIDE_LESS_RELEVANT, '1');
            $result['success'] = \true;
            $result['overrideAction'] = ['performed' => \true, 'linkDisabled' => \true];
            return $result;
        }])->addAction('bannerless-consent', \__('Obtain consent without cookie banner (banner-less)', RCB_TD), \__('If you only use essential services and those with a visual content blocker, you can avoid using a cookie banner so that your website visitors are not distracted. Visual content blockers initially block all services that require consent. For example, if a visitor wants to watch a YouTube video, they can give their consent in the content blocker for these videos to always be loaded in future. To fulfill your information obligations, you should have a cookie policy on your website (created automatically) or provide all necessary information in your privacy policy (manually).', RCB_TD), ['linkText' => \__('Activate banner-less consent', RCB_TD), 'linkDisabled' => 'performed', 'performedLabel' => \__('Feature is enabled', RCB_TD), 'performed' => $isBannerLessConsentEnabled, 'callback' => $this->getConfigUrl('/settings/consent'), 'needsPro' => \true, 'previewImage' => Core::getInstance()->getBaseAssetsUrl(\__('pro-modal/banner-less-consent.png', RCB_TD))])->addAction('cookie-policy', \__('Cookie policy page for more transparency', RCB_TD), \join('<br /><br/ >', [\__('A cookie policy is a document that lists all the cookies and similar instruments used on a website and provides comprehensive information about each cookie. There <strong>is no obligation</strong> to create a cookie policy under the GDPR or the ePrivacy Directive. But it can help you to present the handling of cookies and cookie-like technologies to your website visitors transparently and separately from your privacy policy.', RCB_TD), \sprintf('<strong>%s</strong>', \__('Real Cookie Banner now allows you to generate automatically a cookie policy!', RCB_TD))]), ['linkText' => \__('Create cookie policy page', RCB_TD), 'linkDisabled' => 'performed', 'performedLabel' => \__('Feature is enabled', RCB_TD), 'performed' => $isCookiePolicyEnabled, 'callback' => $this->getConfigUrl('/settings/')]);
        if ($servicesWithGcmUsage) {
            $this->addAction('gcm', \__('Obtain consent with Google Consent Mode', RCB_TD), \join('<br /><br/ >', [\__('You use Google services on your website. Since Google was classified as a so-called gatekeeper under the Digital Markets Act in March 2024, Google is obliged to ensure and be able to prove that website operators obtain legally compliant consent for data processing using Google services. In order to fulfill this requirement, Google has introduced Google Consent Mode v2, which Real Cookie Banner supports.', RCB_TD), \__('To be able to use all features of Google Services, in particular Google Analytics and Google Ads Conversion Tracking, you should check the documentation of the respective Google Services to see if consents are required according to the Google Consent Mode. <strong>If this is the case, you have to configure the Google Consent Mode in Real Cookie Banner accordingly.</strong>', RCB_TD)]), ['linkText' => \__('Configure Google Consent Mode', RCB_TD), 'linkDisabled' => 'performed', 'performedLabel' => \__('Feature is enabled', RCB_TD), 'performed' => $isGcmEnabled, 'callback' => $this->getConfigUrl('/settings/gcm')]);
        }
        if ($showLegacyTcfUsage) {
            $this->addAction('tcf', \__('Obtain full consent for Google AdSense in accordance with the TCF', RCB_TD), \join('<br /><br/ >', [\__('As of January 2024, Google AdSense requires consent in accordance with the Transparency & Consent Framework (TCF) in order to continue to be able to display advertising in full. This requires consent not only for Google Advertising Products (vendor ID <code>755</code>), but also for all other advertising networks connected to Google AdSense. This allows them to participate in the real-time bidding process and maximizes the revenue from advertising on your website.', RCB_TD), \__('<strong>Real Cookie Banner allows you to automatically configure all relevant TCF vendors for your cookie banner,</strong> so you don\'t have to manually set up hundreds of vendors to maximize revenue.', RCB_TD)]), ['linkText' => \__('Create TCF vendor configurations for Google AdSense', RCB_TD), 'linkDisabled' => 'performed', 'performed' => \count(\array_intersect($tcfVendorIds, [755, 25, 929])) === 3, 'callback' => $this->getConfigUrl('/cookies/tcf-vendors/new?adNetwork=google-adsense')]);
        }
        $this->addAction('failed-consent-handling', \__('Handling of failed consent documentation', RCB_TD), \join('<br /><br/ >', [\__('It may happen that your website is accessible (e.g. through a scalable page cache), but the consents granted in the cookie banner cannot be documented (e.g. due to server overload caused by high traffic). In this case, Real Cookie Banner will try to document the consents according to your legal obligations as soon as the server is available again.', RCB_TD), \__('But what happens in the meantime? By default, only essential services will be served in this case. <strong>However, you can now customize this behavior and take a higher risk.</strong> This can be particularly useful if you are expecting a large number of visitors in a short period of time, for example after being on a TV show.', RCB_TD)]), ['linkText' => \__('Adjust handling of failed consent documentation', RCB_TD), 'linkDisabled' => 'performed', 'performedLabel' => \__('Already configured', RCB_TD), 'callback' => function ($result) {
            $result['success'] = \true;
            $result['redirect'] = $this->getConfigUrl('/settings/consent');
            return $result;
        }]);
    }
    /**
     * Apply new texts.
     *
     * @param array $result
     * @param string[] $languages
     */
    public function applyNewTexts($result, $languages)
    {
        if (!\is_wp_error($result)) {
            $result['reset'] = Reset::getInstance()->texts($languages);
            $result['success'] = \true;
            // Just reload the page
            $result['redirect'] = \wp_get_raw_referer();
        }
        return $result;
    }
    /**
     * Apply new data processing in unsafe countries texts and redirect to consent settings so the user can enable the feature.
     *
     * @param array $result
     * @param string $redirectUrl
     */
    public function applyNewDataProcessingInUnsafeCountriesTexts($result, $redirectUrl = null)
    {
        if (!\is_wp_error($result)) {
            $deletedOptionsTexts = $this->deleteCustomizerTexts(null, [Texts::SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES]);
            $result['success'] = \true;
            $result['deleted_options_texts'] = $deletedOptionsTexts;
            if ($redirectUrl) {
                $result['redirect'] = $redirectUrl;
            }
        }
        return $result;
    }
    // Documented in AbstractDashboardTileMigration
    public function getId()
    {
        return 'v5';
    }
    // Documented in AbstractDashboardTileMigration
    public function getHeadline()
    {
        return \__('Updates in v5.0: You need to make adjustments!', RCB_TD);
    }
    // Documented in AbstractDashboardTileMigration
    public function getDescription()
    {
        return \join('<br /><br/ >', [\sprintf(
            // translators:
            \__('Discover the new Real Cookie Banner 5.0! In this update, we have included many new features that could be of interest to specific target groups and help you collect consents more effectively. You can find more details in the <strong><a href="%s" target="_blank">release notes on our blog</a></strong>!', RCB_TD),
            \__('https://devowl.io/news/real-cookie-banner-5-0/', RCB_TD)
        ), \__('<strong>Be sure to review the following points and consider whether you would like to adjust them in your cookie banner configuration!</strong> You decide which changes to activate or ignore - we don\'t make any fundamental changes without your consent.', RCB_TD)]);
    }
    // Documented in AbstractDashboardTileMigration
    public function isActive()
    {
        $isMajor5 = \version_compare(RCB_VERSION, '5.0.0', '>=');
        return $isMajor5 && $this->hasMajorPreviouslyInstalled(4);
    }
    // Documented in AbstractDashboardTileMigration
    public function dismiss()
    {
        return $this->removeMajorVersionFromPreviouslyInstalled(4);
    }
}
