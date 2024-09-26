<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\Utils;
use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\Iso3166OneAlpha2;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\services\ManagerMiddleware;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\ServiceTemplate;
/**
 * Abstract implementation of the settings for the Google Consent Mode compatibility.
 * @internal
 */
abstract class AbstractGoogleConsentMode extends BaseSettings
{
    /**
     * Check if compatibility is enabled.
     *
     * @return boolean
     */
    public abstract function isEnabled();
    /**
     * Check if show recommendations for using Google services without consent is enabled.
     *
     * @return boolean
     */
    public abstract function isShowRecommandationsWithoutConsent();
    /**
     * Check if collect additional data via URL parameters is enabled.
     *
     * @return boolean
     */
    public abstract function isCollectAdditionalDataViaUrlParameters();
    /**
     * Check if collect additional data via URL parameters is enabled.
     *
     * @return boolean
     */
    public abstract function isRedactAdsDataWithoutConsent();
    /**
     * Naming of requested consent types in first view.
     *
     * @return boolean
     */
    public abstract function isListPurposes();
    /**
     * Get the consent modes as array.
     */
    public function getConsentModes()
    {
        $result = [];
        if ($this->isEnabled()) {
            $setCookiesViaManager = $this->getSettings()->getGeneral()->getSetCookiesViaManager();
            $countryBypass = $this->getSettings()->getCountryBypass();
            $denied = 'denied';
            $granted = 'granted';
            $uniqueNames = [];
            if ($setCookiesViaManager === ManagerMiddleware::SET_COOKIES_AFTER_CONSENT_VIA_GOOGLE_TAG_MANAGER_WITH_GCM) {
                foreach ($this->getSettings()->getGeneral()->getServiceGroups() as $group) {
                    foreach ($group->getItems() as $service) {
                        $uniqueName = $service->getUniqueName();
                        if (!empty($uniqueName) && $uniqueName !== ManagerMiddleware::IDENTIFIER_GOOGLE_TAG_MANAGER) {
                            $uniqueNames[] = $uniqueName;
                        }
                    }
                }
            }
            $consentTypes = \array_merge(['ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage', 'functionality_storage', 'personalization_storage', 'security_storage'], $uniqueNames);
            $defaults = \array_fill_keys($consentTypes, $denied);
            // Implicit consent for users from third countries which automatically accept all cookies
            if ($countryBypass->isActive() && $countryBypass->getType() === AbstractCountryBypass::TYPE_ALL) {
                $result[] = \array_merge(\array_fill_keys($consentTypes, $granted), ['wait_for_update' => 1000, 'region' => \array_values(
                    // TODO: extract from external package
                    \array_diff(\array_keys(Iso3166OneAlpha2::getCodes()), $countryBypass->getCountries())
                )]);
            }
            $result[] = \array_merge($defaults, ['wait_for_update' => 1000]);
        }
        return $result;
    }
    /**
     * Calculate some recommendations depending on the available services and if GCM is active or not.
     *
     * @param boolean $dismissedNoConsentTypes
     * @param int[] $dismissedNoLegitimateInterest
     * @param string[] $dismissedRequiringGcmActive
     */
    public function calculateRecommandations($dismissedNoConsentTypes = \false, $dismissedNoLegitimateInterest = [], $dismissedRequiringGcmActive = [])
    {
        $groups = $this->getSettings()->getGeneral()->getServiceGroups();
        $isEnabled = $this->isEnabled();
        $isShowRecommandationsWithoutConsent = $this->isShowRecommandationsWithoutConsent();
        $result = ['missingConsentTypes' => [], 'noLegitimateInterest' => [], 'requiresGoogleConsentModeGa' => null, 'requiresGoogleConsentModeAdsConversionTracking' => null];
        foreach ($groups as $group) {
            foreach ($group->getItems() as $service) {
                // Calculate services with missing consent types
                $isUsingGtag = \preg_match('/gtag(\\(|=)/m', \join(' ', [$service->getCodeOptIn(), $service->getCodeOptOut(), $service->getCodeOnPageLoad()])) > 0;
                $consentTypes = $service->getGoogleConsentModeConsentTypes();
                $uniqueName = $service->getUniqueName();
                $relevantServiceData = ['id' => $service->getId(), 'groupId' => $group->getId(), 'title' => $service->getName()];
                if ($isEnabled) {
                    // Compatibility with WPML/PolyLang identifiers: https://regex101.com/r/Tn2mlt/1
                    $isTagManagerService = \preg_match('/^(gtm|mtm)(-\\d+$)?/m', $uniqueName, $matches) > 0;
                    if (!$dismissedNoConsentTypes && \count($consentTypes) === 0 && $isUsingGtag && !$isTagManagerService) {
                        $result['missingConsentTypes'][] = $relevantServiceData;
                    }
                    if ($isUsingGtag && $isShowRecommandationsWithoutConsent && $service->getLegalBasis() === ServiceTemplate::LEGAL_BASIS_CONSENT && !\in_array($service->getId(), $dismissedNoLegitimateInterest, \true) && !$isTagManagerService) {
                        $result['noLegitimateInterest'][] = $relevantServiceData;
                    }
                } else {
                    if (!\in_array('requiresGoogleConsentModeGa', $dismissedRequiringGcmActive, \true) && Utils::endsWith($uniqueName, 'analytics-4') || Utils::endsWith($uniqueName, 'ga-4')) {
                        $result['requiresGoogleConsentModeGa'] = $relevantServiceData;
                    }
                    if (!\in_array('requiresGoogleConsentModeAdsConversionTracking', $dismissedRequiringGcmActive, \true) && Utils::startsWith($uniqueName, 'google-ads-conversion-tracking')) {
                        $result['requiresGoogleConsentModeAdsConversionTracking'] = $relevantServiceData;
                    }
                }
            }
        }
        return $result;
    }
}
