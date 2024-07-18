<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\consent;

/**
 * A persisted transaction simply describes a consent which was given by a user.
 * @internal
 */
class PersistedTransaction extends Transaction
{
    /**
     * The ID in the database.
     *
     * @var int
     */
    public $id;
    /**
     * This represents the UUID of the consent.
     *
     * @var string
     */
    public $uuid;
    /**
     * The revision as plain object. The result of `Revision#create()`.
     *
     * @var array
     */
    public $revision;
    /**
     * The revision as plain object. The result of `Revision#createIndependent()`.
     *
     * @var array
     */
    public $revisionIndependent;
    /**
     * The ISO string of the time at which time the consent got persisted.
     */
    public $created;
    /**
     * C'tor.
     *
     * @codeCoverageIgnore
     */
    public function __construct()
    {
        $this->setCookies = \false;
    }
}
