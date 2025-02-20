<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\TagWithContentFinder;
/**
 * Match defining a `TagWithContentFinder` match.
 * @internal
 */
class TagWithContentMatch extends AbstractMatch
{
    private $content;
    /**
     * C'tor.
     *
     * @param TagWithContentFinder $finder
     * @param string $originalMatch
     * @param string $tag
     * @param array $attributes
     * @param string $content
     */
    public function __construct($finder, $originalMatch, $tag, $attributes, $content)
    {
        parent::__construct($finder, $originalMatch, $tag, $attributes);
        $this->content = $content;
    }
    // See `AbstractRegexFinder`.
    public function render()
    {
        return $this->encloseRendered($this->hasChanged() ? \sprintf('<%1$s%2$s>%3$s</%1$s>', $this->getTag(), $this->renderAttributes(), $this->getContent()) : $this->getOriginalMatch());
    }
    /**
     * Setter.
     *
     * @param string $content
     * @codeCoverageIgnore
     */
    public function setContent($content)
    {
        $this->setChanged(\true);
        $this->content = $content;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getContent()
    {
        return $this->content;
    }
    /**
     * Getter.
     *
     * @return TagWithContentFinder
     * @codeCoverageIgnore
     */
    public function getFinder()
    {
        return parent::getFinder();
    }
}
