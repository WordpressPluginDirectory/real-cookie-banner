<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker;

/**
 * Statically hold all found markups (e.g. inline styles) in a single object instance to be memory-low
 * instead of saving the markup string in each blocked result. At this way, we can generate unique IDs (md5)
 * for each markup.
 * @internal
 */
class Markup
{
    private $id;
    private $content;
    /**
     * C'tor.
     *
     * @param string $id
     * @param string $content
     */
    private function __construct($id, $content)
    {
        $this->id = $id;
        $this->content = \trim($content);
    }
    /**
     * Getter.
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * Getter.
     */
    public function getContent()
    {
        return $this->content;
    }
    /**
     * `toString`. Allow grouping with e.g. `array_unique`.
     *
     * @codeCoverageIgnore
     */
    public function __toString()
    {
        return $this->id;
    }
    /**
     * Persist a markup in pool or return the existing one.
     *
     * @param string $markup
     * @param HeadlessContentBlocker $blocker
     */
    public static function persist($markup, $blocker)
    {
        if (empty($markup)) {
            return null;
        }
        $id = \md5($markup);
        $pool =& $blocker->getMarkupPool();
        $found = $pool[$id] ?? null;
        if (!$found) {
            $found = new Markup($id, $markup);
            $pool[$id] = $found;
        }
        return $found;
    }
}
