<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual;

// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * There are plugins like TranslatePress, which does use a completely different way of
 * implementing multilingual content to WordPress sites.
 * @internal
 */
abstract class AbstractOutputBufferPlugin extends AbstractLanguagePlugin
{
    /**
     * Wrap the complete string within a HTML tag so our plugin can
     * extract it correctly and handles it as HTML.
     */
    const HTML_TAG_KEEP = 'keep-me';
    const MARKER_WRAP_ARRAY_TO_HTML = 'wrapArrayToHtml-';
    /**
     * Our plugin does in general support JSON, but it slows down the site extremely,
     * let's do this hacky with a single HTML string...
     */
    const HTML_TAG_IGNORE = '<ignore-me-completely %s></ignore-me-completely>';
    // Documented in AbstractLanguagePlugin
    public function disableCopyAndSync($sync)
    {
        // Silence is golden.
    }
    // Documented in AbstractLanguagePlugin
    public function getOriginalPostId($id, $post_type)
    {
        return $id;
    }
    // Documented in AbstractLanguagePlugin
    public function getOriginalTermId($id, $taxonomy)
    {
        return $id;
    }
    // Documented in AbstractLanguagePlugin
    public function getCurrentPostId($id, $post_type, $locale = null)
    {
        return $id;
    }
    // Documented in AbstractLanguagePlugin
    public function getCurrentTermId($id, $taxonomy, $locale = null)
    {
        return $id;
    }
    // Documented in AbstractLanguagePlugin
    public function getPostTranslationIds($id, $post_type)
    {
        return [];
    }
    // Documented in AbstractLanguagePlugin
    public function getTaxonomyTranslationIds($id, $taxonomy)
    {
        return [];
    }
    /**
     * Wrap a complete array to valid HTML format so output buffer plugins can translate
     * the HTML instead of JSON. This can be useful if the plugin does not support it
     * well enough or JSON walker slows down the page extremely.
     *
     * @param string[] $content
     * @param boolean $addInnerTextWithId Instead of the content, the inner text will be in format `<div>wrapArrayToHtml-{id}</div><div>{content}</div>`.
     *                                    This allows you to map the content back to the original strings by iterating over an array of
     *                                    translatable strings. See also `mapInnerTextWithIdToOriginalString`.
     */
    protected function wrapArrayToHtml($content, $addInnerTextWithId = \false)
    {
        // Make associative array so we can remap the key value pairs
        $processStrings = [];
        foreach ($content as $i => $string) {
            $processStrings[$i] = \sprintf('<%1$s id="%2$s">%3$s</%1$s>', self::HTML_TAG_KEEP, $i, $addInnerTextWithId ? \sprintf('<div>%s%d</div><div>%s</div><div>%s-1</div>', self::MARKER_WRAP_ARRAY_TO_HTML, $i, $string, self::MARKER_WRAP_ARRAY_TO_HTML, $i) : $string);
        }
        $joinDelimiter = \sprintf(self::HTML_TAG_IGNORE, $this->getSkipHTMLForTag());
        return \join($joinDelimiter, $processStrings);
    }
    /**
     * Map the inner text with ID to the original string. See also `wrapArrayToHtml` and the `addInnerTextWithId` parameter.
     *
     * @param string[] $translatableStrings
     * @param string[] $content
     * @param string[][] $result
     */
    protected function mapInnerTextWithIdToOriginalString($translatableStrings, $content, &$result)
    {
        $currentContentIdx = null;
        foreach ($translatableStrings as $string) {
            if (\strpos($string, self::MARKER_WRAP_ARRAY_TO_HTML) === 0) {
                $currentContentIdx = \substr($string, \strlen(self::MARKER_WRAP_ARRAY_TO_HTML));
                if ($currentContentIdx === '-1') {
                    $currentContentIdx = null;
                }
                continue;
            }
            if ($currentContentIdx === null) {
                continue;
            }
            $idx = $content[$currentContentIdx];
            $result[$idx] = $result[$idx] ?? [];
            $result[$idx][] = $string;
        }
    }
    /**
     * Reverse `wrapArrayToHtml` functionality.
     *
     * @param string $html
     * @param callable $strip
     */
    protected function wrapHtmlToArray($html, $strip = null)
    {
        $joinDelimiter = \sprintf('<ignore-me-completely %s></ignore-me-completely>', $this->getSkipHTMLForTag());
        $result = \explode($joinDelimiter, $html);
        // Remove `keep-me` HTML tag to get real results
        foreach ($result as &$value) {
            $value = \explode('>', $value, 2)[1];
            $value = \substr($value, 0, (\strlen(self::HTML_TAG_KEEP) + 3) * -1);
            if (\is_callable($strip)) {
                $value = \call_user_func($strip, $value);
            }
        }
        return $result;
    }
    /**
     * TranslatePress does currently not support wptexturize, so we need to map it accordingly. Use this in conjunction with
     * `remapWptexturizeFromContent`.
     *
     * @param string[] $content
     */
    protected function addWptexturizeToContent(&$content)
    {
        $contentCount = \count($content);
        foreach ($content as $string) {
            $texturized = \wptexturize($string);
            $content[] = $texturized === $string ? '' : $texturized;
        }
        return $contentCount;
    }
    /**
     * Remap the wptexturized strings back to the original strings if there is a translation. Use this before
     * `remapResultToReference`.
     *
     * @param int $contentCount
     * @param string[] $content
     * @param string[] $result
     */
    protected function remapWptexturizeFromContent($contentCount, &$content, &$result)
    {
        $texturizeContent = \array_slice($content, $contentCount);
        $texturizeResult = \array_slice($result, $contentCount);
        // Remove all 10+n elements from the array
        $content = \array_slice($content, 0, $contentCount);
        $result = \array_slice($result, 0, $contentCount);
        foreach ($result as $i => &$resultString) {
            $contentString = $content[$i] ?? null;
            $texturizeContentString = $texturizeContent[$i] ?? null;
            $texturizeResultString = $texturizeResult[$i] ?? null;
            if ($texturizeContentString !== null && $texturizeResultString !== null && $contentString !== null && $contentString !== $texturizeResultString && $texturizeContentString !== $texturizeResultString) {
                $resultString = $texturizeResultString;
            }
        }
    }
    /**
     * Remap the result to the referenced value `$content` for `translateString` method.
     *
     * @param string[] $content
     * @param string[] $result
     * @param string $locale
     * @param string[] $context
     */
    protected function remapResultToReference(&$content, $result, $locale, $context = null)
    {
        foreach ($content as $i => &$untranslated) {
            $previousContent = $untranslated;
            $translation = $result[$i] ?? null;
            // A translation can not be empty, restore
            if (empty($translation)) {
                $translation = $previousContent;
            }
            // Unchanged, let's check our internal `.mo` file
            if ($previousContent === $translation) {
                list(, $translation) = $this->translateStringFromMo($translation, $locale, $context);
            }
            $untranslated = $translation;
        }
    }
}
