<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\ScriptInlineMatch;
/**
 * Find inline scripts.
 * @internal
 */
class ScriptInlineFinder extends TagWithContentFinder
{
    /**
     * C'tor.
     */
    public function __construct()
    {
        parent::__construct(['script']);
    }
    /**
     * See `AbstractRegexFinder`.
     *
     * @param array $m
     */
    public function createMatch($m)
    {
        $tagWithContentMatch = parent::createMatch($m);
        if (!$tagWithContentMatch) {
            return \false;
        }
        // @codeCoverageIgnoreStart
        if (\is_string($tagWithContentMatch)) {
            return $tagWithContentMatch;
        }
        // @codeCoverageIgnoreEnd
        $attributes = $tagWithContentMatch->getAttributes();
        $content = $tagWithContentMatch->getContent();
        // Ignore scripts with `src` attribute as they are not treated as inline scripts
        if (self::isNotAnInlineScript($attributes)) {
            return \false;
        }
        return new ScriptInlineMatch($this, $m[0], 'script', $attributes, $content);
    }
    /**
     * Checks if the passed attributes of a found `<script` tag is not an inline script.
     *
     * @param array $attributes
     */
    public static function isNotAnInlineScript($attributes)
    {
        return isset($attributes['src']) && !empty($attributes['src']);
    }
}
