<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\tcf;

/**
 * A TCF vendor configuration.
 * @internal
 */
class VendorConfiguration
{
    /**
     * The ID of the content blocker when it got created in a stafeul way.
     *
     * @var int
     */
    private $id = 0;
    /**
     * The vendor ID from the official GVL vendor list.
     *
     * @var int
     */
    private $vendorId = 0;
    /**
     * Restrictive purposes settings.
     *
     * @var array
     */
    private $restrictivePurposes = [];
    /**
     * Iso 3166-1 alpha 2 countries in which the service is processing data.
     *
     * @var string[]
     */
    private $dataProcessingInCountries = [];
    /**
     * Are there special treatments when processing data in unsafe countries?
     *
     * @var string[]
     */
    private $dataProcessingInCountriesSpecialTreatments = [];
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getVendorId()
    {
        return $this->vendorId;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getRestrictivePurposes()
    {
        return $this->restrictivePurposes;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getDataProcessingInCountries()
    {
        return $this->dataProcessingInCountries;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getDataProcessingInCountriesSpecialTreatments()
    {
        return $this->dataProcessingInCountriesSpecialTreatments;
    }
    /**
     * Setter.
     *
     * @param int $id
     * @codeCoverageIgnore
     */
    public function setId($id)
    {
        $this->id = $id;
    }
    /**
     * Setter.
     *
     * @param int $vendorId
     * @codeCoverageIgnore
     */
    public function setVendorId($vendorId)
    {
        $this->vendorId = $vendorId;
    }
    /**
     * Setter.
     *
     * @param RestrictivePurposes $restrictivePurposes
     * @codeCoverageIgnore
     */
    public function setRestrictivePurposes($restrictivePurposes)
    {
        $this->restrictivePurposes = $restrictivePurposes;
    }
    /**
     * Setter.
     *
     * @param string[] $dataProcessingInCountries
     * @codeCoverageIgnore
     */
    public function setDataProcessingInCountries($dataProcessingInCountries)
    {
        $this->dataProcessingInCountries = $dataProcessingInCountries;
    }
    /**
     * Setter.
     *
     * @param array $dataProcessingInCountriesSpecialTreatments
     * @codeCoverageIgnore
     */
    public function setDataProcessingInCountriesSpecialTreatments($dataProcessingInCountriesSpecialTreatments)
    {
        $this->dataProcessingInCountriesSpecialTreatments = $dataProcessingInCountriesSpecialTreatments;
    }
    /**
     * Generate a `Service` object from an array.
     *
     * @param array $data
     * @return self
     */
    public static function fromJson(array $data) : self
    {
        $instance = new self();
        $instance->setId($data['id'] ?? 0);
        $instance->setVendorId($data['vendorId'] ?? 0);
        $instance->setRestrictivePurposes($data['restrictivePurposes'] ?? []);
        $instance->setDataProcessingInCountries($data['dataProcessingInCountries'] ?? []);
        $instance->setDataProcessingInCountriesSpecialTreatments($data['dataProcessingInCountriesSpecialTreatments'] ?? []);
        return $instance;
    }
}
