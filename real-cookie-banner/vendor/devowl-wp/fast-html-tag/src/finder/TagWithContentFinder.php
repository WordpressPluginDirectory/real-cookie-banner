<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\TagWithContentMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\Utils;
/**
 * Find tags with content. Use this with caution. A good example is `<script>` tags (but you should use `ScriptInlineFinder` for this)
 * and `<template>` tags.
 *
 * Attention: Use this with caution as it uses `AbstractRegexFinder` which does not support nested tags.
 * @internal
 */
class TagWithContentFinder extends AbstractRegexFinder
{
    /**
     * Regular expression to find tags with content.
     *
     * Available matches:
     *      $match[0] => Full string
     *      $match[1] => Attributes string after the tag
     *      $match[2] => Full content
     *      $match[3] => When not empty, it is a commented-out tag (false-positive) which needs to be skipped
     *
     * @see https://regex101.com/r/7lYPHA/6
     */
    const TAG_WITH_CONTENT_REGEXP = '/<%1$s([^>]*)>([^<]*(?:<(?!\\/%1$s(?:\\s*--)?>)[^<]*)*)<\\/%1$s(\\s*--)?>/smix';
    private $tag;
    /**
     * C'tor.
     *
     * @param string $tag
     */
    public function __construct($tag)
    {
        $this->tag = $tag;
    }
    // See `AbstractRegexFinder`.
    public function getRegularExpression()
    {
        return \sprintf(self::TAG_WITH_CONTENT_REGEXP, $this->tag);
    }
    /**
     * See `AbstractRegexFinder`.
     *
     * @param array $m
     */
    public function createMatch($m)
    {
        if (!empty($m[3])) {
            return \false;
        }
        list($attributes, $content) = self::prepareMatch($m);
        return new TagWithContentMatch($this, $m[0], $attributes, $content);
    }
    /**
     * Getter.
     *
     * @return string
     */
    public function getTag()
    {
        return $this->tag;
    }
    /**
     * Prepare the result match of a `createRegexp` regexp.
     *
     * @param array $m
     */
    public static function prepareMatch($m)
    {
        $attributes = Utils::parseHtmlAttributes($m[1]);
        $script = $m[2];
        return [$attributes, $script];
    }
}
