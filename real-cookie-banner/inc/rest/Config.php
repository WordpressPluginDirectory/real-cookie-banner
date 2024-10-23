<?php

namespace DevOwl\RealCookieBanner\rest;

use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\AbstractSyncPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\Sync;
use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Service;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\comp\language\Hooks;
use DevOwl\RealCookieBanner\comp\migration\AbstractDashboardTileMigration;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\settings\TcfVendorConfiguration;
use DevOwl\RealCookieBanner\settings\Blocker;
use DevOwl\RealCookieBanner\settings\Cookie;
use DevOwl\RealCookieBanner\settings\CountryBypass;
use DevOwl\RealCookieBanner\settings\General;
use DevOwl\RealCookieBanner\settings\Revision;
use DevOwl\RealCookieBanner\Utils;
use DevOwl\RealCookieBanner\view\Checklist;
use DevOwl\RealCookieBanner\view\ConfigPage;
use DevOwl\RealCookieBanner\view\navmenu\NavMenuLinks;
use DevOwl\RealCookieBanner\view\Notices;
use DevOwl\RealCookieBanner\view\shortcode\CookiePolicyShortcode;
use WP_Error;
use WP_HTTP_Response;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;
use WP_REST_Settings_Controller;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Create an config REST API, extending from the official `wp/v2/settings` route to also provide a route
 * for all Real Cookie Banner specific settings.
 * @internal
 */
class Config extends WP_REST_Settings_Controller
{
    use UtilsProvider;
    /**
     * Register endpoints.
     */
    public function rest_api_init()
    {
        $namespace = Service::getNamespace($this);
        $this->namespace = $namespace;
        $this->register_routes();
        \register_rest_route($namespace, '/checklist', ['methods' => 'GET', 'callback' => [$this, 'routeGetChecklist'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/checklist/(?P<id>[a-zA-Z0-9_-]+)', ['methods' => 'PUT', 'callback' => [$this, 'routePutChecklist'], 'permission_callback' => [$this, 'permission_callback'], 'args' => ['state' => ['type' => 'boolean', 'required' => \true]]]);
        \register_rest_route($namespace, '/revision/second-view', ['methods' => 'GET', 'callback' => [$this, 'routeGetRevisionSecondView'], 'permission_callback' => '__return_true']);
        \register_rest_route($namespace, '/revision/current', ['methods' => 'GET', 'callback' => [$this, 'routeGetRevisionCurrent'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/revision/(?P<hash>[a-zA-Z0-9_-]{32})', ['methods' => 'GET', 'callback' => [$this, 'routeGetRevisionByHash'], 'permission_callback' => [$this, 'permission_callback'], 'args' => ['backwardsCompatibility' => ['type' => 'boolean', 'default' => \true]]]);
        \register_rest_route($namespace, '/revision/independent/(?P<hash>[a-zA-Z0-9_-]{32})', ['methods' => 'GET', 'callback' => [$this, 'routeGetRevisionIndependentByHash'], 'permission_callback' => [$this, 'permission_callback'], 'args' => ['backwardsCompatibility' => ['type' => 'boolean', 'default' => \true]]]);
        \register_rest_route($namespace, '/revision/current', ['methods' => 'PUT', 'callback' => [$this, 'routePutRevisionCurrent'], 'permission_callback' => [$this, 'permission_callback'], 'args' => ['needs_retrigger' => ['type' => 'boolean', 'default' => \true]]]);
        \register_rest_route($namespace, '/cookie-groups/order', ['methods' => 'PUT', 'callback' => [$this, 'routeCookieGroupsOrder'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/cookies/order', ['methods' => 'PUT', 'callback' => [$this, 'routeCookiesOrder'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/cookies/unassigned', ['methods' => 'GET', 'callback' => [$this, 'routeCookiesUnassigned'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/country-bypass/database', ['methods' => 'PUT', 'callback' => [$this, 'routeCountryBypassDownload'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/migration/(?P<migrationId>[a-zA-Z0-9_-]+)/(?P<actionId>[a-zA-Z0-9_-]+)', ['methods' => 'POST', 'callback' => [$this, 'routeMigrationPost'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/migration/(?P<migrationId>[a-zA-Z0-9_-]+)', ['methods' => 'DELETE', 'callback' => [$this, 'routeMigrationDelete'], 'permission_callback' => [$this, 'permission_callback']]);
        \register_rest_route($namespace, '/nav-menu/add-links', ['methods' => 'POST', 'callback' => [$this, 'routeNavMenuAddLinksPost'], 'permission_callback' => [$this, 'permission_callback'], 'args' => ['id' => ['type' => 'string', 'required' => \true]]]);
        \register_rest_route($namespace, '/create-cookie-policy', ['methods' => 'POST', 'callback' => [$this, 'routeCreateCookiePolicy'], 'permission_callback' => [$this, 'permission_callback']]);
        // Make the search capable of embedded content and add the custom post statuses to the search results
        if (isset($_GET['_rcbExtendSearchResult'])) {
            $post_types = \get_post_types(['show_in_rest' => \true], 'objects');
            foreach ($post_types as $post_type) {
                \add_filter("rest_{$post_type->name}_item_schema", [$this, 'filter_rest_post_type_item_schema']);
                \add_filter("rest_prepare_{$post_type->name}", [$this, 'filter_rest_prepare_post'], 10, 3);
            }
            \add_filter('rest_post_collection_params', [$this, 'filter_rest_post_collection_params'], 10, 2);
            \add_filter('rest_post_search_query', [$this, 'filter_rest_post_search_query'], 10, 2);
        }
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
     * @api {get} /real-cookie-banner/v1/checklist Get all checklist items with their state
     * @apiHeader {string} X-WP-Nonce
     * @apiName ChecklistGet
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeGetChecklist()
    {
        return new WP_REST_Response(\array_merge(Checklist::getInstance()->result(), ['overdue' => Checklist::getInstance()->isOverdue(ConfigPage::CHECKLIST_OVERDUE)]));
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {put} /real-cookie-banner/v1/checklist/:id Mark a checklist item as checked / unchecked
     * @apiHeader {string} X-WP-Nonce
     * @apiHeader {boolean} state
     * @apiName ChecklistPut
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routePutChecklist($request)
    {
        Checklist::getInstance()->toggle($request->get_param('id'), $request->get_param('state'));
        return new WP_REST_Response(\array_merge(Checklist::getInstance()->result(), ['overdue' => Checklist::getInstance()->isOverdue(ConfigPage::CHECKLIST_OVERDUE)]));
    }
    /**
     * See API docs.
     *
     * @api {get} /real-cookie-banner/v1/revision/second-view Get the current lazy loadable data for the second view
     * @apiName RevisionSecondView
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeGetRevisionSecondView()
    {
        $frontend = Core::getInstance()->getCookieConsentManagement()->getFrontend();
        $output = $frontend->toJson();
        return new WP_REST_Response($frontend->prepareLazyData($output));
    }
    /**
     * See API docs.
     *
     * @api {get} /real-cookie-banner/v1/revision/current Get the current revision hash
     * @apiHeader {string} X-WP-Nonce
     * @apiName RevisionCurrent
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeGetRevisionCurrent()
    {
        $current = Revision::getInstance()->getCurrent();
        return new WP_REST_Response(\array_merge(['needs_retrigger' => Revision::getInstance()->needsRetrigger($current)], $current));
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @since 1.3.0
     * @api {get} /real-cookie-banner/v1/revision/:hash Get the revision by hash
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {boolean} [backwardsCompatibility=true]
     * @apiName RevisionByHash
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeGetRevisionByHash($request)
    {
        $result = Revision::getInstance()->getByHash($request->get_param('hash'), \false, $request->get_param('backwardsCompatibility'));
        return $result === null ? new WP_Error('rest_not_found', null, ['status' => 404]) : new WP_REST_Response(Core::getInstance()->getCookieConsentManagement()->getRevision()->prepareJsonForFrontend($result));
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @since 1.3.0
     * @api {get} /real-cookie-banner/v1/revision/independent/:hash Get the independent revision by hash
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {boolean} [backwardsCompatibility=true]
     * @apiName RevisionIndependentByHash
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeGetRevisionIndependentByHash($request)
    {
        $result = Revision::getInstance()->getByHash($request->get_param('hash'), \true, $request->get_param('backwardsCompatibility'));
        return $result === null ? new WP_Error('rest_not_found', null, ['status' => 404]) : new WP_REST_Response(Core::getInstance()->getCookieConsentManagement()->getRevision()->prepareJsonForFrontend($result));
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {put} /real-cookie-banner/v1/revision/current Update current revision hash from the latest settings
     * @apiHeader {string} X-WP-Nonce
     * @apiName RevisionCurrentPut
     * @apiParam {boolean} [needs_retrigger=true] If you do not want to collect new consents for the current revision, pass `false`
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routePutRevisionCurrent($request)
    {
        $revision = Revision::getInstance();
        $needsRetrigger = $request->get_param('needs_retrigger');
        if (!$needsRetrigger) {
            Core::getInstance()->getNotices()->getStates()->set(Notices::NOTICE_REVISON_REQUEST_NEW_CONSENT_PREFIX . $revision->getContextVariablesString(), $revision->getCurrent()['calculated']);
        }
        $current = $revision->getCurrent($needsRetrigger);
        return new WP_REST_Response(\array_merge(['needs_retrigger' => $revision->needsRetrigger($current)], $current));
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {put} /real-cookie-banner/v1/cookie-groups/order Order the cookie groups
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {number[]} ids
     * @apiName CookieGroupsOrder
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeCookieGroupsOrder($request)
    {
        // Get ids array
        $ids = $request->get_param('ids');
        if (!isset($ids) || !\is_array($ids) || empty($ids)) {
            return new WP_Error('rest_rcb_wrong_ids');
        }
        $ids = \array_map('absint', $ids);
        // Persist
        foreach ($ids as $index => $id) {
            \update_term_meta($id, 'order', $index);
        }
        return new WP_REST_Response(\true);
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {put} /real-cookie-banner/v1/cookies/order Order the cookies
     * @apiHeader {string} X-WP-Nonce
     * @apiParam {number[]} ids
     * @apiName CookiesOrder
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeCookiesOrder($request)
    {
        // Get ids array
        $ids = $request->get_param('ids');
        if (!isset($ids) || !\is_array($ids) || empty($ids)) {
            return new WP_Error('rest_rcb_wrong_ids');
        }
        $ids = \array_map('absint', $ids);
        // Persist
        foreach ($ids as $index => $id) {
            \wp_update_post(['ID' => $id, 'menu_order' => $index]);
        }
        return new WP_REST_Response(\true);
    }
    /**
     * See API docs.
     *
     * @api {get} /real-cookie-banner/v1/cookies/unassigned Get unassigned services
     * @apiHeader {string} X-WP-Nonce
     * @apiName CookiesUnassigned
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeCookiesUnassigned()
    {
        $posts = Cookie::getInstance()->getUnassignedCookies();
        $result = [];
        foreach ($posts as $post) {
            $result[] = ['id' => $post->ID, 'title' => $post->post_title];
        }
        return new WP_REST_Response($result);
    }
    /**
     * See API docs.
     *
     * @api {put} /real-cookie-banner/v1/country-bypass/database Download the Country Bypass IP database
     * @apiHeader {string} X-WP-Nonce
     * @apiName CountryBypassDatabaseDownload
     * @apiGroup Config
     * @apiPermission manage_options, PRO
     * @apiVersion 1.0.0
     */
    public function routeCountryBypassDownload()
    {
        $result = CountryBypass::getInstance()->updateDatabase();
        return \is_wp_error($result) ? $result : new WP_REST_Response(['dbDownloadTime' => \mysql2date('c', CountryBypass::getInstance()->getDatabaseDownloadTime(), \false)]);
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {post} /real-cookie-banner/v1/migration/:migration/:action Apply a registered migration action registered via `AbstractDashboardTileMigration::addAction`
     * @apiParam {string} migration
     * @apiParam {string} action
     * @apiHeader {string} X-WP-Nonce
     * @apiName DoMigration
     * @apiGroup Config
     * @apiPermission manage_options, PRO
     * @apiVersion 1.0.0
     */
    public function routeMigrationPost($request)
    {
        $result = AbstractDashboardTileMigration::doAction($request->get_param('migrationId'), $request->get_param('actionId'));
        if (\is_wp_error($result)) {
            return $result;
        }
        if ($result['success'] !== \true) {
            return new WP_Error('rcb_migration_failed', null, ['result' => $result]);
        }
        return $result;
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {delete} /real-cookie-banner/v1/migration/:migration/ Dismiss a migration by migration ID
     * @apiParam {string} migration
     * @apiHeader {string} X-WP-Nonce
     * @apiName DismissMigration
     * @apiGroup Config
     * @apiPermission manage_options, PRO
     * @apiVersion 1.0.0
     */
    public function routeMigrationDelete($request)
    {
        AbstractDashboardTileMigration::doDismiss($request->get_param('migrationId'));
        return new WP_REST_Response(['success' => \true]);
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {post} /real-cookie-banner/v1/nav-menu/add-links Add links to an existing menu
     * @apiParam {string} id The ID for this navigation
     * @apiHeader {string} X-WP-Nonce
     * @apiName NavMenuAddLinks
     * @apiGroup Config
     * @apiPermission manage_options, PRO
     * @apiVersion 1.0.0
     */
    public function routeNavMenuAddLinksPost($request)
    {
        $result = NavMenuLinks::instance()->addLinksToMenu($request->get_param('id'));
        if (\is_wp_error($result)) {
            return $result;
        }
        return new WP_REST_Response(['success' => $result]);
    }
    /**
     * See API docs.
     *
     * @param WP_REST_Request $request
     *
     * @api {post} /real-cookie-banner/v1/create-cookie-policy Create a cookie policy page
     * @apiHeader {string} X-WP-Nonce
     * @apiName CreateCookiePolicy
     * @apiGroup Config
     * @apiPermission manage_options
     * @apiVersion 1.0.0
     */
    public function routeCreateCookiePolicy($request)
    {
        $compLanguage = Core::getInstance()->getCompLanguage();
        $fnCreatePost = function () {
            return \wp_insert_post(['post_type' => 'page', 'post_content' => \sprintf('[%s]', CookiePolicyShortcode::TAG), 'post_title' => \_x('Cookie policy', 'legal-text', Hooks::TD_FORCED), 'post_status' => 'publish'], \true);
        };
        if ($compLanguage->isActive() && $compLanguage instanceof AbstractSyncPlugin) {
            $sourceLanguage = $compLanguage->getDefaultLanguage();
            $result = $compLanguage->switchToLanguage($sourceLanguage, function () use($fnCreatePost, $compLanguage) {
                $td = Hooks::getInstance()->createTemporaryTextDomain();
                $result = $fnCreatePost();
                $td->teardown();
                return $result;
            });
            if (!\is_wp_error($result)) {
                $sync = new Sync(['page' => ['data' => ['menu_order'], 'taxonomies' => [], 'meta' => ['copy' => [], 'copy-once' => []]]], [], $compLanguage);
                $sync->startCopyProcess()->copyPost($result, $sourceLanguage, \array_values(\array_diff($compLanguage->getActiveLanguages(), [$sourceLanguage])));
            }
        } else {
            $result = $fnCreatePost();
        }
        if (\is_wp_error($result)) {
            return $result;
        }
        \update_option(General::SETTING_COOKIE_POLICY_ID, $result);
        return new WP_REST_Response(['id' => $result]);
    }
    /**
     * Retrieves all of the registered options for the Settings API, specific to Real Cookie Banner.
     *
     * @return array Array of registered options.
     */
    public function get_registered_options()
    {
        $array = parent::get_registered_options();
        foreach ($array as $key => $value) {
            if (!Utils::startsWith($key, RCB_OPT_PREFIX)) {
                unset($array[$key]);
            }
        }
        return $array;
    }
    /**
     * See `WP_REST_Settings_Controller`.
     *
     * @param WP_REST_Request $request Full details about the request.
     */
    public function get_item_permissions_check($request)
    {
        return \current_user_can(Core::MANAGE_MIN_CAPABILITY);
    }
    /**
     * Check if settings got updated and `do_action`.
     *
     * @param WP_HTTP_Response $response
     * @param WP_REST_Server $server
     * @param WP_REST_Request $request
     */
    public function rest_post_dispatch($response, $server, $request)
    {
        if ($request->get_route() === \sprintf('/%s/%s', $this->namespace, $this->rest_base) && $request->get_method() === 'PATCH' && isset($response->data) && \is_array($response->data)) {
            // Check if any RCB specific option was set
            foreach (\array_keys($response->data) as $key) {
                if (\strpos($key, RCB_OPT_PREFIX, 0) === 0) {
                    /**
                     * Settings got updated in the "Settings" tab.
                     *
                     * @hook RCB/Settings/Updated
                     * @param {WP_HTTP_Response} $response
                     * @param {WP_REST_Request} $request
                     * @return {WP_HTTP_Response}
                     */
                    $response = \apply_filters('RCB/Settings/Updated', $response, $request);
                    break;
                }
            }
        }
        return $response;
    }
    /**
     * Filter the post type item schema to add embed context to content properties.
     *
     * Additionally, add `type_singular` property to the schema.
     *
     * @param array $schema
     * @return array
     */
    public function filter_rest_post_type_item_schema($schema)
    {
        if (isset($schema['properties']['content'])) {
            if (!\in_array('embed', $schema['properties']['content']['context'], \true)) {
                $schema['properties']['content']['context'][] = 'embed';
            }
            if (!\in_array('embed', $schema['properties']['status']['context'], \true)) {
                $schema['properties']['status']['context'][] = 'embed';
            }
            if (isset($schema['properties']['content']['properties']['rendered'])) {
                if (!\in_array('embed', $schema['properties']['content']['properties']['rendered']['context'], \true)) {
                    $schema['properties']['content']['properties']['rendered']['context'][] = 'embed';
                }
            }
            $schema['properties']['type_singular'] = ['description' => \__('The singular name of the post type.'), 'type' => 'string', 'context' => ['view', 'edit', 'embed'], 'readonly' => \true];
            // Iterate through all taxonomies registered for this post type and allow embedding of them
            $taxonomies = \get_object_taxonomies($schema['title'], 'objects');
            foreach ($taxonomies as $taxonomy) {
                $tax_name = $taxonomy->name;
                if (isset($schema['properties'][$tax_name])) {
                    if (!\in_array('embed', $schema['properties'][$tax_name]['context'], \true)) {
                        $schema['properties'][$tax_name]['context'][] = 'embed';
                    }
                }
            }
        }
        return $schema;
    }
    /**
     * Filter the search query to include custom post statuses when user has permission.
     *
     * @param array $args The search query arguments.
     * @param WP_REST_Request $request The REST request object.
     * @return array Modified search query arguments.
     */
    public function filter_rest_post_search_query($args, $request)
    {
        if (\current_user_can(Core::MANAGE_MIN_CAPABILITY)) {
            $status = $request->get_param('status');
            if (!empty($status)) {
                $args['post_status'] = $status;
            }
        }
        return $args;
    }
    /**
     * Add custom 'status' parameter to post collection parameters.
     *
     * @param array $query_params JSON Schema-formatted collection parameters.
     * @param WP_Post_Type $post_type Post type object.
     * @return array Modified collection parameters.
     */
    public function filter_rest_post_collection_params($query_params, $post_type)
    {
        $query_params['status'] = ['description' => \__('Limit result set to posts with one or more specific statuses.'), 'type' => 'array', 'items' => ['type' => 'string', 'enum' => \array_merge(['any'], \get_post_stati())], 'default' => ['publish']];
        return $query_params;
    }
    /**
     * Filter the post response to add typeSingular property.
     *
     * @param WP_REST_Response $response The response object.
     * @param WP_Post $post The post object.
     * @param WP_REST_Request $request The request object.
     * @return WP_REST_Response Modified response object.
     */
    public function filter_rest_prepare_post($response, $post, $request)
    {
        $post_type_obj = \get_post_type_object($post->post_type);
        $response->data['type_singular'] = $post_type_obj->labels->singular_name;
        return $response;
    }
    /**
     * Make our registered post types public for the search endpoint so it works for the
     * "Connected services" field. This is a hacky way as WordPress itself does not allow to
     * include private post types to the `wp/v2/search` REST API endpoint.
     *
     * @param array $queryVars
     * @see https://github.com/WordPress/WordPress/blob/4f8f6e9fa25f598fc06829d0ea72caac4d3d60e4/wp-includes/rest-api/search/class-wp-rest-post-search-handler.php#L28-L39
     */
    public function modify_wp_post_types_temporarily($queryVars)
    {
        global $wp_post_types;
        if (isset($_GET['_rcbExtendSearchResult']) && isset($queryVars['rest_route']) && $queryVars['rest_route'] === '/wp/v2/search' && isset($_GET['subtype']) && \current_user_can(Core::MANAGE_MIN_CAPABILITY)) {
            foreach ([Cookie::CPT_NAME, Blocker::CPT_NAME] as $cpt) {
                if (isset($wp_post_types[$cpt]) && $_GET['subtype'] === $cpt) {
                    $wp_post_types[$cpt]->public = \true;
                    $wp_post_types[$cpt]->publicly_queryable = \true;
                }
            }
            if ($this->isPro() && isset($wp_post_types[TcfVendorConfiguration::CPT_NAME]) && $_GET['subtype'] === TcfVendorConfiguration::CPT_NAME) {
                $wp_post_types[TcfVendorConfiguration::CPT_NAME]->public = \true;
                $wp_post_types[TcfVendorConfiguration::CPT_NAME]->publicly_queryable = \true;
            }
        }
        return $queryVars;
    }
    /**
     * New instance.
     */
    public static function instance()
    {
        return new \DevOwl\RealCookieBanner\rest\Config();
    }
}
