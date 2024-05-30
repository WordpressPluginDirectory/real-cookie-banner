<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxFinder;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\BlockedResult;
/**
 * Match defining a `SelectorSyntaxFinder` match.
 * @internal
 */
class SelectorSyntaxMatch extends TagAttributeMatch
{
    /**
     * Allows to force-use this result for the blocking mechanism. This allows to block elements already
     * through the `addSelectorSyntaxMap()` functionality.
     *
     * @var BlockedResult
     */
    private $forceResult;
    /**
     * Getter.
     *
     * @return SelectorSyntaxFinder
     * @codeCoverageIgnore
     */
    public function getFinder()
    {
        return parent::getFinder();
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getForceResult()
    {
        return $this->forceResult;
    }
    /**
     * Setter.
     *
     * @param BlockedResult $result
     * @codeCoverageIgnore
     */
    public function setForceResult($result)
    {
        $this->forceResult = $result;
    }
}
