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
    private $id;
    /**
     * This represents the UUID of the consent.
     *
     * @var string
     */
    private $uuid;
    /**
     * The revision as plain object. The result of `Revision#create()`.
     *
     * @var array
     */
    private $revision;
    /**
     * The revision as plain object. The result of `Revision#createIndependent()`.
     *
     * @var array
     */
    private $revisionIndependent;
    /**
     * The ISO string of the time at which time the consent got persisted.
     *
     * @var string
     */
    private $created;
    /**
     * C'tor.
     *
     * @codeCoverageIgnore
     */
    public function __construct()
    {
        $this->isSetCookies(\false);
    }
    /**
     * Set the ID in the database.
     *
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }
    /**
     * Set the UUID of the consent.
     *
     * @param string $uuid
     */
    public function setUuid($uuid)
    {
        $this->uuid = $uuid;
    }
    /**
     * Set the revision as plain object.
     *
     * @param array $revision
     */
    public function setRevision($revision)
    {
        $this->revision = $revision;
    }
    /**
     * Set the independent revision as plain object.
     *
     * @param array $revisionIndependent
     */
    public function setRevisionIndependent($revisionIndependent)
    {
        $this->revisionIndependent = $revisionIndependent;
    }
    /**
     * Set the ISO string of the time at which the consent got persisted.
     *
     * @param string $created
     */
    public function setCreated($created)
    {
        $this->created = $created;
    }
    /**
     * Get the ID in the database.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * Get the UUID of the consent.
     *
     * @return string
     */
    public function getUuid()
    {
        return $this->uuid;
    }
    /**
     * Get the revision as plain object.
     *
     * @return array
     */
    public function getRevision()
    {
        return $this->revision;
    }
    /**
     * Get the independent revision as plain object.
     *
     * @return array
     */
    public function getRevisionIndependent()
    {
        return $this->revisionIndependent;
    }
    /**
     * Get the ISO string of the time at which the consent got persisted.
     *
     * @return string
     */
    public function getCreated()
    {
        return $this->created;
    }
}
