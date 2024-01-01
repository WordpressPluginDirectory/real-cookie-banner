<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\TcfVendorListNormalize;

use WP_Error;
/**
 * Download the TCF list from a remote address.
 * @internal
 */
class Downloader
{
    const FILENAME_VENDOR_LIST = 'v3/vendor-list.json';
    const FILENAME_PURPOSES_TRANSLATION = 'v3/purposes.json';
    const TCF_DEFAULT_LANGUAGE = 'en';
    /**
     * The normalizer.
     *
     * @var TcfVendorListNormalizer
     */
    private $normalizer;
    /**
     * C'tor.
     *
     * @param TcfVendorListNormalizer $normalizer
     */
    public function __construct($normalizer)
    {
        $this->normalizer = $normalizer;
    }
    /**
     * Fetch the `vendor-list.json` from an external URL.
     *
     * @param string $url
     * @param array $queryArgs Additional query parameters, e.g. license key
     * @return WP_Error|array
     */
    public function fetchVendorList($url, $queryArgs = [])
    {
        if (\defined('DEVOWL_TCF_VENDOR_LIST_NORMALIZE_USE_MOCK') && \constant('DEVOWL_TCF_VENDOR_LIST_NORMALIZE_USE_MOCK')) {
            $body = \file_get_contents(__DIR__ . '/fixtures/vendor-list.json');
        } else {
            $response = \wp_remote_get(\add_query_arg($queryArgs, $url), ['timeout' => 12]);
            if (\is_wp_error($response)) {
                return $response;
            }
            $code = \wp_remote_retrieve_response_code($response);
            $codeIsOk = $code >= 200 && $code < 300;
            if (!$codeIsOk) {
                return new WP_Error('tcf_download_remote_failed', $response['response']['message'] ?? '');
            }
            $body = $this->requestToArray($response);
            if (\is_wp_error($body)) {
                return $body;
            }
        }
        return \json_decode($body, ARRAY_A);
    }
    /**
     * Fetch the `purpose-{language}.json` from an external URL.
     *
     * @param string $url Add `%s` to your URL so the language code gets added to it
     * @param string $language The 2-letter code (use `self::sanitizeLanguageCode`)
     * @param array $queryArgs Additional query parameters, e.g. license key
     * @return WP_Error|array
     */
    public function fetchTranslation($url, $language, $queryArgs = [])
    {
        if (\defined('DEVOWL_TCF_VENDOR_LIST_NORMALIZE_USE_MOCK') && \constant('DEVOWL_TCF_VENDOR_LIST_NORMALIZE_USE_MOCK')) {
            $body = \file_get_contents(__DIR__ . '/fixtures/purposes-' . $language . '.json');
        } else {
            $url = \add_query_arg($queryArgs, $url);
            $url = \add_query_arg('language', $language, $url);
            $body = $this->requestToArray(\wp_remote_get($url));
            if (\is_wp_error($body)) {
                return $body;
            }
        }
        return \json_decode($body, ARRAY_A);
    }
    /**
     * Convert a result of `wp_remote_get` to a PHP array.
     *
     * @param WP_Error|array $request
     * @return WP_Error|string
     */
    protected function requestToArray($request)
    {
        if (\is_wp_error($request)) {
            return $request;
        }
        return \wp_remote_retrieve_body($request);
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getNormalizer()
    {
        return $this->normalizer;
    }
    /**
     * Sanitize a 4-letter language code to 2-letter language code as it is the only
     * one which is currently supported by TCF.
     *
     * @param string $language
     */
    public static function sanitizeLanguageCode($language)
    {
        return \strtolower(\explode('-', \explode('_', $language)[0])[0]);
    }
}
