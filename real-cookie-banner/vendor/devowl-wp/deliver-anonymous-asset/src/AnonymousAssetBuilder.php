<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\DeliverAnonymousAsset;

use DevOwl\RealCookieBanner\Vendor\MatthiasWeb\Utils\Activator;
/**
 * Use this to create your database tables and to create the instances
 * of `DeliverAnonymousAsset`.
 * @internal
 */
class AnonymousAssetBuilder
{
    const TABLE_NAME = 'asset_seo_redirect';
    const OPTION_NAME_SERVE_HASH_SUFFIX = '-serve-hash';
    const OPTION_NAME_SERVE_NEXT_HASH_SUFFIX = '-serve-next-hash';
    const GENERATE_NEXT_HASH = 60 * 60 * 24 * 7;
    const MAX_SEO_REDIRECTS = 4;
    private $table_name;
    private $optionNamePrefix;
    /**
     * If `true`, it also checks the home url + first relative path for a
     * MD5 hash for backwards-compatibility (to not break caches).
     *
     * @var boolean
     */
    private $oldBehaviorEnabled;
    /**
     * The pool of collected built `DeliverAnonymousAsset` instances.
     *
     * @var DeliverAnonymousAsset[]
     */
    private $pool = [];
    /**
     * C'tor.
     *
     * @param string $table_name You can use it in conjunction with `TABLE_NAME` constant
     * @param string $optionNamePrefix
     * @param boolean $oldBehaviorEnabled Deprecated
     */
    public function __construct($table_name, $optionNamePrefix, $oldBehaviorEnabled = \false)
    {
        $this->table_name = $table_name;
        $this->optionNamePrefix = $optionNamePrefix;
        $this->oldBehaviorEnabled = $oldBehaviorEnabled;
    }
    /**
     * Create an anonymous asset. Do not forget to make it `->ready()` after you enqueued it!
     * This must be done in `wp` hook as it is the first available hook.
     *
     * @param string $handle
     * @param string $file
     * @param string $id If you pass an ID, the instance will be hold in this class pool and you can use `this::ready()`
     */
    public function build($handle, $file, $id = null)
    {
        $instance = new DeliverAnonymousAsset($this, $handle, $file);
        // Create old behavior afterwards to keep the action in `updateHash` intact
        if ($this->isOldBehaviorEnabled()) {
            $templateRedirectHash = new TemplateRedirectHash($this, $handle, $file);
            $templateRedirectHash->templateRedirect();
        }
        if ($id !== null) {
            $this->pool[$id] = $instance;
        }
        return $instance;
    }
    /**
     * Make a handle ready. Do not forget to `->build()` it previously!
     *
     * @param string $id
     * @param boolean $condition
     */
    public function ready($id, $condition = \true)
    {
        if (isset($this->pool[$id]) && $condition) {
            $instance = $this->pool[$id];
            return $instance->ready();
        }
        return \false;
    }
    /**
     * Get the currently used hash for the file or update it.
     *
     * @param string $handle
     * @param boolean $allowRecreate
     */
    public function getHash($handle, $allowRecreate = \true)
    {
        $option = \get_option($this->getOptionNamePrefix() . self::OPTION_NAME_SERVE_HASH_SUFFIX);
        $next = \intval(\get_option($this->getOptionNamePrefix() . self::OPTION_NAME_SERVE_NEXT_HASH_SUFFIX));
        if (empty($option) || $next === 0 || \time() > $next) {
            if ($allowRecreate) {
                $option = $this->updateHash();
            } else {
                return \false;
            }
        }
        return \md5($option . $handle);
    }
    /**
     * Generate a new hash for the current served JS file.
     */
    public function updateHash()
    {
        global $wpdb;
        $hash = \md5(\wp_generate_uuid4());
        \update_option($this->getOptionNamePrefix() . self::OPTION_NAME_SERVE_HASH_SUFFIX, $hash, \true);
        \update_option($this->getOptionNamePrefix() . self::OPTION_NAME_SERVE_NEXT_HASH_SUFFIX, \time() + self::GENERATE_NEXT_HASH, \true);
        // Save in history
        $table_name = $this->getTableName();
        $wpdb->insert($table_name, ['serve_hash' => $hash, 'created' => \current_time('mysql')]);
        // Read all deleted hashes so `DeliverAnonymousAsset` can delete it
        $sql = "SELECT serve_hash FROM {$table_name} WHERE id NOT IN (SELECT id FROM (SELECT id FROM {$table_name} ORDER BY id DESC LIMIT " . self::MAX_SEO_REDIRECTS . ') foo);';
        // phpcs:disable WordPress.DB.PreparedSQL
        $deletedHashes = $wpdb->get_col($sql);
        // phpcs:enable WordPress.DB.PreparedSQL
        // Only hold x SEO redirects (https://stackoverflow.com/a/578926/5506547)
        $sql = "DELETE FROM {$table_name} WHERE id NOT IN (SELECT id FROM (SELECT id FROM {$table_name} ORDER BY id DESC LIMIT " . self::MAX_SEO_REDIRECTS . ') foo);';
        // phpcs:disable WordPress.DB.PreparedSQL
        $wpdb->query($sql);
        // phpcs:enable WordPress.DB.PreparedSQL
        /**
         * The JavaScript and CSS files, which were previously anonymous, have been rotated and their hashes have been updated.
         *
         * @see https://devowl.io/knowledge-base/real-cookie-banner-javascript-files-in-wp-content/
         * @hook DevOwl/DeliverAnonymousAsset/Update/$optionNamePrefix
         * @param {string[]} $deletedHashes
         * @param {AnonymousAssetBuilder} $builder
         */
        \do_action('DevOwl/DeliverAnonymousAsset/Update/' . $this->getOptionNamePrefix(), $deletedHashes, $this);
        return $hash;
    }
    /**
     * Read a JavaScript file and update the sourceMappingUrl parameter in the
     * file content to the correct one - it allows you to serve any file
     * via any URL with the correct source map URL.
     *
     * @param string $path
     */
    public function readFileAndCorrectSourceMap($path)
    {
        $output = \explode("\n", \file_get_contents($path));
        // Check if last line is sourceMappingUrl
        $lastLine = \array_pop($output);
        $startWith = '//# sourceMappingURL=';
        if (\substr($lastLine, 0, \strlen($startWith)) === $startWith) {
            $mapFile = $path . '.map';
            $usedFolder = \basename(\dirname($mapFile));
            $usedFile = \basename($mapFile);
            if (\file_exists($mapFile)) {
                $output[] = $startWith . \wp_make_link_relative(\plugins_url('public/' . $usedFolder . '/' . $usedFile, RCB_FILE));
            }
        } else {
            $output[] = $lastLine;
        }
        return \join("\n", $output);
    }
    /**
     * Make sure the database table is created.
     *
     * @param Activator $activator
     */
    public function dbDelta($activator)
    {
        $charset_collate = $activator->getCharsetCollate();
        $table_name = $this->getTableName();
        $sql = "CREATE TABLE {$table_name} (\n            id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,\n            serve_hash char(32) NOT NULL,\n            created datetime NOT NULL,\n            PRIMARY KEY  (id)\n        ) {$charset_collate};";
        \dbDelta($sql);
        // Force to update our assets cause updates can lead to new JavaScript files
        $this->forceRecreation();
    }
    /**
     * Force recreation of asset files.
     */
    public function forceRecreation()
    {
        \update_option($this->getOptionNamePrefix() . self::OPTION_NAME_SERVE_NEXT_HASH_SUFFIX, 0);
    }
    /**
     * Getter.
     */
    public function getTableName()
    {
        global $wpdb;
        return empty($this->table_name) ? $wpdb->prefix . self::TABLE_NAME : $this->table_name;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getOptionNamePrefix()
    {
        return $this->optionNamePrefix;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function isOldBehaviorEnabled()
    {
        return $this->oldBehaviorEnabled;
    }
}
