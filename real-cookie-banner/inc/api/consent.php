<?php

// namespace DevOwl\RealCookieBanner\Vendor; // excluded from scope due to API exposing

use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Utils;
use DevOwl\RealCookieBanner\MyConsent;
use DevOwl\RealCookieBanner\settings\Cookie;
use DevOwl\RealCookieBanner\settings\General;
use DevOwl\RealCookieBanner\settings\Revision;
use DevOwl\RealCookieBanner\Utils as RealCookieBannerUtils;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
if (!\function_exists('wp_rcb_consent_given')) {
    /**
     * Check if a given technical information (e.g. HTTP Cookie, LocalStorage, ...) has a consent:
     *
     * - When a technical information exists in defined cookies, the Promise is only resolved after given consent
     * - When no technical information exists, the Promise is immediate resolved
     *
     * ```php
     * $consent = function_exists('wp_rcb_consent_given') ? wp_rcb_consent_given("http", "_twitter_sess", ".twitter.com") : true;
     * ```
     *
     * You can also check for consent by cookie ID (ID in `wp_posts`, post id):
     *
     * ```php
     * $consent = function_exists('wp_rcb_consent_given') ? wp_rcb_consent_given(15) : true;
     * ```
     *
     * **Attention:** Do not use this function if you can get the conditional consent into your frontend
     * coding and use instead the `window.consentApi`!
     *
     * @param string|int $typeOrId
     * @param string $name
     * @param string $host
     * @since 2.11.1
     * @internal
     */
    function wp_rcb_consent_given($typeOrId, $name = null, $host = null)
    {
        if (!General::getInstance()->isBannerActive()) {
            return ['cookie' => null, 'consentGiven' => \false, 'cookieOptIn' => \true];
        }
        // Find matching cookie
        $found = [];
        /**
         * All cookies.
         *
         * @var WP_Post[]
         */
        $allCookies = [];
        $groups = \wp_rcb_service_groups();
        foreach ($groups as $group) {
            $groupCookies = \wp_rcb_services_by_group($group->term_id);
            $allCookies = \array_merge($allCookies, $groupCookies);
        }
        foreach ($allCookies as $cookie) {
            if (\is_int($typeOrId)) {
                if ($cookie->ID === $typeOrId) {
                    $found[] = ['cookie' => $cookie, 'relevance' => 10];
                }
            } else {
                $technicalDefinitions = $cookie->metas[Cookie::META_NAME_TECHNICAL_DEFINITIONS] ?? [];
                if (\count($technicalDefinitions) > 0) {
                    // Check if technical information matches
                    foreach ($technicalDefinitions as $key => $td) {
                        $regex = Utils::createRegexpPatternFromWildcardName($td['name']);
                        \preg_match_all($regex, $name, $matches, \PREG_SET_ORDER, 0);
                        if ($td['type'] === $typeOrId && ($td['name'] === $name || !empty($matches)) && ($td['host'] === $host || $host === '*')) {
                            $found[] = [
                                'cookie' => $cookie,
                                // Create a priority by "relevance" inside the technical definitions
                                // This is the case if e.g. another Cookie consumes the same technical cookie
                                // Example: Vimeo uses Facebook Pixel, too
                                'relevance' => \count($technicalDefinitions) + $key + 1,
                            ];
                        }
                    }
                }
            }
        }
        $already = MyConsent::getInstance()->getCurrentUser();
        if (\count($found) > 0) {
            \array_multisort(\array_column($found, 'relevance'), \SORT_DESC, $found);
            $relevantCookie = $found[0]['cookie'];
            if ($already && Revision::getInstance()->getCurrentHash() === $already['cookie_revision']) {
                $consentCookieIds = RealCookieBannerUtils::array_flatten($already['decision_in_cookie']);
                if (\in_array($relevantCookie->ID, $consentCookieIds, \true)) {
                    return ['cookie' => $relevantCookie, 'consentGiven' => \true, 'cookieOptIn' => \true];
                } else {
                    return ['cookie' => $relevantCookie, 'consentGiven' => \true, 'cookieOptIn' => \false];
                }
            } else {
                return ['cookie' => $relevantCookie, 'consentGiven' => \false, 'cookieOptIn' => \false];
            }
        } else {
            return ['cookie' => null, 'consentGiven' => $already !== \false, 'cookieOptIn' => \true];
        }
    }
}
