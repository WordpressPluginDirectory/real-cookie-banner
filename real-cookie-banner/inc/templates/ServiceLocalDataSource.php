<?php

namespace DevOwl\RealCookieBanner\templates;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\frontend\Frontend;
use DevOwl\RealCookieBanner\comp\language\Hooks;
use DevOwl\RealCookieBanner\settings\Consent;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\consumer\ServiceCloudConsumer;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\datasources\LocalDataSource;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\ServiceTemplate;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Local data source for the template consumer which adds the "Real Cookie Banner" template
 * to our data sources as this is never read through e.g. the service cloud.
 * @internal
 */
class ServiceLocalDataSource extends LocalDataSource
{
    /**
     * C'tor.
     *
     * @param ServiceCloudConsumer $consumer
     */
    public function __construct($consumer)
    {
        parent::__construct($consumer);
    }
    /**
     * "Real Cookie Banner" template.
     */
    public function createDefaults()
    {
        $s = new ServiceTemplate($this->getConsumer());
        $cookieDuration = Consent::getInstance()->getCookieDuration();
        $cookieDuration = $cookieDuration === \false ? Consent::DEFAULT_COOKIE_DURATION : $cookieDuration;
        $currentTemporaryTextDomain = Hooks::getInstance()->getTemporaryTextDomain();
        $s->version = 2;
        $s->createdAt = \strtotime('February 6th, 2023 7:47 AM');
        $s->identifier = 'real-cookie-banner';
        $s->logoUrl = \plugins_url('public/images/logos/real-cookie-banner.svg', RCB_FILE);
        $s->isHidden = \true;
        $s->headline = 'Real Cookie Banner';
        $s->name = 'Real Cookie Banner';
        $s->group = 'essential';
        $s->purpose = \__('Real Cookie Banner asks website visitors for consent to set cookies and process personal data. For this purpose, a UUID (pseudonymous identification of the user) is assigned to each website visitor, which is valid until the cookie expires to store the consent. Cookies are used to test whether cookies can be set, to store reference to documented consent, to store which services from which service groups the visitor has consented to, and, if consent is obtained under the Transparency & Consent Framework (TCF), to store consent in TCF partners, purposes, special purposes, features and special features. As part of the obligation to disclose according to GDPR, the collected consent is fully documented. This includes, in addition to the services and service groups to which the visitor has consented, and if consent is obtained according to the TCF standard, to which TCF partners, purposes and features the visitor has consented, all cookie banner settings at the time of consent as well as the technical circumstances (e.g. size of the displayed area at the time of consent) and the user interactions (e.g. clicking on buttons) that led to consent. Consent is collected once per language.', Hooks::TD_FORCED);
        if ($currentTemporaryTextDomain !== null && \strpos($currentTemporaryTextDomain->getLocale(), 'en') !== 0) {
            $s->consumerData['isUntranslated'] = \strpos($s->purpose, 'Real Cookie Banner asks website visitors for consent') === 0;
        } else {
            $s->consumerData['isUntranslated'] = \false;
        }
        $s->legalBasis = ServiceTemplate::LEGAL_BASIS_LEGAL_REQUIREMENT;
        $s->isProviderCurrentWebsite = \true;
        $s->technicalDefinitions = [['type' => 'http', 'name' => Frontend::COOKIE_NAME_USER_PREFIX . '*', 'host' => 'main+subdomains', 'duration' => $cookieDuration, 'durationUnit' => 'd', 'isSessionDuration' => \false, 'purpose' => \__('Unique identifier for the consent, but not for the website visitor. Revision hash for settings of cookie banner (texts, colors, features, service groups, services, content blockers etc.). IDs for consented services and service groups.', Hooks::TD_FORCED)], ['type' => 'http', 'name' => Frontend::COOKIE_NAME_USER_PREFIX . '*-tcf', 'host' => 'main+subdomains', 'duration' => $cookieDuration, 'durationUnit' => 'd', 'isSessionDuration' => \false, 'purpose' => \__('Consents collected under TCF stored in TC String format, including TCF vendors, purposes, special purposes, features, and special features.', Hooks::TD_FORCED)], ['type' => 'http', 'name' => Frontend::COOKIE_NAME_USER_PREFIX . '*-gcm', 'host' => 'main+subdomains', 'duration' => $cookieDuration, 'durationUnit' => 'd', 'isSessionDuration' => \false, 'purpose' => \__('Consents into consent types (purposes)  collected under Google Consent Mode stored for all Google Consent Mode compatible services.', Hooks::TD_FORCED)], ['type' => 'http', 'name' => Frontend::COOKIE_NAME_USER_PREFIX . '-test', 'host' => 'main+subdomains', 'duration' => $cookieDuration, 'durationUnit' => 'd', 'isSessionDuration' => \false, 'purpose' => \__('Cookie set to test HTTP cookie functionality. Deleted immediately after test.', Hooks::TD_FORCED)], ['type' => 'local', 'name' => Frontend::COOKIE_NAME_USER_PREFIX . '*', 'host' => 'current+protocol', 'duration' => '1', 'durationUnit' => 'd', 'isSessionDuration' => \false, 'purpose' => \__('Unique identifier for the consent, but not for the website visitor. Revision hash for settings of cookie banner (texts, colors, features, service groups, services, content blockers etc.). IDs for consented services and service groups. Is only stored until consent is documented on the website server.', Hooks::TD_FORCED)], ['type' => 'local', 'name' => Frontend::COOKIE_NAME_USER_PREFIX . '*-tcf', 'host' => 'current+protocol', 'duration' => '1', 'durationUnit' => 'd', 'isSessionDuration' => \false, 'purpose' => \__('Consents collected under TCF stored in TC String format, including TCF vendors, purposes, special purposes, features, and special features. Is only stored until consent is documented on the website server.', Hooks::TD_FORCED)], ['type' => 'local', 'name' => Frontend::COOKIE_NAME_USER_PREFIX . '*-gcm', 'host' => 'current+protocol', 'duration' => '1', 'durationUnit' => 'd', 'isSessionDuration' => \false, 'purpose' => \__('Consents collected under Google Consent Mode stored in consent types (purposes) for all Google Consent Mode compatible services. Is only stored until consent is documented on the website server.', Hooks::TD_FORCED)], ['type' => 'local', 'name' => Frontend::COOKIE_NAME_USER_PREFIX . '-consent-queue*', 'host' => 'current+protocol', 'duration' => '1', 'durationUnit' => 'd', 'isSessionDuration' => \false, 'purpose' => \__('Local caching of selection in cookie banner until server documents consent; documentation periodic or at page switches attempted if server is unavailable or overloaded.', Hooks::TD_FORCED)]];
        $s->deleteTechnicalDefinitionsAfterOptOut = \false;
        $s->tier = 'free';
        $this->add($s);
    }
}
