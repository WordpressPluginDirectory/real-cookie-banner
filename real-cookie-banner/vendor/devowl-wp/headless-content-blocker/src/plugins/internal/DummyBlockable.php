<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\internal;

use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\HeadlessContentBlocker;
/**
 * Describe a dummy blockable, do whatever you want to do with it.
 * @internal
 */
class DummyBlockable extends AbstractBlockable
{
    const CRITERIA = 'dummy';
    /**
     * C'tor.
     *
     * @param HeadlessContentBlocker $headlessContentBlocker
     */
    public function __construct($headlessContentBlocker)
    {
        parent::__construct($headlessContentBlocker);
        $this->appendFromStringArray([]);
    }
    // Documented in AbstractBlockable
    public function getBlockerId()
    {
        return 1;
    }
    // Documented in AbstractBlockable
    public function getRequiredIds()
    {
        return [];
    }
    // Documented in AbstractBlockable
    // @codeCoverageIgnoreStart
    public function getCriteria()
    {
        return self::CRITERIA;
    }
    // @codeCoverageIgnoreEnd
}
