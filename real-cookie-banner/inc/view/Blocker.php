<?php

namespace DevOwl\RealCookieBanner\view;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\services\Service;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\HeadlessContentBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\imagePreview\ImagePreview;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\scanner\BlockableScanner;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\ScriptInlineExtractExternalUrl;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\scanner\Scanner;
use DevOwl\RealCookieBanner\settings\Blocker as SettingsBlocker;
use DevOwl\RealCookieBanner\settings\CookieGroup;
use DevOwl\RealCookieBanner\settings\General;
use DevOwl\RealCookieBanner\Utils;
use DevOwl\RealCookieBanner\view\blockable\BlockerPostType;
use DevOwl\RealCookieBanner\view\blocker\Plugin;
use WP_Scripts;
use WP_Dependencies;
use WP_Error;
use WP_Query;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Block common HTML tags!
 * @internal
 */
class Blocker
{
    use UtilsProvider;
    const BUTTON_CLICKED_IDENTIFIER = 'unblock';
    /**
     * See `visualParentSelectors` parameter in `findVisualParent` for more information.
     */
    const VISUAL_PARENT_SELECTORS = [
        // [Plugin Comp] Divi Builder
        '.et_pb_video_box' => 1,
        '.et_pb_video_slider:has(>.et_pb_slider_carousel %s)' => 'self',
        // [Theme Comp] Astra Theme (Gutenberg Block)
        '.ast-oembed-container' => 1,
        // [Plugin Comp] WP Bakery
        '.wpb_video_wrapper' => 1,
        // [Plugin Comp] GoodLayers page builder
        '.gdlr-core-pbf-background-wrap' => 1,
    ];
    /**
     * See `dependantVisibilityContainers` parameter in `createVisual` for more information.
     */
    const DEPENDANT_VISIBILITY_CONTAINERS = [
        '[role="tabpanel"]',
        // [Plugin Comp] https://wordpress.org/plugins/essential-addons-for-elementor-lite/
        '.eael-tab-content-item',
        // [Plugin Comp] https://de.wordpress.org/plugins/wp-contact-slider/
        '.wpcs_content_inner',
        // [Plugin Comp] OptimizePress
        '.op3-contenttoggleitem-content',
        '.op3-popoverlay-content',
        // [Plugin Comp] Popup Maker
        '.pum-overlay',
        // [Plugin Comp] Elementor Pro Popups
        '[data-elementor-type="popup"]',
        // [Plugin Comp] https://ultimateblocks.com/content-toggle-accordion-block/
        '.wp-block-ub-content-toggle-accordion-content-wrap',
        // [Plugin Comp] Impreza
        '.w-popup-wrap',
        // [Plugin Comp] Oxygen Builder
        '.oxy-lightbox_inner[data-inner-content=true]',
        '.oxy-pro-accordion_body',
        '.oxy-tab-content',
        // [Plugin Comp] https://wordpress.org/plugins/kadence-blocks/
        '.kt-accordion-panel',
        // [Plugin Comp] WP Bakery Tabs
        '.vc_tta-panel-body',
        // [Plugin Comp] Magnific popup
        '.mfp-hide',
        // [Plugin Comp] Thrive Architect lightbox
        'div[id^="tve_thrive_lightbox_"]',
        // [Plugin Comp] Bricks
        '.brxe-xpromodalnestable',
        // [Plugin Comp] EventON
        '.evcal_eventcard',
        // [Plugin Comp] Divi Builder
        '.divioverlay',
        '.et_pb_toggle_content',
    ];
    /**
     * See `disableDeduplicateExceptions` parameter in `createVisual` for more information.
     */
    const DISABLE_DEDUPLICATE_EXCEPTIONS = [
        // [Plugin Comp] Divi Builder
        '.et_pb_video_slider',
    ];
    const OB_START_PLUGINS_LOADED_PRIORITY = (\PHP_INT_MAX - 1) * -1;
    /**
     * Force to output the needed computing time at the end of the page for debug purposes.
     */
    const FORCE_TIME_COMMENT_QUERY_ARG = 'rcb-calc-time';
    /**
     * A list of MD5 hashes of HTML strings which got successfully processed. This allows
     * you to run `registerOutputBuffer` multiple times.
     */
    private $processedOutputBufferHtmlHashes = [];
    /**
     * See `HeadlessContentBlocker`
     *
     * @var HeadlessContentBlocker
     */
    private $headlessContentBlocker;
    /**
     * A list of handles which got blocked. They are lazily detected through e.g. `sgo_js_minify_exclude`.
     */
    private $blockedHandles = ['js' => [], 'css' => []];
    /**
     * A list of URLs which are currently being processed in the `pre_http_request` hook. This is used to avoid
     * duplicate processing of the same URL and leading to a infinite loop and memory exhaustion.
     */
    private $currentRequestUrlQueue = [];
    /**
     * C'tor.
     *
     * @codeCoverageIgnore
     */
    private function __construct()
    {
        // Silence is golden.
    }
    /**
     * Get `HeadlessContentBlocker` instance.
     */
    public function getHeadlessContentBlocker()
    {
        if ($this->headlessContentBlocker === null) {
            $headlessContentBlocker = new HeadlessContentBlocker();
            $isScanning = Core::getInstance()->getScanner()->isActive();
            if ($isScanning) {
                // This plugin needs to be available before our custom hooks fired in `Plugin`
                $headlessContentBlocker->addPlugin(ScriptInlineExtractExternalUrl::class);
            }
            // This is our custom Real Cookie Banner plugin (runs hooks, adds standard plugins, adds theme / plugin compatibilities, ...)
            $headlessContentBlocker->addPlugin(Plugin::class);
            if ($isScanning) {
                /**
                 * This plugin needs to be available after our custom hooks fired in `Plugin`
                 *
                 * @var BlockableScanner
                 */
                $scanner = $headlessContentBlocker->addPlugin(BlockableScanner::class);
                $scanner->setSourceUrl(Scanner::getCurrentSourceUrl());
            }
            $headlessContentBlocker->addBlockables($this->createBlockables($headlessContentBlocker));
            $headlessContentBlocker->setup();
            $this->headlessContentBlocker = $headlessContentBlocker;
        }
        return $this->headlessContentBlocker;
    }
    /**
     * Apply the content blocker attributes to the output buffer when it is enabled.
     *
     * You can start this output buffer multiple times as it is safe to avoid execution of same
     * strings multiple times for the headless content blocker (e.g. multiple WordPress hook lifecycle).
     */
    public function registerOutputBuffer()
    {
        if ($this->isEnabled()) {
            \ob_start([$this, 'ob_start']);
        }
    }
    /**
     * Close a output buffer. This is not necessarily needed as PHP automatically closes them, but in some
     * cases it is needed to make the modified content available to previously read output buffers in e.g.
     * earlier WordPress hook lifecycle.
     */
    public function closeOutputBuffer()
    {
        if (\ob_get_length()) {
            \ob_end_flush();
        }
    }
    /**
     * Event for ob_start.
     *
     * @param string $response
     */
    public function ob_start($response)
    {
        if (Utils::isDownload()) {
            return $response;
        }
        $start = \microtime(\true);
        // Measure replace time
        if (\in_array(\md5($response), $this->processedOutputBufferHtmlHashes, \true)) {
            // This buffer was already processed...
            return $response;
        } else {
            /**
             * Block content in a given HTML string. This is a Consent API filter and can be consumed
             * by third-party plugin and theme developers. See example for usage.
             *
             * @hook Consent/Block/HTML
             * @param {string} $html
             * @return {string}
             * @example <caption>Block content of a given HTML string</caption>
             * $output = apply_filters('Consent/Block/HTML', '<iframe src="https://player.vimeo.com/..." />');
             */
            $newResponse = \apply_filters('Consent/Block/HTML', $response);
        }
        $time_elapsed_secs = \microtime(\true) - $start;
        $htmlEndComment = '<!--rcb-cb:' . \json_encode(['replace-time' => $time_elapsed_secs]) . '-->';
        $newResponse = ($newResponse === null ? $response : $newResponse) . (isset($_GET[self::FORCE_TIME_COMMENT_QUERY_ARG]) ? $htmlEndComment : '');
        $this->processedOutputBufferHtmlHashes[] = \md5($newResponse);
        return $newResponse;
    }
    /**
     * Apply content blockers to a given HTML. It also supports JSON output.
     *
     * If you want to use this functionality in your plugin, please use the filter `Consent/Block/HTML` instead!
     *
     * @param mixed $html
     */
    public function replace($html)
    {
        if (!$this->isEnabled()) {
            return $html;
        }
        return $this->getHeadlessContentBlocker()->modifyAny($html);
    }
    /**
     * Get all available blockables.
     *
     * @param HeadlessContentBlocker $headlessContentBlocker
     * @return AbstractBlockable[]
     */
    protected function createBlockables($headlessContentBlocker)
    {
        $blockables = [];
        $blockers = SettingsBlocker::getInstance()->getOrdered();
        /**
         * All services.
         *
         * @var Service[]
         */
        $allServices = [];
        foreach (Core::getInstance()->getCookieConsentManagement()->getSettings()->getGeneral()->getServiceGroups() as $group) {
            $allServices = \array_merge($allServices, $group->getItems());
        }
        foreach ($blockers as &$blocker) {
            // Ignore blockers with no connected cookies
            if (\count($blocker->metas[SettingsBlocker::META_NAME_SERVICES]) + \count($blocker->metas[SettingsBlocker::META_NAME_TCF_VENDORS]) === 0) {
                continue;
            }
            $blockables[] = new BlockerPostType($headlessContentBlocker, $blocker, $allServices);
        }
        /**
         * Allows you to add, modify or remove existing `AbstractBlockable` instances. For usual,
         * they get generated of published Content Blocker post types records. This allows you
         * to block for example by custom criteria (services, TCF vendor, ...).
         *
         * **Note**: This hook is called only once, cause the result is cached for performance reasons!
         *
         * @hook RCB/Blocker/ResolveBlockables
         * @param {AbstractBlockable[]} $blockables
         * @param {HeadlessContentBlocker} $headlessContentBlocker
         * @return {AbstractBlockable[]}
         * @ignore
         * @since 2.6.0
         */
        return \apply_filters('RCB/Blocker/ResolveBlockables', $blockables, $headlessContentBlocker);
    }
    /**
     * Check if content blocker is enabled on the current request.
     */
    protected function isEnabled()
    {
        global $wp_query;
        $isEnabled = (Utils::isFrontend() || $this->isAdminAjaxAction()) && General::getInstance()->isBannerActive() && General::getInstance()->isBlockerActive() && !\is_customize_preview() && !$this->isCurrentRequestException();
        // Disable content blocker for AMP pages completely as it needs a AMP-specific consent management system
        if (\function_exists('amp_is_request') && (\current_action() === 'wp' || \did_action('wp')) && \amp_is_request()) {
            $isEnabled = \false;
        }
        // [Plugin Comp] https://wordpress.org/plugins/dhl-for-woocommerce/
        if ($wp_query instanceof WP_Query && isset($wp_query->query_vars['dhl_download_label'])) {
            return \false;
        }
        /**
         * Allows you to force the content blocker take action. This is especially
         * useful if you want to use the blocker functionality for custom mechanism
         * like Scanner.
         *
         * @hook RCB/Blocker/Enabled
         * @param {boolean} $isEnabled
         * @return {boolean}
         * @since 2.6.0
         */
        return \apply_filters('RCB/Blocker/Enabled', $isEnabled);
    }
    /**
     * Check if the current request should not load any blocking mechanism depending
     * on a special condition.
     *
     */
    protected function isCurrentRequestException()
    {
        return isset($_GET['callback']) && $_GET['callback'] === 'map-iframe' || isset($_GET['lease']) && \preg_match('/^[a-f0-9]{32}$/i', $_GET['lease']) || isset($_GET['trustindex-google-widget-content']);
    }
    /**
     * Allows to modify content within a `admin-ajax.php` action.
     */
    protected function isAdminAjaxAction()
    {
        $doingAjax = \wp_doing_ajax();
        // Special case: WP Grid Builder and adding the `DOING_AJAX` constant manually.
        if ($doingAjax && isset($_POST['wpgb'])) {
            return \true;
        }
        /**
         * Run the content blocker over `admin-ajax.php` responses.
         *
         * @hook RCB/Blocker/AdminAjaxActions
         * @param {string[]} $actions
         * @return {string[]}
         * @since 3.4.11
         */
        $actions = \apply_filters('RCB/Blocker/AdminAjaxActions', [
            // [Plugin Comp] https://wordpress.org/plugins/modern-events-calendar-lite/
            'mec_load_single_page',
            // [Plugin Comp] https://wordpress.org/plugins/wpdiscuz/
            'wpdLoadMoreComments',
            'wpdAddComment',
            'wpdSorting',
            // [Plugin Comp] Elementor
            'e_elementor_popup',
            // [Plugin Comp] https://crocoblock.com/plugins/jetsmartfilters/
            'jet_smart_filters',
            // [Plugin Comp] https://www.buddyboss.com/
            'activity_filter',
            // [Plugin Comp] Elementor
            'loadmore_elementor_portfolio',
            // [Plugin Comp] https://knowledgebase.unitedthemes.com/docs/how-to-set-up-your-portfolio/
            'ut_get_portfolio_post_content',
            // [Plugin Comp] https://core.pixfort.com/
            'pix_get_popup_content',
            // [Plugin Comp] Formidable Forms
            'frm_entries_create',
        ]);
        return $doingAjax && isset($_REQUEST['action']) && \in_array($_REQUEST['action'], $actions, \true);
    }
    /**
     * Hook into every HTTP request made by the WordPress instance and add script tags to the final HTML output
     * with the backtrace and URL so we can scan and block HTTP requests to external services on server side.
     *
     * @param array $response
     * @param array $parsed_args
     * @param string $url
     * @see https://github.com/WordPress/wordpress-develop/blob/c726220a21d13fdb5409372b652c9460c59ce1db/src/wp-includes/functions.php#L7227-L7267
     * @see https://developer.wordpress.org/reference/functions/wp_debug_backtrace_summary/
     */
    public function pre_http_request($response, $parsed_args, $url)
    {
        // Only allow to block requests when our taxonomy is ready and can be read. Otherwise, we could run into "Invalid taxonomy" errors
        // when reading service groups in `CookieGroup::getOrdered()` class.
        // Example: WP Rocket sends a license check request before the `init` hook:
        if (!\taxonomy_exists(CookieGroup::TAXONOMY_NAME)) {
            return $response;
        }
        static $truncated_path;
        $backtrace = \debug_backtrace(\DEBUG_BACKTRACE_IGNORE_ARGS, 15);
        if (!\is_array($backtrace) || !\is_string($url)) {
            return $response;
        }
        if (isset($this->currentRequestUrlQueue[$url]) && $this->currentRequestUrlQueue[$url]) {
            return $response;
        }
        $this->currentRequestUrlQueue[$url] = \true;
        $result = [];
        if (!isset($truncated_path)) {
            $truncated_path = \wp_normalize_path(ABSPATH);
        }
        // Remove the stack trace of `WP_Http->get, WP_Http->request, apply_filters('pre_http_request'), WP_Hook->apply_filters, DevOwl\\RealCookieBanner\\scanner\\Scanner->pre_http_request`
        $skipFunctions = [['wp-includes/class-wp-hook.php', 'pre_http_request'], ['wp-includes/plugin.php', 'apply_filters'], ['wp-includes/class-wp-http.php', 'apply_filters'], ['wp-includes/class-wp-http.php', 'request'], ['wp-includes/http.php', 'get']];
        $stopSkip = \false;
        $result[] = \strtoupper($parsed_args['method']) . ' ' . $url;
        foreach ($backtrace as &$trace) {
            if (isset($trace['file']) && isset($trace['line']) && isset($trace['function'])) {
                $path = \wp_normalize_path($trace['file']);
                if (\strpos($path, $truncated_path) === 0) {
                    $path = \substr($path, \strlen($truncated_path));
                }
                $function = $trace['function'];
                if (!$stopSkip) {
                    foreach ($skipFunctions as $skipFunction) {
                        if ($path === $skipFunction[0] && $function === $skipFunction[1]) {
                            continue 2;
                        }
                    }
                    $stopSkip = \true;
                }
                $result[] = '  ' . $path . ':' . $trace['line'] . ' - ' . $function;
            }
        }
        $htmlToScan = \sprintf('<script wordpress-filter="pre_http_request">
wordpress-filter:pre_http_request
%s
</script>', \implode("\n", $result));
        $htmlToScan = $this->replace($htmlToScan);
        if (\strpos($htmlToScan, Constants::HTML_ATTRIBUTE_INLINE) !== \false) {
            $required = \preg_match('/consent-required="([^"]+)"/', $htmlToScan, $matches);
            if (isset($matches[1]) && !empty($matches[1])) {
                // This is not a scan process, but the hook got blocked by a content blocker.
                // Lets check if we have consent for all required services.
                $required = \array_map('intval', \explode(',', $matches[1]));
                if (\count($required) > 0) {
                    $hasConsent = \true;
                    foreach ($required as $service) {
                        if (!\wp_rcb_consent_given($service)['cookieOptIn']) {
                            $hasConsent = \false;
                            break;
                        }
                    }
                    if (!$hasConsent) {
                        return new WP_Error('rcb_request_blocked_missing_consent', 'Real Cookie Banner blocked the request due to missing consent.', ['services' => $required]);
                    }
                }
            }
            // We keep the request firing in scan mode to catch also follow-up requests.
        }
        unset($this->currentRequestUrlQueue[$url]);
        return $response;
    }
    /**
     * Exclude blocked styles from autoptimize inline aggregation.
     *
     * @param string $exclusions
     * @see https://github.com/futtta/autoptimize/pull/386#issuecomment-1156622026
     */
    public function autoptimize_filter_css_exclude($exclusions)
    {
        return \sprintf('%s, %s-href-%s', $exclusions, Constants::HTML_ATTRIBUTE_CAPTURE_PREFIX, Constants::HTML_ATTRIBUTE_CAPTURE_SUFFIX);
    }
    /**
     * Exclude blocked styles and scripts
     *
     * @param array $assets
     */
    public function avf_exclude_assets($assets)
    {
        $blockedHandles = $this->getHeadlessContentBlocker()->getBlockableRulesStartingWith('avf_exclude_assets:', \true);
        foreach ($blockedHandles as $handle) {
            $assets['js'][] = $handle;
            $assets['css'][] = $handle;
        }
        return $assets;
    }
    /**
     * Exclude blocked scripts from SiteGround Optimizer optimizations.
     *
     * @param string[] $excluded_handles
     */
    public function sgo_js_minify_exclude($excluded_handles)
    {
        $this->iterateBlockedHandles(\wp_scripts());
        return \array_merge($excluded_handles, $this->blockedHandles['js']);
    }
    /**
     * Exclude blocked styles from SiteGround Optimizer optimizations.
     *
     * @param string[] $excluded_handles
     */
    public function sgo_css_minify_exclude($excluded_handles)
    {
        $this->iterateBlockedHandles(\wp_styles());
        return \array_merge($excluded_handles, $this->blockedHandles['css']);
    }
    /**
     * Iterate over all dependencies and add them to the blocked handles list if they are not already in the list.
     *
     * @param WP_Dependencies $dependencies
     */
    protected function iterateBlockedHandles($dependencies)
    {
        $list =& $this->blockedHandles[$dependencies instanceof WP_Scripts ? 'js' : 'css'];
        $tag = $dependencies instanceof WP_Scripts ? 'script' : 'style';
        $html = '';
        foreach ($dependencies->registered as $reg) {
            $handle = $reg->handle;
            if (!empty($handle) && !\in_array($handle, $list, \true)) {
                $src = $reg->src ?? \false;
                if (!empty($src)) {
                    $html .= \sprintf('<%1$s data-iterate-handle="%2$s" src="%3$s"></%1$s>', $tag, $handle, $src);
                }
            }
        }
        $matchCb = function ($result, $matcher, $match) use(&$list) {
            if ($result->isBlocked()) {
                $list[] = $match->getAttribute('data-iterate-handle');
            }
        };
        $this->getHeadlessContentBlocker()->addBlockedMatchCallback($matchCb);
        $this->replace($html);
        $this->getHeadlessContentBlocker()->removeBlockedMatchCallback($matchCb);
        return $list;
    }
    /**
     * Modify any URL and add a query argument to skip the content blocker mechanism.
     *
     * @param string $url
     */
    public function modifyUrlToSkipContentBlocker($url)
    {
        return \add_query_arg(
            // Use the `fl_builder` argument which is covered by `Utils::isPageBuilder()`
            ['fl_builder' => '1'],
            $url
        );
    }
    /**
     * Filter REST API responses to disable content blocking for specific endpoints.
     *
     * @param WP_REST_Response $response
     * @param WP_REST_Server $server
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     */
    public function skipContentBlockerOnRestAPIEndpoint($response, $server, $request)
    {
        // Check if this is the OptimizePress 3 page builder data endpoint
        $route = $request->get_route();
        if (\preg_match('/^\\/op3\\/v1\\/pages\\/\\d+\\/data/', $route)) {
            $data = $response->get_data();
            // Add the skip property to disable content blocking
            if (\is_array($data)) {
                $data['$$skipFastHtmlTag'] = ['HeadlessContentBlocker'];
                $response->set_data($data);
            } elseif (\is_object($data)) {
                $data->{'$$skipFastHtmlTag'} = ['HeadlessContentBlocker'];
                $response->set_data($data);
            }
        }
        return $response;
    }
    /**
     * Modify the HTML of an oEmbed HTML and keep the original pasted URL as attribute
     * so our headless content blocker can generate an image preview from the original URL.
     *
     * @param string $html
     * @param string $url
     * @see https://wordpress.stackexchange.com/q/353313/83335
     * @see https://regex101.com/r/r1n1ZY/1
     */
    public function modifyOEmbedHtmlToKeepOriginalUrl($html, $url)
    {
        if (\strpos($html, ImagePreview::HTML_ATTRIBUTE_TO_FETCH_URL_FROM) === \false && \filter_var($url, \FILTER_VALIDATE_URL) && Utils::startsWith($url, 'http')) {
            return \preg_replace('/^(<[A-Za-z-]+)/m', \sprintf('$1 %s="%s"', ImagePreview::HTML_ATTRIBUTE_TO_FETCH_URL_FROM, \esc_attr($url)), $html, 1);
        }
        return $html;
    }
    /**
     * New instance.
     *
     * @codeCoverageIgnore
     */
    public static function instance()
    {
        return new \DevOwl\RealCookieBanner\view\Blocker();
    }
}
