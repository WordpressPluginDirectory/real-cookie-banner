<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\frontend;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\CookieConsentManagement;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\services\TechnicalDefinitions;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\AbstractGeneral;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\BannerLink;
use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\Iso3166OneAlpha2;
/**
 * A cookie policy is a server-side rendered, pure-HTML text with a table of cookie definitions and teachings.
 * @internal
 */
class CookiePolicy
{
    /**
     * See `CookieConsentManagement`.
     *
     * @var CookieConsentManagement
     */
    private $cookieConsentManagement;
    /**
     * C'tor.
     *
     * @param CookieConsentManagement $cookieConsentManagement
     */
    public function __construct($cookieConsentManagement)
    {
        $this->cookieConsentManagement = $cookieConsentManagement;
    }
    /**
     * Render the cookie policy as HTML output.
     *
     * @param boolean $replaceVariables
     */
    public function renderHtml($replaceVariables = \true)
    {
        $cookiePolicySettings = $this->getSettings();
        $toc = [];
        $output = [];
        $output[] = $this->renderWebsiteOperatorSectionHtml($toc);
        $output[] = $this->renderDiffToPrivacyPolicySectionHtml($toc);
        $output[] = $this->renderCookieTechnologySectionHtml($toc);
        $output[] = $this->renderLegalBasisSectionHtml($toc);
        $output[] = $this->renderRightsOfVisitorSectionHtml($toc);
        $output[] = $this->renderManageCookiesSectionHtml($toc);
        $output[] = $this->renderTypesOfCookiesSectionHtml($toc);
        $output[] = $this->renderCookiesOriginSectionHtml($toc);
        $output[] = $this->renderListOfServicesSectionHtml($toc);
        $additionalContent = $cookiePolicySettings->getAdditionalContent();
        if (!empty($additionalContent)) {
            // Replace `{{dateOfUpdate}}`
            $hashTime = $this->getCookieConsentManagement()->getRevision()->getPersistence()->getCurrentHashTime();
            // TODO: abstract date_i18n() and wpautop() function
            $hashTime = $hashTime > 0 ? \date_i18n(\get_option('date_format'), $hashTime) : 'n/a';
            if ($replaceVariables) {
                $additionalContent = \str_replace('{{dateOfUpdate}}', $hashTime, $additionalContent);
            }
            // Add h2 headlines to the table of contents from the additional content
            $additionalContent = \preg_replace_callback('/<h2>(.*)<\\/h2>/m', function ($m) use(&$toc) {
                // TODO: use other function than sanitize_title
                $id = \esc_attr('additiona-content-' . \sanitize_title($m[1]));
                $toc[$id] = $m[1];
                return \sprintf('<h2 id="%s">%s</h2>', $id, $m[1]);
            }, $additionalContent);
            $output[] = \wpautop(\sprintf('<p>%s</p>', $additionalContent));
        }
        \array_unshift($output, \sprintf('<h2>%s</h2><ul>%s</ul>', $cookiePolicySettings->getHeadlineTableOfContents(), \join('', \array_map(function ($value) use($toc) {
            return \sprintf('<li><a href="#%s">%s</a></li>', $value, $toc[$value]);
        }, \array_keys($toc)))));
        \array_unshift($output, \sprintf('<p>%s</p>', $cookiePolicySettings->getInstructionText()));
        $html = \join('', $output);
        // Replace variables
        if ($replaceVariables) {
            $html = \preg_replace_callback('/{{(\\w+)}}(.*){{\\/\\1}}/m', function ($m) {
                switch ($m[1]) {
                    case 'privacyPolicy':
                        $url = null;
                        foreach ($this->getCookieConsentManagement()->getSettings()->getGeneral()->getBannerLinks() as $bannerLink) {
                            if ($bannerLink->getPageType() === BannerLink::PAGE_TYPE_PRIVACY_POLICY) {
                                $url = $bannerLink->getUrl();
                                break;
                            }
                        }
                        return $url === null ? $m[2] : \sprintf('<a href="%s" target="_blank">%s</a>', \esc_url($url), $m[2]);
                    default:
                        break;
                }
                return $m[0];
            }, $html);
        }
        return $html;
    }
    /**
     * Which cookies are used on this website?
     *
     * @param array $toc
     */
    public function renderListOfServicesSectionHtml(&$toc)
    {
        $settings = $this->getCookieConsentManagement()->getSettings();
        $headline = $this->getSettings()->getHeadlineListOfServices();
        $columnLabels = $this->getSettings()->getListOfServicesTableColumnLabels();
        $gridJsLanguageTexts = $this->getSettings()->getGridJsLanguageTexts();
        $isTableDarkMode = $this->getSettings()->isTableDarkMode();
        if (empty($headline)) {
            return '';
        }
        // Do not show the purpose column when not at least one technical definition has a purpose
        $hasAtLeastOnePurpose = $settings->getTcf()->isActive() && \count($settings->getTcf()->getVendorConfigurations()) > 0;
        if (!$hasAtLeastOnePurpose) {
            foreach ($settings->getGeneral()->getServiceGroups() as $group) {
                foreach ($group->getItems() as $service) {
                    foreach ($service->getTechnicalDefinitions() as $td) {
                        if (!empty($td->getPurpose())) {
                            $hasAtLeastOnePurpose = \true;
                            break;
                        }
                    }
                }
            }
        }
        // Create the HTML table
        $table = \sprintf('<script type="application/json">%s</script><table %s class="devowl-wp-react-cookie-banner-cookie-policy"><thead><tr>', \json_encode($gridJsLanguageTexts), $isTableDarkMode ? 'data-gridjs-dark-mode' : '');
        foreach (['category', 'technicalCookieDefinition', 'technicalCookieHost', 'service', 'duration', 'type', 'purpose'] as $column) {
            if ($column === 'purpose' && !$hasAtLeastOnePurpose) {
                continue;
            }
            $width = 400;
            switch ($column) {
                case 'category':
                case 'type':
                    $width = 200;
                    break;
                case 'duration':
                    $width = 250;
                    break;
                case 'purpose':
                    $width = 550;
                    break;
                default:
                    break;
            }
            $table .= \sprintf('<th width="%dpx" scope="col">%s</th>', $width, $columnLabels[$column]);
        }
        $table .= '</tr></thead><tbody>';
        foreach ($settings->getGeneral()->getServiceGroups() as $group) {
            foreach ($group->getItems() as $service) {
                foreach ($service->getTechnicalDefinitions() as $td) {
                    $table .= '<tr>';
                    $table .= \sprintf('<td>%s</td>', $group->getName());
                    $table .= \sprintf('<td>%s</td>', $td->getName());
                    $table .= \sprintf('<td>%s</td>', $td->getHost());
                    $table .= \sprintf('<td>%s</td>', $service->getName());
                    $table .= \sprintf('<td>%s</td>', $td->getType() === TechnicalDefinitions::TYPE_SESSION_STORAGE ? 'SESSION' : (\in_array($td->getType(), [TechnicalDefinitions::TYPE_HTTP], \true) ? $this->getDurationText($td->isSessionDuration(), $td->getDuration(), $td->getDurationUnit()) : $columnLabels['undefined']));
                    $table .= \sprintf('<td>%s</td>', $this->getTypeLabel($td->getType(), $columnLabels['undefined']));
                    if ($hasAtLeastOnePurpose) {
                        $table .= \sprintf('<td>%s</td>', empty($td->getPurpose()) ? $columnLabels['undefined'] : $td->getPurpose());
                    }
                    $table .= '</tr>';
                }
            }
        }
        if ($settings->getTcf()->isActive()) {
            $gvl = $settings->getTcf()->getGvl();
            $purposes = $gvl->allDeclarations(['onlyReturnDeclarations' => \true])['purposes'];
            foreach ($settings->getTcf()->getVendorConfigurations() as $tcfConfig) {
                $vendor = $tcfConfig->getVendor();
                if (isset($vendor['deviceStorageDisclosure']) && isset($vendor['deviceStorageDisclosure']['disclosures'])) {
                    foreach ($vendor['deviceStorageDisclosure']['disclosures'] as $disclosure) {
                        $maxAgeSeconds = $disclosure['maxAgeSeconds'] ?? null;
                        $domain = $disclosure['domain'] ?? $columnLabels['undefined'];
                        $domains = $disclosure['domains'] ?? null;
                        $table .= '<tr>';
                        $table .= \sprintf('<td>%s</td>', $columnLabels['tcfVendors']);
                        $table .= \sprintf('<td><code>%s</code></td>', $disclosure['identifier'] ?? $columnLabels['undefined']);
                        $table .= \sprintf('<td><code>%s</code></td>', \is_array($domains) ? \join(', ', $domains) : $domain);
                        $table .= \sprintf('<td>%s</td>', $vendor['name']);
                        $table .= \sprintf('<td>%s</td>', $maxAgeSeconds === null ? $columnLabels['undefined'] : $this->getDurationText($maxAgeSeconds <= 0, \intval($maxAgeSeconds), 's'));
                        $table .= \sprintf('<td>%s</td>', \ucfirst($disclosure['type'] ?? ''));
                        $table .= \sprintf('<td>%s</td>', \join('; ', \array_map(function ($purposeId) use($purposes) {
                            return isset($purposes[$purposeId]) ? $purposes[$purposeId]['name'] : '';
                        }, $disclosure['purposes'] ?? [])));
                        $table .= '</tr>';
                    }
                }
            }
        }
        $table .= '</tbody></table>';
        $toc['list-of-services'] = $headline;
        return \sprintf('<h2 id="list-of-services">%s</h2>%s', $headline, $table);
    }
    /**
     * Get a text for a given type (e.g. `http` -> `HTTP Cookie`).
     *
     * @param string $type
     * @param string $fallback
     */
    protected function getTypeLabel($type, $fallback)
    {
        switch ($type) {
            case TechnicalDefinitions::TYPE_HTTP:
                return 'HTTP Cookie';
            case TechnicalDefinitions::TYPE_INDEXED_DB:
                return 'IndexedDB';
            case TechnicalDefinitions::TYPE_LOCAL_STORAGE:
                return 'Local Storage';
            case TechnicalDefinitions::TYPE_SESSION_STORAGE:
                return 'Session Storage';
            default:
                return $fallback;
        }
    }
    /**
     * Get a text for a given duration and duration unit.
     *
     * @param boolean $isSession
     * @param int $duration
     * @param string $unit
     */
    protected function getDurationText($isSession, $duration, $unit)
    {
        $labels = $this->getSettings()->getListOfServicesTableColumnLabels()['durationUnit'];
        return $isSession ? 'Session' : \sprintf('%d %s', $duration, $duration > 1 ? $labels['nx'][$unit] ?? '' : $labels['n1'][$unit] ?? '');
    }
    /**
     * Who can set cookies on websites?
     *
     * @param array $toc
     */
    public function renderCookiesOriginSectionHtml(&$toc)
    {
        $headline = $this->getSettings()->getHeadlineCookieOrigin();
        $content = $this->getSettings()->getContentCookiesOrigin();
        if (empty($headline) || empty($content)) {
            return '';
        }
        $toc['cookies-origin'] = $headline;
        return \sprintf('<h2 id="cookies-origin">%s</h2><p>%s</p>', $headline, $content);
    }
    /**
     * Explanation of how to delete cookies in your browser (including 3rd party cookies that RCB cannot delete; no
     * explanation per browser, but only generally necessary, about the browser manual)
     *
     * @param array $toc
     */
    public function renderManageCookiesSectionHtml(&$toc)
    {
        $headline = $this->getSettings()->getHeadlineManageCookies();
        $content = $this->getSettings()->getContentManageCookies();
        if (empty($headline) || empty($content)) {
            return '';
        }
        $toc['manage-cookies'] = $headline;
        return \sprintf('<h2 id="manage-cookies">%s</h2><p>%s</p>', $headline, $content);
    }
    /**
     * Types of cookies and their purposes.
     *
     * @param array $toc
     */
    public function renderTypesOfCookiesSectionHtml(&$toc)
    {
        $headline = $this->getSettings()->getHeadlineTypesOfCookies();
        $content = $this->getSettings()->getContentTypesOfCookies();
        if (empty($headline) || empty($content)) {
            return '';
        }
        $toc['types-of-cookies'] = $headline;
        return \sprintf('<h2 id="types-of-cookies">%s</h2><p>%s</p>', $headline, $content);
    }
    /**
     * Information about the rights of the website visitor and function for viewing the history of consent, changing consent and revoking consent.
     *
     * @param array $toc
     */
    public function renderRightsOfVisitorSectionHtml(&$toc)
    {
        $headline = $this->getSettings()->getHeadlineRightsOfTheVisitor();
        $content = $this->getSettings()->getContentRightsOfVisitor();
        if (empty($headline) || empty($content)) {
            return '';
        }
        $toc['rights-of-visitor'] = $headline;
        return \sprintf('<h2 id="rights-of-visitor">%s</h2><p>%s</p>', $headline, $content);
    }
    /**
     * Legal explanation of cookies.
     *
     * @param array $toc
     */
    public function renderLegalBasisSectionHtml(&$toc)
    {
        $legalBasis = $this->getCookieConsentManagement()->getSettings()->getGeneral()->getTerritorialLegalBasis();
        $headline = $this->getSettings()->getHeadlineLegalBasis();
        $content = [];
        foreach ($legalBasis as $l) {
            switch ($l) {
                case AbstractGeneral::TERRITORIAL_LEGAL_BASIS_GDPR:
                    $content[] = $this->getSettings()->getContentLegalBasisGdpr();
                    break;
                case AbstractGeneral::TERRITORIAL_LEGAL_BASIS_DSG_SWITZERLAND:
                    $content[] = $this->getSettings()->getContentLegalBasisDsg();
                    break;
                default:
                    break;
            }
        }
        $content = \join('<br /><br />', $content);
        if (empty($headline) || empty($content)) {
            return '';
        }
        $toc['legal-basis'] = $headline;
        return \sprintf('<h2 id="legal-basis">%s</h2><p>%s</p>', $headline, $content);
    }
    /**
     * What are cookies and cookie-like technologies? Definition and general function of cookies (and all conceivable cookie-like information)
     *
     * @param array $toc
     */
    public function renderCookieTechnologySectionHtml(&$toc)
    {
        $headline = $this->getSettings()->getHeadlineCookieTechnology();
        $content = $this->getSettings()->getContentCookieTechnology();
        if (empty($headline) || empty($content)) {
            return '';
        }
        $toc['cookie-technology'] = $headline;
        return \sprintf('<h2 id="cookie-technology">%s</h2><p>%s</p>', $headline, $content);
    }
    /**
     * What is the difference between the policies? ➝ Differentiation from the privacy policy.
     *
     * @param array $toc
     */
    public function renderDiffToPrivacyPolicySectionHtml(&$toc)
    {
        $headline = $this->getSettings()->getHeadlineDiffToPrivacyPolicy();
        $content = $this->getSettings()->getContentDiffToPrivacyPolicy();
        if (empty($headline) || empty($content)) {
            return '';
        }
        $toc['diff-to-privacy-policy'] = $headline;
        return \sprintf('<h2 id="diff-to-privacy-policy">%s</h2><p>%s</p>', $headline, $content);
    }
    /**
     * Render the website operator, when at least one contact possibility is given.
     *
     * @param array $toc
     */
    public function renderWebsiteOperatorSectionHtml(&$toc)
    {
        $settings = $this->getCookieConsentManagement()->getSettings();
        $generalSettings = $settings->getGeneral();
        $cookiePolicySettings = $this->getSettings();
        $headline = $cookiePolicySettings->getHeadlineControllerOfWebsite();
        $listItems = [];
        $address = $generalSettings->getOperatorContactAddress();
        $country = $generalSettings->getOperatorCountry();
        $email = $generalSettings->getOperatorContactEmail();
        $phone = $generalSettings->getOperatorContactPhone();
        $contactUrl = $generalSettings->getOperatorContactFormUrl();
        if (empty($headline) || empty($address) || empty($country) || empty(\join('', [$email, $phone, $contactUrl]))) {
            return '';
        }
        $labels = $cookiePolicySettings->getControllerOfWebsiteLabels();
        $listItems[] = \sprintf('<li><strong>%s: </strong>%s, %s</li>', $labels['provider'], $address, Iso3166OneAlpha2::getCodes()[$country] ?? $country);
        if (!empty($email)) {
            $listItems[] = \sprintf('<li><strong>%1$s: </strong><a target="_blank" href="mailto:%2$s">%2$s</a></li>', $labels['email'], \esc_html($email));
        }
        if (!empty($phone)) {
            $listItems[] = \sprintf('<li><strong>%1$s: </strong><a target="_blank" href="tel:%2$s">%2$s</a></li>', $labels['phone'], \esc_html($phone));
        }
        if (!empty($contactUrl)) {
            $listItems[] = \sprintf('<li><strong>%1$s: </strong><a target="_blank" href="%2$s">%3$s</a></li>', $labels['contactForm'], \esc_html($contactUrl), \preg_replace('/(https?:\\/\\/)/m', '', \esc_html($contactUrl)));
        }
        $toc['controller-of-the-website'] = $headline;
        return \sprintf('<h2 id="controller-of-the-website">%s</h2><ul>%s</ul>', $headline, \join('', $listItems));
    }
    /**
     * Get the cookie policy settings.
     */
    public function getSettings()
    {
        return $this->getCookieConsentManagement()->getSettings()->getCookiePolicy();
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getCookieConsentManagement()
    {
        return $this->cookieConsentManagement;
    }
}
