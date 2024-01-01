<?php

namespace DevOwl\RealCookieBanner\settings;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Cache;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\settings\Blocker as LiteBlocker;
use DevOwl\RealCookieBanner\lite\settings\TcfVendorConfiguration;
use DevOwl\RealCookieBanner\overrides\interfce\settings\IOverrideBlocker;
use DevOwl\RealCookieBanner\view\Checklist;
use DevOwl\RealCookieBanner\view\checklist\AddBlocker;
use WP_Error;
use WP_Post;
use WP_REST_Posts_Controller;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Register content blocker custom post type.
 * @internal
 */
class Blocker implements IOverrideBlocker
{
    use UtilsProvider;
    use LiteBlocker;
    const CPT_NAME = 'rcb-blocker';
    const META_NAME_PRESET_ID = 'presetId';
    const META_NAME_PRESET_VERSION = 'presetVersion';
    const META_NAME_RULES = 'rules';
    const META_NAME_CRITERIA = 'criteria';
    const META_NAME_TCF_VENDORS = 'tcfVendors';
    const META_NAME_TCF_PURPOSES = 'tcfPurposes';
    const META_NAME_SERVICES = 'services';
    const META_NAME_IS_VISUAL = 'isVisual';
    const META_NAME_VISUAL_TYPE = 'visualType';
    const META_NAME_VISUAL_MEDIA_THUMBNAIL = 'visualMediaThumbnail';
    const META_NAME_VISUAL_CONTENT_TYPE = 'visualContentType';
    const META_NAME_IS_VISUAL_DARK_MODE = 'isVisualDarkMode';
    const META_NAME_VISUAL_BLUR = 'visualBlur';
    const META_NAME_VISUAL_DOWNLOAD_THUMBNAIL = 'visualDownloadThumbnail';
    const META_NAME_VISUAL_HERO_BUTTON_TEXT = 'visualHeroButtonText';
    const META_NAME_SHOULD_FORCE_TO_SHOW_VISUAL = 'shouldForceToShowVisual';
    const DEFAULT_CRITERIA = self::CRITERIA_SERVICES;
    const CRITERIA_SERVICES = 'services';
    const CRITERIA_TCF_VENDORS = 'tcfVendors';
    const DEFAULT_VISUAL_TYPE = self::VISUAL_TYPE_DEFAULT;
    const VISUAL_TYPE_DEFAULT = 'default';
    const VISUAL_TYPE_WRAPPED = 'wrapped';
    const VISUAL_TYPE_HERO = 'hero';
    const SYNC_OPTIONS_COPY = [\DevOwl\RealCookieBanner\settings\Blocker::META_NAME_RULES, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_CRITERIA, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_TCF_VENDORS, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_TCF_PURPOSES, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_SERVICES, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_IS_VISUAL, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_TYPE, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_MEDIA_THUMBNAIL, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_CONTENT_TYPE, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_IS_VISUAL_DARK_MODE, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_BLUR, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_DOWNLOAD_THUMBNAIL, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_SHOULD_FORCE_TO_SHOW_VISUAL, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_PRESET_ID, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_PRESET_VERSION];
    const SYNC_OPTIONS_COPY_ONCE = [\DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_HERO_BUTTON_TEXT];
    const SYNC_OPTIONS = ['meta' => ['copy' => \DevOwl\RealCookieBanner\settings\Blocker::SYNC_OPTIONS_COPY, 'copy-once' => \DevOwl\RealCookieBanner\settings\Blocker::SYNC_OPTIONS_COPY_ONCE]];
    const META_KEYS = [\DevOwl\RealCookieBanner\settings\Blocker::META_NAME_RULES, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_CRITERIA, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_TCF_VENDORS, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_TCF_PURPOSES, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_SERVICES, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_IS_VISUAL, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_TYPE, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_MEDIA_THUMBNAIL, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_CONTENT_TYPE, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_IS_VISUAL_DARK_MODE, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_BLUR, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_DOWNLOAD_THUMBNAIL, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_HERO_BUTTON_TEXT, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_SHOULD_FORCE_TO_SHOW_VISUAL, \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_PRESET_ID];
    /**
     * Singleton instance.
     *
     * @var Blocker
     */
    private static $me = null;
    private $cacheGetOrdered = [];
    /**
     * C'tor.
     */
    private function __construct()
    {
        // Silence is golden.
    }
    /**
     * Register custom post type.
     */
    public function register()
    {
        $labels = ['name' => \__('Content Blockers', RCB_TD), 'singular_name' => \__('Content Blocker', RCB_TD)];
        $args = ['label' => $labels['name'], 'labels' => $labels, 'description' => '', 'public' => \false, 'publicly_queryable' => \false, 'show_ui' => \true, 'show_in_rest' => \true, 'rest_base' => self::CPT_NAME, 'rest_controller_class' => WP_REST_Posts_Controller::class, 'has_archive' => \false, 'show_in_menu' => \false, 'show_in_nav_menus' => \false, 'delete_with_user' => \false, 'exclude_from_search' => \true, 'capabilities' => \DevOwl\RealCookieBanner\settings\Cookie::CAPABILITIES, 'map_meta_cap' => \false, 'hierarchical' => \false, 'rewrite' => \false, 'query_var' => \true, 'supports' => ['title', 'editor', 'custom-fields']];
        \register_post_type(self::CPT_NAME, $args);
        \register_meta('post', self::META_NAME_PRESET_ID, ['object_subtype' => self::CPT_NAME, 'type' => 'string', 'single' => \true, 'show_in_rest' => \true]);
        \register_meta('post', self::META_NAME_PRESET_VERSION, ['object_subtype' => self::CPT_NAME, 'type' => 'number', 'single' => \true, 'show_in_rest' => \true]);
        // This meta is stored as line-separated list (this shouldn't be done usually - 3rd normal form - but it's ok here)
        \register_meta('post', self::META_NAME_RULES, ['object_subtype' => self::CPT_NAME, 'type' => 'string', 'single' => \true, 'show_in_rest' => \true]);
        \register_meta('post', self::META_NAME_CRITERIA, ['object_subtype' => self::CPT_NAME, 'type' => 'string', 'single' => \true, 'show_in_rest' => \true, 'default' => self::DEFAULT_CRITERIA]);
        // This meta is stored as JSON (this shouldn't be done usually - 3rd normal form - but it's ok here)
        \register_meta('post', self::META_NAME_TCF_VENDORS, ['object_subtype' => self::CPT_NAME, 'type' => 'string', 'single' => \true, 'show_in_rest' => \true]);
        // This meta is stored as JSON (this shouldn't be done usually - 3rd normal form - but it's ok here)
        \register_meta('post', self::META_NAME_TCF_PURPOSES, [
            'object_subtype' => self::CPT_NAME,
            'type' => 'string',
            'single' => \true,
            'show_in_rest' => \true,
            // Always add "Store and/or access information on a device" as this is the most-friendly option
            // to the website operator, which covers not to load the embedded content without consent
            'default' => '1',
        ]);
        // This meta is stored as JSON (this shouldn't be done usually - 3rd normal form - but it's ok here)
        \register_meta('post', self::META_NAME_SERVICES, ['object_subtype' => self::CPT_NAME, 'type' => 'string', 'single' => \true, 'show_in_rest' => \true]);
        \register_meta('post', self::META_NAME_IS_VISUAL, ['object_subtype' => self::CPT_NAME, 'type' => 'boolean', 'single' => \true, 'show_in_rest' => \true]);
        \register_meta('post', self::META_NAME_VISUAL_TYPE, ['object_subtype' => self::CPT_NAME, 'type' => 'string', 'single' => \true, 'show_in_rest' => \true, 'default' => self::DEFAULT_VISUAL_TYPE]);
        \register_meta('post', self::META_NAME_VISUAL_MEDIA_THUMBNAIL, ['object_subtype' => self::CPT_NAME, 'type' => 'number', 'single' => \true, 'show_in_rest' => \true, 'default' => 0]);
        \register_meta('post', self::META_NAME_VISUAL_CONTENT_TYPE, ['object_subtype' => self::CPT_NAME, 'type' => 'string', 'single' => \true, 'show_in_rest' => \true, 'default' => '']);
        \register_meta('post', self::META_NAME_IS_VISUAL_DARK_MODE, ['object_subtype' => self::CPT_NAME, 'type' => 'boolean', 'single' => \true, 'show_in_rest' => \true, 'default' => \false]);
        \register_meta('post', self::META_NAME_VISUAL_BLUR, ['object_subtype' => self::CPT_NAME, 'type' => 'number', 'single' => \true, 'show_in_rest' => \true, 'default' => 0]);
        \register_meta('post', self::META_NAME_VISUAL_DOWNLOAD_THUMBNAIL, ['object_subtype' => self::CPT_NAME, 'type' => 'boolean', 'single' => \true, 'show_in_rest' => \true, 'default' => \false]);
        \register_meta('post', self::META_NAME_VISUAL_HERO_BUTTON_TEXT, ['object_subtype' => self::CPT_NAME, 'type' => 'string', 'single' => \true, 'show_in_rest' => \true, 'default' => '']);
        \register_meta('post', self::META_NAME_SHOULD_FORCE_TO_SHOW_VISUAL, ['object_subtype' => self::CPT_NAME, 'type' => 'boolean', 'single' => \true, 'show_in_rest' => \true]);
    }
    /**
     * Modify revision array and add non-visual blockers so they trigger a new "Request new consent".
     *
     * @param array $result
     */
    public function revisionArray($result)
    {
        $nonVisual = [];
        $blockers = $this->getOrdered();
        foreach ($blockers as $blocker) {
            // Visuals should not trigger a new consent
            if ($blocker->metas[self::META_NAME_IS_VISUAL]) {
                continue;
            }
            $criteria = $blocker->metas[self::META_NAME_CRITERIA];
            $nonVisualRow = ['id' => $blocker->ID, self::META_NAME_RULES => $blocker->metas[self::META_NAME_RULES]];
            if ($criteria !== self::DEFAULT_CRITERIA) {
                $nonVisualRow[self::META_NAME_CRITERIA] = $criteria;
            }
            switch ($blocker->metas[self::META_NAME_CRITERIA]) {
                case self::CRITERIA_SERVICES:
                    $nonVisualRow[self::META_NAME_SERVICES] = $blocker->metas[self::META_NAME_SERVICES];
                    break;
                case self::CRITERIA_TCF_VENDORS:
                    $nonVisualRow[self::META_NAME_TCF_VENDORS] = $blocker->metas[self::META_NAME_TCF_VENDORS];
                    $nonVisualRow[self::META_NAME_TCF_PURPOSES] = $blocker->metas[self::META_NAME_TCF_PURPOSES];
                    break;
                default:
                    break;
            }
            $nonVisual[] = $nonVisualRow;
        }
        $result['nonVisualBlocker'] = $nonVisual;
        return $result;
    }
    /**
     * A blocker was saved.
     *
     * @param int $post_ID
     * @param WP_Post $post
     * @param boolean $update
     */
    public function save_post($post_ID, $post, $update)
    {
        if (!$update) {
            Checklist::getInstance()->toggle(AddBlocker::IDENTIFIER, \true);
        }
        // Keep "Already created" in service templates intact
        if (!$update) {
            \wp_rcb_invalidate_templates_cache(\true);
        }
        Core::getInstance()->getNotices()->recalculatePostDependingNotices();
    }
    /**
     * A cookie got deleted, also delete all associations from content blocker.
     *
     * @param int $postId
     */
    public function deleted_post($postId)
    {
        $post_type = \get_post_type($postId);
        $sync = Core::getInstance()->getCompLanguage()->getSync();
        if ($post_type === \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME || $this->isPro() && $post_type === TcfVendorConfiguration::CPT_NAME) {
            $blockers = $this->getOrdered(\false, \get_posts(Core::getInstance()->queryArguments(['post_type' => \DevOwl\RealCookieBanner\settings\Blocker::CPT_NAME, 'orderby' => ['ID' => 'DESC'], 'numberposts' => -1, 'nopaging' => \true, 'post_status' => ['publish', 'private', 'draft']], 'blockerDeleteCookies')));
            foreach ($blockers as $blocker) {
                $metaKey = $post_type === \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME ? \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_SERVICES : \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_TCF_VENDORS;
                $cookies = $blocker->metas[$metaKey];
                if (($key = \array_search($postId, $cookies, \true)) !== \false) {
                    unset($cookies[$key]);
                    if ($sync !== null) {
                        $sync->disable();
                    }
                    \update_post_meta($blocker->ID, $metaKey, \join(',', $cookies));
                    if ($sync !== null) {
                        $sync->enable();
                    }
                }
            }
        }
        // Cleanup transients so templates get regenerated
        if (\in_array($post_type, [\DevOwl\RealCookieBanner\settings\Blocker::CPT_NAME, \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME], \true)) {
            \wp_rcb_invalidate_templates_cache(\true);
        }
        // Clear cache for blockers
        if ($post_type === \DevOwl\RealCookieBanner\settings\Blocker::CPT_NAME) {
            Cache::getInstance()->invalidate();
        }
    }
    /**
     * Get all available content blocker ordered.
     *
     * @param boolean $force
     * @param WP_Post[] $usePosts If set, only meta is applied to the passed posts
     * @return WP_Post[]|WP_Error
     */
    public function getOrdered($force = \false, $usePosts = null)
    {
        $context = \DevOwl\RealCookieBanner\settings\Revision::getInstance()->getContextVariablesString();
        if ($force === \false && isset($this->cacheGetOrdered[$context]) && $usePosts === null) {
            return $this->cacheGetOrdered[$context];
        }
        $posts = $usePosts === null ? \get_posts(Core::getInstance()->queryArguments(['post_type' => self::CPT_NAME, 'orderby' => ['ID' => 'DESC'], 'numberposts' => -1, 'nopaging' => \true, 'post_status' => 'publish'], 'blockerGetOrdered')) : $usePosts;
        foreach ($posts as &$post) {
            $post->metas = [];
            foreach (self::META_KEYS as $meta_key) {
                $metaValue = \get_post_meta($post->ID, $meta_key, \true);
                switch ($meta_key) {
                    case self::META_NAME_RULES:
                        $metaValue = \explode("\n", $metaValue);
                        $metaValue = \array_values(\array_filter(\array_map('trim', $metaValue), 'strlen'));
                        break;
                    case self::META_NAME_TCF_VENDORS:
                    case self::META_NAME_TCF_PURPOSES:
                    case self::META_NAME_SERVICES:
                        $metaValue = empty($metaValue) ? [] : \array_map('intval', \explode(',', $metaValue));
                        break;
                    case self::META_NAME_IS_VISUAL:
                    case self::META_NAME_SHOULD_FORCE_TO_SHOW_VISUAL:
                        $metaValue = \boolval($metaValue);
                        break;
                    default:
                        break;
                }
                $post->metas[$meta_key] = $metaValue;
            }
            $this->overrideGetOrderedCastMeta($post, $post->metas);
        }
        if ($usePosts === null) {
            $this->cacheGetOrdered[$context] = $posts;
        }
        return $posts;
    }
    /**
     * Get a total count of all blockers.
     *
     * @return int
     */
    public function getAllCount()
    {
        return \array_sum(\array_map('intval', \array_values((array) \wp_count_posts(self::CPT_NAME))));
    }
    /**
     * Multiple metadata rename migrations.
     *
     * @see https://app.clickup.com/t/2d8dedh
     * @param string|false $installed
     */
    public function new_version_installation_after_3_0_2($installed)
    {
        global $wpdb;
        if (Core::versionCompareOlderThan($installed, '3.0.2', ['3.0.3', '3.1.0'])) {
            // Get posts which hold post meta which needs to be renamed so we can clear the post cache for them
            $affectedPostIds = $wpdb->get_col($wpdb->prepare("SELECT p.ID FROM {$wpdb->postmeta} pm\n                    INNER JOIN {$wpdb->posts} p ON pm.post_id = p.ID\n                    WHERE pm.meta_key IN (\n                        'criteria', 'visual', 'visualDarkMode', 'forceHidden', 'hosts', 'cookies'\n                    ) AND p.post_type = %s\n                    GROUP BY p.ID", self::CPT_NAME));
            if (\count($affectedPostIds) > 0) {
                // Rename the metadata directly through a plain SQL query so hooks like `update_post_meta` are not called
                // This avoids issues with WPML or PolyLang and their syncing process
                $wpdb->query($wpdb->prepare("UPDATE {$wpdb->postmeta} pm\n                        INNER JOIN {$wpdb->posts} p ON pm.post_id = p.ID\n                        SET pm.meta_key = CASE\n                            WHEN pm.meta_key = 'visual' THEN 'isVisual'\n                            WHEN pm.meta_key = 'visualDarkMode' THEN 'isVisualDarkMode'\n                            WHEN pm.meta_key = 'forceHidden' THEN 'shouldForceToShowVisual'\n                            WHEN pm.meta_key = 'hosts' THEN 'rules'\n                            WHEN pm.meta_key = 'cookies' THEN 'services'\n                            ELSE pm.meta_key\n                            END,\n                        pm.meta_value = CASE\n                            WHEN pm.meta_key = 'criteria' AND pm.meta_value = 'cookies' THEN 'services'\n                            ELSE pm.meta_value\n                            END\n                        WHERE p.post_type = %s", self::CPT_NAME));
                foreach ($affectedPostIds as $affectedPostId) {
                    \clean_post_cache(\intval($affectedPostId));
                }
            }
        }
    }
    /**
     * Modify already given consents and adjust the metadata field names for "List of consents".
     *
     * @see https://app.clickup.com/t/2d8dedh
     * @param array $revision
     * @param boolean $independent
     */
    public static function applyMetaRenameBackwardsCompatibility($revision, $independent)
    {
        $renameBlockerFields = ['visual' => 'isVisual', 'visualDarkMode' => 'isVisualDarkMode', 'forceHidden' => 'shouldForceToShowVisual', 'hosts' => 'rules', 'cookies' => 'services'];
        $useBlockers = [];
        if ($independent && isset($revision['blocker'])) {
            $useBlockers =& $revision['blocker'];
        } elseif (!$independent && isset($revision['nonVisualBlocker'])) {
            $useBlockers =& $revision['nonVisualBlocker'];
        }
        foreach ($useBlockers as &$blocker) {
            foreach ($renameBlockerFields as $renameBlockerField => $newFieldName) {
                if (isset($blocker[$renameBlockerField])) {
                    if ($newFieldName !== \false) {
                        $blocker[$newFieldName] = $blocker[$renameBlockerField];
                    }
                    unset($blocker[$renameBlockerField]);
                }
            }
            // Special cases
            if (isset($blocker['criteria']) && $blocker['criteria'] === 'cookies') {
                $blocker['criteria'] = 'services';
            }
        }
        return $revision;
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\settings\Blocker() : self::$me;
    }
}
