<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement;

/**
 * Utility helpers.
 * @internal
 */
class Utils
{
    const TEMP_REGEX_AVOID_UNMASK = 'PLEACE_REPLACE_ME_AGAIN';
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
     * Flatten an array.
     *
     * @param array $array
     * @param boolean $recursive
     */
    public static function array_flatten($array, $recursive = \false)
    {
        $return = [];
        foreach ($array as $key => $value) {
            if (\is_array($value)) {
                $return = \array_merge($return, $recursive ? self::array_flatten($array, $recursive) : $value);
            } else {
                $return[$key] = $value;
            }
        }
        return $return;
    }
    /**
     * Create a pattern for `preg_match_all` usage.
     *
     * @param string $name
     */
    public static function createRegexpPatternFromWildcardName($name)
    {
        $name = \str_replace('*', self::TEMP_REGEX_AVOID_UNMASK, $name);
        $regex = \sprintf('/^%s$/', \str_replace(self::TEMP_REGEX_AVOID_UNMASK, '((?:.|\\n)*)', \preg_quote($name, '/')));
        // Remove duplicate `(.*)` identifiers to avoid "catastrophical backtrace"
        return \preg_replace('/(\\((\\(\\?:\\.\\|\\\\n\\)\\*)\\))+/m', '((?:.|\\n)*)', $regex);
    }
    /**
     * Compress a string with `gzcompress` and encode it with `base64` so it can be saved in the database. Currently, we are not able
     * to use compressed built-in MySQL functions, so we need to compress the data on our own at application level.
     *
     * Attention: Use this method only for data that is only retrieved at application level as the data cannot be decompressed on database level.
     *
     * Why gzcompress? See https://www.php.net/manual/de/function.gzdeflate.php#91310
     *
     * > gzcompress produces longer data because it embeds information about the encoding onto the string. If you are compressing
     * > data that will only ever be handled on one machine, then you don't need to worry about which of these functions you use. However,
     * > if you are passing data compressed with these functions to a different machine you should use gzcompress.
     *
     * @param string $string
     * @param mixed $default
     */
    public static function gzCompressForDatabase($string, $default = null)
    {
        if (\function_exists('gzcompress')) {
            return \base64_encode(\gzcompress($string));
        }
        return $default;
    }
    /**
     * Decompress a string with `gzuncompress`. See also `gzCompressForDatabase`.
     *
     * @param string $string
     * @param mixed $default
     */
    public static function gzUncompressForDatabase($string, $default = null)
    {
        // Is the string already uncompressed?
        if (self::startsWith($string, '{')) {
            return $string;
        }
        if (\function_exists('gzuncompress')) {
            return \gzuncompress(\base64_decode($string));
        }
        return $default;
    }
}
