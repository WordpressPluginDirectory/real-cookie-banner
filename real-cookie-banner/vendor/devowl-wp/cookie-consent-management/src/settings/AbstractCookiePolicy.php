<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings;

/**
 * Abstract implementation of the settings for the cookie policy.
 * @internal
 */
abstract class AbstractCookiePolicy extends BaseSettings
{
    /**
     * Instruction text.
     *
     * @return string
     */
    public abstract function getInstructionText();
    /**
     * Headline text for the table of contents.
     *
     * @return string
     */
    public abstract function getHeadlineTableOfContents();
    /**
     * Headline text for the website operator section.
     *
     * @return string
     */
    public abstract function getHeadlineControllerOfWebsite();
    /**
     * Headline text for diff to privacy policy section.
     *
     * @return string
     */
    public abstract function getHeadlineDiffToPrivacyPolicy();
    /**
     * Headline text for explaining cookie and cookie-like technology section.
     *
     * @return string
     */
    public abstract function getHeadlineCookieTechnology();
    /**
     * Legal explanation of cookies.
     *
     * @return string
     */
    public abstract function getHeadlineLegalBasis();
    /**
     * Information about the rights of the website visitor and function for viewing the history of consent, changing consent and revoking consent.
     *
     * @return string
     */
    public abstract function getHeadlineRightsOfTheVisitor();
    /**
     * Explanation of how to delete cookies in your browser (including 3rd party cookies that RCB cannot delete; no explanation per browser, but only generally necessary, about the browser manual).
     *
     * @return string
     */
    public abstract function getHeadlineManageCookies();
    /**
     * Types of cookies and their purposes.
     *
     * @return string
     */
    public abstract function getHeadlineTypesOfCookies();
    /**
     * Who can set cookies on websites?
     *
     * @return string
     */
    public abstract function getHeadlineCookieOrigin();
    /**
     * List of all services with their details.
     *
     * @return string
     */
    public abstract function getHeadlineListOfServices();
    /**
     * Content text for diff to privacy policy section.
     *
     * @return string
     */
    public abstract function getContentDiffToPrivacyPolicy();
    /**
     * Content text for cookie and cookie-like technology section.
     *
     * @return string
     */
    public abstract function getContentCookieTechnology();
    /**
     * Content text for legal basis section for the GDPR / ePrivacy Directive.
     *
     * @return string
     */
    public abstract function getContentLegalBasisGdpr();
    /**
     * Content text for legal basis section for the DSG (Switzerland).
     *
     * @return string
     */
    public abstract function getContentLegalBasisDsg();
    /**
     * Content text for rights of visitor section.
     *
     * @return string
     */
    public abstract function getContentRightsOfVisitor();
    /**
     * Content text for how to manage cookies section.
     *
     * @return string
     */
    public abstract function getContentManageCookies();
    /**
     * Content text for the types of cookies (list categories of cookies like Essential, Marketing, Functional, Statistics, ...).
     * You should also make use of `isShowCustomGroups()` to show an extra paragraph for custom groups.
     *
     * @return string
     */
    public abstract function getContentTypesOfCookies();
    /**
     * When there are custom groups created beside Essential, Marketing, Functional, Statistics, also show a static text about those groups.
     *
     * @return boolean
     */
    public abstract function isShowCustomGroups();
    /**
     * Content text for who is setting cookies section.
     *
     * @return string
     */
    public abstract function getContentCookiesOrigin();
    /**
     * In this text field, you can make additional additions to the cookie policy that do not fit any of the previously mentioned topics.
     *
     * Use `{{dateOfUpdate}}` as a placeholder to show date of the cookie policy when it was last changed.
     *
     * @return string
     */
    public function getAdditionalContent()
    {
        return '';
    }
    /**
     * Get label texts for the website operator details.
     *
     * @return array
     */
    public abstract function getControllerOfWebsiteLabels();
    /**
     * Get label texts for the table of list of services.
     *
     * @return array
     */
    public abstract function getListOfServicesTableColumnLabels();
    /**
     * Get language texts for the GridJS instance which formats the cookie policy to a nice table.
     *
     * @see https://github.com/grid-js/gridjs/blob/9a6a53eacdc019c01decfdfa8e77cb800922de3d/src/i18n/en_US.ts#L1C16-L22C2
     * @return array
     */
    public abstract function getGridJsLanguageTexts();
    /**
     * Render the GridJs table in dark mode.
     *
     * @return boolean
     */
    public abstract function isTableDarkMode();
}
