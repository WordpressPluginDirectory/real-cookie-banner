<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\consent;

/**
 * A transaction simply describes a new consent.
 * @internal
 */
class Transaction
{
    /**
     * A set of accepted cookie groups + cookies or a predefined set like `all` or `essentials`.
     *
     * @var array|string
     */
    private $decision;
    /**
     * The IP address of the website visitor.
     *
     * @var string
     */
    private $ipAddress;
    /**
     * The user agent of the website visitor.
     *
     * @var string
     */
    private $userAgent;
    /**
     * Mark as DNT.
     *
     * @var boolean
     */
    private $markAsDoNotTrack = \false;
    /**
     * The clicked button in the cookie banner.
     *
     * @var string
     */
    private $buttonClicked;
    /**
     * The viewport width.
     *
     * @var int
     */
    private $viewPortWidth = 0;
    /**
     * The viewport height.
     *
     * @var int
     */
    private $viewPortHeight = 0;
    /**
     * Referer.
     *
     * @var string
     */
    private $referer;
    /**
     * If the consent came from a content blocker, the ID of the content blocker.
     *
     * @var int
     */
    private $blocker = 0;
    /**
     * Can be the ID of the blocker thumbnail itself, or in format of `{embedId}-{fileMd5}`.
     *
     * @var int|string
     */
    private $blockerThumbnail;
    /**
     * The reference to the consent ID of the source website (only for forwarded consents).
     *
     * @var int
     */
    private $forwarded = 0;
    /**
     * The UUID reference of the source website.
     *
     * @var string
     */
    private $forwardedUuid;
    /**
     * Determine if forwarded consent came through a content blocker.
     *
     * @var boolean
     */
    private $forwardedBlocker = \false;
    /**
     * TCF string.
     *
     * @var string
     */
    private $tcfString;
    /**
     * Google Consent Mode consent types.
     *
     * @var string[]
     */
    private $gcmConsent;
    /**
     * Allows to set a custom bypass which causes the banner to be hidden (e.g. Geolocation)
     *
     * @var string
     */
    private $customBypass;
    /**
     * The ISO string of `new Date().toISOString()` on client side which reflects the time of consent given (not persist time).
     *
     * @var string
     */
    private $createdClientTime;
    /**
     * Recorder JSON string for Replays.
     *
     * @var string
     */
    private $recorderJsonString;
    /**
     * Can be `initial` (the cookie banner pops up for first time with first and second layer or content blocker) or `change` (Change privacy settings). `null` indicates a UI was never visible.
     *
     * @var string
     */
    private $uiView;
    /**
     * The country of the website visitor. This is automatically calculated when you pass in an
     * IP address and you have enabled Geo Restriction (Country Bypass).
     *
     * @var string
     */
    private $userCountry;
    /**
     * When `false`, the newly added transaction will not return any `SetCookie` instances. Use this, if you just want to save / persist
     * a consent to the database but should not be updated on client side (e.g. delayed consents when server was not reachable).
     */
    private $setCookies = \true;
    /**
     * C'tor.
     *
     * @codeCoverageIgnore
     */
    public function __construct()
    {
        // Silence is golden.
    }
    /**
     * Set the decision.
     *
     * @param array|string $decision
     */
    public function setDecision($decision)
    {
        $this->decision = !\is_array($decision) && !\is_string($decision) ? null : $decision;
    }
    /**
     * Set the IP address.
     *
     * @param string $ipAddress
     */
    public function setIpAddress($ipAddress)
    {
        $this->ipAddress = !\is_string($ipAddress) ? null : $ipAddress;
    }
    /**
     * Set the user agent.
     *
     * @param string $userAgent
     */
    public function setUserAgent($userAgent)
    {
        $this->userAgent = !\is_string($userAgent) ? null : $userAgent;
    }
    /**
     * Set if the consent should be marked as Do Not Track.
     *
     * @param boolean $markAsDoNotTrack
     */
    public function setMarkAsDoNotTrack($markAsDoNotTrack)
    {
        $this->markAsDoNotTrack = !\is_bool($markAsDoNotTrack) ? \false : $markAsDoNotTrack;
    }
    /**
     * Set the button clicked.
     *
     * @param string $buttonClicked
     */
    public function setButtonClicked($buttonClicked)
    {
        $this->buttonClicked = Validators::sanitizeButtonClicked($buttonClicked);
    }
    /**
     * Set the viewport width and height.
     *
     * @param int $viewPortWidth
     * @param int $viewPortHeight
     */
    public function setViewPort($viewPortWidth, $viewPortHeight)
    {
        $this->viewPortWidth = !\is_int($viewPortWidth) && !\is_double($viewPortWidth) ? 0 : \intval($viewPortWidth);
        $this->viewPortHeight = !\is_int($viewPortHeight) && !\is_double($viewPortHeight) ? 0 : \intval($viewPortHeight);
    }
    /**
     * Set the referer.
     *
     * @param string $referer
     */
    public function setReferer($referer)
    {
        $this->referer = !\is_string($referer) || !\filter_var($referer, \FILTER_VALIDATE_URL) ? null : $referer;
    }
    /**
     * Set the blocker.
     *
     * @param int $blocker
     */
    public function setBlocker($blocker)
    {
        $this->blocker = !\is_int($blocker) && !\is_double($blocker) ? 0 : \intval($blocker);
    }
    /**
     * Set the blocker thumbnail.
     *
     * @param int|string $blockerThumbnail
     */
    public function setBlockerThumbnail($blockerThumbnail)
    {
        if (\is_int($blockerThumbnail) || \is_double($blockerThumbnail)) {
            $this->blockerThumbnail = \intval($blockerThumbnail);
        } elseif (\is_string($blockerThumbnail)) {
            $this->blockerThumbnail = $blockerThumbnail;
        } else {
            $this->blockerThumbnail = null;
        }
    }
    /**
     * Set the forwarded consent.
     *
     * @param int $forwarded
     * @param string $forwardedUuid
     * @param boolean $isForwardedBlocker
     */
    public function setForwarded($forwarded, $forwardedUuid, $isForwardedBlocker)
    {
        $this->forwarded = !\is_int($forwarded) && !\is_double($forwarded) ? 0 : \intval($forwarded);
        $this->forwardedUuid = !$this->forwarded || !\is_string($forwardedUuid) || empty($forwardedUuid) || !Validators::isValidUuid($forwardedUuid) ? null : $forwardedUuid;
        $this->forwardedBlocker = !\is_bool($isForwardedBlocker) ? \false : $isForwardedBlocker;
    }
    /**
     * Set the TCF string.
     *
     * @param string $tcfString
     */
    public function setTcfString($tcfString)
    {
        $this->tcfString = \is_null($tcfString) ? null : Validators::sanitizeTcfString($tcfString);
    }
    /**
     * Set the Google Consent Mode consent types.
     *
     * @param string[] $gcmConsent
     */
    public function setGcmConsent($gcmConsent)
    {
        $this->gcmConsent = \is_null($gcmConsent) ? null : Validators::sanitizeGcmConsent($gcmConsent);
    }
    /**
     * Set the custom bypass.
     *
     * @param string $customBypass
     */
    public function setCustomBypass($customBypass)
    {
        $this->customBypass = !\is_string($customBypass) ? null : $customBypass;
    }
    /**
     * Set the created client time.
     *
     * @param string $createdClientTime
     */
    public function setCreatedClientTime($createdClientTime)
    {
        $this->createdClientTime = !\is_string($createdClientTime) && !Validators::isIsoDate($createdClientTime) ? null : $createdClientTime;
    }
    /**
     * Set the recorder JSON string.
     *
     * @param string $recorderJsonString
     */
    public function setRecorderJsonString($recorderJsonString)
    {
        $this->recorderJsonString = !\is_string($recorderJsonString) ? null : $recorderJsonString;
    }
    /**
     * Set the UI view.
     *
     * @param string $uiView
     */
    public function setUiView($uiView)
    {
        $this->uiView = \is_null($uiView) ? null : Validators::sanitizeUiView($uiView);
    }
    /**
     * Set the user country.
     *
     * @param string $userCountry
     */
    public function setUserCountry($userCountry)
    {
        $this->userCountry = !\is_string($userCountry) ? null : $userCountry;
    }
    /**
     * Set if the consent should be set on cookies.
     *
     * @param boolean $setCookies
     */
    public function setSetCookies($setCookies)
    {
        $this->setCookies = !\is_bool($setCookies) ? \true : $setCookies;
    }
    /**
     * Get the decision.
     *
     * @return array|string
     */
    public function getDecision()
    {
        return $this->decision;
    }
    /**
     * Get the IP address.
     *
     * @return string
     */
    public function getIpAddress()
    {
        return $this->ipAddress;
    }
    /**
     * Get the user agent.
     *
     * @return string
     */
    public function getUserAgent()
    {
        return $this->userAgent;
    }
    /**
     * Get whether the consent is marked as Do Not Track.
     *
     * @return boolean
     */
    public function isMarkAsDoNotTrack()
    {
        return $this->markAsDoNotTrack;
    }
    /**
     * Get the button clicked.
     *
     * @return string
     */
    public function getButtonClicked()
    {
        return $this->buttonClicked;
    }
    /**
     * Get the viewport width.
     *
     * @return int
     */
    public function getViewPortWidth()
    {
        return $this->viewPortWidth;
    }
    /**
     * Get the viewport height.
     *
     * @return int
     */
    public function getViewPortHeight()
    {
        return $this->viewPortHeight;
    }
    /**
     * Get the referer.
     *
     * @return string
     */
    public function getReferer()
    {
        return $this->referer;
    }
    /**
     * Get the blocker.
     *
     * @return int
     */
    public function getBlocker()
    {
        return $this->blocker;
    }
    /**
     * Get the blocker thumbnail.
     *
     * @return int|string
     */
    public function getBlockerThumbnail()
    {
        return $this->blockerThumbnail;
    }
    /**
     * Get the forwarded consent ID.
     *
     * @return int
     */
    public function getForwarded()
    {
        return $this->forwarded;
    }
    /**
     * Get the forwarded UUID.
     *
     * @return string
     */
    public function getForwardedUuid()
    {
        return $this->forwardedUuid;
    }
    /**
     * Get whether the forwarded consent came through a content blocker.
     *
     * @return boolean
     */
    public function isForwardedBlocker()
    {
        return $this->forwardedBlocker;
    }
    /**
     * Get the TCF string.
     *
     * @return string
     */
    public function getTcfString()
    {
        return $this->tcfString;
    }
    /**
     * Get the Google Consent Mode consent types.
     *
     * @return string[]
     */
    public function getGcmConsent()
    {
        return $this->gcmConsent;
    }
    /**
     * Get the custom bypass.
     *
     * @return string
     */
    public function getCustomBypass()
    {
        return $this->customBypass;
    }
    /**
     * Get the created client time.
     *
     * @return string
     */
    public function getCreatedClientTime()
    {
        return $this->createdClientTime;
    }
    /**
     * Get the recorder JSON string.
     *
     * @return string
     */
    public function getRecorderJsonString()
    {
        return $this->recorderJsonString;
    }
    /**
     * Get the UI view.
     *
     * @return string
     */
    public function getUiView()
    {
        return $this->uiView;
    }
    /**
     * Get the user country.
     *
     * @return string
     */
    public function getUserCountry()
    {
        return $this->userCountry;
    }
    /**
     * Get whether the consent should be set on cookies.
     *
     * @return boolean
     */
    public function isSetCookies()
    {
        return $this->setCookies;
    }
}
