<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\frontend;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\consent\PersistedTransaction;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\CookieConsentManagement;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\AbstractConsent;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\AbstractCountryBypass;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\Utils;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\services\ManagerMiddleware;
/**
 * Functions for the frontend (e.g. generating "Code on page load" HTML output).
 * @internal
 */
class Frontend
{
    const COOKIE_NAME_USER_PREFIX = 'real_cookie_banner';
    const COOKIE_NAME_SUFFIX_GCM = '-gcm';
    const COOKIE_NAME_SUFFIX_TCF = '-tcf';
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
     * Generate an array which can be used for the frontend to show the cookie banner / content
     * blocker to the website visitor.
     *
     * Behind the scenes, it reuses `Revision` where possible.
     */
    public function toJson()
    {
        $management = $this->getCookieConsentManagement();
        $settings = $management->getSettings();
        $revision = $management->getRevision();
        $general = $settings->getGeneral();
        $consent = $settings->getConsent();
        $googleConsentMode = $settings->getGoogleConsentMode();
        $tcf = $settings->getTcf();
        $multisite = $settings->getMultisite();
        $output = [
            // Also part in revision
            'groups' => $revision->serviceGroupsToJson(),
            'links' => $revision->bannerLinkToJson(),
            'websiteOperator' => $revision->websiteOperatorToJson(),
            'blocker' => $revision->blockersToJson(),
            'languageSwitcher' => \array_map(function ($language) {
                return $language->toJson();
            }, $general->getLanguages()),
            'predefinedDataProcessingInSafeCountriesLists' => AbstractConsent::PREDEFINED_DATA_PROCESSING_IN_SAFE_COUNTRIES_LISTS,
            // Misc
            'decisionCookieName' => $this->getCookieName(),
            'revisionHash' => $revision->getEnsuredCurrentHash(),
            // Options
            'territorialLegalBasis' => $general->getTerritorialLegalBasis(),
            'setCookiesViaManager' => $general->getSetCookiesViaManager(),
            'isRespectDoNotTrack' => $consent->isRespectDoNotTrack(),
            'failedConsentDocumentationHandling' => $consent->getFailedConsentDocumentationHandling(),
            'isAcceptAllForBots' => $consent->isAcceptAllForBots(),
            'isDataProcessingInUnsafeCountries' => $consent->isDataProcessingInUnsafeCountries(),
            'isAgeNotice' => $consent->isAgeNoticeEnabled(),
            'ageNoticeAgeLimit' => $consent->getAgeNoticeAgeLimit(),
            'isListServicesNotice' => $consent->isListServicesNoticeEnabled(),
            'isBannerLessConsent' => $consent->isBannerLessConsent(),
            'isTcf' => $tcf->isActive(),
            'isGcm' => $googleConsentMode->isEnabled(),
            'isGcmListPurposes' => $googleConsentMode->isListPurposes(),
        ];
        if ($tcf->isActive()) {
            $output['tcf'] = $revision->tcfToJson();
            $output['tcfMetadata'] = $revision->tcfMetadataToJson();
        }
        $consentForwardingExternalHosts = $multisite->getExternalHosts();
        if (!empty($consentForwardingExternalHosts)) {
            $output['consentForwardingExternalHosts'] = $consentForwardingExternalHosts;
        }
        return $output;
    }
    /**
     * Create a JSON object for the frontend so it can be shown as history. In general, we do not want to expose
     * all data. And perhaps we need to modify some data before sending to the client. See also `BannerHistoryEntry`
     * in `@devowl-wp/react-cookie-banner`.
     *
     * @param PersistedTransaction $transaction
     */
    public function persistedTransactionToJsonForHistoryViewer($transaction)
    {
        $obj = ['id' => $transaction->getId(), 'uuid' => $transaction->getUuid(), 'isDoNotTrack' => $transaction->isMarkAsDoNotTrack(), 'isUnblock' => $transaction->getBlocker() > 0, 'isForwarded' => $transaction->getForwarded() > 0, 'created' => $transaction->getCreated(), 'context' => [
            'buttonClicked' => $transaction->getButtonClicked(),
            'groups' => $transaction->getRevision()['groups'],
            'consent' => $transaction->getDecision(),
            'gcmConsent' => $transaction->getGcmConsent(),
            // TCF compatibility
            'tcf' => isset($transaction->getRevision()['tcf']) ? [
                'tcf' => $transaction->getRevision()['tcf'],
                // Keep `tcfMeta` for backwards-compatibility
                'tcfMetadata' => $transaction->getRevisionIndependent()['tcfMetadata'] ?? $transaction->getRevisionIndependent()['tcfMeta'],
                'tcfString' => $transaction->getTcfString(),
            ] : null,
        ]];
        $lazyLoaded = $this->prepareLazyData($obj['context']['tcf']);
        $obj['context']['lazyLoadedDataForSecondView'] = $lazyLoaded;
        // Backwards-compatibility for older records using Geo-restriction bypass
        if ($transaction->getRevision()['options']['isCountryBypass'] && $transaction->getCustomBypass() === AbstractCountryBypass::CUSTOM_BYPASS && !Utils::startsWith($transaction->getButtonClicked(), 'implicit_')) {
            $obj['context']['buttonClicked'] = $transaction->getRevision()['options']['countryBypassType'] === AbstractCountryBypass::TYPE_ALL ? 'implicit_all' : 'implicit_essential';
        }
        return $obj;
    }
    /**
     * The `toJson` method prepares the data for the complete data of the frontend. Use this function
     * to outsource lazy-loadable data for the second view in your cookie banner.
     *
     * @param array $output
     * @param boolean $appendStateToOutput If `true`, a `hasLazyData` property will be added to the passe `$output` object
     */
    public function prepareLazyData(&$output, $appendStateToOutput = \false)
    {
        $lazyLoaded = [];
        // Remove `additionalInformation`, `urls` and `deviceStorageDisclosure` from the GVL
        if (isset($output['tcf']) && !empty($output['tcf'])) {
            $lazyLoaded['tcf'] = ['vendors' => []];
            foreach ($output['tcf']['vendors'] as $vendorId => &$row) {
                foreach ([
                    // This keys are part of the main GVL model
                    'urls',
                    'deviceStorageDisclosureUrl',
                    // This keys are not part of the main GVL model, but inserted into the object by Real Cookie Banner backend
                    'additionalInformation',
                    'deviceStorageDisclosure',
                ] as $key) {
                    if (isset($row[$key])) {
                        $lazyLoaded['tcf']['vendors'][$vendorId][$key] = $row[$key];
                        unset($row[$key]);
                    }
                }
            }
        }
        if ($appendStateToOutput) {
            $output['hasLazyData'] = !empty($lazyLoaded);
        }
        return (object) $lazyLoaded;
    }
    /**
     * Generate the "Code on page load" for all our configured services.
     *
     * @param callable $outputModifier Allows to modify the HTML output of a single service by a function
     * @return string[]
     */
    public function generateCodeOnPageLoad($outputModifier = null)
    {
        $groups = $this->getCookieConsentManagement()->getSettings()->getGeneral()->getServiceGroups();
        $output = [];
        $uniqueNames = [];
        foreach ($groups as $group) {
            foreach ($group->getItems() as $service) {
                $html = $service->getCodeOnPageLoad();
                if (!empty($html)) {
                    $html = $service->applyDynamicsToHtml($html);
                    $output[] .= \is_callable($outputModifier) ? $outputModifier($html, $service) : $html;
                }
                $uniqueName = $service->getUniqueName();
                if (!empty($uniqueName) && $uniqueName !== ManagerMiddleware::IDENTIFIER_GOOGLE_TAG_MANAGER) {
                    $uniqueNames[] = $uniqueName;
                }
            }
        }
        $gcmOutput = $this->generateGoogleConsentModeCodeOnPageLoad();
        if (!empty($gcmOutput)) {
            $output[] = \is_callable($outputModifier) ? $outputModifier($gcmOutput, null) : $gcmOutput;
        }
        return $output;
    }
    /**
     * Determine if the current page should not handle a predecision. See also `preDecisionGatewayIsPreventPreDecision`.
     * When returning `true`, the cookie banner does not get shown and should use the existing consent if given, or fallback
     * to `essentials`-only.
     *
     * @param int[] $pageIds The current page IDs
     */
    public function isPreventPreDecision($pageIds = null)
    {
        $settings = $this->getCookieConsentManagement()->getSettings();
        if (\is_array($pageIds) && \count($pageIds) > 0 && !$settings->getConsent()->isBannerLessConsent()) {
            $hideIds = $settings->getGeneral()->getAdditionalPageHideIds();
            if (\count(\array_intersect($pageIds, $hideIds)) > 0) {
                return \true;
            }
            foreach ($settings->getGeneral()->getBannerLinks() as $bannerLink) {
                if ($bannerLink->isHideCookieBanner() && !$bannerLink->isExternalUrl() && $bannerLink->getPageId() > 0 && \in_array($bannerLink->getPageId(), $pageIds, \true)) {
                    return \true;
                }
            }
        }
        return \false;
    }
    /**
     * Determine if the implicit user consent should be invalidated when we visit a page which is configured to show the
     * cookie banner in banner-less consent mode.
     *
     * @param int[] $pageIds The current page IDs
     */
    public function isInvalidateImplicitUserConsent($pageIds = null)
    {
        $consent = $this->getCookieConsentManagement()->getSettings()->getConsent();
        return $consent->isBannerLessConsent() && \is_array($pageIds) && \count($pageIds) > 0 && \count(\array_intersect($pageIds, $consent->getBannerLessConsentShowOnPageIds())) > 0;
    }
    /**
     * Generate the code on page load for Google Consent Mode.
     */
    protected function generateGoogleConsentModeCodeOnPageLoad()
    {
        $settings = $this->getCookieConsentManagement()->getSettings();
        $gcm = $settings->getGoogleConsentMode();
        $output = '';
        if ($gcm->isEnabled()) {
            $consentModes = $gcm->getConsentModes();
            $output = \sprintf("<script>window.gtag && (()=>{gtag('set', 'url_passthrough', %s);\ngtag('set', 'ads_data_redaction', %s);\nfor (const d of %s) {\n\tgtag('consent', 'default', d);\n}})()</script>", $gcm->isCollectAdditionalDataViaUrlParameters() ? 'true' : 'false', $gcm->isRedactAdsDataWithoutConsent() ? 'true' : 'false', \json_encode($consentModes));
        }
        return $output;
    }
    /**
     * Get the cookie name for the consent decision.
     *
     * @param string $suffix See also constants starting with `COOKIE_NAME_SUFFIX_`
     */
    public function getCookieName($suffix = '')
    {
        $revision = $this->getCookieConsentManagement()->getRevision()->getPersistence();
        $implicitString = $revision->getContextVariablesString(\true);
        $contextString = $revision->getContextVariablesString();
        return self::COOKIE_NAME_USER_PREFIX . (empty($implicitString) ? '' : '-' . $implicitString) . (empty($contextString) ? '' : '-' . $contextString) . $suffix;
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
