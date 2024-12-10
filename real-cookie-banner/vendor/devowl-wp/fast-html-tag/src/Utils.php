<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\PregReplaceCallbackRerunException;
use DOMDocument;
/**
 * Utility helpers.
 * @internal
 */
class Utils
{
    /**
     * Consider attribute as boolean value `true`.
     *
     * @deprecated No longer needed, only left for `prepareMatch`
     */
    const PARSE_HTML_ATTRIBUTES_CONSIDER_ATTRIBUTE_AS_BOOLEAN_VALUE_TRUE = 'PARSE_HTML_ATTRIBUTES_CONSIDER_ATTRIBUTE_AS_BOOLEAN_VALUE_TRUE';
    const PARSE_HTML_ATTRIBUTES_CUSTOM_TAG = 'my-awesome-fast-html-tag';
    public static $inPregReplaceCallbackRecursive = \false;
    /**
     * Check if a string starts with a given needle.
     *
     * @param string $haystack The string to search in
     * @param string $needle The starting string
     * @see https://stackoverflow.com/a/834355/5506547
     * @codeCoverageIgnore
     */
    public static function startsWith($haystack, $needle)
    {
        if ($haystack === null || $needle === null) {
            return \false;
        }
        $length = \strlen($needle);
        return \substr($haystack, 0, $length) === $needle;
    }
    /**
     * Check if a string starts with a given needle.
     *
     * @param string $haystack The string to search in
     * @param string $needle The starting string
     * @see https://stackoverflow.com/a/834355/5506547
     * @codeCoverageIgnore
     */
    public static function endsWith($haystack, $needle)
    {
        if ($haystack === null || $needle === null) {
            return \false;
        }
        $length = \strlen($needle);
        if (!$length) {
            return \true;
        }
        return \substr($haystack, -$length) === $needle;
    }
    /**
     * Check if passed string is JSON.
     *
     * @param string $string
     * @param mixed $default
     * @see https://stackoverflow.com/a/6041773/5506547
     * @return array|false
     */
    public static function isJson($string, $default = \false)
    {
        if (\is_array($string)) {
            return $string;
        }
        if (!\is_string($string)) {
            return $default;
        }
        $result = \json_decode($string, ARRAY_A);
        return \json_last_error() === \JSON_ERROR_NONE ? $result : $default;
    }
    /**
     * Check if a passed string is HTML.
     *
     * @param string $string
     * @see https://subinsb.com/php-check-if-string-is-html/
     */
    public static function isHtml($string)
    {
        return \is_string($string) && $string !== \strip_tags($string);
    }
    /**
     * Check if a given string is a base64-encoded data URL and return decoded string and mime type.
     * It does not support binary data and returns `false`!
     *
     * @param string $str
     * @see https://regex101.com/r/PL8crc/1
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
     */
    public static function isBase64DataUrl($str)
    {
        if (\strpos($str, 'data:') === 0 && \preg_match('/^data:(\\w+\\/\\w+);base64,(.*)$/', $str, $matches)) {
            $mime = $matches[1];
            $base64 = $matches[2];
            $decoded = \base64_decode($base64);
            if (!self::isBinary($decoded)) {
                return [$mime, $decoded];
            }
        }
        return \false;
    }
    /**
     * Check if a string contains non-printable characters.
     *
     * If the environment does not have installed the PHP extension `mbstring`, it will never return `true`.
     *
     * @param string $str
     * @see https://www.php.net/manual/en/function.ctype-print.php#126527
     * @see https://stackoverflow.com/a/76816100/5506547
     */
    public static function isBinary($str)
    {
        if (!\is_string($str) || !\function_exists('mb_check_encoding')) {
            return \false;
        }
        // phpcs:disable
        return !@\mb_check_encoding($str, 'UTF-8');
        // phpcs:enable
    }
    /**
     * A modified version of `preg_replace_callback` that is executed multiple times until no
     * longer match is given.
     *
     * @param string $pattern
     * @param callable $callback
     * @param string $subject
     * @see https://www.php.net/manual/en/function.preg-replace-callback.php
     */
    public static function preg_replace_callback_recursive($pattern, $callback, $subject)
    {
        self::$inPregReplaceCallbackRecursive = \true;
        $f = function ($matchesWithOffsets) use($pattern, $callback, &$f) {
            $matches = \array_column($matchesWithOffsets, 0);
            $current = $matches[0];
            try {
                $result = $callback($matches);
            } catch (PregReplaceCallbackRerunException $e) {
                // We need to calculate the offsets at purpose as `utf8_decode` is very expensive
                $offsets = [];
                foreach ($matchesWithOffsets as $match) {
                    // See https://www.php.net/manual/en/function.preg-match.php#106804
                    $offsets[] = \strlen(\utf8_decode(\substr($current, 0, $match[1])));
                }
                $e->setMatches($matches, $offsets);
                throw $e;
            }
            if ($current !== $result) {
                $count = 0;
                return \preg_replace_callback($pattern, $f, $result, -1, $count, \PREG_OFFSET_CAPTURE);
            }
            return $result;
        };
        $replayWithSubject = \false;
        try {
            $jitSafeResult = self::preg_jit_safe($pattern, function ($p) use($f, $subject) {
                $count = 0;
                return \preg_replace_callback($p, $f, $subject, -1, $count, \PREG_OFFSET_CAPTURE);
            });
        } catch (PregReplaceCallbackRerunException $e) {
            $replayWithSubject = $e->fetchNewSubject($subject);
        }
        self::$inPregReplaceCallbackRecursive = \false;
        if (\is_string($replayWithSubject)) {
            $jitSafeResult = self::preg_replace_callback_recursive($pattern, $callback, $replayWithSubject);
        }
        return $jitSafeResult;
    }
    /**
     * If a PHP environment is using the PCRE JIT compiler, all `preg_replace` functions
     * will return an empty result. Instead, we could potentially bypass this by disabling
     * the JIT compiler for a specific pattern with the runtime configuration `pcre.jit`.
     *
     * This utility function allows you to pass your regular expression and additionally a callback
     * which should do the `preg_replace`.
     *
     * Example:
     *
     * ```php
     * preg_jit_safe($pattern, function ($usePattern) {
     *     return preg_replace_callback($usePattern, ...);
     * });
     * ```
     *
     * Practically, if your pattern runs on a JIT error, the JIT compiler will be temporarily disabled,
     * creates a modified pattern (which indeed matches your groups!) which bypasses the PCRE pattern cache
     * and passes the pattern to your callback.
     *
     * @param string $pattern
     * @param callback $callback
     * @see https://phpsandbox.io/n/httpsstackoverflowcomq707708375506547-pz7il
     */
    public static function preg_jit_safe($pattern, $callback)
    {
        static $jitCounter = 0;
        $result = $callback($pattern);
        if (\preg_last_error() === \PREG_JIT_STACKLIMIT_ERROR) {
            $originalPcreJit = \function_exists('ini_get') ? \ini_get('pcre.jit') : \false;
            if ($originalPcreJit === '1' && \wp_is_ini_value_changeable('pcre.jit')) {
                // phpcs:disable WordPress.PHP.NoSilencedErrors.Discouraged
                @\ini_set('pcre.jit', '0');
                // phpcs:enable WordPress.PHP.NoSilencedErrors.Discouraged
                ++$jitCounter;
                $result = $callback(\sprintf('/(?:BYPASS_JIT_PATTERN_CACHE_%d)?%s', $jitCounter, \substr($pattern, 1)));
                // phpcs:disable WordPress.PHP.NoSilencedErrors.Discouraged
                @\ini_set('pcre.jit', '1');
                // phpcs:enable WordPress.PHP.NoSilencedErrors.Discouraged
            }
        }
        return $result;
    }
    /**
     * Parse a HTML attributes string to an associative array.
     *
     * @param string $str
     * @throws PregReplaceCallbackRerunException
     */
    public static function parseHtmlAttributes($str)
    {
        // Check if string has potential escaped entities so we need to parse the tag with a real parser
        // Supported entity types: http://unicode.e-workers.de/entities.php
        // See https://regex101.com/r/A7evFK/1
        $hasEntities = \preg_match('/(?:&\\w+;|&#\\d+;|&#x[\\w\\d]+;)/', $str);
        // Get a list of "boolean"-attributes
        $attributesLegacyParsed = self::legacy_html_attributes_parser($str);
        if (empty($attributesLegacyParsed)) {
            $attributesLegacyParsed = [];
        }
        $booleanAttributes = [];
        foreach ($attributesLegacyParsed as $key => $value) {
            if (\gettype($value) === 'boolean') {
                $booleanAttributes[] = $key;
            }
            // @codeCoverageIgnoreStart
            if ($value === self::PARSE_HTML_ATTRIBUTES_CONSIDER_ATTRIBUTE_AS_BOOLEAN_VALUE_TRUE) {
                $attributesLegacyParsed[$key] = \true;
                $booleanAttributes[] = $key;
            }
            // @codeCoverageIgnoreEnd
            // Fix something like this: another-class"data-src="https://example.com/link.css" (no whitespaces after value and new attribute)
            if (\strpos($key, '"') !== \false && \strpos($key, '=') !== \false) {
                $hasEntities = \true;
            }
        }
        // Use DOMDocument to parse attributes as the legacy parser can be broken
        if ($hasEntities && \class_exists(DOMDocument::class)) {
            $dom = new DOMDocument();
            // Suppress warnings about unknown tags (https://stackoverflow.com/a/41845049/5506547)
            \libxml_clear_errors();
            $previous = \libxml_use_internal_errors(\true);
            // Load content as UTF-8 content (see https://stackoverflow.com/a/8218649/5506547)
            $dom->loadHTML(\sprintf('<?xml encoding="utf-8" ?><%1$s %2$s></%1$s>', self::PARSE_HTML_ATTRIBUTES_CUSTOM_TAG, $str));
            $node = $dom->getElementsByTagName(self::PARSE_HTML_ATTRIBUTES_CUSTOM_TAG)->item(0);
            $attributes = [];
            if ($node) {
                foreach ($node->attributes as $attrName => $attrNode) {
                    $nodeValue = \in_array($attrName, $booleanAttributes, \true) ? \true : $attrNode->nodeValue;
                    $attributes[$attrName] = $nodeValue;
                    // Fix VueJS attributes like `v-else-if="button_type > 'woo'"></template` which causes
                    // the regular expression to fail
                    if (self::$inPregReplaceCallbackRecursive && \is_string($nodeValue) && self::endsWith($nodeValue, '></' . Utils::PARSE_HTML_ATTRIBUTES_CUSTOM_TAG . '>')) {
                        throw new PregReplaceCallbackRerunException(function ($subject, $matches, $offsets) use($str) {
                            $offsetMatch = $offsets[0];
                            // Check if there is a `/>` which would break the regex, too, and we need to replace it accordingly
                            $strPosSubject = \strpos($subject, \sprintf('%s/>', $str), $offsetMatch > 0 ? $offsetMatch - 1 : 0);
                            if ($strPosSubject !== \false) {
                                $strPos = $strPosSubject + \strlen($str);
                                return \substr_replace($subject, '/&gt;', $strPos, 2);
                            } else {
                                $strPosSubject = \strpos($subject, \sprintf('%s>', $str), $offsetMatch > 0 ? $offsetMatch - 1 : 0);
                                $strPos = $strPosSubject + \strlen($str);
                                return \substr_replace($subject, '&gt;', $strPos, 1);
                            }
                        });
                    }
                }
            }
            \libxml_clear_errors();
            \libxml_use_internal_errors($previous);
        } else {
            $attributes = $attributesLegacyParsed;
        }
        return $attributes;
    }
    /**
     * Ported from [WordPress](https://developer.wordpress.org/reference/functions/shortcode_parse_atts/).
     * Why a port? This package should be framework-agnostic and we do not want to be rely on WordPress.
     *
     * @param string $text
     * @codeCoverageIgnore
     */
    public static function legacy_html_attributes_parser($text)
    {
        $atts = [];
        $pattern = '/([\\w#:-]+)\\s*=\\s*"([^"]*)"(?:\\s|$)|([\\w#:-]+)\\s*=\\s*\'([^\']*)\'(?:\\s|$)|([\\w#:-]+)\\s*=\\s*([^\\s\'"]+)(?:\\s|$)|"([^"]*)"(?:\\s|$)|\'([^\']*)\'(?:\\s|$)|(\\S+)(?:\\s|$)/';
        $text = \preg_replace('/[\\x{00a0}\\x{200b}]+/u', ' ', $text);
        if (\preg_match_all($pattern, $text, $match, \PREG_SET_ORDER)) {
            foreach ($match as $m) {
                if (!empty($m[1])) {
                    $atts[\strtolower($m[1])] = \stripcslashes($m[2]);
                } elseif (!empty($m[3])) {
                    $atts[\strtolower($m[3])] = \stripcslashes($m[4]);
                } elseif (!empty($m[5])) {
                    $atts[\strtolower($m[5])] = \stripcslashes($m[6]);
                } elseif (isset($m[7]) && \strlen($m[7])) {
                    $atts[\stripcslashes($m[7])] = \true;
                } elseif (isset($m[8]) && \strlen($m[8])) {
                    $atts[\stripcslashes($m[8])] = \true;
                } elseif (isset($m[9])) {
                    $atts[\stripcslashes($m[9])] = \true;
                }
            }
            // Reject any unclosed HTML elements.
            foreach ($atts as &$value) {
                if (\false !== \strpos($value, '<')) {
                    if (1 !== \preg_match('/^[^<]*+(?:<[^>]*+>[^<]*+)*+$/', $value)) {
                        $value = '';
                    }
                }
            }
        } else {
            $atts = \ltrim($text);
        }
        return $atts;
    }
    /**
     * Transform a given associate attributes array to a DOM attributes string.
     *
     * @param array $attributes
     */
    public static function htmlAttributes($attributes)
    {
        $attributes = \array_map(function ($key) use($attributes) {
            $val = $attributes[$key];
            if (\is_bool($val)) {
                return $val ? $key : '';
            }
            $val = \htmlspecialchars($val, \ENT_QUOTES, 'UTF-8');
            // Compatibility with VueJS
            // See also https://github.com/vuejs/vue/issues/8805 and https://github.com/vuejs/vue/blob/8d3fce029f20a73d5d0b1ff10cbf6fa73c989e62/src/compiler/parser/html-parser.js#L38-L45
            $val = \str_replace('&#039;', '&#39;', $val);
            return \sprintf('%s="%s"', $key, $val);
        }, \array_keys($attributes));
        return \join(' ', \array_filter($attributes));
    }
    /**
     * Add a query argument to an URL.
     *
     * @param string $url
     * @param array $newParams
     * @see https://stackoverflow.com/a/67503031/5506547
     */
    public static function addParametersToUrl($url, $newParams)
    {
        $parsed = \parse_url($url);
        if ($parsed === \false || !isset($parsed['host'])) {
            return $url;
        }
        \parse_str($parsed['query'] ?? '', $existingParams);
        $newQuery = \array_merge($existingParams, $newParams);
        $newUrl = (isset($parsed['scheme']) ? $parsed['scheme'] . ':' : '') . '//' . $parsed['host'] . ($parsed['path'] ?? '');
        if ($newQuery) {
            $newUrl .= '?' . \http_build_query($newQuery);
        }
        if (isset($parsed['fragment'])) {
            $newUrl .= '#' . $parsed['fragment'];
        }
        return $newUrl;
    }
    /**
     * Set them schema for a URL.
     *
     * @param string $url
     * @param string $scheme Can be `relative`, `http`, `https`, ...
     * @see https://github.com/WordPress/wordpress-develop/blob/9fae40ae696d771e044b2913bd54a28244c1901b/src/wp-includes/link-template.php#L3879-L3915
     */
    public static function setUrlSchema($url, $scheme)
    {
        $url = \trim($url);
        if (\substr($url, 0, 2) === '//') {
            $url = 'http:' . $url;
        }
        if ('relative' === $scheme) {
            $url = \ltrim(\preg_replace('#^\\w+://[^/]*#', '', $url));
            if ('' !== $url && '/' === $url[0]) {
                $url = '/' . \ltrim($url, "/ \t\n\r\x00\v");
            }
        } else {
            $url = \preg_replace('#^\\w+://#', $scheme . '://', $url);
        }
        return $url;
    }
}
