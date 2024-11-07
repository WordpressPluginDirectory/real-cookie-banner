<?php

namespace DevOwl\RealCookieBanner;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\consent\PersistedTransaction;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\Utils;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\imagePreview\ImagePreview;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\lite\view\blocker\WordPressImagePreviewCache;
use DevOwl\RealCookieBanner\settings\Revision;
use DevOwl\RealCookieBanner\settings\Consent;
use DevOwl\RealCookieBanner\view\Blocker;
use DevOwl\RealCookieBanner\view\blocker\Plugin;
use DevOwl\RealCookieBanner\view\shortcode\LinkShortcode;
use WP_Error;
use WP_HTTP_Response;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Handle consents of users.
 * @internal
 */
class UserConsent
{
    use UtilsProvider;
    /**
     * The old table name for saved consents.
     *
     * @deprecated Use `TABLE_NAME` instead.
     */
    const TABLE_NAME_DEPRECATED = 'consent';
    const TABLE_NAME = 'consent_v2';
    const TABLE_NAME_IP = 'consent_ip';
    const TABLE_NAME_DECISION = 'consent_decision';
    const TABLE_NAME_TCF_STRING = 'consent_tcf_string';
    const TABLE_NAME_URL = 'consent_url';
    const CLICKABLE_BUTTONS = ['none', 'main_all', 'main_essential', 'main_close_icon', 'main_custom', 'ind_all', 'ind_essential', 'ind_close_icon', 'ind_custom', 'implicit_all', 'implicit_essential', LinkShortcode::BUTTON_CLICKED_IDENTIFIER, Blocker::BUTTON_CLICKED_IDENTIFIER];
    const BY_CRITERIA_RESULT_TYPE_JSON_DECODE = 'jsonDecode';
    const BY_CRITERIA_RESULT_TYPE_COUNT = 'count';
    const BY_CRITERIA_RESULT_TYPE_SQL_QUERY = 'sqlQuery';
    /**
     * Singleton instance.
     *
     * @var UserConsent
     */
    private static $me = null;
    /**
     * C'tor.
     */
    private function __construct()
    {
        // Silence is golden.
    }
    /**
     * Delete all available user consents with revisions and stats.
     *
     * @return boolean|array Array with deleted counts of the database tables
     */
    public function purge()
    {
        global $wpdb;
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        $table_name_revision = $this->getTableName(Revision::TABLE_NAME);
        $table_name_revision_independent = $this->getTableName(Revision::TABLE_NAME_INDEPENDENT);
        $table_name_ip = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_IP);
        $table_name_decision = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_DECISION);
        $table_name_url = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_URL);
        $table_name_tcf_string = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_TCF_STRING);
        $table_name_stats_terms = $this->getTableName(\DevOwl\RealCookieBanner\Stats::TABLE_NAME_TERMS);
        $table_name_stats_buttons_clicked = $this->getTableName(\DevOwl\RealCookieBanner\Stats::TABLE_NAME_BUTTONS_CLICKED);
        $table_name_stats_custom_bypass = $this->getTableName(\DevOwl\RealCookieBanner\Stats::TABLE_NAME_CUSTOM_BYPASS);
        // The latest revision should not be deleted
        $revisionHash = Revision::getInstance()->getRevision()->getEnsuredCurrentHash();
        // phpcs:disable WordPress.DB
        $consent = $wpdb->query("DELETE FROM {$table_name}");
        $revision = $wpdb->query($wpdb->prepare("DELETE FROM {$table_name_revision} WHERE `hash` != %s", $revisionHash));
        $revision_independent = $wpdb->query("DELETE FROM {$table_name_revision_independent}");
        $ip = $wpdb->query("DELETE FROM {$table_name_ip}");
        $decision = $wpdb->query("DELETE FROM {$table_name_decision}");
        $url = $wpdb->query("DELETE FROM {$table_name_url}");
        $tcf_string = $wpdb->query("DELETE FROM {$table_name_tcf_string}");
        $stats_terms = $wpdb->query("DELETE FROM {$table_name_stats_terms}");
        $stats_buttons_clicked = $wpdb->query("DELETE FROM {$table_name_stats_buttons_clicked}");
        $stats_custom_bypass = $wpdb->query("DELETE FROM {$table_name_stats_custom_bypass}");
        // phpcs:enable WordPress.DB
        return ['consent' => $consent, 'revision' => $revision, 'revision_independent' => $revision_independent, 'ip' => $ip, 'decision' => $decision, 'url' => $url, 'tcf_string' => $tcf_string, 'stats_terms' => $stats_terms, 'stats_buttons_clicked' => $stats_buttons_clicked, 'stats_custom_bypass' => $stats_custom_bypass];
    }
    /**
     * Check if there are truncated IPs saved in the current consents list and return the count of found rows.
     */
    public function getTruncatedIpsCount()
    {
        global $wpdb;
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        $table_name_ip = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_IP);
        // phpcs:disable WordPress.DB
        $count = $wpdb->get_var("SELECT COUNT(1) FROM {$table_name} INNER JOIN {$table_name_ip} ON {$table_name}.ip = {$table_name_ip}.id WHERE ipv4 IS NULL AND ipv6 IS NULL");
        // phpcs:enable WordPress.DB
        return \intval($count);
    }
    /**
     * Fetch user consents by criteria.
     *
     * @param array $args 'uuid', 'uuids', 'ip', 'exactIp', 'offset', 'perPage', 'from', 'to', 'pure_referer', 'context'
     * @param string $returnType
     */
    public function byCriteria($args, $returnType = self::BY_CRITERIA_RESULT_TYPE_JSON_DECODE)
    {
        global $wpdb;
        // Parse arguments
        $args = \array_merge([
            // LIMIT
            'offset' => 0,
            'perPage' => 10,
            'revisionJson' => \false,
            // Filters
            'uuid' => '',
            // --> uuid NO index
            'uuids' => null,
            // --> uuid NO index
            'ip' => '',
            // --> ip is index
            'exactIp' => \true,
            // --> ip is index
            'from' => '',
            // --> created is index
            'to' => '',
            // --> created is index
            'sinceSeconds' => 0,
            // --> created is index
            'pure_referer' => '',
            // --> pure_referer is index
            'context' => null,
        ], $args);
        $revisionJson = \boolval($args['revisionJson']);
        $ip = $args['ip'];
        $exactIp = \boolval($args['exactIp']);
        $uuid = $args['uuid'];
        $uuids = $args['uuids'];
        $limitOffset = $args['offset'];
        $perPage = $args['perPage'];
        $sinceSeconds = \intval($args['sinceSeconds']);
        $from = $args['from'];
        $to = $args['to'];
        $pure_referer = $args['pure_referer'];
        $context = $args['context'];
        // Prepare parameters
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        $table_name_revision = $this->getTableName(Revision::TABLE_NAME);
        $table_name_revision_independent = $this->getTableName(Revision::TABLE_NAME_INDEPENDENT);
        $table_name_ip = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_IP);
        $table_name_decision = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_DECISION);
        $table_name_url = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_URL);
        $table_name_tcf_string = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_TCF_STRING);
        // Build JOIN's
        $joins = [
            // Revisions
            'revision' => 'INNER JOIN ' . $table_name_revision . ' AS join_revision ON join_revision.id = c.revision',
            'revision_independent' => 'INNER JOIN ' . $table_name_revision_independent . ' AS join_revision_independent ON join_revision_independent.id = c.revision_independent',
            // IPs
            'ip' => 'INNER JOIN ' . $table_name_ip . ' AS join_ip ON join_ip.id = c.ip',
            // Decisions
            'previous_decision' => 'INNER JOIN ' . $table_name_decision . ' AS join_previous_decision ON join_previous_decision.id = c.previous_decision',
            'decision' => 'INNER JOIN ' . $table_name_decision . ' AS join_decision ON join_decision.id = c.decision',
            // URLs (can be null)
            'referer' => 'LEFT JOIN ' . $table_name_url . ' AS join_referer ON join_referer.id = c.referer',
            'pure_referer' => 'LEFT JOIN ' . $table_name_url . ' AS join_pure_referer ON join_pure_referer.id = c.pure_referer',
            'url_imprint' => 'LEFT JOIN ' . $table_name_url . ' AS join_url_imprint ON join_url_imprint.id = c.url_imprint',
            'url_privacy_policy' => 'LEFT JOIN ' . $table_name_url . ' AS join_url_privacy_policy ON join_url_privacy_policy.id = c.url_privacy_policy',
            // GCM Consent (can be null)
            'previous_gcm_consent' => 'LEFT JOIN ' . $table_name_decision . ' AS join_previous_gcm_consent ON join_previous_gcm_consent.id = c.previous_gcm_consent',
            'gcm_consent' => 'LEFT JOIN ' . $table_name_decision . ' AS join_gcm_consent ON join_gcm_consent.id = c.gcm_consent',
            // TCF String (can be null)
            'previous_tcf_string' => 'LEFT JOIN ' . $table_name_tcf_string . ' AS join_previous_tcf_string ON join_previous_tcf_string.id = c.previous_tcf_string',
            'tcf_string' => 'LEFT JOIN ' . $table_name_tcf_string . ' AS join_tcf_string ON join_tcf_string.id = c.tcf_string',
        ];
        $joinsForWhereSubquery = \array_map(function ($join) {
            return \str_replace(['join_', 'c.'], ['jwoin_', 'cs.'], $join);
        }, $joins);
        // Build WHERE statement for filtering
        // If you add a new filter, keep in mind to add the column to the index `filters` of `wp_rcb_consent`.
        // The following properties are not part of the index as they are currently used rarely:
        //  UUID
        $where = [];
        if (!empty($uuid)) {
            $where[] = $wpdb->prepare('(cs.uuid = %s)', $uuid);
        } elseif (\is_array($uuids)) {
            $where[] = \sprintf('cs.uuid IN (%s)', \join(', ', \array_map(function ($uuid) use($wpdb) {
                return $wpdb->prepare('%s', $uuid);
            }, $uuids)));
            // Usually, `uuid` should be `UNIQUE` index in database and be fast, but at the moment, due to
            // backwards-compatibility it isn't. So, use `LIMIT` to stop at when found x entries.
            // Example: Forwarded consents use the same UUID but have different IDs.
            $perPage = \count($uuids) > 100 ? 100 : \count($uuids);
        }
        if (!empty($ip)) {
            $ips = \DevOwl\RealCookieBanner\IpHandler::getInstance()->persistIp($ip, $exactIp);
            if ($ips['ipv4'] === \false || $ips['ipv6'] === \false) {
                return new WP_Error('invalid_ip', \__('Invalid IP address. Please insert a valid IPv4 or IPv6 address.', RCB_TD));
            }
            $whereIp = [];
            foreach ($ips as $key => $value) {
                if (!empty($value)) {
                    // phpcs:disable WordPress.DB
                    $whereIp[] = $wpdb->prepare('jwoin_ip.' . $key . ' = ' . ($key === 'ipv6' ? '%d' : '%s'), $value);
                    // phpcs:enable WordPress.DB
                }
            }
            if (\count($whereIp) > 0) {
                $where[] = \sprintf('(%s)', \join(' OR ', $whereIp));
            }
        }
        if (!empty($pure_referer)) {
            $where[] = $wpdb->prepare('jwoin_pure_referer.hash = %s', \md5($pure_referer));
        }
        if ($sinceSeconds > 0) {
            $where[] = $wpdb->prepare('cs.created > (NOW() - INTERVAL %d SECOND)', $sinceSeconds);
        } elseif (!empty($from) && !empty($to)) {
            $where[] = $wpdb->prepare('cs.created BETWEEN %s AND %s', $from, $to);
        } elseif (!empty($from)) {
            $where[] = $wpdb->prepare('cs.created >= %s', $from);
        } elseif (!empty($to)) {
            $where[] = $wpdb->prepare('cs.created <= %s', $to);
        }
        if (!empty($context)) {
            $where[] = $wpdb->prepare('cs.context = %s', $context);
        } else {
            // Force `SELECT` statement to use at least one index-possible column to try to boost performance
            // This is especially useful for `COUNT` statements
            $where[] = '(cs.context = "" OR cs.context <> "")';
        }
        $where = \join(' AND ', $where);
        $fields = ['c.id', 'c.plugin_version', 'c.design_version', 'join_ip.ipv4 AS ipv4', 'join_ip.ipv6 AS ipv6', 'join_ip.ipv4_hash AS ipv4_hash', 'join_ip.ipv6_hash AS ipv6_hash', 'c.uuid', 'join_previous_decision.decision AS previous_decision', 'join_decision.decision AS decision', 'c.created', 'c.created_client_time', 'c.blocker', 'c.blocker_thumbnail', 'c.dnt', 'c.custom_bypass', 'c.user_country', 'c.button_clicked', 'c.context', 'c.viewport_width', 'c.viewport_height', 'join_referer.url AS referer', 'join_url_imprint.url AS url_imprint', 'join_url_privacy_policy.url AS url_privacy_policy', 'c.forwarded', 'c.forwarded_blocker', 'join_previous_tcf_string.tcf_string AS previous_tcf_string', 'join_tcf_string.tcf_string AS tcf_string', 'join_previous_gcm_consent.decision AS previous_gcm_consent', 'join_gcm_consent.decision AS gcm_consent', 'c.recorder', 'c.ui_view'];
        // Due to `ORDERBY` and `INNER JOIN` optimization use a subquery for the filtering
        // and paging to boost performance.
        $sqlIds = \sprintf('SELECT %%s FROM %s AS cs %s WHERE %s', $table_name, \join(' ', \array_filter($joinsForWhereSubquery, function ($join, $key) use($where) {
            return \strpos($where, \sprintf('jwoin_%s.', $key)) !== \false;
        }, \ARRAY_FILTER_USE_BOTH)), $where);
        if ($returnType === self::BY_CRITERIA_RESULT_TYPE_COUNT) {
            $sql = \sprintf($sqlIds, 'COUNT(1) AS cnt');
        } else {
            if ($revisionJson) {
                $fields[] = 'join_revision.json_revision AS revision';
                $fields[] = 'join_revision_independent.json_revision AS revision_independent';
            }
            $fields[] = 'join_revision.hash AS revision_hash';
            $fields[] = 'join_revision_independent.hash AS revision_independent_hash';
            $fields = \join(',', $fields);
            $sqlIds = \sprintf($sqlIds, 'cs.id');
            $sql = \sprintf('SELECT %s FROM (%s ORDER BY cs.created DESC LIMIT %d, %d) AS cids INNER JOIN %s AS c ON c.id = cids.id %s ORDER BY c.created DESC', $fields, $sqlIds, $limitOffset, $perPage, $table_name, \join(' ', \array_filter($joins, function ($join, $key) use($fields) {
                return \strpos($fields, \sprintf('join_%s.', $key)) !== \false;
            }, \ARRAY_FILTER_USE_BOTH)));
        }
        if ($returnType === self::BY_CRITERIA_RESULT_TYPE_SQL_QUERY) {
            return $sql;
        }
        // phpcs:disable WordPress.DB
        $results = $wpdb->get_results($sql);
        // phpcs:enable WordPress.DB
        if ($returnType === self::BY_CRITERIA_RESULT_TYPE_COUNT) {
            return \intval($results[0]->cnt);
        }
        $this->castReadRows($results, $returnType === self::BY_CRITERIA_RESULT_TYPE_JSON_DECODE);
        return $results;
    }
    /**
     * Convert a row object read by `byCriteria` to a `PersistedTransaction`.
     *
     * @param object $row
     */
    public function toPersistedTransactionInstance($row)
    {
        $transaction = new PersistedTransaction();
        $transaction->setId($row->id);
        $transaction->setUuid($row->uuid);
        $transaction->setRevision($row->revision);
        $transaction->setRevisionIndependent($row->revision_independent);
        $transaction->setCreated($row->created);
        $transaction->setDecision($row->decision);
        $transaction->setIpAddress($row->ipv4 ?? $row->ipv6);
        $transaction->setMarkAsDoNotTrack($row->dnt);
        $transaction->setButtonClicked($row->button_clicked);
        $transaction->setViewPort($row->viewport_width, $row->viewport_height);
        $transaction->setReferer($row->referer);
        $transaction->setBlocker($row->blocker);
        $transaction->setBlockerThumbnail($row->blocker_thumbnail);
        $transaction->setForwarded($row->forwarded, $row->uuid, $row->forwarded_blocker);
        $transaction->setTcfString($row->tcf_string);
        $transaction->setGcmConsent($row->gcm_consent);
        $transaction->setCustomBypass($row->custom_bypass);
        $transaction->setCreatedClientTime($row->created_client_time);
        $transaction->setRecorderJsonString(Utils::gzUncompressForDatabase($row->recorder, $row->recorder));
        $transaction->setUiView($row->ui_view);
        $transaction->setUserCountry($row->user_country);
        // We do not persist this fields to database
        //$transaction->userAgent = ;
        //$transaction->forwardedUuid = ;
        return $transaction;
    }
    /**
     * Cast read rows from database to correct types.
     *
     * @param object[] $results
     * @param boolean $jsonDecode Pass `false` if you do not want to decode data like `revision` or `decision` to real objects (useful for CSV exports)
     */
    public function castReadRows(&$results, $jsonDecode = \true)
    {
        global $wpdb;
        $table_name_blocker_thumbnails = $this->getTableName(Plugin::TABLE_NAME_BLOCKER_THUMBNAILS);
        $revisionHashes = [];
        foreach ($results as &$row) {
            $row->id = \intval($row->id);
            $row->design_version = \intval($row->design_version);
            $row->ipv4 = $row->ipv4 === '0' ? null : $row->ipv4;
            $row->context = empty($row->context) ? '' : Revision::getInstance()->translateContextVariablesString($row->context);
            if ($jsonDecode) {
                $row->previous_decision = \json_decode($row->previous_decision, ARRAY_A);
                $row->previous_decision = \count($row->previous_decision) > 0 ? $row->previous_decision : null;
                $row->decision = \json_decode($row->decision, ARRAY_A);
                if ($row->previous_gcm_consent !== null) {
                    $row->previous_gcm_consent = \json_decode($row->previous_gcm_consent, ARRAY_A);
                }
                if ($row->gcm_consent !== null) {
                    $row->gcm_consent = \json_decode($row->gcm_consent, ARRAY_A);
                }
                // Only populate decision_labels if we also decode the decision
                $revisionHashes[] = $row->revision_hash;
                if (\property_exists($row, 'revision')) {
                    $row->revision = \json_decode($row->revision, ARRAY_A);
                    $row->revision_independent = \json_decode($row->revision_independent, ARRAY_A);
                }
            }
            $row->blocker = $row->blocker === null ? null : \intval($row->blocker);
            $row->blocker_thumbnail = $row->blocker_thumbnail === null ? null : \intval($row->blocker_thumbnail);
            $row->dnt = $row->dnt === '1';
            $row->created = \mysql2date('c', $row->created, \false);
            $row->created_client_time = \mysql2date('c', $row->created_client_time, \false);
            $row->viewport_width = \intval($row->viewport_width);
            $row->viewport_height = \intval($row->viewport_height);
            $row->forwarded = $row->forwarded === null ? null : \intval($row->forwarded);
            $row->forwarded_blocker = $row->forwarded_blocker === '1';
            if ($row->ipv4 !== null) {
                $row->ipv4 = \long2ip($row->ipv4);
            }
            if ($row->ipv6 !== null) {
                $row->ipv6 = \inet_ntop($row->ipv6);
            }
            if (!empty($row->recorder)) {
                $row->recorder = Utils::gzUncompressForDatabase($row->recorder, $row->recorder);
            }
        }
        // Populate blocker_thumbnails as object instead of the ID itself
        $blockerThumbnailIds = \array_values(\array_unique(\array_filter(\array_column($results, 'blocker_thumbnail'))));
        $blockerThumbnails = [];
        $imagePreviewPlugins = \DevOwl\RealCookieBanner\Core::getInstance()->getBlocker()->getHeadlessContentBlocker()->getPluginsByClassName(ImagePreview::class) ?? [];
        if (\count($blockerThumbnailIds) && \count($imagePreviewPlugins) > 0) {
            /**
             * Plugin.
             *
             * @var WordPressImagePreviewCache
             */
            $imagePreviewCache = $imagePreviewPlugins[0]->getCache();
            // phpcs:disable WordPress.DB.PreparedSQL
            $readBlockerThumbnailsQueryResult = $wpdb->get_results("SELECT id, embed_id, file_md5, embed_url, cache_filename, title, width, height FROM {$table_name_blocker_thumbnails} WHERE id IN (" . \join(',', $blockerThumbnailIds) . ')', ARRAY_A);
            // phpcs:enable WordPress.DB.PreparedSQL
            foreach ($readBlockerThumbnailsQueryResult as $readBlockerThumbnail) {
                $blockerThumbnails[$readBlockerThumbnail['id']] = \array_merge($readBlockerThumbnail, ['id' => \intval($readBlockerThumbnail['id']), 'width' => \intval($readBlockerThumbnail['width']), 'height' => \intval($readBlockerThumbnail['height']), 'url' => $imagePreviewCache->getPrefixUrl() . $readBlockerThumbnail['cache_filename']]);
            }
        }
        foreach ($results as &$row) {
            if ($row->blocker_thumbnail > 0) {
                $thumbnailId = $row->blocker_thumbnail;
                $row->blocker_thumbnail = $blockerThumbnails[$thumbnailId] ?? null;
                if (!$jsonDecode && $row->blocker_thumbnail !== null) {
                    $row->blocker_thumbnail = \json_encode($row->blocker_thumbnail);
                }
            }
        }
        // Populate decision_labels so we can show the decision in table
        if (\count($revisionHashes)) {
            $revisionHashes = Revision::getInstance()->getByHash($revisionHashes);
            // Iterate all table items
            foreach ($results as &$row) {
                $decision = $row->decision;
                $labels = [];
                $groups = $revisionHashes[$row->revision_hash]['groups'];
                // Iterate all decision groups
                foreach ($decision as $groupId => $cookies) {
                    $cookiesCount = \count($cookies);
                    if ($cookiesCount > 0) {
                        // Iterate all available revision groups to find the decision group
                        foreach ($groups as $group) {
                            if ($group['id'] === \intval($groupId)) {
                                $name = $group['name'];
                                $itemsCount = \count($group['items']);
                                $labels[] = $name . ($cookiesCount !== $itemsCount ? \sprintf(' (%d / %d)', $cookiesCount, $itemsCount) : '');
                                break;
                            }
                        }
                    }
                }
                $row->decision_labels = $labels;
            }
        }
        return $revisionHashes;
    }
    /**
     * Get the total count of current consents.
     */
    public function getCount()
    {
        return $this->byCriteria([], \DevOwl\RealCookieBanner\UserConsent::BY_CRITERIA_RESULT_TYPE_COUNT);
    }
    /**
     * Get all referer across all consents.
     *
     * @return string[]
     */
    public function getReferer()
    {
        global $wpdb;
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        $table_name_url = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_URL);
        // phpcs:disable WordPress.DB.PreparedSQL
        return $wpdb->get_col("SELECT DISTINCT(u.url) FROM {$table_name} c INNER JOIN {$table_name_url} u ON c.pure_referer = u.id");
        // phpcs:enable WordPress.DB.PreparedSQL
    }
    /**
     * Get all persisted contexts so they can be used e. g. to query statistics.
     *
     * @return string[]
     */
    public function getPersistedContexts()
    {
        global $wpdb;
        $result = [];
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        // phpcs:disable WordPress.DB.PreparedSQL
        $contexts = $wpdb->get_col("SELECT DISTINCT(context) FROM {$table_name}");
        // phpcs:enable WordPress.DB.PreparedSQL
        foreach ($contexts as $context) {
            $result[$context] = Revision::getInstance()->translateContextVariablesString($context);
        }
        return $result;
    }
    /**
     * Settings got updated in "Settings" tab, lets reschedule deletion of consents.
     *
     * @param WP_HTTP_Response $response
     */
    public function settings_updated($response)
    {
        $this->scheduleDeletionOfConsents();
        return $response;
    }
    /**
     * Delete consents older than set duration time
     */
    public function scheduleDeletionOfConsents()
    {
        $currentTime = \current_time('mysql');
        $lastDeletion = \get_transient(Consent::TRANSIENT_SCHEDULE_CONSENTS_DELETION);
        if ($lastDeletion === \false) {
            \set_transient(Consent::TRANSIENT_SCHEDULE_CONSENTS_DELETION, $currentTime, DAY_IN_SECONDS);
            $this->deleteConsentsByConsentDurationPeriod();
        }
    }
    /**
     * Executing query for deletion consents
     */
    private function deleteConsentsByConsentDurationPeriod()
    {
        global $wpdb;
        $consent = Consent::getInstance();
        $consentDuration = $consent->getConsentDuration();
        $endDate = \gmdate('Y-m-d', \strtotime('-' . $consentDuration . ' months'));
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        $table_name_revision = $this->getTableName(Revision::TABLE_NAME);
        $table_name_revision_independent = $this->getTableName(Revision::TABLE_NAME_INDEPENDENT);
        $table_name_ip = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_IP);
        //$table_name_decision = $this->getTableName(UserConsent::TABLE_NAME_DECISION);
        //$table_name_url = $this->getTableName(UserConsent::TABLE_NAME_URL);
        $table_name_tcf_string = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_TCF_STRING);
        // phpcs:disable WordPress.DB
        $deleted = $wpdb->query($wpdb->prepare("DELETE FROM `{$table_name}` WHERE `created` < %s", $endDate));
        if ($deleted > 0) {
            $deleted += $wpdb->query("DELETE FROM {$table_name_revision} WHERE NOT EXISTS (SELECT 1 FROM {$table_name} c WHERE {$table_name_revision}.id = c.revision)");
            $deleted += $wpdb->query("DELETE FROM {$table_name_revision_independent} WHERE NOT EXISTS (SELECT 1 FROM {$table_name} c WHERE {$table_name_revision_independent}.id = c.revision_independent)");
            $deleted += $wpdb->query("DELETE FROM {$table_name_ip} WHERE NOT EXISTS (SELECT 1 FROM {$table_name} c WHERE {$table_name_ip}.id = c.ip)");
            /**
             * The URL and decision tables do not have a foreign key index to save disk space. Due to the fact that these
             * data does not have any person related data, we can safely hold them. Additionally, those tables will not "explode"
             * in terms of disk space.
             *
             * @see https://app.clickup.com/t/861mva7bm?comment=90120075659128
             */
            /* $deleted += $wpdb->query("DELETE url FROM $table_name_url url
                   LEFT JOIN $table_name referer ON url.id = referer.referer
                   LEFT JOIN $table_name pure_referer ON url.id = pure_referer.pure_referer
                   LEFT JOIN $table_name url_imprint ON url.id = url_imprint.url_imprint
                   LEFT JOIN $table_name url_privacy_policy ON url.id = url_privacy_policy.url_privacy_policy
                   WHERE referer.id IS NULL AND pure_referer.id IS NULL AND url_imprint.id IS NULL AND url_privacy_policy.id IS NULL
               ");
               $deleted += $wpdb->query("DELETE decision FROM $table_name_decision decision
                   LEFT JOIN $table_name previous_decision ON decision.id = previous_decision.previous_decision
                   LEFT JOIN $table_name cdecision ON decision.id = cdecision.decision
                   LEFT JOIN $table_name previous_gcm_consent ON decision.id = previous_gcm_consent.previous_gcm_consent
                   LEFT JOIN $table_name gcm_consent ON decision.id = gcm_consent.gcm_consent
                   WHERE previous_decision.id IS NULL AND cdecision.id IS NULL AND previous_gcm_consent.id IS NULL AND gcm_consent.id IS NULL
               ");*/
            $deleted += $wpdb->query("DELETE tcf_string FROM {$table_name_tcf_string} tcf_string\n                LEFT JOIN {$table_name} previous_tcf_string ON tcf_string.id = previous_tcf_string.previous_tcf_string\n                LEFT JOIN {$table_name} ctcf_string ON tcf_string.id = ctcf_string.tcf_string\n                WHERE previous_tcf_string.id IS NULL AND ctcf_string.id IS NULL\n            ");
        }
        // phpcs:enable WordPress.DB
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\UserConsent() : self::$me;
    }
}
