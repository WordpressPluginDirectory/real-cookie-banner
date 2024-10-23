<?php

namespace DevOwl\RealCookieBanner\settings;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\AbstractCookiePolicy;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\view\customize\banner\CookiePolicy as BannerCookiePolicy;
use WP_Post;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Cookie policy settings.
 * @internal
 */
class CookiePolicy extends AbstractCookiePolicy
{
    use UtilsProvider;
    const OPTION_GROUP = 'options';
    /**
     * Singleton instance.
     *
     * @var CookiePolicy
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
        // ...
    }
    /**
     * Register settings.
     */
    public function register()
    {
        // ...
    }
    // Documented in AbstractCookiePolicy
    public function getInstructionText()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_INSTRUCTION));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineTableOfContents()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_TABLE_OF_CONTENTS));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineControllerOfWebsite()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_CONTROLLER_OF_WEBSITE));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineDiffToPrivacyPolicy()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_DIFF_TO_PRIVACY_POLICY));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineCookieTechnology()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_COOKIE_TECHNOLOGY));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineLegalBasis()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_LEGAL_BASIS));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineRightsOfTheVisitor()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_RIGHTS_OF_THE_VISITOR));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineManageCookies()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_MANAGE_COOKIES));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineTypesOfCookies()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_TYPES_OF_COOKIES));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineCookieOrigin()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_COOKIE_ORIGIN));
    }
    // Documented in AbstractCookiePolicy
    public function getHeadlineListOfServices()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_HEADLINE_LIST_OF_SERVICES));
    }
    // Documented in AbstractCookiePolicy
    public function getContentDiffToPrivacyPolicy()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_DIFF_TO_PRIVACY_POLICY));
    }
    // Documented in AbstractCookiePolicy
    public function getContentCookieTechnology()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_COOKIE_TECHNOLOGY));
    }
    // Documented in AbstractCookiePolicy
    public function getContentLegalBasisGdpr()
    {
        $text = $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_LEGAL_BASIS_GDPR));
        $euLegalBasis = \_x('Art. 5 (3) ePrivacy Directive and Recital 66 ePrivacy Directive', 'gdpr-legal-basis', RCB_TD);
        $locale = \get_locale();
        $localeTwoLetter = \substr($locale, 0, 2);
        switch ($localeTwoLetter) {
            case 'nl':
                $euLegalBasis = \_x('Article 11.7a Dutch Telecommunications Act (Telecommunicatiewet) and Article 129 Electronic Communications Act (Wet betreffende de elektronische communicatie, Belgium)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'fi':
                $euLegalBasis = \_x('§ 205 Act on electronic communications services (Laki sähköisen viestinnän palveluista)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'fr':
                $euLegalBasis = \_x('Article 82 Data Protection Act (Loi informatique et libertés, France) and Article 129 Electronic Communications Act (Loi relative aux communications electroniques, Belgium)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'de':
                $euLegalBasis = \_x('§ 25 TDDDG (Germany) and § 165 TKG (Austria)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'el':
                $euLegalBasis = \_x('Article 4 (5) of Law 3471/2006 (Protection of personal data and privacy in the electronic communications sector and amendment of Law 2472/1997)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'pt':
                $euLegalBasis = \_x('Article 5 Electronic Communications Privacy Law (Lei da Privacidade nas Comunicações Eletrónicas)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'es':
                $euLegalBasis = \_x('Article 22 (2) Information Society Services and e-Commerce Act (LSSI, Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico)', 'gdpr-legal-basis', RCB_TD);
                break;
            default:
                break;
        }
        switch ($locale) {
            case 'cs_CZ':
                $euLegalBasis = \_x('§ 89 (3) Electronic Communications Act (Zákon o elektronických komunikacích)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'da_DK':
                $euLegalBasis = \_x('§ 3 Cookie Order (Cookiebekendtgørelsen)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'hu_HU':
                $euLegalBasis = \_x('§ 13/A Act on certain aspects of electronic commerce services and information society services (Törvény az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'it_IT':
                $euLegalBasis = \_x('Section 122 Italian personal data protection code (Codice in materia di protezione dei dati personali)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'nn_NO':
                $euLegalBasis = \_x('§ 2-7b Electronic Communications Act (Elektroniskekommunikasjonsloven)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'pl_PL':
                $euLegalBasis = \_x('§ 173 Telecommunications Act (Prawo telekomunikacyjne)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'ro_RO':
                $euLegalBasis = \_x('Article 4 Act on the Processing of Personal Data and the Protection of Privacy in the Electronic Communications Sector (LEGE privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'sk_SK':
                $euLegalBasis = \_x('Article 55 Electronic Communications Act (zákon elektronických komunikáciách)', 'gdpr-legal-basis', RCB_TD);
                break;
            case 'sv_SE':
                $euLegalBasis = \_x('Chapter 9 Section 28 Swedish Electronic Communications Act (Lag om elektronisk kommunikation)', 'gdpr-legal-basis', RCB_TD);
                break;
            default:
                break;
        }
        return \str_replace('{{euLegalBasis}}', $euLegalBasis, $text);
    }
    // Documented in AbstractCookiePolicy
    public function getContentLegalBasisDsg()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_LEGAL_BASIS_DSG));
    }
    // Documented in AbstractCookiePolicy
    public function getContentRightsOfVisitor()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_RIGHTS_OF_THE_VISITOR));
    }
    // Documented in AbstractCookiePolicy
    public function getContentManageCookies()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_MANAGE_COOKIES));
    }
    // Documented in AbstractCookiePolicy
    public function getContentTypesOfCookies()
    {
        $typesOfCookiesText = $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_TYPES_OF_COOKIES));
        $nonDefaultGroups = $this->getSettings()->getGeneral()->getNonDefaultServiceGroups();
        if (\count($nonDefaultGroups) > 0 && $this->isShowCustomGroups()) {
            $typesOfCookiesText .= \sprintf('<p>%s</p>', \sprintf(
                // translators:
                \_x('In addition, cookies can also be used by services from the following groups or for the following purposes: %s', 'legal-text', RCB_TD),
                \join(', ', \array_map(function ($group) {
                    return $group->getName();
                }, $nonDefaultGroups))
            ));
        }
        return $typesOfCookiesText;
    }
    // Documented in AbstractCookiePolicy
    public function isShowCustomGroups()
    {
        return $this->getCustomizeSetting(BannerCookiePolicy::SETTING_SHOW_CUSTOM_GROUPS);
    }
    // Documented in AbstractCookiePolicy
    public function isTableDarkMode()
    {
        return $this->getCustomizeSetting(BannerCookiePolicy::SETTING_IS_TABLE_DARK_MODE);
    }
    // Documented in AbstractCookiePolicy
    public function getContentCookiesOrigin()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_COOKIE_ORIGIN));
    }
    // Documented in AbstractCookiePolicy
    public function getAdditionalContent()
    {
        return $this->translateString($this->getCustomizeSetting(BannerCookiePolicy::SETTING_ADDITIONAL_CONTENT));
    }
    // Documented in AbstractCookiePolicy
    public function getControllerOfWebsiteLabels()
    {
        return ['provider' => \_x('Provider', 'legal-text', RCB_TD), 'phone' => \_x('Phone', 'legal-text', RCB_TD), 'email' => \_x('Email', 'legal-text', RCB_TD), 'contactForm' => \_x('Contact form', 'legal-text', RCB_TD)];
    }
    /**
     * Translate a string from the customizer texts.
     *
     * @param string $string
     * @return string
     */
    public function translateString($string)
    {
        return Core::getInstance()->getCompLanguage()->translateArray(['content' => $string])['content'];
    }
    // Documented in AbstractCookiePolicy
    public function getListOfServicesTableColumnLabels()
    {
        return ['category' => \_x('Category', 'legal-text', RCB_TD), 'tcfVendors' => \_x('TCF vendors', 'legal-text', RCB_TD), 'technicalCookieDefinition' => \_x('Technical cookie name', 'legal-text', RCB_TD), 'technicalCookieHost' => \_x('Technical cookie host', 'legal-text', RCB_TD), 'service' => \_x('Service', 'legal-text', RCB_TD), 'purpose' => \_x('Purpose', 'legal-text', RCB_TD), 'undefined' => '-', 'duration' => \_x('Duration', 'legal-text', RCB_TD), 'durationUnit' => ['n1' => ['s' => \__('second', RCB_TD), 'm' => \__('minute', RCB_TD), 'h' => \__('hour', RCB_TD), 'd' => \__('day', RCB_TD), 'mo' => \__('month', RCB_TD), 'y' => \__('year', RCB_TD)], 'nx' => ['s' => \__('seconds', RCB_TD), 'm' => \__('minutes', RCB_TD), 'h' => \__('hours', RCB_TD), 'd' => \__('days', RCB_TD), 'mo' => \__('months', RCB_TD), 'y' => \__('years', RCB_TD)]], 'type' => \_x('Type', 'legal-text', RCB_TD)];
    }
    // Documented in AbstractCookiePolicy
    public function getGridJsLanguageTexts()
    {
        return ['search' => ['placeholder' => \__('Search...', RCB_TD)], 'sort' => ['sortAsc' => \__('Sort column ascending', RCB_TD), 'sortDesc' => \__('Sort column descending', RCB_TD)], 'pagination' => [
            'previous' => \__('Previous', RCB_TD),
            'next' => \__('Next', RCB_TD),
            // translators:
            'navigate' => \__('Page %1$d of %2$d', RCB_TD),
            // translators:
            'page' => \__('Page %d', RCB_TD),
            'showing' => \__('Showing', RCB_TD),
            'of' => \__('of', RCB_TD),
            'to' => \__('to', RCB_TD),
            'results' => \__('results', RCB_TD),
        ], 'noRecordsFound' => \__('No matching records found', RCB_TD)];
    }
    /**
     * Add a "Cookie Policy Page" post state like "Privacy Policy Page" to the created cookie policy.
     *
     * @param string[] $post_states
     * @param WP_Post $post
     */
    public function display_post_states($post_states, $post)
    {
        if ($post->ID === \DevOwl\RealCookieBanner\settings\General::getInstance()->getCookiePolicyId()) {
            $post_states['rcb_page_for_cookie_policy'] = \__('Cookie Policy Page', RCB_TD);
        }
        return $post_states;
    }
    /**
     * Add a link to edit the cookie policy directly in the customizer.
     *
     * @param string[] $actions
     * @param WP_Post $post
     */
    public function page_row_actions($actions, $post)
    {
        if ($post->ID === \DevOwl\RealCookieBanner\settings\General::getInstance()->getCookiePolicyId()) {
            $actions['rcb_edit_for_cookie_policy'] = \sprintf('<a href="%s">%s</a>', \esc_url(\add_query_arg(['autofocus[section]' => BannerCookiePolicy::SECTION, 'return' => \wp_get_raw_referer()], \admin_url('customize.php'))), \__('Customize cookie policy content', RCB_TD));
        }
        return $actions;
    }
    /**
     * Get the a given customize setting by ID.
     *
     * @param string $id
     */
    protected function getCustomizeSetting($id)
    {
        return \do_shortcode(Core::getInstance()->getBanner()->getCustomize()->getSetting($id));
    }
    /**
     * Get singleton instance.
     *
     * @return CookiePolicy
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\settings\CookiePolicy() : self::$me;
    }
}
