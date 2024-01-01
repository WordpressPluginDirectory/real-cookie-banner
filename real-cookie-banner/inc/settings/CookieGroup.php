<?php

namespace DevOwl\RealCookieBanner\settings;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\comp\language\Hooks;
use DevOwl\RealCookieBanner\Core;
use WP_Error;
use WP_REST_Terms_Controller;
use WP_Term;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Register cookie group taxonomy.
 * @internal
 */
class CookieGroup
{
    use UtilsProvider;
    const TAXONOMY_NAME = 'rcb-cookie-group';
    const META_NAME_ORDER = 'order';
    const META_NAME_IS_ESSENTIAL = 'isEssential';
    const SYNC_META_COPY_AND_COPY_ONCE = [\DevOwl\RealCookieBanner\settings\CookieGroup::META_NAME_IS_ESSENTIAL, \DevOwl\RealCookieBanner\settings\CookieGroup::META_NAME_ORDER];
    const SYNC_OPTIONS = ['meta' => ['copy' => \DevOwl\RealCookieBanner\settings\CookieGroup::SYNC_META_COPY_AND_COPY_ONCE, 'copy-once' => \DevOwl\RealCookieBanner\settings\CookieGroup::SYNC_META_COPY_AND_COPY_ONCE]];
    const META_KEYS = [\DevOwl\RealCookieBanner\settings\CookieGroup::META_NAME_IS_ESSENTIAL];
    /**
     * Singleton instance.
     *
     * @var CookieGroup
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
     * Register custom taxonomy.
     */
    public function register()
    {
        $labels = ['name' => \__('Service groups', RCB_TD), 'singular_name' => \__('Service group', RCB_TD)];
        $args = ['label' => $labels['name'], 'labels' => $labels, 'public' => \false, 'publicly_queryable' => \false, 'hierarchical' => \false, 'show_ui' => \true, 'show_in_menu' => \false, 'show_in_nav_menus' => \false, 'query_var' => \true, 'rewrite' => \false, 'show_admin_column' => \false, 'show_in_rest' => \true, 'capabilities' => ['manage_terms' => Core::MANAGE_MIN_CAPABILITY, 'edit_terms' => Core::MANAGE_MIN_CAPABILITY, 'delete_terms' => Core::MANAGE_MIN_CAPABILITY, 'assign_terms' => Core::MANAGE_MIN_CAPABILITY], 'rest_base' => self::TAXONOMY_NAME, 'rest_controller_class' => WP_REST_Terms_Controller::class, 'show_in_quick_edit' => \false];
        \register_taxonomy(self::TAXONOMY_NAME, [\DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME], $args);
        \register_meta('term', self::META_NAME_ORDER, ['object_subtype' => self::TAXONOMY_NAME, 'type' => 'number', 'single' => \true, 'show_in_rest' => \true]);
        \register_meta('term', self::META_NAME_IS_ESSENTIAL, ['object_subtype' => self::TAXONOMY_NAME, 'type' => 'boolean', 'single' => \true, 'show_in_rest' => \true]);
    }
    /**
     * Ensures the "Essentials" term exists. Make sure to create the temporary text domain.
     */
    public function ensureEssentialGroupCreated()
    {
        $term = $this->getEssentialGroup();
        if ($term === null) {
            $defaultTexts = $this->getDefaultDescriptions();
            $groupNames = $this->getDefaultGroupNames();
            $result = \wp_insert_term($groupNames['essential'], self::TAXONOMY_NAME, ['description' => $defaultTexts['essential']]);
            if (\is_admin() && \is_wp_error($result)) {
                \wp_die($result);
            }
            \update_term_meta($result['term_id'], self::META_NAME_ORDER, 0);
            \update_term_meta($result['term_id'], self::META_NAME_IS_ESSENTIAL, \true);
            $result = \wp_insert_term($groupNames['functional'], self::TAXONOMY_NAME, ['description' => $defaultTexts['functional']]);
            \update_term_meta($result['term_id'], self::META_NAME_ORDER, 1);
            $result = \wp_insert_term($groupNames['statistics'], self::TAXONOMY_NAME, ['description' => $defaultTexts['statistics']]);
            \update_term_meta($result['term_id'], self::META_NAME_ORDER, 2);
            $result = \wp_insert_term($groupNames['marketing'], self::TAXONOMY_NAME, ['description' => $defaultTexts['marketing']]);
            \update_term_meta($result['term_id'], self::META_NAME_ORDER, 3);
            return !\is_wp_error($result);
        }
        return \false;
    }
    /**
     * A cookie group got deleted, also delete all associated cookies.
     *
     * @param int $term
     * @param int $tt_id
     * @param object $deleted_term
     * @param int[] $object_ids
     */
    public function deleted($term, $tt_id, $deleted_term, $object_ids)
    {
        foreach ($object_ids as $id) {
            \wp_delete_post($id, \true);
        }
    }
    /**
     * Get all available cookie groups ordered.
     *
     * @param boolean $force
     * @return WP_Term[]|WP_Error
     */
    public function getOrdered($force = \false)
    {
        $context = \DevOwl\RealCookieBanner\settings\Revision::getInstance()->getContextVariablesString();
        if ($force === \false && isset($this->cacheGetOrdered[$context])) {
            return $this->cacheGetOrdered[$context];
        }
        // Read all including hidden, only the essential term may be empty
        $terms = [];
        $includingHidden = \get_terms(Core::getInstance()->queryArguments(['taxonomy' => self::TAXONOMY_NAME, 'orderby' => 'meta_value_num', 'order' => 'ASC', 'hide_empty' => \false, 'meta_query' => [['key' => self::META_NAME_ORDER, 'type' => 'NUMERIC']]], 'cookieGroupsGetOrdered'));
        // Filter hidden
        foreach ($includingHidden as $term) {
            if ($term->count > 0 || \get_term_meta($term->term_id, self::META_NAME_IS_ESSENTIAL)) {
                $terms[] = $term;
            }
        }
        foreach ($terms as &$term) {
            $term->metas = [];
            foreach (self::META_KEYS as $meta_key) {
                $metaValue = \get_term_meta($term->term_id, $meta_key, \true);
                switch ($meta_key) {
                    case self::META_NAME_IS_ESSENTIAL:
                        $metaValue = \boolval($metaValue);
                        break;
                    default:
                        break;
                }
                $term->metas[$meta_key] = $metaValue;
            }
        }
        $this->cacheGetOrdered[$context] = $terms;
        return $terms;
    }
    /**
     * Get the WP_Term of the essential group.
     *
     * @param boolean $force If `true`, cache will be invalidated
     * @return WP_Term|null
     */
    public function getEssentialGroup($force = \false)
    {
        $terms = $this->getOrdered($force);
        foreach ($terms as $term) {
            if ($term->metas[self::META_NAME_IS_ESSENTIAL]) {
                return $term;
            }
        }
        return null;
    }
    /**
     * Get default texts for service groups.
     */
    public function getDefaultGroupNames()
    {
        $td = Hooks::getInstance()->createTemporaryTextDomain();
        $texts = ['essential' => \__('Essential', Hooks::TD_FORCED), 'functional' => \__('Functional', Hooks::TD_FORCED), 'statistics' => \__('Statistics', Hooks::TD_FORCED), 'statistic' => \__('Statistic', Hooks::TD_FORCED), 'marketing' => \__('Marketing', Hooks::TD_FORCED)];
        $td->teardown();
        return $texts;
    }
    /**
     * Get default description texts.
     *
     * @param string $localizedKeys
     */
    public function getDefaultDescriptions($localizedKeys = \false)
    {
        $td = Hooks::getInstance()->createTemporaryTextDomain();
        $essentialKey = $localizedKeys ? \__('Essential', Hooks::TD_FORCED) : 'essential';
        $functionalKey = $localizedKeys ? \__('Functional', Hooks::TD_FORCED) : 'functional';
        $statisticsKey = $localizedKeys ? \__('Statistics', Hooks::TD_FORCED) : 'statistics';
        $marketingKey = $localizedKeys ? \__('Marketing', Hooks::TD_FORCED) : 'marketing';
        $texts = [$essentialKey => \_x('Essential services are required for the basic functionality of the website. They only contain technically necessary services. These services cannot be objected to.', 'legal-text', Hooks::TD_FORCED), $functionalKey => \_x('Functional services are necessary to provide features beyond the essential functionality such as prettier fonts, video playback or interactive web 2.0 features. Content from e.g. video platforms and social media platforms are blocked by default, and can be consented to. If the service is agreed to, this content is loaded automatically without further manual consent.', 'legal-text', Hooks::TD_FORCED), $statisticsKey => \_x('Statistics services are needed to collect pseudonymous data about the visitors of the website. The data enables us to understand visitors better and to optimize the website.', 'legal-text', Hooks::TD_FORCED), $marketingKey => \_x('Marketing services are used by us and third parties to track the behaviour of individual visitors (across multiple pages), analyse the data collected and, for example, display personalized advertisements. These services enable us to track visitors across multiple websites.', 'legal-text', Hooks::TD_FORCED)];
        // Keep this for backwards-compatibility
        $statisticKey = $localizedKeys ? \__('Statistic', Hooks::TD_FORCED) : 'statistic';
        $texts[$statisticKey] = $texts[$statisticsKey];
        $td->teardown();
        return $texts;
    }
    /**
     * Get only the essential group ID. This method can be more efficient compared to
     * `getEssentialGroup` because it does no casts and additional queries.
     *
     * @return int|null
     */
    public function getEssentialGroupId()
    {
        $result = \get_terms(Core::getInstance()->queryArguments(['taxonomy' => self::TAXONOMY_NAME, 'hide_empty' => \false, 'meta_query' => [['key' => self::META_NAME_IS_ESSENTIAL, 'value' => '1']], 'fields' => 'ids'], 'cookieGroupsGetEssentialGroups'));
        return \count($result) === 0 ? null : $result[0];
    }
    /**
     * Get singleton instance.
     *
     * @return CookieGroup
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\settings\CookieGroup() : self::$me;
    }
}
