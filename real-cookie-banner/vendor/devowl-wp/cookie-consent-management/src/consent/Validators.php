<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\consent;

/**
 * Validators for the consent. We never trust data coming from a client.
 * @internal
 */
class Validators
{
    /**
     * Check if the passed `uuid` is a valid UUID.
     *
     * @param string $uuid
     * @return bool
     */
    public static function isValidUuid($uuid)
    {
        return \is_string($uuid) && \preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/', $uuid) === 1;
    }
    /**
     * Check if the passed `date` is a valid ISO date coming from `new Date().toISOString()`.
     *
     * @param string $date
     * @return bool
     */
    public static function isIsoDate($date)
    {
        return \is_string($date) && \preg_match('/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z$/', $date) === 1;
    }
    /**
     * Check if the passed `buttonClicked` is a string with valid characters `[a-z_]`. In general, we do not
     * provide a set of available button names as this is done through the UI.
     *
     * @param string $buttonClicked
     * @return string
     */
    public static function sanitizeButtonClicked($buttonClicked)
    {
        if (!\is_string($buttonClicked) || !\preg_match('/^[a-z_]+$/', $buttonClicked)) {
            return 'none';
        }
        return $buttonClicked;
    }
    /**
     * Check if the passed `uiView` is a string and is either `initial` or `change`.
     *
     * @param string $uiView
     * @return string
     */
    public static function sanitizeUiView($uiView)
    {
        if (!\is_string($uiView) || !\in_array($uiView, ['initial', 'change'], \true)) {
            return null;
        }
        return $uiView;
    }
    /**
     * Currently, the passed `tcfString` is only checked if it is a string.
     *
     * @param string $tcfString
     * @return string
     */
    public static function sanitizeTcfString($tcfString)
    {
        if (!\is_string($tcfString)) {
            return '';
        }
        return $tcfString;
    }
    /**
     * Check if the passed array contains only `string` values.
     *
     * @param array|string $gcmConsent
     * @return array
     */
    public static function sanitizeGcmConsent($gcmConsent)
    {
        if (!\is_array($gcmConsent)) {
            return [];
        }
        foreach ($gcmConsent as $key => $value) {
            if (!\is_string($value)) {
                unset($gcmConsent[$key]);
            }
        }
        return $gcmConsent;
    }
}
