<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\consent\Consent;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\consent\Transaction;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\services\Service;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\ServiceTemplate;
/**
 * Abstract implementation of the settings for misc consent settings (e.g. duration of consent management cookie
 * which saves the decision of the user).
 * @internal
 */
abstract class AbstractConsent extends BaseSettings
{
    const CUSTOM_BYPASS_BANNER_LESS_CONSENT = 'bannerless';
    /**
     * A list of predefined lists for e.g. `GDPR` considered as secury country for data processing in unsafe countries.
     */
    const PREDEFINED_DATA_PROCESSING_IN_SAFE_COUNTRIES_LISTS = [
        // EU: https://reciprocitylabs.com/resources/what-countries-are-covered-by-gdpr/
        // EEA: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:European_Economic_Area_(EEA)
        'GDPR' => ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'],
        'DSG' => ['CH'],
        'GDPR+DSG' => [],
        'ADEQUACY_EU' => ['AD', 'AR', 'CA', 'FO', 'GG', 'IL', 'IM', 'JP', 'JE', 'NZ', 'KR', 'CH', 'GB', 'UY', 'US'],
        'ADEQUACY_CH' => ['DE', 'AD', 'AR', 'AT', 'BE', 'BG', 'CA', 'CY', 'HR', 'DK', 'ES', 'EE', 'FI', 'FR', 'GI', 'GR', 'GG', 'HU', 'IM', 'FO', 'IE', 'IS', 'IL', 'IT', 'JE', 'LV', 'LI', 'LT', 'LU', 'MT', 'MC', 'NO', 'NZ', 'NL', 'PL', 'PT', 'CZ', 'RO', 'GB', 'SK', 'SI', 'SE', 'UY', 'US'],
    ];
    const AGE_NOTICE_COUNTRY_AGE_MAP = ['INHERIT' => 0, 'GDPR' => 16, 'BE' => 13, 'DK' => 13, 'EE' => 13, 'FI' => 13, 'IS' => 13, 'LV' => 13, 'NO' => 13, 'PT' => 13, 'SE' => 13, 'MT' => 13, 'AT' => 14, 'BG' => 14, 'CY' => 14, 'IT' => 14, 'LT' => 14, 'ES' => 14, 'CZ' => 15, 'FR' => 15, 'GR' => 15, 'SI' => 15, 'DE' => 16, 'HR' => 16, 'HU' => 16, 'LI' => 16, 'LU' => 16, 'NL' => 16, 'PL' => 16, 'RO' => 16, 'SK' => 16, 'IE' => 16, 'CH' => 13];
    const FAILED_CONSENT_DOCUMENTATION_HANDLING_OPTIMISTIC = 'optimistic';
    const FAILED_CONSENT_DOCUMENTATION_HANDLING_ESSENTIALS_ONLY = 'essentials';
    const FAILED_CONSENT_DOCUMENTATION_HANDLINGS = [self::FAILED_CONSENT_DOCUMENTATION_HANDLING_OPTIMISTIC, self::FAILED_CONSENT_DOCUMENTATION_HANDLING_ESSENTIALS_ONLY];
    /**
     * Search the coding for difference.
     */
    const COOKIE_VERSION_1 = 1;
    const COOKIE_VERSION_2 = 2;
    const COOKIE_VERSION_3 = 3;
    const DEFAULT_COOKIE_VERSION = self::COOKIE_VERSION_3;
    /**
     * Check if bots should acceppt all cookies automatically.
     *
     * @return boolean
     */
    public abstract function isAcceptAllForBots();
    /**
     * Check if "Do not Track" header is respected.
     *
     * @return boolean
     */
    public abstract function isRespectDoNotTrack();
    /**
     * Get the behavior what should be done when documentating the consent fails. See als `FAILED_CONSENT_HANDLINGS`.
     *
     * @return string
     */
    public abstract function getFailedConsentDocumentationHandling();
    /**
     * Check if IPs should be saved in plain in database.
     *
     * @return boolean
     */
    public abstract function isSaveIpEnabled();
    /**
     * Check if age notice hint is enabled
     *
     * @return boolean
     */
    public abstract function isAgeNoticeEnabled();
    /**
     * Check if banner less consent is enabled.
     *
     * @return boolean
     */
    public abstract function isBannerLessConsent();
    /**
     * Get the page IDs where the banner less consent should be shown.
     *
     * @return int[]
     */
    public abstract function getBannerLessConsentShowOnPageIds();
    /**
     * Get the configured age limit for the age notice in raw format.
     *
     * @return string|int Can be an integer or `"INHERIT"` string
     */
    public abstract function getAgeNoticeAgeLimitRaw();
    /**
     * Check if list-services notice hint is enabled
     *
     * @return boolean
     */
    public abstract function isListServicesNoticeEnabled();
    /**
     * Get the cookie duration for the consent cookies in days.
     *
     * @return int
     */
    public abstract function getCookieDuration();
    /**
     * Get the cookie version for the consent cookies.
     *
     * @return int
     */
    public abstract function getCookieVersion();
    /**
     * Get the consent duration in months.
     *
     * @return int
     */
    public abstract function getConsentDuration();
    /**
     * Check if data processing in unsafe countries is enabled.
     *
     * @return boolean
     */
    public abstract function isDataProcessingInUnsafeCountries();
    /**
     * Set the cookie version for the consent cookies.
     *
     * @param int $version
     */
    public abstract function setCookieVersion($version);
    /**
     * Get the configured age limit for the age notice.
     *
     * @return int
     */
    public function getAgeNoticeAgeLimit()
    {
        $option = $this->getAgeNoticeAgeLimitRaw();
        $operatorCountry = $this->getSettings()->getGeneral()->getOperatorCountry();
        $defaultAge = self::AGE_NOTICE_COUNTRY_AGE_MAP['GDPR'];
        if ($option === 'INHERIT') {
            return self::AGE_NOTICE_COUNTRY_AGE_MAP[$operatorCountry] ?? $defaultAge;
        }
        return self::AGE_NOTICE_COUNTRY_AGE_MAP[$option] ?? $defaultAge;
    }
    /**
     * Calculate configured services which are processing data in unsafe countries.
     */
    public function calculateServicesWithDataProcessingInUnsafeCountries()
    {
        $tcf = $this->getSettings()->getTcf();
        $groups = $this->getSettings()->getGeneral()->getServiceGroups();
        $tcfVendorConfigurations = $tcf->getVendorConfigurations();
        $safeCountries = [];
        foreach (self::PREDEFINED_DATA_PROCESSING_IN_SAFE_COUNTRIES_LISTS as $listCountries) {
            $safeCountries = \array_merge($safeCountries, $listCountries);
        }
        $candidates = [];
        foreach ($groups as $group) {
            foreach ($group->getItems() as $service) {
                $unsafeCountries = Service::calculateUnsafeCountries($service->getDataProcessingInCountries(), $service->getDataProcessingInCountriesSpecialTreatments());
                if (\count($unsafeCountries) > 0) {
                    $candidates[] = ['unsafeCountries' => $unsafeCountries, 'name' => $service->getName()];
                }
            }
        }
        if ($tcf->isActive()) {
            $vendorIds = [];
            foreach ($tcfVendorConfigurations as $configuration) {
                $vendorId = $configuration->getVendorId();
                $unsafeCountries = Service::calculateUnsafeCountries($configuration->getDataProcessingInCountries(), $configuration->getDataProcessingInCountriesSpecialTreatments());
                if (\count($unsafeCountries) > 0) {
                    $candidates[] = ['unsafeCountries' => $unsafeCountries, 'name' => $vendorId, 'tcf' => \true];
                    $vendorIds[] = $vendorId;
                }
            }
            // Read TCF vendor names
            if (\count($vendorIds) > 0) {
                $vendors = $tcf->getGvl()->vendors(['in' => $vendorIds])['vendors'];
                foreach ($candidates as $key => $candidate) {
                    if (isset($candidate['tcf'])) {
                        $candidates[$key]['name'] = $vendors[$candidate['name']]['name'];
                    }
                }
            }
        }
        return $candidates;
    }
    /**
     * Calculate if the bannerless consent check should be enabled.
     *
     * @return array
     */
    public function calculateBannerlessConsentChecks()
    {
        $groups = $this->getSettings()->getGeneral()->getServiceGroups();
        $contentBlocker = $this->getSettings()->getGeneral()->getBlocker();
        $result = ['essential' => [], 'legalBasisLegitimateInterest' => [], 'legalBasisConsentWithoutVisualContentBlocker' => []];
        foreach ($groups as $group) {
            foreach ($group->getItems() as $service) {
                $legalBasis = $service->getLegalBasis();
                $isEssential = $group->isEssential();
                // Check if the service is part of a visual content blocker
                $visualContentBlocker = [];
                foreach ($contentBlocker as $blocker) {
                    if ($blocker->isVisual() && \in_array($service->getId(), $blocker->getServices(), \true)) {
                        $visualContentBlocker[] = ['name' => $blocker->getName(), 'id' => $blocker->getId()];
                    }
                }
                $row = ['name' => $service->getName(), 'id' => $service->getId(), 'groupId' => $group->getId()];
                if ($isEssential) {
                    $result['essential'][] = $row;
                } elseif ($legalBasis === ServiceTemplate::LEGAL_BASIS_CONSENT && \count($visualContentBlocker) === 0) {
                    $result['legalBasisConsentWithoutVisualContentBlocker'][] = $row;
                } elseif ($legalBasis === ServiceTemplate::LEGAL_BASIS_LEGITIMATE_INTEREST) {
                    $result['legalBasisLegitimateInterest'][] = $row;
                }
            }
        }
        return $result;
    }
    /**
     * If bannerless consent is enabled, we can create a transaction which we can instantly use to `Consent#commit` so
     * the user does not see any cookie banner.
     *
     * @param Consent $consent The current consent
     * @param Transaction $transaction A prepared transaction which has `userAgent`, `ipAddress` filled
     * @param int $currentPageId The current page ID which is used to get the page ID from the `bannerLessConsentShowOnPageIds` array
     * @param string $defaultTcfString The default TCF string which is used if no TCF string is provided
     */
    public function probablyCreateBannerlessConsentTransaction($consent, $transaction, $currentPageId, $defaultTcfString)
    {
        if ($this->isBannerLessConsent()) {
            $showOnPageIds = $this->getBannerLessConsentShowOnPageIds();
            if (\in_array($currentPageId, $showOnPageIds, \true)) {
                return \false;
            }
            $transaction->setCustomBypass(self::CUSTOM_BYPASS_BANNER_LESS_CONSENT);
            $transaction->setButtonClicked('implicit_essential');
            $transaction->setTcfString(null);
            $transaction->setGcmConsent([]);
            if (empty($transaction->getTcfString()) && $this->getSettings()->getTcf()->isActive() && !empty($defaultTcfString)) {
                $transaction->setTcfString($defaultTcfString);
            }
            if (empty($consent->getUuid())) {
                $transaction->setDecision($consent->sanitizeDecision('essentials'));
            } else {
                $transaction->setDecision($consent->optInOrOptOutExistingDecision($consent->getDecision(), 'essentials', 'optIn'));
            }
            return \true;
        }
        return \false;
    }
}
