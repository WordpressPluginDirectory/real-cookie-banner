<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\DeliverAnonymousAsset;

/**
 * Automatically detect an hash to the home URL relative path and serve
 * the file.
 *
 * @deprecated Do no longer use this as we deliver assets now through `wp-content/uploads`.
 * @internal
 */
class TemplateRedirectHash
{
    /**
     * Builder.
     *
     * @var AnonymousAssetBuilder
     */
    private $builder;
    private $handle;
    private $file;
    /**
     * C'tor.
     *
     * @param AnonymousAssetBuilder $builder
     * @param string $handle
     * @param string $file
     */
    public function __construct($builder, $handle, $file)
    {
        $this->builder = $builder;
        $this->handle = $handle;
        $this->file = $file;
    }
    /**
     * Serve static files dynamically.
     */
    public function templateRedirect()
    {
        global $wpdb;
        // For backwards compatibility we do not need to recreate a hash as this method is deprecated
        $hash = $this->getBuilder()->getHash($this->getHandle(), \false);
        if (!$hash) {
            return;
        }
        $currentPath = \remove_query_arg(\array_keys($_GET), $_SERVER['REQUEST_URI']);
        $shouldBePath = \remove_query_arg(\array_keys($_GET), \wp_make_link_relative(\home_url($hash)));
        $isMd5FilePath = \strlen(\untrailingslashit($currentPath)) === 33;
        $serve = $shouldBePath === $currentPath;
        // Check is a SEO redirect is necessary for this file
        if (!$serve && $isMd5FilePath) {
            $hash = \substr($currentPath, 1, 32);
            $table_name = $this->getBuilder()->getTableName();
            $result = \intval($wpdb->get_var(
                // phpcs:disable WordPress.DB.PreparedSQL
                $wpdb->prepare("SELECT COUNT(*) FROM {$table_name} WHERE MD5(CONCAT(serve_hash, %s)) = %s", $this->getHandle(), $hash)
            ));
            $serve = $result > 0;
        }
        // Serve the file
        if ($serve) {
            // Suppress all other output buffers as they should not be handle any data here
            // phpcs:disable
            while (@\ob_get_flush()) {
            }
            // phpcs:enable
            // Correctly send compressed output, see https://stackoverflow.com/a/4190283/5506547
            if (\extension_loaded('zlib') && \ini_get('output_handler') !== 'ob_gzhandler') {
                \ini_set('zlib.output_compression', 1);
                \remove_action('shutdown', 'wp_ob_end_flush_all', 1);
            }
            \header('Content-Type: application/javascript');
            \header('Cache-Control: public, max-age=31536000');
            \http_response_code(200);
            echo $this->getBuilder()->readFileAndCorrectSourceMap($this->getFile());
            exit;
        }
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getBuilder()
    {
        return $this->builder;
    }
    /**
     * Get handle.
     *
     * @codeCoverageIgnore
     */
    public function getHandle()
    {
        return $this->handle;
    }
    /**
     * Get file.
     *
     * @codeCoverageIgnore
     */
    public function getFile()
    {
        return $this->file;
    }
}
