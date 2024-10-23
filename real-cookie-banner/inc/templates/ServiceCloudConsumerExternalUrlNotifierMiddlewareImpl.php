<?php

namespace DevOwl\RealCookieBanner\templates;

use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\scanner\BlockableScanner;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\serviceCloudConsumer\ServiceCloudConsumerExternalUrlNotifierMiddleware;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\scanner\Persist;
use DevOwl\RealCookieBanner\view\Notices;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * See `ServiceCloudConsumerExternalUrlNotifierMiddleware`.
 * @internal
 */
class ServiceCloudConsumerExternalUrlNotifierMiddlewareImpl extends ServiceCloudConsumerExternalUrlNotifierMiddleware
{
    use UtilsProvider;
    /**
     * The threshold for automatic scanning. Otherwise, a notice is shown that the user has to scan the URLs manually.
     */
    const THRESHOLD_AUTOMATIC_SCAN = 200;
    // Documentation in `ServiceCloudConsumerExternalUrlNotifierMiddleware`.
    public function configure($headlessContentBlocker)
    {
        /**
         * The scanner.
         *
         * @var BlockableScanner
         */
        $scanner = $headlessContentBlocker->getPluginsByClassName(BlockableScanner::class)[0];
        $scanner->setSourceUrl(\home_url());
    }
    // Documentation in `ServiceCloudConsumerExternalUrlNotifierMiddleware`.
    public function fetchExternalUrls()
    {
        global $wpdb;
        // Get all external URLs from the database
        $table_name = $this->getTableName(Persist::TABLE_NAME);
        $table_name_markup = $this->getTableName(Persist::TABLE_NAME_MARKUP);
        // phpcs:disable WordPress.DB
        $externalUrls = $wpdb->get_results("SELECT DISTINCT(s.blocked_url_hash) AS identifier, s.blocked_url AS externalUrl, m.markup\n            FROM {$table_name} s\n            INNER JOIN {$table_name_markup} m ON s.markup_hash = m.markup_hash\n            WHERE s.blocked_url IS NOT NULL AND s.preset = ''", ARRAY_A);
        // phpcs:enable WordPress.DB
        return $externalUrls;
    }
    // Documentation in `ServiceCloudConsumerExternalUrlNotifierMiddleware`.
    public function alreadyNotified()
    {
        return \array_keys(Core::getInstance()->getNotices()->getStates()->get(Notices::NOTICE_SCANNER_EXPLICIT_EXTERNAL_URL_COVERAGE, []));
    }
    // Documentation in `ServiceCloudConsumerExternalUrlNotifierMiddleware`.
    public function notify($externalUrls)
    {
        global $wpdb;
        $hashes = \array_map(function ($externalUrl) {
            return $externalUrl->blocked_url_hash;
        }, $externalUrls);
        $hashesSqlIn = \join(',', \array_map(function ($hash) use($wpdb) {
            return $wpdb->prepare('%s', $hash);
        }, $hashes));
        // Get all source URLs for this external URL
        $table_name = $this->getTableName(Persist::TABLE_NAME);
        // phpcs:disable WordPress.DB
        $sourceUrlsCount = \intval($wpdb->get_var(\sprintf("SELECT COUNT(DISTINCT source_url_hash) FROM {$table_name} WHERE blocked_url_hash IN (%s)", $hashesSqlIn)));
        // phpcs:enable WordPress.DB
        if ($sourceUrlsCount > 0) {
            $noticeStates = Core::getInstance()->getNotices()->getStates();
            $noticeState = $noticeStates->get(Notices::NOTICE_SCANNER_EXPLICIT_EXTERNAL_URL_COVERAGE, []);
            $requireManual = $sourceUrlsCount > self::THRESHOLD_AUTOMATIC_SCAN;
            foreach ($externalUrls as $externalUrl) {
                $noticeState[$externalUrl->blocked_url_host] = $requireManual ? Notices::SCANNER_EXPLICIT_EXTERNAL_URL_COVERAGE_STATE_MANUAL_SCAN_REQUIRED : Notices::SCANNER_EXPLICIT_EXTERNAL_URL_COVERAGE_STATE_SCANNED;
            }
            $noticeStates->set(Notices::NOTICE_SCANNER_EXPLICIT_EXTERNAL_URL_COVERAGE, $noticeState);
            if (!$requireManual) {
                // phpcs:disable WordPress.DB
                $sourceUrls = $wpdb->get_col(\sprintf("SELECT DISTINCT source_url_hash, source_url FROM {$table_name} WHERE blocked_url_hash IN (%s)", $hashesSqlIn), 1, ARRAY_A);
                // phpcs:enable WordPress.DB
                Core::getInstance()->getScanner()->addUrlsToQueue($sourceUrls);
            }
        }
    }
}
