<?php

// namespace DevOwl\RealCookieBanner\Vendor; // excluded from scope due to API exposing

use DevOwl\RealCookieBanner\MyConsent;
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
     * **Since 5.0.4**: You can also check for consent by service unique name:
     *
     * ```php
     * $consent = function_exists('wp_rcb_consent_given') ? wp_rcb_consent_given("google-analytics-ua") : true;
     * ```
     *
     * **Attention:** Do not use this function if you can get the conditional consent into your frontend
     * coding and use instead the `window.consentApi`!
     *
     * The return value is an array with the following keys:
     *
     * - `cookie`: If the website operator has defined a cookie or service with the information you requested, it will be returned here.
     * - `consentGiven`: This variable defines whether a valid consent has generally been given. This does not refer to the technical information
     *   that you have passed as arguments. For example: If the user clicks "Continue without Consent", this variable is set to `true`.
     *   The variable is `false` if the user has not yet given consent and the cookie banner is displayed.
     * - `cookieOptIn`: This variable defines whether the technical information has been accepted.
     *   **Attention:** This variable is also `true` if no service (see `cookie`) is found.
     *
     * @param string|int $typeOrIdOrUniqueName
     * @param string $name
     * @param string $host
     * @return array
     * @since 2.11.1
     * @internal
     */
    function wp_rcb_consent_given($typeOrIdOrUniqueName, $name = null, $host = null)
    {
        return MyConsent::getInstance()->getCurrentUser()->hasConsent($typeOrIdOrUniqueName, $name, $host);
    }
}
