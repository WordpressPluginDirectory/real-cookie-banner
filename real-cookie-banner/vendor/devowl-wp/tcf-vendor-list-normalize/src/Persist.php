<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\TcfVendorListNormalize;

/**
 * Persist an array of `vendor-list.json` to the database.
 * @internal
 */
class Persist
{
    const TABLE_NAME = 'tcf';
    const TABLE_NAME_VENDORS = 'vendors';
    const TABLE_NAME_STACKS = 'stacks';
    const DECLARATION_TYPE_PURPOSES = 'purposes';
    const DECLARATION_TYPE_SPECIAL_PURPOSES = 'specialPurposes';
    const DECLARATION_TYPE_FEATURES = 'features';
    const DECLARATION_TYPE_SPECIAL_FEATURES = 'specialFeatures';
    const DECLARATION_TYPE_DATA_CATEGORIES = 'dataCategories';
    const DECLARATION_TYPES = [self::DECLARATION_TYPE_PURPOSES, self::DECLARATION_TYPE_SPECIAL_PURPOSES, self::DECLARATION_TYPE_FEATURES, self::DECLARATION_TYPE_SPECIAL_FEATURES, self::DECLARATION_TYPE_DATA_CATEGORIES];
    /**
     * Fields which should be updated via `ON DUPLICATE KEY UPDATE`.
     */
    const DECLARATION_OVERWRITE_FIELDS = ['name', 'description', 'illustrations'];
    const VENDOR_OVERWRITE_FIELDS = ['name', 'purposes', 'legIntPurposes', 'flexiblePurposes', 'specialPurposes', 'features', 'specialFeatures', 'usesCookies', 'cookieMaxAgeSeconds', 'cookieRefresh', 'usesNonCookieAccess', 'deviceStorageDisclosureUrl', 'deviceStorageDisclosureViolation', 'deviceStorageDisclosure', 'additionalInformation', 'dataRetention', 'dataDeclaration', 'urls'];
    const STACKS_OVERWRITE_FIELDS = ['name', 'description', 'purposes', 'specialFeatures'];
    /**
     * The normalizer.
     *
     * @var TcfVendorListNormalizer
     */
    private $normalizer;
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
     * Clear all the database tables.
     */
    public function clear()
    {
        global $wpdb;
        $tables = \array_merge(self::DECLARATION_TYPES, [self::TABLE_NAME_VENDORS]);
        foreach ($tables as $table) {
            $table_name = $this->getNormalizer()->getTableName($table);
            // phpcs:disable WordPress.DB.PreparedSQL
            $wpdb->query("DELETE FROM {$table_name}");
            // phpcs:enable WordPress.DB.PreparedSQL
        }
    }
    /**
     * Parse `vendor-list.json`, normalize vendors and push it up to the database.
     * This function does not persist purposes and features!
     *
     * @param array $vendorList Passed as reference to avoid memory leaks
     */
    public function normalizeVendors(&$vendorList)
    {
        global $wpdb;
        $vendorListVersion = $vendorList['vendorListVersion'];
        $gvlSpecificationVersion = $vendorList['gvlSpecificationVersion'];
        $tcfPolicyVersion = $vendorList['tcfPolicyVersion'];
        // Prepare all rows as `VALUES` string
        $rows = [];
        foreach ($vendorList['vendors'] as $vendor) {
            // Generate SQL
            // phpcs:disable WordPress.DB.PreparedSQL
            $rows[] = $wpdb->prepare('%d, %d, %d, %d, %s, %s, %s, %s, %s, %s, %s, %d, %d, %d, %d, %s, %s, %s, %s, %s, %s, %s', $gvlSpecificationVersion, $tcfPolicyVersion, $vendorListVersion, $vendor['id'], $vendor['name'], \join(',', $vendor['purposes']), \join(',', $vendor['legIntPurposes']), \join(',', $vendor['flexiblePurposes']), \join(',', $vendor['specialPurposes']), \join(',', $vendor['features']), \join(',', $vendor['specialFeatures']), isset($vendor['usesCookies']) ? $vendor['usesCookies'] ? '1' : '0' : 'NULL', $vendor['cookieMaxAgeSeconds'] ?? 'NULL', isset($vendor['cookieRefresh']) ? $vendor['cookieRefresh'] ? '1' : '0' : 'NULL', isset($vendor['usesNonCookieAccess']) ? $vendor['usesNonCookieAccess'] ? '1' : '0' : 'NULL', $vendor['deviceStorageDisclosureUrl'] ?? 'NULL', $vendor['deviceStorageDisclosureViolation'] ?? 'NULL', isset($vendor['deviceStorageDisclosure']) ? \json_encode($vendor['deviceStorageDisclosure']) : 'NULL', isset($vendor['additionalInformation']) ? \json_encode($vendor['additionalInformation']) : 'NULL', isset($vendor['dataRetention']) ? \json_encode($vendor['dataRetention']) : 'NULL', \join(',', $vendor['dataDeclaration'] ?? []), isset($vendor['urls']) ? \json_encode($vendor['urls']) : 'NULL');
            // phpcs:enable WordPress.DB.PreparedSQL
        }
        $this->persistVendors($rows);
    }
    /**
     * Parse `vendor-list.json`, normalize purposes and features and push it up to the database.
     * This function does not persist vendors!
     *
     * @param string $language
     * @param array $vendorList Passed as reference to avoid memory leaks
     * @param array $translation Passed as reference to avoid memory leaks
     */
    public function normalizeDeclarations($language, &$vendorList, &$translation)
    {
        global $wpdb;
        $gvlSpecificationVersion = $vendorList['gvlSpecificationVersion'];
        $tcfPolicyVersion = $vendorList['tcfPolicyVersion'];
        foreach (self::DECLARATION_TYPES as $declarationType) {
            $purposes = $vendorList[$declarationType];
            $purposesTranslations = $translation[$declarationType] ?? [];
            // Prepare all rows as `VALUES` string
            $rows = [];
            foreach ($purposes as $idx => $purpose) {
                $purposeTranslation = $purposesTranslations[$idx] ?? [];
                // Generate row with translated content
                $row = \array_merge(['gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion, 'id' => $purpose['id'], 'language' => $language, 'name' => $purpose['name'], 'description' => $purpose['description'], 'illustrations' => isset($purpose['illustrations']) ? \json_encode($purpose['illustrations']) : '[]'], $purposeTranslation);
                // Fix `$purposeTranslation` as `illustrations` could be an array and this is not allowed in `$wpdb->prepare`
                foreach ($row as &$val) {
                    if (\is_array($val)) {
                        $val = \json_encode($val);
                    }
                }
                // Generate SQL
                // phpcs:disable WordPress.DB.PreparedSQL
                $rows[] = $wpdb->prepare('%d, %d, %d, %s, %s, %s, %s', $row['gvlSpecificationVersion'], $row['tcfPolicyVersion'], $row['id'], $row['language'], $row['name'], $row['description'], $row['illustrations']);
                // phpcs:enable WordPress.DB.PreparedSQL
            }
            $this->persistDeclaration($declarationType, $rows);
        }
    }
    /**
     * Parse `vendor-list.json`, normalize stacks and push it up to the database.
     *
     * @param string $language
     * @param array $vendorList Passed as reference to avoid memory leaks
     * @param array $translation Passed as reference to avoid memory leaks
     */
    public function normalizeStacks($language, &$vendorList, &$translation)
    {
        global $wpdb;
        $gvlSpecificationVersion = $vendorList['gvlSpecificationVersion'];
        $tcfPolicyVersion = $vendorList['tcfPolicyVersion'];
        $stacks = $vendorList['stacks'];
        $stacksTranslations = $translation['stacks'] ?? [];
        // Prepare all rows as `VALUES` string
        $rows = [];
        foreach ($stacks as $idx => $stack) {
            $stackTranslation = $stacksTranslations[$idx] ?? [];
            // Generate row with translated content
            $row = \array_merge(['gvlSpecificationVersion' => $gvlSpecificationVersion, 'tcfPolicyVersion' => $tcfPolicyVersion, 'id' => $stack['id'], 'language' => $language, 'name' => $stack['name'], 'description' => $stack['description'], 'purposes' => $stack['purposes'], 'specialFeatures' => $stack['specialFeatures']], $stackTranslation);
            // Generate SQL
            // phpcs:disable WordPress.DB.PreparedSQL
            $rows[] = $wpdb->prepare('%d, %d, %d, %s, %s, %s, %s, %s', $row['gvlSpecificationVersion'], $row['tcfPolicyVersion'], $row['id'], $row['language'], $row['name'], $row['description'], \join(',', $row['purposes']), \join(',', $row['specialFeatures']));
            // phpcs:enable WordPress.DB.PreparedSQL
        }
        $this->persistStacks($rows);
    }
    /**
     * Persist an array of rows to the database.
     *
     * @param string $declarationType See `self::DECLARATION_TYPES`
     * @param string[] $rows
     */
    protected function persistDeclaration($declarationType, &$rows)
    {
        global $wpdb;
        if (\count($rows) === 0) {
            return;
        }
        // Allow to update fields if already exists
        $overwriteSql = [];
        $fieldsSql = \join(',', ['gvlSpecificationVersion', 'tcfPolicyVersion', 'id', 'language', 'name', 'description', 'illustrations']);
        foreach (self::DECLARATION_OVERWRITE_FIELDS as $field) {
            $overwriteSql[] = \sprintf('%1$s=VALUES(%1$s)', $field);
        }
        // Chunk to boost performance
        $chunks = \array_chunk($rows, 150);
        $table_name = $this->getNormalizer()->getTableName($declarationType);
        foreach ($chunks as $sqlInsert) {
            $sql = "INSERT INTO {$table_name} ({$fieldsSql}) VALUES (" . \implode('),(', $sqlInsert) . ') ON DUPLICATE KEY UPDATE ' . \join(', ', $overwriteSql);
            // phpcs:disable WordPress.DB.PreparedSQL
            $wpdb->query($sql);
            // phpcs:enable WordPress.DB.PreparedSQL
        }
    }
    /**
     * Persist an array of rows to the database.
     *
     * @param string[] $rows
     */
    protected function persistVendors(&$rows)
    {
        global $wpdb;
        if (\count($rows) === 0) {
            return;
        }
        // Allow to update fields if already exists
        $overwriteSql = [];
        $fieldsSql = \join(',', ['gvlSpecificationVersion', 'tcfPolicyVersion', 'vendorListVersion', 'id', 'name', 'purposes', 'legIntPurposes', 'flexiblePurposes', 'specialPurposes', 'features', 'specialFeatures', 'usesCookies', 'cookieMaxAgeSeconds', 'cookieRefresh', 'usesNonCookieAccess', 'deviceStorageDisclosureUrl', 'deviceStorageDisclosureViolation', 'deviceStorageDisclosure', 'additionalInformation', 'dataRetention', 'dataDeclaration', 'urls']);
        foreach (self::VENDOR_OVERWRITE_FIELDS as $field) {
            $overwriteSql[] = \sprintf('%1$s=VALUES(%1$s)', $field);
        }
        // Chunk to boost performance
        $chunks = \array_chunk($rows, 150);
        $table_name = $this->getNormalizer()->getTableName(self::TABLE_NAME_VENDORS);
        foreach ($chunks as $sqlInsert) {
            $sql = \str_ireplace("'NULL'", 'NULL', "INSERT INTO {$table_name} ({$fieldsSql}) VALUES (" . \implode('),(', $sqlInsert) . ') ON DUPLICATE KEY UPDATE ' . \join(', ', $overwriteSql));
            // phpcs:disable WordPress.DB.PreparedSQL
            $wpdb->query($sql);
            // phpcs:enable WordPress.DB.PreparedSQL
        }
    }
    /**
     * Persist an array of rows to the database.
     *
     * @param string[] $rows
     */
    protected function persistStacks(&$rows)
    {
        global $wpdb;
        if (\count($rows) === 0) {
            return;
        }
        // Allow to update fields if already exists
        $overwriteSql = [];
        $fieldsSql = \join(',', ['gvlSpecificationVersion', 'tcfPolicyVersion', 'id', 'language', 'name', 'description', 'purposes', 'specialFeatures']);
        foreach (self::STACKS_OVERWRITE_FIELDS as $field) {
            $overwriteSql[] = \sprintf('%1$s=VALUES(%1$s)', $field);
        }
        // Chunk to boost performance
        $chunks = \array_chunk($rows, 150);
        $table_name = $this->getNormalizer()->getTableName(self::TABLE_NAME_STACKS);
        foreach ($chunks as $sqlInsert) {
            $sql = "INSERT INTO {$table_name} ({$fieldsSql}) VALUES (" . \implode('),(', $sqlInsert) . ') ON DUPLICATE KEY UPDATE ' . \join(', ', $overwriteSql);
            // phpcs:disable WordPress.DB.PreparedSQL
            $wpdb->query($sql);
            // phpcs:enable WordPress.DB.PreparedSQL
        }
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
