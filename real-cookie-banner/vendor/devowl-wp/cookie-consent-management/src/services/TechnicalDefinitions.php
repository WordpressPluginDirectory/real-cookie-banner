<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\services;

/**
 * Technical definitions for a service.
 * @internal
 */
class TechnicalDefinitions
{
    const TYPE_HTTP = 'http';
    const TYPE_INDEXED_DB = 'indexedDb';
    const TYPE_LOCAL_STORAGE = 'local';
    const TYPE_SESSION_STORAGE = 'session';
    /**
     * HTTP cookie, local storage, session storage, ...
     *
     * @var string
     */
    private $type = self::TYPE_HTTP;
    /**
     * The name.
     *
     * @var string
     */
    private $name = '';
    /**
     * The host or URL.
     *
     * @var string
     */
    private $host = '';
    /**
     * The duration.
     *
     * @var int
     */
    private $duration = 1;
    /**
     * The duration unit.
     *
     * @var string
     */
    private $durationUnit = 'y';
    /**
     * Is session duration?
     *
     * @var boolean
     */
    private $isSessionDuration = \false;
    /**
     * Purpose of the cookie.
     *
     * @var string
     */
    private $purpose = '';
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getType()
    {
        return $this->type;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getHost()
    {
        return $this->host;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getDuration()
    {
        return $this->duration;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getDurationUnit()
    {
        return $this->durationUnit;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function isSessionDuration()
    {
        return $this->isSessionDuration;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getPurpose()
    {
        return $this->purpose;
    }
    /**
     * Setter.
     *
     * @param string $type
     * @codeCoverageIgnore
     */
    public function setType($type)
    {
        $this->type = $type;
    }
    /**
     * Setter.
     *
     * @param string $name
     * @codeCoverageIgnore
     */
    public function setName($name)
    {
        $this->name = $name;
    }
    /**
     * Setter.
     *
     * @param string $host
     * @codeCoverageIgnore
     */
    public function setHost($host)
    {
        $this->host = $host;
    }
    /**
     * Setter.
     *
     * @param int $duration
     * @codeCoverageIgnore
     */
    public function setDuration($duration)
    {
        $this->duration = $duration;
    }
    /**
     * Setter.
     *
     * @param string $durationUnit
     * @codeCoverageIgnore
     */
    public function setDurationUnit($durationUnit)
    {
        $this->durationUnit = $durationUnit;
    }
    /**
     * Setter.
     *
     * @param boolean $isSessionDuration
     * @codeCoverageIgnore
     */
    public function setIsSessionDuration($isSessionDuration)
    {
        $this->isSessionDuration = $isSessionDuration;
    }
    /**
     * Setter.
     *
     * @param boolean $purpose
     * @codeCoverageIgnore
     */
    public function setPurpose($purpose)
    {
        $this->purpose = $purpose;
    }
    /**
     * Create a JSON representation of this object.
     */
    public function toJson()
    {
        return ['type' => $this->type, 'name' => $this->name, 'host' => $this->host, 'duration' => $this->duration, 'durationUnit' => $this->durationUnit, 'isSessionDuration' => $this->isSessionDuration, 'purpose' => $this->purpose];
    }
    /**
     * Generate a `ProviderContact` object from an array.
     *
     * @param array $data
     */
    public static function fromJson($data)
    {
        $instance = new self();
        $instance->setType($data['type'] ?? 'http');
        $instance->setName($data['name'] ?? '');
        $instance->setHost($data['host'] ?? '');
        $instance->setDuration($data['duration'] ?? 1);
        $instance->setDurationUnit($data['durationUnit'] ?? 'y');
        $instance->setIsSessionDuration($data['isSessionDuration'] ?? \false);
        $instance->setPurpose($data['purpose'] ?? '');
        return $instance;
    }
}
