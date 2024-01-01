<?php

namespace DevOwl\RealCookieBanner;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\settings\BannerLink;
use DevOwl\RealCookieBanner\settings\Consent;
use DevOwl\RealCookieBanner\settings\General;
use DevOwl\RealCookieBanner\settings\Revision;
use DevOwl\RealCookieBanner\view\Banner;
use DevOwl\RealCookieBanner\view\Blocker;
use DevOwl\RealCookieBanner\view\blocker\Plugin;
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
    const COOKIE_NAME_USER_PREFIX = 'real_cookie_banner';
    /**
     * Regexp to validate and parse the cookie value with named capture groups.
     *
     * @see https://regex101.com/r/6UXL8j/1
     */
    const COOKIE_VALUE_REGEXP = '/^(?<createdAt>\\d+)?:?(?<uuids>(?:[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}[,]?)+):(?<revisionHash>[a-f0-9]{32}):(?<decisionJson>.*)$/';
    /**
     * Singleton instance.
     *
     * @var MyConsent
     */
    private static $me = null;
    private $cacheCurrentUser = null;
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
     * TODO: There are a lot of properties now, please create a `Consent` class representing a consent. This is also
     *       useful for `UserConsent` and `RCB/Consent/Created` hook.
     *
     * @param array|string $consent A set of accepted cookie groups + cookies or a predefined set like `all` or `essentials` (see `UserConsent::validateConsent`)
     * @param boolean $markAsDoNotTrack
     * @param string $buttonClicked
     * @param int $viewPortWidth
     * @param int $viewPortHeight
     * @param string $referer
     * @param int $blocker If the consent came from a content blocker, mark this in our database
     * @param int|string $blockerThumbnail Can be the ID of the blocker thumbnail itself, or in format of `{embedId}-{fileMd5}`
     * @param int $forwarded The reference to the consent ID of the source website (only for forwarded consents)
     * @param string $forwardedUuid The UUID reference of the source website
     * @param boolean $forwardedBlocker Determine if forwarded consent came through a content blocker
     * @param string $tcfString TCF compatibility; encoded TCF string (not the vendor string; `isForVendors = false`)
     * @param string $customBypass Allows to set a custom bypass which causes the banner to be hidden (e.g. Geolocation)
     * @param string $recorderJsonString Recorder interactions with the help of `@devowl-wp/web-html-element-interaction-recorder` as JSON string as it is never consumed via PHP
     * @param string $uiView Can be `initial` (the cookie banner pops up for first time with first and second layer or content blocker) or `change` (Change privacy settings). `null` indicates a UI was never visible
     * @return array The current used user
     */
    public function persist($consent, $markAsDoNotTrack, $buttonClicked, $viewPortWidth, $viewPortHeight, $referer, $blocker = 0, $blockerThumbnail = null, $forwarded = 0, $forwardedUuid = null, $forwardedBlocker = \false, $tcfString = null, $customBypass = null, $recorderJsonString = null, $uiView = null)
    {
        $args = \get_defined_vars();
        global $wpdb;
        $consent = \DevOwl\RealCookieBanner\UserConsent::getInstance()->validate($consent);
        if (\is_wp_error($consent)) {
            return $consent;
        }
        $revision = Revision::getInstance();
        // Create the cookie on client-side with the latest requested consent hash instead of current real-time hash
        // Why? So, the frontend can safely compare latest requested hash to user-consent hash
        // What is true, cookie hash or database? I can promise, the database shows the consent hash!
        $currentHash = $revision->getCurrentHash();
        $revisionHash = $revision->create('force', \false)['hash'];
        $revisionIndependentHash = $revision->createIndependent(\true)['hash'];
        $user = $this->getCurrentUser();
        $uuid = $forwardedUuid ?? \wp_generate_uuid4();
        $consent_hash = \md5(\json_encode($consent));
        $created = \mysql2date('c', \current_time('mysql'), \false);
        $previousDecision = $user === \false ? \false : $user['decision_in_cookie'];
        $previousCreated = $user === \false ? \false : $user['created'];
        $ips = \DevOwl\RealCookieBanner\IpHandler::getInstance()->persistIp();
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        $table_name_blocker_thumbnails = $this->getTableName(Plugin::TABLE_NAME_BLOCKER_THUMBNAILS);
        $contextString = $revision->getContextVariablesString();
        $uiView = $uiView === null || !\in_array($uiView, ['initial', 'change'], \true) ? null : $uiView;
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
        }
        $wpdb->query(
            // phpcs:disable WordPress.DB.PreparedSQL
            \str_ireplace("'NULL'", 'NULL', $wpdb->prepare(
                "INSERT IGNORE INTO {$table_name}\n                        (plugin_version, design_version,\n                        ipv4, ipv6, ipv4_hash, ipv6_hash,\n                        uuid, revision, revision_independent,\n                        previous_decision, decision, decision_hash,\n                        blocker, blocker_thumbnail,\n                        dnt, custom_bypass,\n                        button_clicked, context, viewport_width, viewport_height,\n                        referer, pure_referer,\n                        url_imprint, url_privacy_policy,\n                        forwarded, forwarded_blocker,\n                        tcf_string, recorder, ui_view, created)\n                        VALUES\n                        (%s, %d,\n                        %d, %s, %s, %s,\n                        %s, %s, %s,\n                        %s, %s, %s,\n                        %s, %s,\n                        %d, %s,\n                        %s, %s, %d, %d,\n                        %s, %s,\n                        %s, %s,\n                        %s, %s,\n                        %s, %s, %s, %s)",
                RCB_VERSION,
                Banner::DESIGN_VERSION,
                $ips['ipv4'] === null ? 'NULL' : $ips['ipv4'],
                $ips['ipv6'] === null ? 'NULL' : $ips['ipv6'],
                $ips['ipv4_hash'] === null ? 'NULL' : $ips['ipv4_hash'],
                $ips['ipv6_hash'] === null ? 'NULL' : $ips['ipv6_hash'],
                $uuid,
                $revisionHash,
                $revisionIndependentHash,
                \json_encode($previousDecision === \false ? [] : $previousDecision),
                \json_encode($consent),
                $consent_hash,
                $blocker > 0 ? $blocker : 'NULL',
                $blockerThumbnail > 0 ? $blockerThumbnail : 'NULL',
                $markAsDoNotTrack,
                $customBypass === null ? 'NULL' : $customBypass,
                $buttonClicked,
                $contextString,
                $viewPortWidth,
                $viewPortHeight,
                $referer,
                \DevOwl\RealCookieBanner\Utils::removeNonPermalinkQueryFromUrl($referer),
                BannerLink::getInstance()->getLegalLink(BannerLink::PAGE_TYPE_LEGAL_NOTICE, 'url'),
                BannerLink::getInstance()->getLegalLink(BannerLink::PAGE_TYPE_PRIVACY_POLICY, 'url'),
                $forwarded > 0 ? $forwarded : 'NULL',
                // %s used for 'NULL' transformation
                $forwardedBlocker,
                // %s used for 'NULL' transformation
                $tcfString === null ? 'NULL' : $tcfString,
                $recorderJsonString === null ? 'NULL' : $recorderJsonString,
                $uiView === null ? 'NULL' : $uiView,
                $created
            ))
        );
        $insertId = $wpdb->insert_id;
        // Set cookie and merge with previous UUIDs
        $allUuids = \array_merge([$uuid], $user === \false ? [] : [$user['uuid']], $user === \false ? [] : $user['previous_uuids']);
        $this->setCookie($allUuids, $currentHash, $consent);
        // Why $currentHash? See above
        // Persist stats (only when not forwarded)
        if ($forwarded === 0) {
            $stats = \DevOwl\RealCookieBanner\Stats::getInstance();
            $stats->persistTerm($contextString, $consent, $previousDecision, $previousCreated);
            $stats->persistButtonClicked($contextString, $buttonClicked);
            if ($buttonClicked !== Blocker::BUTTON_CLICKED_IDENTIFIER) {
                $stats->persistCustomBypass(
                    $contextString,
                    // Save DNT also as custom_bypass
                    $customBypass === null ? $markAsDoNotTrack ? 'dnt' : null : $customBypass
                );
            }
        }
        $result = \array_merge($this->getCurrentUser(\true), ['updated' => \true, 'consent_id' => $insertId]);
        \DevOwl\RealCookieBanner\UserConsent::getInstance()->scheduleDeletionOfConsents();
        /**
         * An user has given a new consent.
         *
         * @hook RCB/Consent/Created
         * @param {array} $result
         * @param {array} $args Passed arguments to `MyConsent::persist` as map (since 2.0.0)
         */
        \do_action('RCB/Consent/Created', $result, $args);
        return $result;
    }
    /**
     * Set or update the existing cookie to the latest revision. It also respect the fact, that
     * cross-site cookies needs to be set with `SameSite=None` attribute.
     *
     * The cookie value is not a JSON object to not have too much overhead (https://stackoverflow.com/a/51173053/5506547).
     *
     * @param string[] $uuids
     * @param string $revision
     * @param array $consent
     * @see https://developer.wordpress.org/reference/functions/wp_set_auth_cookie/
     * @see https://stackoverflow.com/a/46971326/5506547
     */
    public function setCookie($uuids = null, $revision = null, $consent = null)
    {
        $cookieName = $this->getCookieName();
        $doDelete = $uuids === null;
        // Due to cookie-length limitation reduce value-overhead and do not use JSON
        $cookieValue = $doDelete ? '' : \sprintf('%d:%s:%s:%s', \time(), \join(',', $uuids), $revision, \json_encode($consent));
        $expire = $doDelete ? -1 : \time() + \constant('DAY_IN_SECONDS') * Consent::getInstance()->getCookieDuration();
        $result = \DevOwl\RealCookieBanner\Utils::setCookie($cookieName, $cookieValue, $expire, \constant('COOKIEPATH'), \constant('COOKIE_DOMAIN'), \is_ssl(), \false, 'None');
        if ($result) {
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
             */
            \do_action('RCB/Consent/SetCookie', $cookieName, $cookieValue, $result, $doDelete, $doDelete ? null : $uuids[0], $uuids);
        }
        return $result;
    }
    /**
     * Get's the current user from the cookie. The result will hold the unique
     * user id and the accepted revision hash. This function is also ported to JS via `getUserDecision.tsx`.
     *
     * @param boolean $force
     * @return false|array See return of `parseCookieValue`
     */
    public function getCurrentUser($force = \false)
    {
        if ($this->cacheCurrentUser !== null && !$force) {
            return $this->cacheCurrentUser;
        }
        // Cookie set?
        $cookieName = $this->getCookieName();
        if (!isset($_COOKIE[$cookieName])) {
            return \false;
        }
        $parsed = $this->parseCookieValue($_COOKIE[$cookieName]);
        if ($parsed === \false) {
            return \false;
        }
        // Save in cache
        $this->cacheCurrentUser = $parsed;
        return $this->cacheCurrentUser;
    }
    /**
     * Parse a consent from a given cookie value. The result will hold the unique
     * user id and the accepted revision hash.
     *
     * @param string $value
     * @return array 'uuid', `previous_uuids`, 'created' (can be null due to backwards-compatibility), 'cookie_revision', 'decision_in_cookie'
     */
    protected function parseCookieValue($value)
    {
        // Cookie empty? (https://stackoverflow.com/a/32567915/5506547)
        $value = \stripslashes($value);
        if (empty($value)) {
            return \false;
        }
        // Parse and validate partly
        if (!\preg_match(self::COOKIE_VALUE_REGEXP, $value, $match)) {
            return \false;
        }
        // UUIDs are comma-separated
        $uuids = \explode(',', $match['uuids']);
        $uuid = \array_shift($uuids);
        $revisionHash = $match['revisionHash'];
        $cookieDecision = \DevOwl\RealCookieBanner\UserConsent::getInstance()->validate(\json_decode($match['decisionJson'], ARRAY_A));
        if (\is_wp_error($cookieDecision)) {
            return \false;
        }
        $result = ['uuid' => $uuid, 'previous_uuids' => $uuids, 'created' => \is_numeric($match['createdAt']) ? \mysql2date('c', \gmdate('Y-m-d H:i:s', \intval($match['createdAt'])), \false) : null, 'cookie_revision' => $revisionHash, 'decision_in_cookie' => $cookieDecision];
        // Check if any consent was ever set by this user
        // -> no longer needed as the consent could be exported to a file and deleted, or moved to a consent cloud
        /*$result = $wpdb->get_row(
              $wpdb->prepare("SELECT created FROM $table_name WHERE uuid = %s ORDER BY created DESC LIMIT 1", $uuid),
              ARRAY_A
          );*/
        return $result;
    }
    /**
     * Get the history of the current user.
     */
    public function getCurrentHistory()
    {
        $user = $this->getCurrentUser();
        $result = [];
        if ($user !== \false) {
            $rows = \DevOwl\RealCookieBanner\UserConsent::getInstance()->byCriteria(['revisionJson' => \true, 'context' => Revision::getInstance()->getContextVariablesString(), 'perPage' => 100, 'uuids' => \array_merge([$user['uuid']], $user['previous_uuids'])]);
            foreach ($rows as $row) {
                $jsonRevision = $row->revision;
                $jsonRevisionIndependent = $row->revision_independent;
                $obj = [
                    'id' => $row->id,
                    'uuid' => $row->uuid,
                    'isDoNotTrack' => $row->dnt,
                    'isUnblock' => $row->blocker > 0,
                    'isForwarded' => $row->forwarded > 0,
                    'created' => $row->created,
                    'groups' => $jsonRevision['groups'],
                    'decision' => $row->decision,
                    // TCF compatibility
                    'tcf' => isset($jsonRevision['tcf']) ? ['tcf' => $jsonRevision['tcf'], 'tcfMeta' => $jsonRevisionIndependent['tcfMeta'], 'tcfString' => $row->tcf_string] : null,
                ];
                $result[] = $obj;
            }
        }
        return $result;
    }
    /**
     * Get cookie name for the current page.
     */
    public function getCookieName()
    {
        $revision = Revision::getInstance();
        $implicitString = $revision->getContextVariablesString(\true);
        $contextString = $revision->getContextVariablesString();
        return self::COOKIE_NAME_USER_PREFIX . (empty($implicitString) ? '' : '-' . $implicitString) . (empty($contextString) ? '' : '-' . $contextString);
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
    // FOR TESTING PURPOSES!
    /*public static function generateMassData($iterations = 100, $perChunk = 25000) {
            // phpcs:disable WordPress.DB.PreparedSQL
            global $wpdb;
    
            $revision = Revision::getInstance();
            $revisionHash = $revision->create('force', false)['hash'];
            $revisionIndependentHash = $revision->createIndependent(true)['hash'];
            for ($i = 0; $i < $iterations; $i++) {
                $values = [];
    
                for ($j = 0; $j < $perChunk; $j++) {
                    $values[] = str_ireplace(
                        "'NULL'",
                        'NULL',
                        $wpdb->prepare(
                            '(%s, %d,
                                    %d, %s, %s, %s,
                                    %s, %s, %s,
                                    %s, %s, %s,
                                    %s, %s,
                                    %d, %s,
                                    %s, %s, %d, %d,
                                    %s, %s,
                                    %s, %s,
                                    %s, %s,
                                    %s, %s, %s, %s)',
                            RCB_VERSION,
                            Banner::DESIGN_VERSION,
                            'NULL',
                            'NULL',
                            'ba775fb10486db56cc10540f59c8e1f03ba825455d500c734b',
                            'ba775fb10486db56cc10540f59c8e1f03ba825455d500c734b',
                            wp_generate_uuid4(),
                            $revisionHash,
                            $revisionIndependentHash,
                            json_encode([]),
                            '{"2":[15],"5":[14]}',
                            '010dc14ba222b59be64bab3d5dfeb02b',
                            'NULL',
                            'NULL',
                            '0',
                            'NULL',
                            'none',
                            '',
                            0,
                            0,
                            'https://localhost',
                            'https://localhost',
                            'https://localhost',
                            'https://localhost',
                            'NULL',
                            '0',
                            'NULL',
                            'NULL',
                            'NULL',
                            mysql2date('c', current_time('mysql'), false)
                        )
                    );
                }
    
                $result = $wpdb->query('INSERT INTO wp_rcb_consent
                    (plugin_version, design_version,
                    ipv4, ipv6, ipv4_hash, ipv6_hash,
                    uuid, revision, revision_independent,
                    previous_decision, decision, decision_hash,
                    blocker, blocker_thumbnail,
                    dnt, custom_bypass,
                    button_clicked, context, viewport_width, viewport_height,
                    referer, pure_referer,
                    url_imprint, url_privacy_policy,
                    forwarded, forwarded_blocker,
                    tcf_string, recorder, ui_view, created)
                    VALUES ' . join(',', $values));
    
                error_log('-----' . $result);
            }
            // phpcs:enable WordPress.DB.PreparedSQL
        }*/
}
