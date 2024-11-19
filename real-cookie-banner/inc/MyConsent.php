<?php

namespace DevOwl\RealCookieBanner;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\consent\Transaction;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\settings\BannerLink as SettingsBannerLink;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\Utils as CookieConsentManagementUtils;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\settings\BannerLink;
use DevOwl\RealCookieBanner\settings\Revision;
use DevOwl\RealCookieBanner\view\Banner;
use DevOwl\RealCookieBanner\view\Blocker;
use DevOwl\RealCookieBanner\view\blocker\Plugin;
use WP_Error;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Handle consents of "me".
 * @internal
 */
class MyConsent
{
    use UtilsProvider;
    /**
     * Singleton instance.
     *
     * @var MyConsent
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
     * Persist an user consent to the database.
     *
     * @param Transaction $transaction
     * @param boolean $dummy If `true`, no data will saved in database
     */
    public function persist($transaction, $dummy = \false)
    {
        global $wpdb;
        $table_name_blocker_thumbnails = $this->getTableName(Plugin::TABLE_NAME_BLOCKER_THUMBNAILS);
        $blockerThumbnail = $transaction->getBlockerThumbnail();
        if (\is_string($blockerThumbnail)) {
            $blockerThumbnailSplit = \explode('-', $blockerThumbnail, 2);
            if (\count($blockerThumbnailSplit) > 1) {
                $blockerThumbnail = $wpdb->get_var(
                    // phpcs:disable WordPress.DB.PreparedSQL
                    $wpdb->prepare("SELECT id FROM {$table_name_blocker_thumbnails} WHERE embed_id = %s AND file_md5 = %s", $blockerThumbnailSplit[0], $blockerThumbnailSplit[1])
                );
                // Blocker thumbnail does not exist - this cannot be the case (expect user deletes database table entries)
                $blockerThumbnail = \is_numeric($blockerThumbnail) ? \intval($blockerThumbnail) : null;
            } else {
                $blockerThumbnail = null;
            }
            $transaction->setBlockerThumbnail($blockerThumbnail);
        }
        $consent = $this->getCurrentUser();
        $previousDecision = $consent->getDecision() ?? \false;
        $previousTcfString = $this->isPro() ? $consent->getTcfString() ?? \false : \false;
        $previousGcmConsent = $this->isPro() ? $consent->getGcmConsent() ?? \false : \false;
        $previousCreated = $consent->getCreated() ?? \false;
        $revision = $consent->getCookieConsentManagement()->getRevision();
        $revisionHash = $revision->create('force', \false)['hash'];
        $revisionIndependentHash = $revision->createIndependent(\true)['hash'];
        $ips = \DevOwl\RealCookieBanner\IpHandler::getInstance()->persistIp();
        $contextString = $revision->getPersistence()->getContextVariablesString();
        $transaction->setIpAddress(\DevOwl\RealCookieBanner\Utils::getIpAddress());
        $result = $consent->commit($transaction, function () use($transaction, $ips, $consent, $revisionHash, $revisionIndependentHash, $contextString, $previousDecision, $previousTcfString, $previousGcmConsent, $dummy) {
            global $wpdb;
            if ($dummy) {
                return 1;
            }
            $ipId = $this->persistIps($ips);
            if (\is_wp_error($ipId)) {
                return $ipId;
            }
            $urlIds = $this->persistUrls([$transaction->getReferer(), \DevOwl\RealCookieBanner\Utils::removeNonPermalinkQueryFromUrl($transaction->getReferer()), BannerLink::getInstance()->getLegalLink(SettingsBannerLink::PAGE_TYPE_LEGAL_NOTICE, 'url'), BannerLink::getInstance()->getLegalLink(SettingsBannerLink::PAGE_TYPE_PRIVACY_POLICY, 'url')]);
            if (\is_wp_error($urlIds)) {
                return $urlIds;
            }
            $decisionIds = $this->persistDecisions([$previousDecision === \false ? [] : $previousDecision, $consent->getDecision(), $previousGcmConsent === \false ? null : $previousGcmConsent, $consent->getGcmConsent() === null ? null : $consent->getGcmConsent()]);
            if (\is_wp_error($decisionIds)) {
                return $decisionIds;
            }
            $tcfStringIds = $this->persistTcfStrings([$previousTcfString === \false ? null : $previousTcfString, $consent->getTcfString()]);
            if (\is_wp_error($tcfStringIds)) {
                return $tcfStringIds;
            }
            $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
            $table_name_revisions = $this->getTableName(Revision::TABLE_NAME);
            $table_name_revisions_independent = $this->getTableName(Revision::TABLE_NAME_INDEPENDENT);
            // phpcs:disable WordPress.DB.PreparedSQL
            list($revisionId, $revisionIndependentId) = \array_map('intval', $wpdb->get_col($wpdb->prepare("SELECT id FROM {$table_name_revisions} WHERE `hash` = %s UNION ALL SELECT id FROM {$table_name_revisions_independent} WHERE `hash` = %s", $revisionHash, $revisionIndependentHash)));
            // phpcs:enable WordPress.DB.PreparedSQL
            if (!($revisionId > 0 && $revisionIndependentId > 0)) {
                return new WP_Error('rcb_consent_commit_read_revision_failed');
            }
            $recorderJsonString = $transaction->getRecorderJsonString();
            if (\is_string($recorderJsonString)) {
                $recorderJsonString = CookieConsentManagementUtils::gzCompressForDatabase($recorderJsonString, $recorderJsonString);
            } else {
                $recorderJsonString = 'NULL';
            }
            $wpdb->query(
                // phpcs:disable WordPress.DB.PreparedSQL
                \str_ireplace("'NULL'", 'NULL', $wpdb->prepare("INSERT IGNORE INTO {$table_name}\n                            (plugin_version, design_version,\n                            ip, uuid, revision, revision_independent,\n                            previous_decision, decision,\n                            blocker, blocker_thumbnail,\n                            dnt, custom_bypass,\n                            button_clicked, context, viewport_width, viewport_height,\n                            referer, pure_referer, url_imprint, url_privacy_policy,\n                            forwarded, forwarded_blocker,\n                            user_country,\n                            previous_tcf_string, tcf_string,\n                            previous_gcm_consent, gcm_consent,\n                            recorder, ui_view, created, created_client_time)\n                            VALUES\n                            (%s, %d,\n                            %s, %s, %s, %s,\n                            %s, %s,\n                            %s, %s,\n                            %s, %s,\n                            %s, %s, %s, %s,\n                            %s, %s, %s, %s,\n                            %s, %s,\n                            %s,\n                            %s, %s,\n                            %s, %s,\n                            %s, %s, %s, %s)", RCB_VERSION, Banner::DESIGN_VERSION, $ipId, $consent->getUuid(), $revisionId, $revisionIndependentId, $decisionIds[0], $decisionIds[1], $transaction->getBlocker() > 0 ? $transaction->getBlocker() : 'NULL', $transaction->getBlockerThumbnail() > 0 ? $transaction->getBlockerThumbnail() : 'NULL', $transaction->isMarkAsDoNotTrack(), $transaction->getCustomBypass() === null ? 'NULL' : $transaction->getCustomBypass(), $transaction->getButtonClicked(), $contextString, $transaction->getViewPortWidth(), $transaction->getViewPortHeight(), $urlIds[0] === null ? 'NULL' : $urlIds[0], $urlIds[1] === null ? 'NULL' : $urlIds[1], $urlIds[2] === null ? 'NULL' : $urlIds[2], $urlIds[3] === null ? 'NULL' : $urlIds[3], $transaction->getForwarded() > 0 ? $transaction->getForwarded() : 'NULL', $transaction->isForwardedBlocker(), $transaction->getUserCountry() ?? 'NULL', $tcfStringIds[0] === null ? 'NULL' : $tcfStringIds[0], $tcfStringIds[1] === null ? 'NULL' : $tcfStringIds[1], $decisionIds[2] === null ? 'NULL' : $decisionIds[2], $decisionIds[3] === null ? 'NULL' : $decisionIds[3], $recorderJsonString, $transaction->getUiView() === null ? 'NULL' : $transaction->getUiView(), \mysql2date('c', \current_time('mysql'), \false), \is_string($transaction->getCreatedClientTime()) ? \mysql2date('c', $transaction->getCreatedClientTime(), \false) : 'NULL'))
            );
            return $wpdb->insert_id;
        });
        if ($result === \false) {
            return new WP_Error('rcb_consent_commit_failed');
        }
        // Set cookies on browser
        foreach ($result['setCookie'] as $i => $setCookie) {
            $setCookieResult = \DevOwl\RealCookieBanner\Utils::setCookie($setCookie->key, $setCookie->value, $setCookie->expire, \constant('COOKIEPATH'), \constant('COOKIE_DOMAIN'), \is_ssl(), \false, 'None');
            if (!$dummy && $setCookieResult && $i === 0) {
                /**
                 * Real Cookie Banner saved the cookie which holds information about the user with
                 * UUID, revision and consent choices.
                 *
                 * @hook RCB/Consent/SetCookie
                 * @param {string} $cookieName
                 * @param {string} $cookieValue
                 * @param {boolean} $result Got the cookie successfully created?
                 * @param {boolean} $revoke `true` if the cookie should be deleted
                 * @param {string|null} $uuid
                 * @param {string[]} $uuids Since v3 multiple consent UUIDs are saved to the database
                 * @param {array}
                 * @since 2.0.0
                 * @deprecated This will removed in a future release!
                 */
                \do_action('RCB/Consent/SetCookie', $setCookie->key, $setCookie->value, \true, \false, $consent->getUuid(), \array_merge([$consent->getUuid()], $consent->getPreviousUuids() ?? []));
            }
        }
        // Persist stats (only when not forwarded)
        if (!$dummy && $transaction->getForwarded() === 0) {
            $stats = \DevOwl\RealCookieBanner\Stats::getInstance();
            $stats->persistTerm($contextString, $transaction->getDecision(), $previousDecision, $previousCreated);
            $stats->persistButtonClicked($contextString, $transaction->getButtonClicked());
            if ($transaction->getButtonClicked() !== Blocker::BUTTON_CLICKED_IDENTIFIER) {
                $stats->persistCustomBypass(
                    $contextString,
                    // Save DNT also as custom_bypass
                    $transaction->getCustomBypass() === null ? $transaction->isMarkAsDoNotTrack() ? 'dnt' : null : $transaction->getCustomBypass()
                );
            }
        }
        // Backwards-compatibility for RCB/Consent/Created filter
        $filterResult = ['uuid' => $consent->getUuid(), 'previous_uuids' => $consent->getPreviousUuids(), 'created' => \is_numeric($consent->getCreated()) ? \mysql2date('c', \gmdate('Y-m-d H:i:s', \intval($consent->getCreated())), \false) : null, 'cookie_revision' => $revisionHash, 'decision_in_cookie' => $consent->getDecision(), 'updated' => \true, 'consent_id' => $result['response']['consentId']];
        if (!$dummy) {
            \DevOwl\RealCookieBanner\UserConsent::getInstance()->scheduleDeletionOfConsents();
            /**
             * An user has given a new consent.
             *
             * @hook RCB/Consent/Created
             * @param {array} $result
             * @param {array} $args Passed arguments to `MyConsent::persist` as map (since 2.0.0)
             * @param {Transaction} $transaction The full transaction representing the new consent (since 4.4.2), use this instead of `$args`
             */
            \do_action('RCB/Consent/Created', $filterResult, [$transaction->getDecision(), $transaction->isMarkAsDoNotTrack(), $transaction->getButtonClicked(), $transaction->getViewPortWidth(), $transaction->getViewPortHeight(), $transaction->getReferer(), $transaction->getBlocker(), $transaction->getBlockerThumbnail(), $transaction->getForwarded(), $transaction->getForwardedUuid(), $transaction->isForwardedBlocker(), $transaction->getTcfString(), $transaction->getGcmConsent(), $transaction->getCustomBypass(), $transaction->getRecorderJsonString(), $transaction->getUiView()], $transaction);
        }
        return $result['response'];
    }
    /**
     * Persist the IPs of the current user.
     *
     * @param array $ips
     */
    protected function persistIps($ips)
    {
        global $wpdb;
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_IP);
        // phpcs:disable WordPress.DB.PreparedSQL
        $wpdb->query(\str_ireplace("'NULL'", 'NULL', $wpdb->prepare(
            // Do not use INSERT IGNORE here because it increments AUTO_INCREMENT (https://www.perplexity.ai/search/in-mysql-when-using-insert-ign-fsJfL5IpRoKYLVEBjDksyw)
            "INSERT INTO {$table_name} (ipv4, ipv6, save_ip, ipv4_hash, ipv6_hash) VALUES (%s, %s, %d, %s, %s) ON DUPLICATE KEY UPDATE ipv4 = VALUES(ipv4), ipv6 = VALUES(ipv6), save_ip = VALUES(save_ip), ipv4_hash = VALUES(ipv4_hash), ipv6_hash = VALUES(ipv6_hash)",
            $ips['ipv4'] === null ? 'NULL' : $ips['ipv4'],
            $ips['ipv6'] === null ? 'NULL' : $ips['ipv6'],
            $ips['save_ip'] ? 1 : 0,
            $ips['ipv4_hash'] === null ? '' : $ips['ipv4_hash'],
            $ips['ipv6_hash'] === null ? '' : $ips['ipv6_hash']
        )));
        // phpcs:enable WordPress.DB.PreparedSQL
        $rowId = $wpdb->insert_id;
        if ($rowId < 1) {
            // The row already exists and we got no last_insert_id, so we need to read the row
            // phpcs:disable WordPress.DB.PreparedSQL
            $rowId = $wpdb->get_var($wpdb->prepare("SELECT id FROM {$table_name} WHERE save_ip = %d AND ipv4_hash = %s AND ipv6_hash = %s", $ips['save_ip'] ? 1 : 0, $ips['ipv4_hash'] === null ? '' : $ips['ipv4_hash'], $ips['ipv6_hash'] === null ? '' : $ips['ipv6_hash']));
            // phpcs:enable WordPress.DB.PreparedSQL
        }
        return \is_numeric($rowId) ? \intval($rowId) : new WP_Error('rcb_consent_ip_commit_failed');
    }
    /**
     * Persist a list of URLs.
     *
     * @param string[] $urls
     */
    protected function persistUrls($urls)
    {
        global $wpdb;
        if (empty($urls)) {
            return [];
        }
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_URL);
        $sqlValues = [];
        $validUrls = [];
        foreach ($urls as $url) {
            if (!empty($url)) {
                $hash = \md5($url);
                $sqlValues[] = $wpdb->prepare('(%s, %s)', $hash, $url);
                $validUrls[] = $url;
            }
        }
        // phpcs:disable WordPress.DB
        $queryResult = \count($sqlValues) > 0 ? $wpdb->query(\str_ireplace(
            "'NULL'",
            'NULL',
            // Do not use INSERT IGNORE here because it increments AUTO_INCREMENT (https://www.perplexity.ai/search/in-mysql-when-using-insert-ign-fsJfL5IpRoKYLVEBjDksyw)
            "INSERT INTO {$table_name} (`hash`, `url`) VALUES " . \implode(',', $sqlValues) . ' ON DUPLICATE KEY UPDATE `hash` = VALUES(`hash`), `url` = VALUES(`url`)'
        )) : [];
        // phpcs:enable WordPress.DB
        if ($queryResult === \false) {
            return new WP_Error('rcb_consent_url_commit_failed');
        }
        // phpcs:disable WordPress.DB
        $rows = \count($validUrls) > 0 ? $wpdb->get_results("SELECT `hash`, id FROM {$table_name} WHERE `hash` IN (" . \implode(',', \array_map(function ($url) {
            return \sprintf("'%s'", \md5($url));
        }, $validUrls)) . ')', ARRAY_A) : [];
        // phpcs:enable WordPress.DB
        $hashes = \array_column($rows, 'hash');
        $result = [];
        foreach ($urls as $url) {
            if (!empty($url)) {
                $idx = \array_search(\md5($url), $hashes, \true);
                $result[] = $idx !== \false ? \intval($rows[$idx]['id']) : null;
            } else {
                $result[] = null;
            }
        }
        return $result;
    }
    /**
     * Persist a list of decisions. This could be used for example to persist the decisions of a Real
     * Cookie Banner decision or Google Consent Mode decision.
     *
     * @param array $decisions
     */
    protected function persistDecisions($decisions)
    {
        global $wpdb;
        if (empty($decisions)) {
            return [];
        }
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_DECISION);
        $sqlValues = [];
        $validDecisions = [];
        foreach ($decisions as $decision) {
            if (\is_array($decision)) {
                $json = \json_encode($decision);
                $hash = \md5($json);
                $sqlValues[] = $wpdb->prepare('(%s, %s)', $hash, $json);
                $validDecisions[] = $decision;
            }
        }
        // phpcs:disable WordPress.DB
        $queryResult = \count($sqlValues) > 0 ? $wpdb->query(\str_ireplace(
            "'NULL'",
            'NULL',
            // Do not use INSERT IGNORE here because it increments AUTO_INCREMENT (https://www.perplexity.ai/search/in-mysql-when-using-insert-ign-fsJfL5IpRoKYLVEBjDksyw)
            "INSERT INTO {$table_name} (`hash`, `decision`) VALUES " . \implode(',', $sqlValues) . ' ON DUPLICATE KEY UPDATE `hash` = VALUES(`hash`), `decision` = VALUES(`decision`)'
        )) : [];
        // phpcs:enable WordPress.DB
        if ($queryResult === \false) {
            return new WP_Error('rcb_consent_decision_commit_failed');
        }
        // phpcs:disable WordPress.DB
        $rows = \count($validDecisions) > 0 ? $wpdb->get_results("SELECT `hash`, id FROM {$table_name} WHERE `hash` IN (" . \implode(',', \array_map(function ($decision) {
            return \sprintf("'%s'", \md5(\json_encode($decision)));
        }, $validDecisions)) . ')', ARRAY_A) : [];
        // phpcs:enable WordPress.DB
        $hashes = \array_column($rows, 'hash');
        $result = [];
        foreach ($decisions as $decision) {
            if (\is_array($decision)) {
                $idx = \array_search(\md5(\json_encode($decision)), $hashes, \true);
                $result[] = $idx !== \false ? \intval($rows[$idx]['id']) : null;
            } else {
                $result[] = null;
            }
        }
        return $result;
    }
    /**
     * Persist a list of TCF strings.
     *
     * @param string[] $tcfStrings
     */
    protected function persistTcfStrings($tcfStrings)
    {
        global $wpdb;
        if (empty($tcfStrings)) {
            return [];
        }
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME_TCF_STRING);
        $sqlValues = [];
        $validTcfStrings = [];
        foreach ($tcfStrings as $tcfString) {
            if (!empty($tcfString)) {
                $hash = \md5($tcfString);
                $sqlValues[] = $wpdb->prepare('(%s, %s)', $hash, $tcfString);
                $validTcfStrings[] = $tcfString;
            }
        }
        // phpcs:disable WordPress.DB
        $queryResult = \count($sqlValues) > 0 ? $wpdb->query(\str_ireplace(
            "'NULL'",
            'NULL',
            // Do not use INSERT IGNORE here because it increments AUTO_INCREMENT (https://www.perplexity.ai/search/in-mysql-when-using-insert-ign-fsJfL5IpRoKYLVEBjDksyw)
            "INSERT INTO {$table_name} (`hash`, `tcf_string`) VALUES " . \implode(',', $sqlValues) . ' ON DUPLICATE KEY UPDATE `hash` = VALUES(`hash`), `tcf_string` = VALUES(`tcf_string`)'
        )) : [];
        // phpcs:enable WordPress.DB
        if ($queryResult === \false) {
            return new WP_Error('rcb_consent_tcf_string_commit_failed');
        }
        // phpcs:disable WordPress.DB
        $rows = \count($validTcfStrings) > 0 ? $wpdb->get_results("SELECT `hash`, id FROM {$table_name} WHERE `hash` IN (" . \implode(',', \array_map(function ($tcfString) {
            return \sprintf("'%s'", \md5($tcfString));
        }, $validTcfStrings)) . ')', ARRAY_A) : [];
        // phpcs:enable WordPress.DB
        $hashes = \array_column($rows, 'hash');
        $result = [];
        foreach ($tcfStrings as $tcfString) {
            if (!empty($tcfString)) {
                $idx = \array_search(\md5($tcfString), $hashes, \true);
                $result[] = $idx !== \false ? \intval($rows[$idx]['id']) : null;
            } else {
                $result[] = null;
            }
        }
        return $result;
    }
    /**
     * Get's the current user from the cookie.
     */
    public function getCurrentUser()
    {
        $consent = \DevOwl\RealCookieBanner\Core::getInstance()->getCookieConsentManagement()->startConsent();
        $consent->setCurrentCookies($_COOKIE);
        return $consent;
    }
    /**
     * Get the history of the current user.
     */
    public function getCurrentHistory()
    {
        $user = $this->getCurrentUser();
        $result = [];
        if (!empty($user->getUuid())) {
            $rows = \DevOwl\RealCookieBanner\UserConsent::getInstance()->byCriteria(['revisionJson' => \true, 'context' => Revision::getInstance()->getContextVariablesString(), 'perPage' => 100, 'uuids' => \array_merge([$user->getUuid()], $user->getPreviousUuids())]);
            foreach ($rows as $row) {
                $result[] = \DevOwl\RealCookieBanner\Core::getInstance()->getCookieConsentManagement()->getFrontend()->persistedTransactionToJsonForHistoryViewer(\DevOwl\RealCookieBanner\UserConsent::getInstance()->toPersistedTransactionInstance($row));
            }
        }
        return $result;
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\MyConsent() : self::$me;
    }
}
