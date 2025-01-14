<?php

namespace DevOwl\RealCookieBanner\rest;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\frontend\SavingConsentViaRestApiEndpointChecker;
use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Service;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\scanner\AutomaticScanStarter;
use DevOwl\RealCookieBanner\scanner\Query;
use DevOwl\RealCookieBanner\view\Notices;
use DevOwl\RealCookieBanner\view\Scanner as ViewScanner;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\AbstractTemplate;
use WP_Error;
use WP_REST_Request;
use WP_REST_Response;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Scanner API
 * @internal
 */
class Scanner
{
    use UtilsProvider;
    /**
     * C'tor.
     */
    private function __construct()
    {
        // Silence is golden.
    }
    /**
     * Register endpoints.
     */
    public function rest_api_init()
    {
        $namespace = Service::getNamespace($this);
        \register_rest_route($namespace, '/scanner/queue', ['methods' => 'POST', 'callback' => [$this, 'routeAddQueue'], 'permission_callback' => [$this, 'permission_callback'], 'args' => ['purgeUnused' => ['type' => 'boolean', 'default' => \false]]]);
        \register_rest_route($namespace, '/scanner/result/templates', ['methods' => 'GET', 'callback' => [$this, 'routeResultTemplates'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/scanner/result/externals', ['methods' => 'GET', 'callback' => [$this, 'routeResultExternalUrls'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/scanner/result/externals/host/(?P<host>[a-zA-Z0-9\\._-]+)', ['methods' => 'GET', 'callback' => [$this, 'routeResultAllExternalUrlsByHost'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/scanner/result/externals/template/(?P<template>[a-zA-Z0-9_-]+)', ['methods' => 'GET', 'callback' => [$this, 'routeResultAllExternalUrlsByTemplate'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/scanner/result/ignore', ['methods' => 'POST', 'callback' => [$this, 'routeResultIgnorePost'], 'permission_callback' => [$this, 'permission_callback'], 'args' => ['type' => ['type' => 'string', 'enum' => ['template', 'host'], 'required' => \true], 'value' => ['type' => 'string', 'required' => \true], 'ignored' => ['type' => 'boolean', 'required' => \true]]]);
        \register_rest_route($namespace, '/scanner/result/markup/(?P<id>\\d+)', ['methods' => 'GET', 'callback' => [$this, 'routeResultMarkupById'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/scanner/scan-without-login', ['methods' => 'GET', 'callback' => [$this, 'routeScanWithoutLogin'], 'permission_callback' => [$this, 'permission_callback'], 'args' => ['url' => ['type' => 'string', 'required' => \true], 'jobId' => ['type' => 'number', 'required' => \true]]]);
    }
    /**
     * Check if user is allowed to call this service requests.
     */
    public function permission_callback()
    {
        return \current_user_can(Core::MANAGE_MIN_CAPABILITY);
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {post} /real-cookie-banner/v1/scanner/queue Add URLs to the scanner queue
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {string[]} urls
     * @apiParam {boolean} [purgeUnused] If `true`, the difference of the previous scanned URLs gets
     *                                   automatically purged if they do no longer exist in the URLs (pass only if you have the complete sitemap!)
     * @apiName AddQueue
     * @apiGroup Scanner
     * @apiVersion 1.0.0
     * @apiPermission manage_options
     */
    public function routeAddQueue($request)
    {
        $urls = $request->get_param('urls');
        if (!\is_array($urls)) {
            return new WP_Error('rest_arg_not_string_array', null, ['status' => 422]);
        }
        // Disable automatic scanning
        \update_option(AutomaticScanStarter::OPTION_NAME, AutomaticScanStarter::STATUS_STARTED);
        $added = Core::getInstance()->getScanner()->addUrlsToQueue(\array_unique($urls), $request->get_param('purgeUnused'));
        // Remove explicit notices of external URLs which require a manual scan
        Core::getInstance()->getNotices()->dismissScannerExplicitExternalUrlCoverageNotice(Notices::SCANNER_EXPLICIT_EXTERNAL_URL_COVERAGE_STATE_MANUAL_SCAN_REQUIRED);
        return new WP_REST_Response(['added' => $added]);
    }
    /**
     * See API docs.
     *
     * @api {get} /real-cookie-banner/v1/scanner/result/templates Get predefined templates for blocker which got scanned through our scanner
     * @apiHeader {string} X-WP-Nonce
     * @apiName TemplatesResult
     * @apiGroup Scanner
     * @apiVersion 1.0.0
     * @apiPermission manage_options
     */
    public function routeResultTemplates()
    {
        return new WP_REST_Response(['items' => (object) AbstractTemplate::toArrays(Core::getInstance()->getScanner()->getQuery()->getScannedTemplates())]);
    }
    /**
     * See API docs.
     *
     * @api {get} /real-cookie-banner/v1/scanner/result/externals Get external URLs which got scanned through our scanner
     * @apiHeader {string} X-WP-Nonce
     * @apiName ExternalUrlResults
     * @apiGroup Scanner
     * @apiVersion 1.0.0
     * @apiPermission manage_options
     */
    public function routeResultExternalUrls()
    {
        $results = Core::getInstance()->getScanner()->getQuery()->getScannedExternalUrls();
        return new WP_REST_Response(['items' => (object) $results]);
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {get} /real-cookie-banner/v1/scanner/result/externals/host/:host Get all blocked URLs for a given host
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {string} host Replace dots with underscores as some security plugins do not allow hosts in URL path
     * @apiName AllExternalUrlsByHost
     * @apiGroup Scanner
     * @apiVersion 1.0.0
     * @apiPermission manage_options
     */
    public function routeResultAllExternalUrlsByHost($request)
    {
        $host = \str_replace('_', '.', $request->get_param('host'));
        $result = Core::getInstance()->getScanner()->getQuery()->getAllScannedExternalUrlsBy('host', $host);
        return \count($result) > 0 ? new WP_REST_Response(['items' => $result]) : new WP_Error('rest_not_found', 'Host not found. Did you forgot to replace dots with underscores?');
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {get} /real-cookie-banner/v1/scanner/result/externals/template/:template Get all blocked URLs for a given template identifier
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {string} template
     * @apiName AllExternalUrlsByTemplate
     * @apiGroup Scanner
     * @apiVersion 1.0.0
     * @apiPermission manage_options
     */
    public function routeResultAllExternalUrlsByTemplate($request)
    {
        $result = Core::getInstance()->getScanner()->getQuery()->getAllScannedExternalUrlsBy('template', $request->get_param('template'));
        return \count($result) > 0 ? new WP_REST_Response(['items' => $result]) : new WP_Error('rest_not_found', 'Template not found');
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {put} /real-cookie-banner/v1/scanner/result/ignore Set a template or external host as ignored or unignored
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {string} type Can be `template` or `host`
     * @apiParam {string} value The host or template identifier
     * @apiParam {boolean} ignored
     * @apiName ScanResultIgnore
     * @apiGroup Scanner
     * @apiVersion 1.0.0
     * @apiPermission manage_options
     */
    public function routeResultIgnorePost($request)
    {
        $type = $request->get_param('type');
        $value = $request->get_param('value');
        $ignored = $request->get_param('ignored');
        \delete_transient(ViewScanner::TRANSIENT_SERVICES_FOR_NOTICE);
        \delete_transient(Query::TRANSIENT_SCANNED_EXTERNAL_URLS);
        return new WP_REST_Response(['updated' => Core::getInstance()->getNotices()->setScannerIgnored($type, $value, $ignored)]);
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {get} /real-cookie-banner/v1/scanner/result/markup/:id Get markup by scan entry ID
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {number} id
     * @apiName GetMarkup
     * @apiGroup Scanner
     * @apiVersion 1.0.0
     * @apiPermission manage_options
     */
    public function routeResultMarkupById($request)
    {
        $id = \intval($request->get_param('id'));
        $result = Core::getInstance()->getScanner()->getQuery()->getMarkup($id);
        return $result !== null ? new WP_REST_Response($result) : new WP_Error('rest_not_found', 'Scan entry not found');
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {get} /real-cookie-banner/v1/scanner/scan-without-login Scan an URL without login (loopback request)
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {string} url
     * @apiParam {number} jobId
     * @apiName ScanWithoutLogin
     * @apiGroup Scanner
     * @apiVersion 1.0.0
     * @apiPermission manage_options
     */
    public function routeScanWithoutLogin($request)
    {
        $url = $request->get_param('url');
        $jobId = $request->get_param('jobId');
        // Check if the job ID is valid
        $job = Core::getInstance()->getRealQueue()->getQuery()->fetchById($jobId);
        if ($job === null || !$job->data->isLoopback) {
            return new WP_Error('rest_not_found', 'Job not found');
        }
        $checker = new SavingConsentViaRestApiEndpointChecker();
        // See https://github.com/WordPress/WordPress/blob/8fbd2fc6f40ea1f2ad746758b7111a66ab134e19/wp-admin/includes/class-wp-site-health.php#L2136-L2137
        $checker->setRequestArgument('sslverify', \apply_filters('https_local_ssl_verify', \false));
        $isNonBlockingRequestStarted = Core::getInstance()->getNotices()->isNonBlockingRequestStarted();
        if ($checker->start($url, $isNonBlockingRequestStarted)) {
            $requestArguments = $checker->getRequestArguments();
            $result = \wp_remote_get($url, ['redirection' => 0, 'cookies' => $requestArguments['cookies'], 'headers' => $requestArguments['headers'], 'timeout' => $requestArguments['timeout'], 'sslverify' => $requestArguments['sslverify']]);
            if (\is_wp_error($result)) {
                return new WP_Error('rest_scan_without_login_error', $result->get_error_message());
            }
            $status = \wp_remote_retrieve_response_code($result);
            /**
             * > The ok read-only property of the Response interface contains a Boolean stating whether
             * > the response was successful (status in the range 200-299) or not.
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
             */
            $ok = $status >= 200 && $status < 300;
            // Check for a `Location` redirect
            $location = \wp_remote_retrieve_header($result, 'Location');
            return new WP_REST_Response(['status' => $status, 'statusText' => \wp_remote_retrieve_response_message($result), 'ok' => $ok, 'headers' => (object) \wp_remote_retrieve_headers($result), 'redirected' => !empty($location), 'responseUrl' => $location, 'body' => \wp_remote_retrieve_body($result)]);
        } else {
            return new WP_Error('rest_scan_without_login_error', 'Loopback request could not be started.');
        }
    }
    /**
     * Add live results for the scanner tab.
     *
     * @param mixed $data
     */
    public function real_queue_additional_data_list($data)
    {
        $data['templates'] = ['items' => AbstractTemplate::toArrays(Core::getInstance()->getScanner()->getQuery()->getScannedTemplates())];
        $data['externalUrls'] = $this->routeResultExternalUrls()->get_data();
        // Remove explicit notices of external URLs which do not require a manual scan
        Core::getInstance()->getNotices()->dismissScannerExplicitExternalUrlCoverageNotice(Notices::SCANNER_EXPLICIT_EXTERNAL_URL_COVERAGE_STATE_SCANNED);
        return $data;
    }
    /**
     * Add live results for the scanner results in admin bar.
     *
     * @param mixed $data
     */
    public function real_queue_additional_data_notice($data)
    {
        $viewScanner = ViewScanner::instance();
        list($services, $countAll) = $viewScanner->getServicesForNotice(ViewScanner::MAX_FOUND_SERVICES_LIST_ITEMS);
        return ['countAll' => $countAll, 'text' => \count($services) === 0 ? null : $viewScanner->generateNoticeTextFromServices($services, $countAll)];
    }
    /**
     * New instance.
     */
    public static function instance()
    {
        return new \DevOwl\RealCookieBanner\rest\Scanner();
    }
}
