<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\TcfVendorListNormalize;

use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\None;
/**
 * Query the database for purposes, functions and vendors.
 *
 * They are strictly typed to this format: https://git.io/JqfCq
 * @internal
 */
class Query
{
    /**
     * The normalizer.
     *
     * @var TcfVendorListNormalizer
     */
    private $normalizer;
    /**
     * Cache of `getLatestVersions()`.
     *
     * @var int[]
     */
    private $latestVersions;
    /**
     * C'tor.
     *
     * @param TcfVendorListNormalizer $normalizer
     */
    public function __construct($normalizer)
    {
        $this->normalizer = $normalizer;
    }
    /**
     * Query all available declaration of the latest GVL and TCF policy version for the
     * current language. If the language does not exist for the current TCF version, let's
     * fallback to the default TCF version.
     *
     * Additional arguments:
     * - [`onlyReturnDeclarations`]: (boolean) Default to `false`, do not populate `gvlSpecificationVersion`, ...
     *
     * @param array $args Additional arguments, see description of `purposes`
     */
    public function allDeclarations($args = [])
    {
        $language = $args['language'] ?? $this->getCurrentLanguage();
        $onlyReturnDeclarations = $args['onlyReturnDeclarations'] ?? \false;
        $gvlSpecificationVersion = $args['gvlSpecificationVersion'] ?? null;
        $tcfPolicyVersion = $args['tcfPolicyVersion'] ?? null;
        // Query latest versions
        if ($gvlSpecificationVersion === null || $tcfPolicyVersion === null) {
            list($gvlSpecificationVersion, $tcfPolicyVersion) = $this->getLatestVersions();
        }
        // Query all declaration types
        $result = $onlyReturnDeclarations ? [] : ['gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion];
        foreach (Persist::DECLARATION_TYPES as $type) {
            $result[$type] = $this->declaration($type, ['language' => $language, 'gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion])[$type];
        }
        return $result;
    }
    /**
     * Query available declaration of the latest GVL and TCF policy version for the
     * current language. If the language does not exist for the current TCF version, let's
     * fallback to the default TCF version.
     *
     * A declaration can be purpose, features, special features and special purposes.
     *
     * Arguments:
     *
     * - [`gvlSpecificationVersion`]: (int) Default to latest
     * - [`tcfPolicyVersion`]: (int) Default to latest
     * - [`language`]: (string) Default to current
     *
     * @param string $type See `Persist::DECLARATION_TYPE_*` constants.
     * @param array $args Additional arguments, see description
     * @return array
     */
    public function declaration($type, $args = [])
    {
        global $wpdb;
        // Type does not exist, but we do not care, simply return an empty array
        if (!\in_array($type, Persist::DECLARATION_TYPES, \true)) {
            return [];
        }
        $table_name = $this->getNormalizer()->getTableName($type);
        $language = $args['language'] ?? $this->getCurrentLanguage();
        $gvlSpecificationVersion = $args['gvlSpecificationVersion'] ?? null;
        $tcfPolicyVersion = $args['tcfPolicyVersion'] ?? null;
        // Query latest versions
        if ($gvlSpecificationVersion === null || $tcfPolicyVersion === null) {
            list($gvlSpecificationVersion, $tcfPolicyVersion) = $this->getLatestVersions();
        }
        // Query purposes for current language
        // phpcs:disable WordPress.DB.PreparedSQL
        $rows = $wpdb->get_results($wpdb->prepare("SELECT *\n                FROM {$table_name}\n                WHERE language = %s\n                    AND gvlSpecificationVersion = %d\n                    AND tcfPolicyVersion = %d", $language, $gvlSpecificationVersion, $tcfPolicyVersion), ARRAY_A);
        // phpcs:enable WordPress.DB.PreparedSQL
        // If no queries found and it is not the default language, let's fallback to default language
        if (\count($rows) === 0 && $language !== Downloader::TCF_DEFAULT_LANGUAGE) {
            return $this->declaration($type, ['gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion, 'language' => Downloader::TCF_DEFAULT_LANGUAGE]);
        }
        $rows = $this->castReadDeclaration($rows);
        return ['gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion, $type => $rows];
    }
    /**
     * Query available stacks of the latest GVL and TCF policy version for the
     * current language. If the language does not exist for the current TCF version, let's
     * fallback to the default TCF version.
     *
     * Arguments:
     *
     * - [`gvlSpecificationVersion`]: (int) Default to latest
     * - [`tcfPolicyVersion`]: (int) Default to latest
     * - [`language`]: (string) Default to current
     *
     * @param array $args Additional arguments, see description
     * @return array
     */
    public function stacks($args = [])
    {
        global $wpdb;
        $table_name = $this->getNormalizer()->getTableName(Persist::TABLE_NAME_STACKS);
        $language = $args['language'] ?? $this->getCurrentLanguage();
        $gvlSpecificationVersion = $args['gvlSpecificationVersion'] ?? null;
        $tcfPolicyVersion = $args['tcfPolicyVersion'] ?? null;
        // Query latest versions
        if ($gvlSpecificationVersion === null || $tcfPolicyVersion === null) {
            list($gvlSpecificationVersion, $tcfPolicyVersion) = $this->getLatestVersions();
        }
        // Query purposes for current language
        // phpcs:disable WordPress.DB.PreparedSQL
        $rows = $wpdb->get_results($wpdb->prepare("SELECT *\n                FROM {$table_name}\n                WHERE language = %s\n                    AND gvlSpecificationVersion = %d\n                    AND tcfPolicyVersion = %d", $language, $gvlSpecificationVersion, $tcfPolicyVersion), ARRAY_A);
        // phpcs:enable WordPress.DB.PreparedSQL
        // If no queries found and it is not the default language, let's fallback to default language
        if (\count($rows) === 0 && $language !== Downloader::TCF_DEFAULT_LANGUAGE) {
            return $this->stacks(['gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion, 'language' => Downloader::TCF_DEFAULT_LANGUAGE]);
        }
        $rows = $this->castReadStacks($rows);
        return ['gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion, 'stacks' => $rows];
    }
    /**
     * Query all available vendors.
     *
     * Arguments:
     *
     * - [`in`]: (int[]) Only read this vendors (`WHERE IN`)
     * - [`gvlSpecificationVersion`]: (int) Default to latest
     * - [`tcfPolicyVersion`]: (int) Default to latest
     * - [`vendorListVersion`]: (int) Default to latest
     * - [`language`]: (string) Default to current
     *
     * @param array $args Additional arguments, see description
     * @return array
     */
    public function vendors($args = [])
    {
        global $wpdb;
        $table_name = $this->getNormalizer()->getTableName(Persist::TABLE_NAME_VENDORS);
        list($latestGvlSpecificationVersion, $latestTcfPolicyVersion, $latestVendorListVersion, ) = $this->getLatestVersions();
        $vendorListVersion = $args['vendorListVersion'] ?? $latestVendorListVersion;
        $gvlSpecificationVersion = $args['gvlSpecificationVersion'] ?? $latestGvlSpecificationVersion;
        $tcfPolicyVersion = $args['tcfPolicyVersion'] ?? $latestTcfPolicyVersion;
        $inSql = isset($args['in']) ? \sprintf('AND id IN (%s)', \join(',', \array_map('intval', $args['in']))) : '';
        // Query purposes for current language
        // phpcs:disable WordPress.DB.PreparedSQL
        $rows = $wpdb->get_results($wpdb->prepare("SELECT *\n                FROM {$table_name}\n                WHERE vendorListVersion = %d\n                    AND gvlSpecificationVersion = %d\n                    AND tcfPolicyVersion = %d\n                {$inSql}", $vendorListVersion, $gvlSpecificationVersion, $tcfPolicyVersion), ARRAY_A);
        // phpcs:enable WordPress.DB.PreparedSQL
        $rows = $this->castReadVendors($rows, $args);
        // We are reading all vendors in database, but when we do additionally `ORDER BY name ASC` this could lead to
        // the following error: "Out of sort memory, consider increasing server sort buffer size".
        // Instead of using `FROM $table_name FORCE INDEX (filters)`, we simply do not do any ordering as the
        // resulting array through `castReadVendors` is a non-index array.
        // See also https://chat.openai.com/share/704a0445-4d23-4d5b-8ef7-96217760bd92
        return ['vendorListVersion' => $vendorListVersion, 'gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion, 'vendors' => $rows];
    }
    /**
     * Query a vendor.
     *
     * Arguments:
     *
     * - [`vendorListVersion`]: (int) Default to latest
     * - [`gvlSpecificationVersion`]: (int) Default to latest
     * - [`tcfPolicyVersion`]: (int) Default to latest
     *
     * @param int $vendorId
     * @param array $args Additional arguments, see description
     * @return array
     */
    public function vendor($vendorId, $args = [])
    {
        global $wpdb;
        $table_name = $this->getNormalizer()->getTableName(Persist::TABLE_NAME_VENDORS);
        list($latestGvlSpecificationVersion, $latestTcfPolicyVersion, $latestVendorListVersion, ) = $this->getLatestVersions();
        $vendorListVersion = $args['vendorListVersion'] ?? $latestVendorListVersion;
        $gvlSpecificationVersion = $args['gvlSpecificationVersion'] ?? $latestGvlSpecificationVersion;
        $tcfPolicyVersion = $args['tcfPolicyVersion'] ?? $latestTcfPolicyVersion;
        // Query purposes for current language
        // phpcs:disable WordPress.DB.PreparedSQL
        $row = $wpdb->get_row($wpdb->prepare("SELECT *\n                FROM {$table_name}\n                WHERE vendorListVersion = %d\n                    AND gvlSpecificationVersion = %d\n                    AND tcfPolicyVersion = %d\n                AND id = %d\n                ORDER BY name ASC", $vendorListVersion, $gvlSpecificationVersion, $tcfPolicyVersion, $vendorId), ARRAY_A);
        // phpcs:enable WordPress.DB.PreparedSQL
        if (!\is_array($row)) {
            // Nothing found.
            return \false;
        }
        $casted = $this->castReadVendors([$row], $args);
        return \end($casted);
    }
    /**
     * Cast the read purposes to valid scheme objects.
     *
     * @param array $rows
     */
    protected function castReadDeclaration($rows)
    {
        $result = [];
        foreach ($rows as $row) {
            $newRow = ['id' => \intval($row['id']), 'name' => $row['name'], 'description' => $row['description'], 'illustrations' => \json_decode(empty($row['illustrations']) ? '[]' : $row['illustrations'], ARRAY_A)];
            $result[$row['id']] = $newRow;
        }
        return $result;
    }
    /**
     * Cast the read stacks to valid scheme objects.
     *
     * @param array $rows
     */
    protected function castReadStacks($rows)
    {
        $result = [];
        foreach ($rows as $row) {
            $newRow = ['id' => \intval($row['id']), 'name' => $row['name'], 'description' => $row['description']];
            // Explode purposes and features to array
            foreach (['purposes', 'specialFeatures'] as $purposeType) {
                $newRow[$purposeType] = \array_filter(\array_map('intval', \explode(',', $row[$purposeType])));
            }
            $result[$row['id']] = $newRow;
        }
        return $result;
    }
    /**
     * Cast the read vendors to valid scheme objects.
     *
     * @param array $rows
     * @param array $args
     */
    protected function castReadVendors($rows, $args)
    {
        $language = $args['language'] ?? $this->getCurrentLanguage();
        $result = [];
        foreach ($rows as &$row) {
            $newRow = ['id' => \intval($row['id']), 'name' => $row['name'], 'usesCookies' => \boolval($row['usesCookies']), 'cookieMaxAgeSeconds' => \intval($row['cookieMaxAgeSeconds']), 'cookieRefresh' => \boolval($row['cookieRefresh']), 'usesNonCookieAccess' => \boolval($row['usesNonCookieAccess'])];
            if (isset($row['deviceStorageDisclosureUrl'])) {
                $newRow['deviceStorageDisclosureUrl'] = $row['deviceStorageDisclosureUrl'];
            }
            if (isset($row['deviceStorageDisclosureViolation'])) {
                $newRow['deviceStorageDisclosureViolation'] = $row['deviceStorageDisclosureViolation'];
            }
            if (isset($row['deviceStorageDisclosure'])) {
                $newRow['deviceStorageDisclosure'] = \json_decode($row['deviceStorageDisclosure'], ARRAY_A);
            }
            if (isset($row['additionalInformation'])) {
                $newRow['additionalInformation'] = \json_decode($row['additionalInformation'], ARRAY_A);
                $newRow['additionalInformation'] = \array_merge(['name' => '', 'legalAddress' => '', 'contact' => '', 'territorialScope' => [], 'environments' => [], 'serviceTypes' => [], 'internationalTransfers' => \false, 'transferMechanisms' => []], $newRow['additionalInformation']);
            }
            if (isset($row['dataRetention'])) {
                $newRow['dataRetention'] = \json_decode($row['dataRetention'], ARRAY_A);
            }
            if (isset($row['urls'])) {
                // Only output current language vendors
                $allUrls = \json_decode($row['urls'], ARRAY_A);
                $newRow['urls'] = \array_filter($allUrls, function ($url) use($language) {
                    return $url['langId'] === $language;
                });
                if (\count($newRow['urls']) === 0) {
                    // Default to `en`
                    $newRow['urls'] = \array_filter($allUrls, function ($url) use($language) {
                        return $url['langId'] === 'en';
                    });
                    // Still not found? Use first URL
                    if (\count($newRow['urls']) === 0) {
                        $newRow['urls'] = [$allUrls[0]];
                    }
                }
                $newRow['urls'] = \array_values($newRow['urls']);
            }
            // Explode purposes and features to array
            foreach (['purposes', 'legIntPurposes', 'flexiblePurposes', 'specialPurposes', 'features', 'specialFeatures', 'dataDeclaration'] as $purposeType) {
                $newRow[$purposeType] = \array_filter(\array_map('intval', \explode(',', $row[$purposeType] ?? '')));
            }
            $result[$row['id']] = $newRow;
        }
        return $result;
    }
    /**
     * Get the latest GVL, TCF Policy and vendor list versions.
     */
    public function getLatestVersions()
    {
        global $wpdb;
        if ($this->latestVersions !== null) {
            return $this->latestVersions;
        }
        $table_name = $this->getNormalizer()->getTableName(Persist::TABLE_NAME_VENDORS);
        // phpcs:disable WordPress.DB.PreparedSQL
        $result = $wpdb->get_row("SELECT\n                (SELECT MAX(gvlSpecificationVersion) FROM {$table_name}) AS gvlSpecificationVersion,\n                (SELECT MAX(tcfPolicyVersion) FROM {$table_name}) AS tcfPolicyVersion,\n                MAX(v.vendorListVersion) AS vendorListVersion\n            FROM {$table_name} v\n            WHERE\n                v.gvlSpecificationVersion = (SELECT MAX(gvlSpecificationVersion) FROM {$table_name})\n                AND v.tcfPolicyVersion = (SELECT MAX(tcfPolicyVersion) FROM {$table_name});", ARRAY_A);
        // phpcs:enable WordPress.DB.PreparedSQL
        $result = \array_map('intval', \array_values($result));
        $this->latestVersions = $result;
        return $result;
    }
    /**
     * Get the current language which we need to query.
     */
    public function getCurrentLanguage()
    {
        $compLanguage = $this->getNormalizer()->getCompLanguage();
        return Downloader::sanitizeLanguageCode($compLanguage !== null && !$compLanguage instanceof None ? $compLanguage->getCurrentLanguage() : \get_locale());
    }
    /**
     * Check if a vendor is corrupt. This can happen when:
     *
     * - `deviceStorageDisclosureUrl` is set, but `deviceStorageDisclosure` isn't
     *
     * Arguments:
     *
     * - [`in`]: (int[]) Only read this vendors (`WHERE IN`)
     * - [`vendorListVersion`]: (int) Default to latest
     *
     * @param array $args Additional arguments, see description
     */
    public function hasDefectVendors($args = [])
    {
        global $wpdb;
        $table_name = $this->getNormalizer()->getTableName(Persist::TABLE_NAME_VENDORS);
        $vendorListVersion = $args['vendorListVersion'] ?? $this->getLatestVersions()[2];
        $inSql = isset($args['in']) ? \sprintf('AND id IN (%s)', \join(',', \array_map('intval', $args['in']))) : '';
        // Query purposes for current language
        // phpcs:disable WordPress.DB.PreparedSQL
        return \intval($wpdb->get_var($wpdb->prepare("SELECT COUNT(*)\n                    FROM {$table_name}\n                    WHERE vendorListVersion = %d\n                    AND deviceStorageDisclosureUrl IS NOT NULL\n                        AND deviceStorageDisclosure IS NULL\n                    {$inSql}", $vendorListVersion))) > 0;
        // phpcs:enable WordPress.DB.PreparedSQL
    }
    /**
     * When the TCF got updated, invalidate the caches for our next query.
     */
    public function invalidateCaches()
    {
        $this->latestVersions = null;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getNormalizer()
    {
        return $this->normalizer;
    }
}
