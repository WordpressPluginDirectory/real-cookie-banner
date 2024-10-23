<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\scanner;

/**
 * Describe scan options for a specific rule group.
 * @internal
 */
class RuleGroup
{
    private $blockable;
    private $id;
    private $mustAllRulesBeResolved;
    private $mustGroupBeResolved;
    /**
     * C'tor.
     *
     * @param ScannableBlockable $blockable
     * @param string $id
     * @param boolean $mustAllRulesBeResolved
     * @param boolean $mustGroupBeResolved
     */
    public function __construct($blockable, $id, $mustAllRulesBeResolved = \false, $mustGroupBeResolved = \false)
    {
        $this->blockable = $blockable;
        $this->id = $id;
        $this->mustAllRulesBeResolved = $mustAllRulesBeResolved;
        $this->mustGroupBeResolved = $mustGroupBeResolved;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getBlockable()
    {
        return $this->blockable;
    }
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
     */
    public function isMustAllRulesBeResolved()
    {
        return $this->mustAllRulesBeResolved;
    }
    /**
     * Getter.
     */
    public function isMustGroupBeResolved()
    {
        return $this->mustGroupBeResolved;
    }
}
