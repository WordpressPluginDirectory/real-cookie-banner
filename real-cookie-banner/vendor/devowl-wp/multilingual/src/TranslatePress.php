<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual;

use TRP_Languages;
use TRP_Query;
use TRP_Settings;
use TRP_Translate_Press;
use TRP_Translation_Manager;
use TRP_Translation_Render;
use TRP_Url_Converter;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * TranslatePress Output Buffering compatibility.
 *
 * @see https://translatepress.com/
 * @internal
 */
class TranslatePress extends AbstractOutputBufferPlugin
{
    const EDIT_QUERY_VAR = 'trp-edit-translation';
    private $pendingTranslations = [];
    private $useRawQueryForRead = \false;
    // Documented in AbstractLanguagePlugin
    public function __construct($domain, $moFile = null, $overrideClass = null)
    {
        parent::__construct($domain, $moFile, $overrideClass);
        \add_filter('trp_gettext_blacklist_functions', [$this, 'trp_gettext_blacklist_functions']);
    }
    /**
     * TranslatePress does automatically hook into the `__` and other localization functions at the
     * time of localizing a script through e.g. `wp_localize_script`. At this time, unwanted characters
     * are added to the translation. Due to the fact, our `translateString` supports MO/PO files, we can
     * skip this.
     *
     * @param string $methods
     */
    public function trp_gettext_blacklist_functions($methods)
    {
        $methods[] = 'overrideLocalizeScript';
        $methods[] = 'localizeScript';
        return $methods;
    }
    // Documented in AbstractOutputBufferPlugin
    public function maybePersistTranslation($sourceContent, $content, $sourceLocale, $targetLocale, $force = \false)
    {
        $this->pendingTranslations[$targetLocale][] = [$sourceContent, $content, $sourceLocale, $targetLocale, $force];
        // Also persist texturized version (https://i.imgur.com/hpAaZtB.png)
        $sourceTexturized = \wptexturize($sourceContent, \true);
        if ($sourceTexturized !== $sourceContent) {
            $this->pendingTranslations[$targetLocale][] = [$sourceTexturized, $content, $sourceLocale, $targetLocale, $force];
        }
        // Persist at the end of the WordPress session
        \add_action('shutdown', [$this, 'persistTranslations'], 1);
    }
    /**
     * Persist translations from `maybePersistTranslation`.
     */
    public function persistTranslations()
    {
        global $wpdb;
        $query = $this->getTrpQueryManager();
        $updatedOriginals = [];
        // Iterate all source translations and update them
        foreach ($this->pendingTranslations as $targetLocale => $strings) {
            $table_name = $query->get_table_name($targetLocale);
            // Read Ids for translations so we can update it
            $updates = [];
            foreach ([\true, \false] as $doForce) {
                $originals = [];
                foreach ($strings as $strings_row) {
                    list($sourceContent, , , $targetLocale, $force) = $strings_row;
                    if ($doForce !== $force) {
                        continue;
                    }
                    $originals[] = $wpdb->prepare('%s', $sourceContent);
                }
                if (\count($originals) === 0) {
                    continue;
                }
                // phpcs:disable WordPress.DB.PreparedSQL
                $result = $wpdb->get_results("SELECT id, original, `status` FROM {$table_name} WHERE original IN (" . \join(',', $originals) . ')', ARRAY_A);
                // phpcs:enable WordPress.DB.PreparedSQL
                foreach ($result as $row) {
                    $found_string_row = null;
                    foreach ($strings as $strings_row) {
                        if ($row['original'] === $strings_row[0]) {
                            $found_string_row = $strings_row;
                            break;
                        }
                    }
                    // Skip already translated strings when we do not force
                    $updatedOriginals[] = $row['original'];
                    if (!$doForce && \intval($row['status']) === 2) {
                        continue;
                    }
                    $updates[] = ['id' => \intval($row['id']), 'translated' => $found_string_row[1] === null ? '' : $found_string_row[1], 'status' => $found_string_row[1] === null ? 0 : 2, 'original' => $row['original']];
                }
            }
            $query->update_strings($updates, $targetLocale, ['id', 'original', 'translated', 'status']);
        }
        // Persist new translations
        $inserts = [];
        foreach ($this->pendingTranslations as $targetLocale => $strings) {
            $persisted = [];
            foreach ($strings as $strings_row) {
                list($sourceContent, $content, , $targetLocale) = $strings_row;
                if (\in_array($sourceContent, $updatedOriginals, \true) || $sourceContent === $content || empty($content) || empty($sourceContent)) {
                    continue;
                }
                $key = \md5($sourceContent . '|' . $targetLocale);
                if (\in_array($key, $persisted, \true)) {
                    continue;
                }
                $inserts[] = ['original' => $sourceContent, 'translated' => $content, 'status' => 2];
                $persisted[] = $key;
            }
            $query->update_strings($inserts, $targetLocale, ['original', 'translated', 'status']);
        }
        $this->pendingTranslations = [];
    }
    // Documented in AbstractSyncPlugin
    public function switch($locale)
    {
        global $TRP_LANGUAGE;
        // Check if the requested locale is active
        if (\is_string($locale)) {
            foreach ($this->getActiveLanguages() as $activeLocale) {
                if (\strtolower($activeLocale) === \strtolower($locale)) {
                    $TRP_LANGUAGE = $locale;
                    return;
                }
            }
        }
    }
    // Documented in AbstractLanguagePlugin
    public function getActiveLanguages()
    {
        return $this->getTrpSettingsManager()->get_setting('translation-languages');
    }
    // Documented in AbstractLanguagePlugin
    public function getLanguageSwitcher()
    {
        $result = [];
        if (\function_exists('trp_custom_language_switcher')) {
            $currentLanguage = $this->getCurrentLanguage();
            foreach (\trp_custom_language_switcher() as $row) {
                $result[] = ['name' => $row['language_name'], 'current' => $row['language_code'] === $currentLanguage, 'flag' => $row['flag_link'], 'url' => $row['current_page_url'], 'locale' => $row['language_code']];
            }
        }
        return $result;
    }
    // Documented in AbstractLanguagePlugin
    public function getTranslatedName($locale)
    {
        return $this->getTrpLanguageManager()->get_language_names([$locale])[$locale];
    }
    // Documented in AbstractLanguagePlugin
    public function getCountryFlag($locale)
    {
        $flags_path = \apply_filters('trp_flags_path', \constant('TRP_PLUGIN_URL') . 'assets/images/flags/', $locale);
        $flag_file_name = \apply_filters('trp_flag_file_name', $locale . '.png', $locale);
        return $flags_path . $flag_file_name;
    }
    // Documented in AbstractLanguagePlugin
    public function getPermalink($url, $locale)
    {
        $trp = TRP_Translate_Press::get_trp_instance();
        /**
         * Renderer
         *
         * @var TRP_Url_Converter
         */
        $converter = $trp->get_component('url_converter');
        // `get_permalink` and `home_url` should always work also within REST or admin requests
        $hasFilter = \has_filter('trp_add_language_to_home_url_check_for_admin', '__return_false');
        if (!$hasFilter) {
            \add_filter('trp_add_language_to_home_url_check_for_admin', '__return_false');
        }
        $result = $converter->get_url_for_language($locale, $url, '');
        if (!$hasFilter) {
            \remove_filter('trp_add_language_to_home_url_check_for_admin', '__return_false');
        }
        return $result;
    }
    // Documented in AbstractLanguagePlugin
    public function getWordPressCompatibleLanguageCode($locale)
    {
        // In TranslatePress the codes are all compatible with WordPress codes
        return $locale;
    }
    // Documented in AbstractLanguagePlugin
    public function getDefaultLanguage()
    {
        return $this->getTrpSettingsManager()->get_setting('default-language');
    }
    // Documented in AbstractLanguagePlugin
    public function getCurrentLanguage()
    {
        global $TRP_LANGUAGE;
        return $TRP_LANGUAGE;
    }
    // Documented in AbstractOutputBufferPlugin
    public function getSkipHTMLForTag($force = \false)
    {
        return $this->isCurrentlyInEditorPreview() && !$force ? '' : 'data-no-dynamic-translation';
    }
    // Documented in AbstractOutputBufferPlugin
    public function isCurrentlyInEditorPreview()
    {
        return isset($_GET[self::EDIT_QUERY_VAR]) && $_GET[self::EDIT_QUERY_VAR] === 'preview';
    }
    // Documented in AbstractOutputBufferPlugin
    public function translateInput($input, $context = null)
    {
        list($key, $value) = parent::translateInput($input, $context);
        $value = TRP_Translation_Manager::strip_gettext_tags($value);
        return [$key, $value];
    }
    /**
     * `translateStrings` but directly accessing the database instead of using the TranslatePress API.
     * You need to activate this explictely with `$this->setUseRawQueryForRead(true)`.
     *
     * @param string[] $content
     * @param string $locale
     */
    protected function translateStringsRawQuery(&$content, $locale)
    {
        global $wpdb;
        if (!$this->useRawQueryForRead) {
            return \false;
        }
        $query = $this->getTrpQueryManager();
        $table_name = $query->get_table_name($locale);
        // Read all requested strings
        $originals = [];
        foreach ($content as $string) {
            $originals[] = $wpdb->prepare('%s', $string);
        }
        if (\count($originals) === 0) {
            return \true;
        }
        // phpcs:disable WordPress.DB.PreparedSQL
        $result = $wpdb->get_results("SELECT original, translated FROM {$table_name} WHERE original IN (" . \join(',', $originals) . ') AND status <> 0', ARRAY_A);
        // phpcs:enable WordPress.DB.PreparedSQL
        foreach ($content as &$value) {
            foreach ($result as $translation) {
                if ($translation['original'] === $value) {
                    $value = $translation['translated'];
                }
            }
        }
        return \true;
    }
    /**
     * Get all strings which are translatable.
     *
     * @param string[] $content
     * @param boolean $skipTranslate If you pass `true`, no translation is done and only the strings are returned.
     *                               It additionally returns the 4th return array variable `$contentToTranslateableStringsMap` which maps the
     *                               original strings to the translatable strings.
     */
    protected function translateAndParseTranslateableStrings($content, $skipTranslate = \false)
    {
        $translateableStrings = [];
        $contentToTranslateableStringsMap = [];
        $translatedStrings = [];
        $fnTranslateableInformation = function ($translateable_strings, $translated_strings) use(&$translatedStrings) {
            $translatedStrings = $translated_strings;
        };
        $fnTranslateableStrings = function ($translateableInformation) use($skipTranslate, &$translateableStrings, &$contentToTranslateableStringsMap, &$content) {
            $translateableStrings = $translateableInformation['translateable_strings'];
            if ($skipTranslate) {
                // Make it empty so no translation is done and therefore no SQL query is executed
                $translateableInformation['translateable_strings'] = [];
            }
            if ($skipTranslate) {
                $this->mapInnerTextWithIdToOriginalString($translateableStrings, $content, $contentToTranslateableStringsMap);
                /* Does not work as `parent()` is not working as expected in TranslatePress, see also https://i.imgur.com/A18g4jD.png
                                foreach ($translateableInformation['nodes'] as $i => $node) {
                                    // Get the ID of `wrapArrayToHtml` so we can remap translatable strings to the correct original string
                                    if (!is_numeric($node['node']->parent()->attr['id'])) {
                                        continue;
                                    }
                
                                    $wrappedId = intval($node['node']->parent()->attr['id']);
                
                                    $contentString = $content[$wrappedId];
                                    $contentToTranslateableStringsMap[$contentString] = $contentToTranslateableStringsMap[$contentString] ?? [];
                                    $contentToTranslateableStringsMap[$contentString][] = $translateableStrings[$i];
                                }
                
                                // Fix non-found strings
                                foreach ($content as $contentString) {
                                    if (!is_array($contentToTranslateableStringsMap[$contentString])) {
                                        $contentToTranslateableStringsMap[$contentString] = [$contentString];
                                    }
                                }*/
            }
            return $translateableInformation;
        };
        \add_action('trp_translateable_information', $fnTranslateableInformation, 10, 2);
        \add_action('trp_translateable_strings', $fnTranslateableStrings, 10, 1);
        $result = $this->wrapHtmlToArray($this->getTrpRenderManager()->translate_page($this->wrapArrayToHtml($content, $skipTranslate)), [TRP_Translation_Manager::class, 'strip_gettext_tags']);
        \remove_action('trp_translateable_information', $fnTranslateableInformation);
        \remove_action('trp_translateable_strings', $fnTranslateableStrings);
        return $skipTranslate ? [$translateableStrings, $contentToTranslateableStringsMap] : [$translateableStrings, $translatedStrings, $result];
    }
    // Documented in AbstractOutputBufferPlugin
    public function translateStrings(&$content, $locale, $context = null)
    {
        global $wp_current_filter;
        if (!$this->isCurrentlyInEditorPreview()) {
            $currentLanguage = $this->getCurrentLanguage();
            if ($this->translateStringsRawQuery($content, $locale) !== \false) {
                return;
            }
            if ($locale !== null) {
                $this->switch($locale);
            }
            // Make hacky things: Simulate the `rest_prepare_` filter so we can force always to translate
            \array_push($wp_current_filter, 'rest_prepare_force_output_buffer_plugin');
            $contentCount = $this->addWptexturizeToContent($content);
            /**
             * Try to find a translation from our MO file for each found "part" which TranslatePress finds before
             * trying to translate the complete HTML. Example: Multiline text with `<br><br>` as paragraph delimiter.
             */
            list($translateableStrings, $translatedStrings, $result) = $this->translateAndParseTranslateableStrings($content);
            // Translate each found part within a translatable text from our MO
            $foundTranslationFromMoForPart = \false;
            foreach ($translateableStrings as $idx => $translateableString) {
                // Is the string still untranslated?
                if (!isset($translatedStrings[$idx])) {
                    list($found) = $this->translateStringFromMo($translateableString, $locale, $context);
                    if ($found) {
                        $foundTranslationFromMoForPart = \true;
                    }
                }
            }
            // If we found a part within a translatable text, persist the translations and translate again
            if ($foundTranslationFromMoForPart) {
                $this->persistTranslations();
                list(, , $result) = $this->translateAndParseTranslateableStrings($content);
            }
            $this->remapWptexturizeFromContent($contentCount, $content, $result);
            $this->remapResultToReference($content, $result, $locale, $context);
            if ($locale !== null) {
                $this->switch($currentLanguage);
            }
            \array_pop($wp_current_filter);
        }
    }
    // Documented in AbstractLanguagePlugin
    public function translatableStrings($content)
    {
        if (\count($content) === 0) {
            return [];
        }
        // Switch to non-default language so we can get the correct translatable strings
        $currentLanguage = $this->getCurrentLanguageFallback();
        $defaultLanguage = $this->getDefaultLanguage();
        $activeLanguages = $this->getActiveLanguages();
        $firstNonDefaultLanguage = \array_values(\array_diff($activeLanguages, [$defaultLanguage]))[0] ?? null;
        if ($firstNonDefaultLanguage !== null) {
            $this->switch($firstNonDefaultLanguage);
        }
        list(, $contentToTranslateableStringsMap) = $this->translateAndParseTranslateableStrings($content, \true);
        if ($firstNonDefaultLanguage !== null) {
            $this->switch($currentLanguage);
        }
        return $contentToTranslateableStringsMap;
    }
    /**
     * Get TranslatePress render manager class.
     */
    public function getTrpRenderManager()
    {
        $trp = TRP_Translate_Press::get_trp_instance();
        /**
         * Renderer
         *
         * @var TRP_Translation_Render
         */
        $render = $trp->get_component('translation_render');
        return $render;
    }
    /**
     * Get TranslatePress settings manager class.
     */
    public function getTrpSettingsManager()
    {
        $trp = TRP_Translate_Press::get_trp_instance();
        /**
         * Renderer
         *
         * @var TRP_Settings
         */
        $settings = $trp->get_component('settings');
        return $settings;
    }
    /**
     * Get TranslatePress language manager class.
     */
    public function getTrpLanguageManager()
    {
        $trp = TRP_Translate_Press::get_trp_instance();
        /**
         * Renderer
         *
         * @var TRP_Languages
         */
        $languages = $trp->get_component('languages');
        return $languages;
    }
    /**
     * Get TranslatePress query manager class.
     */
    public function getTrpQueryManager()
    {
        $trp = TRP_Translate_Press::get_trp_instance();
        /**
         * Renderer
         *
         * @var TRP_Query
         */
        $languages = $trp->get_component('query');
        return $languages;
    }
    /**
     * Enable this if you want to bypass the TranslatePress API and directly use the TranslatePress
     * database tables for reading translations. This could improve performance significantely but
     * keep in mind that this does also skip gettext mechanism.
     *
     * This also skips the parsing of the passed string, when it is e.g. a HTML and paragraphs are split
     * into multiple translations. So, make sure that the passed original strings to `translateArray` are
     * standalone strings (e.g. URLs).
     *
     * @param boolean $state
     * @codeCoverageIgnore
     */
    public function setUseRawQueryForRead($state)
    {
        $this->useRawQueryForRead = $state;
    }
    /**
     * Check if TranslatePress is active. We also need to check for XML availability cause we need
     * to workaround this a bit (object to xml -> translate -> reverse).
     */
    public static function isPresent()
    {
        return \is_plugin_active('translatepress-multilingual/index.php') && \class_exists('SimpleXMLElement');
    }
}
