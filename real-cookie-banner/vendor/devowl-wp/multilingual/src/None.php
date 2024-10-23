<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual;

// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * No known plugin installed, fallback to this implementation.
 * @internal
 */
class None extends AbstractLanguagePlugin
{
    // Documented in AbstractSyncPlugin
    public function switch($locale)
    {
        // Silence is golden.
    }
    // Documented in AbstractLanguagePlugin
    public function getActiveLanguages()
    {
        return [];
    }
    // Documented in AbstractLanguagePlugin
    public function getLanguageSwitcher()
    {
        return [];
    }
    // Documented in AbstractLanguagePlugin
    public function getTranslatedName($locale)
    {
        require_once ABSPATH . 'wp-admin/includes/translation-install.php';
        $translations = \wp_get_available_translations();
        $activeTranslation = $translations[$locale] ?? null;
        return $locale === 'en_US' ? 'English (United States)' : ($activeTranslation === null ? $locale : $activeTranslation['native_name']);
    }
    // Documented in AbstractLanguagePlugin
    public function getCountryFlag($locale)
    {
        return \false;
    }
    // Documented in AbstractLanguagePlugin
    public function getPermalink($url, $locale)
    {
        return $url;
    }
    // Documented in AbstractLanguagePlugin
    public function getWordPressCompatibleLanguageCode($locale)
    {
        return $locale;
    }
    // Documented in AbstractLanguagePlugin
    public function getDefaultLanguage()
    {
        return '';
    }
    // Documented in AbstractLanguagePlugin
    public function getCurrentLanguage()
    {
        return '';
    }
    // Documented in AbstractSyncPlugin
    public function getOriginalPostId($id, $post_type)
    {
        return $id;
    }
    // Documented in AbstractSyncPlugin
    public function getOriginalTermId($id, $taxonomy)
    {
        return $id;
    }
    // Documented in AbstractLanguagePlugin
    public function getPostTranslationIds($id, $post_type)
    {
        return [];
    }
    // Documented in AbstractLanguagePlugin
    public function getTaxonomyTranslationIds($id, $taxonomy)
    {
        return [];
    }
    // Documented in AbstractSyncPlugin
    public function getCurrentPostId($id, $post_type, $locale = null)
    {
        return $id;
    }
    // Documented in AbstractSyncPlugin
    public function getCurrentTermId($id, $taxonomy, $locale = null)
    {
        return $id;
    }
    // Documented in AbstractOutputBufferPlugin
    public function getSkipHTMLForTag($force = \false)
    {
        return '';
    }
    // Documented in AbstractOutputBufferPlugin
    public function disableCopyAndSync($sync)
    {
        // Silence is golden.
    }
    // Documented in AbstractOutputBufferPlugin
    public function maybePersistTranslation($sourceContent, $content, $source, $locale)
    {
        // Silence is golden.
    }
    // Documented in AbstractOutputBufferPlugin
    public function isCurrentlyInEditorPreview()
    {
        return \false;
    }
    // Documented in AbstractOutputBufferPlugin
    public function translateStrings(&$content, $locale, $context = null)
    {
        return $content;
    }
}
