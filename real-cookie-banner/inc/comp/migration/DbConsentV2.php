<?php

namespace DevOwl\RealCookieBanner\comp\migration;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\settings\Revision;
use DevOwl\RealCookieBanner\UserConsent;
use DevOwl\RealCookieBanner\Vendor\DevOwl\RealQueue\queue\Job;
use stdClass;
use WP_Error;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Migrate consent data to new database table `wp_rcb_consent_v2`.
 * @internal
 */
class DbConsentV2
{
    const REAL_QUEUE_TYPE = 'rcb-db-consent-v2';
    const URL_MIGRATION_CHUNK_SIZE = 500000;
    const DECISION_MIGRATION_CHUNK_SIZE = 1000000;
    const TCF_STRING_MIGRATION_CHUNK_SIZE = 500000;
    const IP_MIGRATION_CHUNK_SIZE = 50000;
    const CONSENT_MIGRATION_CHUNK_SIZE = 70000;
    const MIGRATION_TYPES = ['urls' => ['fields' => ['url_imprint', 'url_privacy_policy', 'referer', 'pure_referer'], 'chunkSize' => self::URL_MIGRATION_CHUNK_SIZE, 'method' => 'migrateUrls'], 'decisions' => ['fields' => ['previous_decision', 'decision', 'previous_gcm_consent', 'gcm_consent'], 'chunkSize' => self::DECISION_MIGRATION_CHUNK_SIZE, 'method' => 'migrateDecisions'], 'tcf_string' => ['fields' => ['previous_tcf_string', 'tcf_string'], 'chunkSize' => self::TCF_STRING_MIGRATION_CHUNK_SIZE, 'method' => 'migrateTcfString'], 'ip' => ['fields' => ['ip'], 'chunkSize' => self::IP_MIGRATION_CHUNK_SIZE, 'method' => 'migrateIps'], 'consent' => ['fields' => ['consent'], 'chunkSize' => self::CONSENT_MIGRATION_CHUNK_SIZE, 'method' => 'migrateConsent']];
    use UtilsProvider;
    /**
     * Check if the table of old consent data exists and create a migration job for it.
     */
    public function probablyCreateJob()
    {
        if (!$this->isMigrationNeeded()) {
            return;
        }
        list($count, $minId, $maxId) = $this->getConsentTableStats();
        if ($count === 0) {
            $this->removeOldTable();
            return;
        }
        $queue = Core::getInstance()->getRealQueue();
        // Do not create this job twice
        $jobs = $queue->getQuery()->read(['limit' => 1, 'type' => 'all', 'jobType' => self::REAL_QUEUE_TYPE]);
        if (\count($jobs) > 0) {
            return;
        }
        $persist = $queue->getPersist();
        $persist->startTransaction();
        $job = new Job($queue);
        $job->worker = Job::WORKER_SERVER;
        $job->type = self::REAL_QUEUE_TYPE;
        $job->data = new stdClass();
        $job->data->results = [];
        $job->data->process = [];
        $job->data->maxId = $maxId;
        $job->data->minId = $minId;
        $job->data->keepClientData = \true;
        foreach (self::MIGRATION_TYPES as $type => $config) {
            $job->data->process[$type] = \array_fill_keys($config['fields'], $minId);
            $job->data->results[$type] = \array_fill_keys($config['fields'], 0);
        }
        $job->retries = 3;
        $job->callable = [self::class, 'migrate'];
        $job->priority = 1;
        $job->capability = 'administrator';
        $persist->addJob($job);
        $persist->commit();
    }
    /**
     * Remove the old consent table.
     */
    protected function removeOldTable()
    {
        Core::getInstance()->getActivator()->removeTables([$this->getTableName(UserConsent::TABLE_NAME_DEPRECATED)]);
    }
    /**
     * Process a single migration type.
     *
     * @param Job $job
     * @param string $type
     * @param string $field
     * @param array $config
     * @param int $originalMinId
     * @param int $originalMaxId
     * @return bool|WP_Error True if the migration can continue, otherwise false or a `WP_Error` instance
     */
    protected function processMigrationType($job, $type, $field, $config, $originalMinId, $originalMaxId)
    {
        global $wpdb;
        $minId = $job->data->process->{$type}->{$field};
        if ($minId > $originalMaxId) {
            // This migration type is already finished
            return \false;
        }
        $previousHideError = $wpdb->hide_errors();
        $result = $this->{$config['method']}($field, $minId, $minId === $originalMinId);
        $wpdb->show_errors($previousHideError);
        if (\is_wp_error($result)) {
            if (\strpos(\strtolower($result->get_error_message()), 'lock wait timeout exceeded') !== \false) {
                // Scenario: A website user is accessing the database table when saving a consent
                // For a lock wait timeout exceeded error, we can simply retry the migration.
                return \true;
            }
            if (\stripos(\strtolower($result->get_error_message()), 'unknown column') !== \false && !\property_exists($job->data, 'alterTableColumns')) {
                // Scenario: The old consent table has not all needed columns - we do not yet know why this could
                // happen but perhaps the `dbDelta()` did not run correctly. Due to the fact that the migration
                // needs to run, we need to try to add those columns.
                //
                // > Row size too large. The maximum row size for the used table type, not counting BLOBs,
                // > is 8126. This includes storage overhead, check the manual. You have to change some columns to TEXT or BLOBS
                // To avoid issues like this, we use `tinytext` for the columns. As they will never be filled again with any
                // data, this should be save.
                $table_name_old = $this->getTableName(UserConsent::TABLE_NAME_DEPRECATED);
                $previousHideError = $wpdb->hide_errors();
                // phpcs:disable WordPress.DB.PreparedSQL
                $wpdb->query("ALTER TABLE {$table_name_old} ADD created_client_time datetime NULL");
                $wpdb->query("ALTER TABLE {$table_name_old} ADD previous_tcf_string tinytext");
                $wpdb->query("ALTER TABLE {$table_name_old} ADD tcf_string tinytext");
                $wpdb->query("ALTER TABLE {$table_name_old} ADD previous_gcm_consent tinytext");
                $wpdb->query("ALTER TABLE {$table_name_old} ADD gcm_consent tinytext");
                // phpcs:enable WordPress.DB.PreparedSQL
                $wpdb->show_errors($previousHideError);
                // We do this type of "fix" only once, otherwise the user needs to contact us in support
                $job->data->alterTableColumns = \true;
                return \true;
            }
            return $result;
        } else {
            $minId += $config['chunkSize'];
            $job->data->process->{$type}->{$field} = $minId;
            if ($result !== \false) {
                $job->data->results->{$type}->{$field} += $result;
            }
        }
        return $minId <= $originalMaxId;
    }
    /**
     * Migrate URLs.
     *
     * @param string $field
     * @param int $minId
     * @param bool $isFirstRun
     */
    protected function migrateUrls($field, $minId, $isFirstRun)
    {
        global $wpdb;
        $table_name_old = $this->getTableName(UserConsent::TABLE_NAME_DEPRECATED);
        $table_name_url = $this->getTableName(UserConsent::TABLE_NAME_URL);
        if (!\in_array($field, ['url_imprint', 'url_privacy_policy', 'referer', 'pure_referer'], \true)) {
            return 0;
        }
        $chunkSize = self::URL_MIGRATION_CHUNK_SIZE;
        $endId = $minId + $chunkSize - 1;
        // phpcs:disable WordPress.DB.PreparedSQL
        $result = $wpdb->query("INSERT INTO {$table_name_url} (`hash`, `url`)\n            SELECT MD5(tmp.val) AS `hash`, tmp.val AS `url` FROM (SELECT {$field} AS val FROM {$table_name_old} WHERE id BETWEEN {$minId} AND {$endId}) tmp WHERE tmp.val <> '' GROUP BY tmp.val\n            ON DUPLICATE KEY UPDATE `hash`=VALUES(`hash`), `url`=VALUES(`url`)");
        // phpcs:enable WordPress.DB.PreparedSQL
        if ($result === \false) {
            return $this->getMigrationError();
        }
        return $result;
    }
    /**
     * Migrate decisions.
     *
     * @param string $field
     * @param int $minId
     * @param bool $isFirstRun
     */
    protected function migrateDecisions($field, $minId, $isFirstRun)
    {
        global $wpdb;
        $table_name_old = $this->getTableName(UserConsent::TABLE_NAME_DEPRECATED);
        $table_name_decision = $this->getTableName(UserConsent::TABLE_NAME_DECISION);
        if (!\in_array($field, ['previous_decision', 'decision', 'previous_gcm_consent', 'gcm_consent'], \true)) {
            return 0;
        }
        $chunkSize = self::DECISION_MIGRATION_CHUNK_SIZE;
        $endId = $minId + $chunkSize - 1;
        // phpcs:disable WordPress.DB.PreparedSQL
        $result = $wpdb->query("INSERT INTO {$table_name_decision} (`hash`, `decision`)\n            SELECT MD5(tmp.val) AS `hash`, tmp.val AS `decision` FROM (SELECT {$field} AS val FROM {$table_name_old} WHERE id BETWEEN {$minId} AND {$endId}) tmp WHERE tmp.val <> '' GROUP BY tmp.val\n            ON DUPLICATE KEY UPDATE `hash`=VALUES(`hash`), `decision`=VALUES(`decision`)");
        // phpcs:enable WordPress.DB.PreparedSQL
        if ($result === \false) {
            return $this->getMigrationError();
        }
        return $result;
    }
    /**
     * Migrate TCF strings.
     *
     * @param string $field
     * @param int $minId
     * @param bool $isFirstRun
     */
    protected function migrateTcfString($field, $minId, $isFirstRun)
    {
        global $wpdb;
        $table_name_old = $this->getTableName(UserConsent::TABLE_NAME_DEPRECATED);
        $table_name_tcf_string = $this->getTableName(UserConsent::TABLE_NAME_TCF_STRING);
        if (!\in_array($field, ['previous_tcf_string', 'tcf_string'], \true)) {
            return 0;
        }
        $chunkSize = self::TCF_STRING_MIGRATION_CHUNK_SIZE;
        $endId = $minId + $chunkSize - 1;
        // phpcs:disable WordPress.DB.PreparedSQL
        $result = $wpdb->query("INSERT INTO {$table_name_tcf_string} (`hash`, `tcf_string`)\n            SELECT MD5(tmp.val) AS `hash`, tmp.val AS `tcf_string` FROM (SELECT {$field} AS val FROM {$table_name_old} WHERE id BETWEEN {$minId} AND {$endId}) tmp WHERE tmp.val IS NOT NULL GROUP BY tmp.val\n            ON DUPLICATE KEY UPDATE `hash`=VALUES(`hash`), `tcf_string`=VALUES(`tcf_string`)");
        // phpcs:enable WordPress.DB.PreparedSQL
        if ($result === \false) {
            return $this->getMigrationError();
        }
        return $result;
    }
    /**
     * Migrate IPs.
     *
     * @param string $field
     * @param int $minId
     * @param bool $isFirstRun
     */
    protected function migrateIps($field, $minId, $isFirstRun)
    {
        global $wpdb;
        $table_name_old = $this->getTableName(UserConsent::TABLE_NAME_DEPRECATED);
        $table_name_ip = $this->getTableName(UserConsent::TABLE_NAME_IP);
        $chunkSize = self::IP_MIGRATION_CHUNK_SIZE;
        $endId = $minId + $chunkSize - 1;
        // phpcs:disable WordPress.DB.PreparedSQL
        $result = $wpdb->query("INSERT INTO {$table_name_ip} (`ipv4`, `ipv6`, `save_ip`, `ipv4_hash`, `ipv6_hash`)\n            SELECT IF(ipv4 = 0, NULL, ipv4) AS ipv4, ipv6, IF(ipv4 = 0 AND ipv6 IS NULL, 0, 1) AS save_ip, IFNULL(ipv4_hash, '') AS ipv4_hash, IFNULL(ipv6_hash, '') AS ipv6_hash FROM {$table_name_old} WHERE id BETWEEN {$minId} AND {$endId}\n            ON DUPLICATE KEY UPDATE `ipv4`=VALUES(`ipv4`), `ipv6`=VALUES(`ipv6`), `save_ip`=VALUES(`save_ip`), `ipv4_hash`=VALUES(`ipv4_hash`), `ipv6_hash`=VALUES(`ipv6_hash`)");
        // phpcs:enable WordPress.DB.PreparedSQL
        if ($result === \false) {
            return $this->getMigrationError();
        }
        return $result;
    }
    /**
     * Migrate consent.
     *
     * @param string $field
     * @param int $minId
     * @param bool $isFirstRun
     */
    protected function migrateConsent($field, $minId, $isFirstRun)
    {
        global $wpdb;
        $table_name_revision = $this->getTableName(Revision::TABLE_NAME);
        $table_name_revision_independent = $this->getTableName(Revision::TABLE_NAME_INDEPENDENT);
        $table_name_old = $this->getTableName(UserConsent::TABLE_NAME_DEPRECATED);
        $table_name_consent = $this->getTableName(UserConsent::TABLE_NAME);
        $table_name_ip = $this->getTableName(UserConsent::TABLE_NAME_IP);
        $table_name_consent_decision = $this->getTableName(UserConsent::TABLE_NAME_DECISION);
        $table_name_consent_url = $this->getTableName(UserConsent::TABLE_NAME_URL);
        $table_name_consent_tcf_string = $this->getTableName(UserConsent::TABLE_NAME_TCF_STRING);
        $chunkSize = self::CONSENT_MIGRATION_CHUNK_SIZE;
        $endId = $minId + $chunkSize - 1;
        // phpcs:disable WordPress.DB.PreparedSQL
        $result = $wpdb->query("INSERT IGNORE INTO {$table_name_consent} (\n                plugin_version, design_version,\n                ip,\n                uuid,\n                revision,\n                revision_independent,\n                previous_decision,\n                decision,\n                blocker, blocker_thumbnail, button_clicked, context, viewport_width, viewport_height,\n                referer,\n                pure_referer,\n                url_imprint,\n                url_privacy_policy,\n                dnt, custom_bypass, created, created_client_time, forwarded, forwarded_blocker, user_country,\n                previous_tcf_string,\n                tcf_string,\n                previous_gcm_consent,\n                gcm_consent,\n                recorder, ui_view\n            ) SELECT\n                c.plugin_version, c.design_version,\n                ip.id AS ip,\n                c.uuid,\n                rev.id AS revision,\n                rev_ind.id AS revision_independent,\n                previous_decision.id AS previous_decision,\n                decision.id AS decision,\n                c.blocker, c.blocker_thumbnail, c.button_clicked, c.context, c.viewport_width, c.viewport_height,\n                referer.id AS referer,\n                pure_referer.id AS pure_referer,\n                url_imprint.id AS url_imprint,\n                url_privacy_policy.id AS url_privacy_policy,\n                c.dnt, c.custom_bypass, c.created, c.created_client_time, c.forwarded, c.forwarded_blocker, c.user_country,\n                previous_tcf_string.id AS previous_tcf_string,\n                tcf_string.id AS tcf_string,\n                previous_gcm_consent.id AS previous_gcm_consent,\n                gcm_consent.id AS gcm_consent,\n                c.recorder, c.ui_view\n            FROM (SELECT * FROM {$table_name_old} WHERE id BETWEEN {$minId} AND {$endId}) c\n            INNER JOIN {$table_name_ip} ip\n                ON ip.save_ip = IF(c.ipv4 = 0 AND c.ipv6 IS NULL, 0, 1)\n                AND ip.ipv4_hash = IFNULL(c.ipv4_hash, '')\n                AND ip.ipv6_hash = IFNULL(c.ipv6_hash, '')\n            INNER JOIN {$table_name_revision} rev ON rev.hash = c.revision\n            INNER JOIN {$table_name_revision_independent} rev_ind ON rev_ind.hash = c.revision_independent\n            INNER JOIN {$table_name_consent_decision} previous_decision ON previous_decision.hash = MD5(c.previous_decision)\n            INNER JOIN {$table_name_consent_decision} decision ON decision.hash = MD5(c.decision)\n            LEFT JOIN {$table_name_consent_url} referer ON referer.hash = MD5(c.referer)\n            LEFT JOIN {$table_name_consent_url} pure_referer ON pure_referer.hash = MD5(c.pure_referer)\n            LEFT JOIN {$table_name_consent_url} url_imprint ON url_imprint.hash = MD5(c.url_imprint)\n            LEFT JOIN {$table_name_consent_url} url_privacy_policy ON url_privacy_policy.hash = MD5(c.url_privacy_policy)\n            LEFT JOIN {$table_name_consent_tcf_string} previous_tcf_string ON previous_tcf_string.hash = MD5(c.previous_tcf_string)\n            LEFT JOIN {$table_name_consent_tcf_string} tcf_string ON tcf_string.hash = MD5(c.tcf_string)\n            LEFT JOIN {$table_name_consent_decision} previous_gcm_consent ON previous_gcm_consent.hash = MD5(c.previous_gcm_consent)\n            LEFT JOIN {$table_name_consent_decision} gcm_consent ON gcm_consent.hash = MD5(c.gcm_consent)");
        // phpcs:enable WordPress.DB.PreparedSQL
        if ($result === \false) {
            return $this->getMigrationError();
        } else {
            if ($isFirstRun) {
                // Remove indexes which could slow down the `DELETE` statement
                // phpcs:disable WordPress.DB.PreparedSQL
                $wpdb->query("ALTER TABLE {$table_name_old} DROP INDEX ipflooding");
                $wpdb->query("ALTER TABLE {$table_name_old} DROP INDEX filters");
                $wpdb->query("ALTER TABLE {$table_name_old} DROP INDEX revisions");
                // phpcs:enable WordPress.DB.PreparedSQL
            }
            // To save space while migration, delete already migrated rows from the old table
            // phpcs:disable WordPress.DB.PreparedSQL
            $result = $wpdb->query("DELETE FROM {$table_name_old} WHERE id BETWEEN {$minId} AND {$endId}");
            // phpcs:enable WordPress.DB.PreparedSQL
            if ($result === \false) {
                return $this->getMigrationError();
            }
            return $result;
        }
    }
    /**
     * Get a migration error as `WP_Error` instance.
     */
    protected function getMigrationError()
    {
        global $wpdb;
        return new WP_Error('rcb_migration_db_consent_v2_error', $wpdb->last_error, ['stack' => \debug_backtrace(\DEBUG_BACKTRACE_IGNORE_ARGS)]);
    }
    /**
     * Get the count, minimum and maximum ID of the old consent table. This allows us to improve the `INSERT INTO` performance by
     * avoiding the `LIMIT` clause.
     *
     * @see https://stackoverflow.com/a/52099820/5506547
     */
    protected function getConsentTableStats()
    {
        global $wpdb;
        $table_name_old = $this->getTableName(UserConsent::TABLE_NAME_DEPRECATED);
        // phpcs:disable WordPress.DB.PreparedSQL
        $minMax = $wpdb->get_row("SELECT COUNT(1) AS count, MIN(id) AS min, MAX(id) AS max FROM {$table_name_old}", ARRAY_A);
        // phpcs:enable WordPress.DB.PreparedSQL
        $count = \intval($minMax['count']);
        $min = \intval($minMax['min']);
        $max = \intval($minMax['max']);
        return [$count, $min, $max];
    }
    /**
     * Checks if the old consent table exists.
     */
    public function isMigrationNeeded()
    {
        global $wpdb;
        $table_name_old = $this->getTableName(UserConsent::TABLE_NAME_DEPRECATED);
        // phpcs:disable WordPress.DB.PreparedSQL
        $tableDetails = $wpdb->get_row("SHOW TABLE STATUS LIKE '{$table_name_old}'");
        // phpcs:enable WordPress.DB.PreparedSQL
        return $tableDetails ? \true : \false;
    }
    /**
     * Migrate consent data to new database table `wp_rcb_consent_v2`.
     *
     * @param Job $job
     */
    public static function migrate(Job $job)
    {
        $upgrader = new \DevOwl\RealCookieBanner\comp\migration\DbConsentV2();
        // Short circuit in case of no migration needed (this could happen when the job for
        // the migration was created twice due to database locking).
        if (!$upgrader->isMigrationNeeded()) {
            $job->updateProcess(\true);
            return;
        }
        $allowJobToContinue = \false;
        $maxId = $job->data->maxId;
        $minId = $job->data->minId;
        $listToWork = [];
        foreach (self::MIGRATION_TYPES as $type => $config) {
            foreach ($config['fields'] as $field) {
                $listToWork[] = [$type, $config, $field];
            }
        }
        foreach ($listToWork as $item) {
            if (!$allowJobToContinue) {
                list($type, $config, $field) = $item;
                $allowJobToContinue = $upgrader->processMigrationType($job, $type, $field, $config, $minId, $maxId);
                if (\is_wp_error($allowJobToContinue)) {
                    return $allowJobToContinue;
                }
            }
        }
        if ($allowJobToContinue) {
            $job->updateProcess($job->process + 1, $job->process_total + 1);
            $job->breakRun();
        } else {
            $upgrader->removeOldTable();
            $job->updateProcess(\true);
        }
    }
    /**
     * Get human-readable label for RCB queue jobs.
     *
     * @param string $label
     * @param string $originalType
     */
    public static function real_queue_job_label($label, $originalType)
    {
        switch ($originalType) {
            case self::REAL_QUEUE_TYPE:
                return \__('Real Cookie Banner: Migration of consent data', RCB_TD);
            default:
                return $label;
        }
    }
    /**
     * Get actions for RCB queue jobs.
     *
     * @param array[] $actions
     * @param string $type
     */
    public static function real_queue_job_actions($actions, $type)
    {
        switch ($type) {
            case self::REAL_QUEUE_TYPE:
                $actions[] = ['url' => \__('https://devowl.io/support/', RCB_TD), 'linkText' => \__('Contact support', RCB_TD)];
                break;
            default:
        }
        return $actions;
    }
    /**
     * Get human-readable description for a RCB queue jobs.
     *
     * @param string $description
     * @param string $type
     * @param int[] $remaining
     */
    public static function real_queue_error_description($description, $type, $remaining)
    {
        switch ($type) {
            case self::REAL_QUEUE_TYPE:
                return \__('Real Cookie Banner v5.0 introduces an optimized database schema that allows consent documents to be stored in less storage space. The migration failed. Please try again or contact the support of Real Cookie Banner!', RCB_TD);
            default:
                return $description;
        }
    }
    /**
     * Checks if there is a migration needed so we can trigger to continue the migration process.
     *
     * @param array $data
     */
    public static function real_queue_additional_data_migration_progress($data)
    {
        $db = new \DevOwl\RealCookieBanner\comp\migration\DbConsentV2();
        $data['migrationNeeded'] = $db->isMigrationNeeded();
        return $data;
    }
}
