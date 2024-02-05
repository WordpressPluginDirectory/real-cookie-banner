<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\frontend;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\CookieConsentManagement;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\AbstractCountryBypass;
use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\Iso3166OneAlpha2;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\services\ManagerMiddleware;
/**
 * Functions for the frontend (e.g. generating "Code on page load" HTML output).
 * @internal
 */
class Frontend
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
        $gcmOutput = $this->generateGoogleConsentModeCodeOnPageLoad($uniqueNames);
        if (!empty($gcmOutput)) {
            $output[] = \is_callable($outputModifier) ? $outputModifier($gcmOutput, null) : $gcmOutput;
        }
        return $output;
    }
    /**
     * Generate the code on page load for Google Consent Mode.
     *
     * @param string[] $uniqueNames Additional unique names which should be sent to Google beside e.g. `ad_storage`
     */
    protected function generateGoogleConsentModeCodeOnPageLoad($uniqueNames = [])
    {
        $settings = $this->getCookieConsentManagement()->getSettings();
        $setCookiesViaManager = $settings->getGeneral()->getSetCookiesViaManager();
        $countryBypass = $settings->getCountryBypass();
        $gcm = $settings->getGoogleConsentMode();
        $output = '';
        if ($gcm->isEnabled()) {
            $denied = 'denied';
            $granted = 'granted';
            $consentTypes = \array_merge(['ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage', 'functionality_storage', 'personalization_storage', 'security_storage'], $setCookiesViaManager === ManagerMiddleware::SET_COOKIES_AFTER_CONSENT_VIA_GOOGLE_TAG_MANAGER_WITH_GCM ? $uniqueNames : []);
            $defaults = \array_fill_keys($consentTypes, $denied);
            // Implicit consent for users from third countries which automatically accept all cookies
            $regionGtag = '';
            if ($countryBypass->isActive() && $countryBypass->getType() === AbstractCountryBypass::TYPE_ALL) {
                $regionGtag = \sprintf("\ngtag('consent', 'default', %s );", \json_encode(\array_merge(\array_fill_keys($consentTypes, $granted), ['region' => \array_values(
                    // TODO: extract from external package
                    \array_diff(\array_keys(Iso3166OneAlpha2::getCodes()), $countryBypass->getCountries())
                )])));
            }
            $output = \sprintf("<script>window.gtag && (()=>{gtag('set', 'url_passthrough', %s);\ngtag('set', 'ads_data_redaction', %s);%s\ngtag('consent', 'default', %s);})()</script>", $gcm->isCollectAdditionalDataViaUrlParameters() ? 'true' : 'false', $gcm->isRedactAdsDataWithoutConsent() ? 'true' : 'false', $regionGtag, \json_encode($defaults));
        }
        return $output;
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
