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
    private $regexpTags;
    private $regexpAttributes;
    private $allowNestedComponents;
    private $regexp;
    /**
     * C'tor.
     *
     * Attention: This finder does not support nested components from the same tag name due to regex limitations.
     *
     * ```
     * <my-awesome-web-component>
     *   <another-web-component>
     *     <another-web-component>  <!-- This will not be found -->
     *       <p>Hello, world!</p>
     *     </another-web-component>
     *   </another-web-component>
     * </my-awesome-web-component>
     * ```
     *
     * @param string[] $tags
     * @param string[] $attributes If you rely on the regular expression match of the link attribute it is highly recommend
     *                             to pass only one attribute and create multiple instances of `TagAttributeFinder`.
     * @param bool $onlyWebComponents For performance reasons, we can skip the regex check for non-web-components.
     * @param bool $allowNestedComponents Allow to search within nested components (recommended when using for web components but not recommended for other tags like script and style)
     */
    public function __construct($tags, $attributes = [], $onlyWebComponents = \false, $allowNestedComponents = null)
    {
        $this->regexpTags = $tags;
        $this->regexpAttributes = $attributes;
        $this->allowNestedComponents = $allowNestedComponents === null ? $onlyWebComponents : $allowNestedComponents;
        $this->regexp = self::createRegexp($this->regexpTags, $onlyWebComponents);
    }
    // See `AbstractRegexFinder`.
    public function getRegularExpression()
    {
        return $this->regexp;
    }
    /**
     * See `AbstractRegexFinder`.
     *
     * @param array $m
     */
    public function createMatch($m)
    {
        if (!empty($m[4])) {
            return \false;
        }
        list($attributes, $content) = self::prepareMatch($m);
        // Check if one of the attributes is in the regexpAttributes array
        $attributeKeys = \array_keys($attributes);
        if (\count($this->regexpAttributes) > 0 && \count(\array_intersect($attributeKeys, $this->regexpAttributes)) === 0) {
            // If we allow nested components, we return an unmodified content but with the tag modified
            // so the current tag is no longer a match
            return $this->allowNestedComponents ? $this->ghostCurrentTag($m[0]) : \false;
        }
        $match = new TagWithContentMatch($this, $m[0], $m[1], $attributes, $content);
        if ($this->allowNestedComponents) {
            $match->setContent($this->getFastHtmlTag()->modifyHtml($content));
        }
        return $match;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getRegexpTags()
    {
        return $this->regexpTags;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getRegexpAttributes()
    {
        return $this->regexpAttributes;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function isAllowNestedComponents()
    {
        return $this->allowNestedComponents;
    }
    /**
     * Prepare the result match of a `createRegexp` regexp.
     *
     * @param array $m
     */
    public static function prepareMatch($m)
    {
        $attributes = Utils::parseHtmlAttributes($m[2]);
        $content = $m[3];
        return [$attributes, $content];
    }
    /**
     * Create regular expression to catch multiple tags and attributes.
     *
     * Available matches:
     *      $match[0] => Full string
     *      $match[1] => Tag
     *      $match[2] => Attributes string after the tag
     *      $match[3] => Full content
     *      $match[4] => When not empty, it is a commented-out tag (false-positive) which needs to be skipped
     *
     * @param string[] $searchTags
     * @param bool $onlyWebComponents
     * @see https://stackoverflow.com/a/22545622/5506547
     * @see https://regex101.com/r/7lYPHA/7
     */
    public static function createRegexp($searchTags, $onlyWebComponents = \false)
    {
        return \sprintf('/<(%1$s)([^>]*)>([^<]*(?:<(?!\\/\\1(?:\\s*--)?>)[^<]*)*)<\\/\\1(\\s*--)?>/smix', \count($searchTags) > 0 && !\in_array('*', $searchTags, \true) ? \join('|', $searchTags) : ($onlyWebComponents ? '[A-Za-z_-]+-[A-Za-z_-]+' : '[A-Za-z_-]+'));
    }
}
