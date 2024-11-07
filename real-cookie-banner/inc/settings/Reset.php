<?php

namespace DevOwl\RealCookieBanner\settings;

use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\AbstractOutputBufferPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\AbstractSyncPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\Multilingual\Weglot;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\comp\language\Hooks;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\lite\settings\TcfVendorConfiguration;
use DevOwl\RealCookieBanner\lite\view\customize\banner\TcfTexts;
use DevOwl\RealCookieBanner\scanner\AutomaticScanStarter;
use DevOwl\RealCookieBanner\scanner\Persist;
use DevOwl\RealCookieBanner\scanner\Scanner;
use DevOwl\RealCookieBanner\templates\TemplateConsumers;
use DevOwl\RealCookieBanner\UserConsent;
use DevOwl\RealCookieBanner\Utils;
use DevOwl\RealCookieBanner\view\customize\banner\CookiePolicy;
use DevOwl\RealCookieBanner\view\customize\banner\Texts;
use DevOwl\RealCookieBanner\view\customize\banner\individual\Texts as IndividualTexts;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Allows to reset all data of RCB including cookies, options, and cookie groups.
 * @internal
 */
class Reset
{
    use UtilsProvider;
    const CUSTOMIZER_TEXTS = [Texts::SETTING_HEADLINE, Texts::SETTING_DESCRIPTION, Texts::SETTING_ACCEPT_ALL, Texts::SETTING_ACCEPT_ESSENTIALS, Texts::SETTING_ACCEPT_INDIVIDUAL, Texts::SETTING_DATA_PROCESSING_IN_UNSAFE_COUNTRIES, Texts::SETTING_AGE_NOTICE, Texts::SETTING_AGE_NOTICE_BLOCKER, Texts::SETTING_LIST_SERVICES_NOTICE, Texts::SETTING_LIST_LEGITIMATE_INTEREST_SERVICES_NOTICE, Texts::SETTING_CONSENT_FORWARDING, Texts::SETTING_BLOCKER_HEADLINE, Texts::SETTING_BLOCKER_LINK_SHOW_MISSING, Texts::SETTING_BLOCKER_LOAD_BUTTON, Texts::SETTING_BLOCKER_ACCEPT_INFO, Texts::SETTING_STICKY_CHANGE, Texts::SETTING_STICKY_HISTORY, Texts::SETTING_STICKY_REVOKE, Texts::SETTING_STICKY_REVOKE_SUCCESS_MESSAGE, IndividualTexts::SETTING_HEADLINE, IndividualTexts::SETTING_DESCRIPTION, IndividualTexts::SETTING_SAVE, IndividualTexts::SETTING_SHOW_MORE, IndividualTexts::SETTING_HIDE_MORE, IndividualTexts::SETTING_POSTAMBLE, CookiePolicy::SETTING_INSTRUCTION, CookiePolicy::SETTING_HEADLINE_TABLE_OF_CONTENTS, CookiePolicy::SETTING_HEADLINE_CONTROLLER_OF_WEBSITE, CookiePolicy::SETTING_HEADLINE_DIFF_TO_PRIVACY_POLICY, CookiePolicy::SETTING_HEADLINE_COOKIE_TECHNOLOGY, CookiePolicy::SETTING_HEADLINE_LEGAL_BASIS, CookiePolicy::SETTING_HEADLINE_RIGHTS_OF_THE_VISITOR, CookiePolicy::SETTING_HEADLINE_MANAGE_COOKIES, CookiePolicy::SETTING_HEADLINE_TYPES_OF_COOKIES, CookiePolicy::SETTING_HEADLINE_COOKIE_ORIGIN, CookiePolicy::SETTING_HEADLINE_LIST_OF_SERVICES, CookiePolicy::SETTING_DIFF_TO_PRIVACY_POLICY, CookiePolicy::SETTING_COOKIE_TECHNOLOGY, CookiePolicy::SETTING_LEGAL_BASIS_GDPR, CookiePolicy::SETTING_LEGAL_BASIS_DSG, CookiePolicy::SETTING_RIGHTS_OF_THE_VISITOR, CookiePolicy::SETTING_MANAGE_COOKIES, CookiePolicy::SETTING_TYPES_OF_COOKIES, CookiePolicy::SETTING_COOKIE_ORIGIN, CookiePolicy::SETTING_ADDITIONAL_CONTENT];
    /**
     * Singleton instance.
     *
     * @var Reset
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
     * Reset texts for customizer, service groups, services and content blockers.
     *
     * @param string[] $languages
     * @param string[] $dry Pass an empty array. Then, no text is reset the array gets filled with languages which have translations available to reset
     */
    public function texts($languages = null, &$dry = null)
    {
        $compLanguage = Core::getInstance()->getCompLanguage();
        $activeLanguages = $compLanguage->getActiveLanguages();
        $defaultLanguage = $compLanguage->getDefaultLanguage();
        $defaultLanguageWpCompatible = $compLanguage->getWordPressCompatibleLanguageCode($defaultLanguage);
        $requiredLanguages = [];
        if (\count($activeLanguages) === 0) {
            // Non multilingual plugins currently in use, so we use the current locale
            $activeLanguages[] = \get_locale();
            $requiredLanguages[] = $activeLanguages[0];
        }
        // Deactivate sync mechanism
        $sync = $compLanguage->getSync();
        if ($sync !== null) {
            $sync->disable();
        }
        if ($languages === null) {
            $languages = $activeLanguages;
        } else {
            $languages = \array_intersect($languages, $activeLanguages);
        }
        if ($compLanguage instanceof AbstractOutputBufferPlugin) {
            $requiredLanguages[] = $defaultLanguage;
            if (!\in_array($defaultLanguage, $languages, \true)) {
                // For e.g. TranslatePress we need to update the default language, too, so we can map the new translations accordingly with source -> target locale
                $languages[] = $defaultLanguage;
            }
        }
        // Read all available languages as this is relevant for texts which are translated from the POT file
        $potLanguages = $compLanguage->filterWithExistingTranslatedTextDomain($languages, Hooks::MINIMAL_TRANSLATION_CODES);
        $potLanguagesWithoutDefaultLanguage = \array_values(\array_diff($potLanguages, [$defaultLanguage]));
        $result = ['customizer' => [], 'serviceGroups' => [], 'services' => [], 'blockers' => [], 'resetTranslationPairs' => []];
        // Reset the texts for all requested languages
        if ($dry === null) {
            $result['customizer'] = $this->textsCustomizer($languages, $result['resetTranslationPairs']);
        } else {
            // Types which are translated from the POT file
            $dry = $potLanguages;
        }
        $fnPerLanguage = function ($locale, $currentLanguage) use(&$result, $languages, $defaultLanguage, $defaultLanguageWpCompatible, $potLanguages, $potLanguagesWithoutDefaultLanguage, &$dry) {
            // Check if we have texts for this language and request to delete it
            $found = \false;
            foreach ($languages as $langToDelete) {
                if (Utils::startsWith(\strtolower($locale), \strtolower($langToDelete))) {
                    $found = \true;
                    break;
                }
            }
            if (!$found) {
                return;
            }
            $resetTranslationPairsForLanguages = $locale === $defaultLanguage ? $potLanguagesWithoutDefaultLanguage : [];
            if ($dry === null && \in_array($locale, $potLanguages, \true)) {
                $result['serviceGroups'][$locale] = $this->textsServiceGroups($result['resetTranslationPairs'], $resetTranslationPairsForLanguages);
            }
            $result['services'][$locale] = $this->textsGenericTemplates($languages, \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME, [\DevOwl\RealCookieBanner\settings\Cookie::META_NAME_PROVIDER, \DevOwl\RealCookieBanner\settings\Cookie::META_NAME_PROVIDER_CONTACT_PHONE, \DevOwl\RealCookieBanner\settings\Cookie::META_NAME_PROVIDER_CONTACT_EMAIL, \DevOwl\RealCookieBanner\settings\Cookie::META_NAME_PROVIDER_CONTACT_LINK, \DevOwl\RealCookieBanner\settings\Cookie::META_NAME_PROVIDER_PRIVACY_POLICY_URL, \DevOwl\RealCookieBanner\settings\Cookie::META_NAME_PROVIDER_LEGAL_NOTICE_URL], $result['resetTranslationPairs'], $defaultLanguageWpCompatible, $dry);
            $result['blockers'][$locale] = $this->textsGenericTemplates($languages, \DevOwl\RealCookieBanner\settings\Blocker::CPT_NAME, [\DevOwl\RealCookieBanner\settings\Blocker::META_NAME_VISUAL_HERO_BUTTON_TEXT], $result['resetTranslationPairs'], $defaultLanguageWpCompatible, $dry);
        };
        if ($compLanguage instanceof AbstractSyncPlugin) {
            // Only sync-plugins create clones
            $compLanguage->iterateAllLanguagesContext($fnPerLanguage);
        } elseif ($compLanguage instanceof AbstractOutputBufferPlugin) {
            $compLanguage->switchToLanguage($defaultLanguage, function () use($fnPerLanguage, $defaultLanguage) {
                $fnPerLanguage($defaultLanguage, null);
            });
        } else {
            $fnPerLanguage(\get_locale(), null);
        }
        // Persist translations for output buffer plugins
        if ($compLanguage instanceof AbstractOutputBufferPlugin && $dry === null) {
            // Collect translatable strings for output buffer plugins so we can reset them, too
            $translatableStrings = [];
            foreach ($result['resetTranslationPairs'] as $locale => $texts) {
                foreach ($texts as $text) {
                    $translatableStrings[] = $text;
                }
            }
            $translatableStrings = \array_unique($translatableStrings);
            $translatableStrings = $compLanguage->translatableStrings($translatableStrings);
            foreach ($result['resetTranslationPairs'] as $locale => &$texts) {
                $compLanguage->switchToLanguage($locale, function () use($locale, $texts, $compLanguage, $defaultLanguage, $translatableStrings) {
                    foreach ($texts as $text) {
                        $compLanguage->maybePersistTranslation($text, null, $defaultLanguage, $locale, \true);
                        if (isset($translatableStrings[$text])) {
                            foreach ($translatableStrings[$text] as $translation) {
                                $compLanguage->maybePersistTranslation($translation, null, $defaultLanguage, $locale, \true);
                            }
                        }
                    }
                });
            }
        }
        if ($sync !== null) {
            $sync->enable();
        }
        if ($dry !== null) {
            $dry = \array_map(function ($lang) use($compLanguage, $requiredLanguages, $defaultLanguage) {
                $name = $compLanguage->getTranslatedName($lang);
                return ['name' => $name, 'code' => $lang, 'isRequired' => \in_array($lang, $requiredLanguages, \true), 'isDisabled' => $compLanguage instanceof Weglot, 'notice' => $compLanguage instanceof Weglot && $lang !== $defaultLanguage ? \sprintf(
                    // translators:
                    \__('Your multilingual plugin Weglot does currently not support resetting texts for %s.', RCB_TD),
                    $name
                ) : null];
            }, $compLanguage instanceof Weglot ? \array_unique(\array_merge($activeLanguages, $dry)) : $dry);
        }
        return $result;
    }
    /**
     * Reset customizer texts.
     *
     * @param string[] $languages
     * @param string[] $resetTranslationPairs
     */
    protected function textsCustomizer($languages, &$resetTranslationPairs)
    {
        $compLanguage = Core::getInstance()->getCompLanguage();
        $defaultLanguage = $compLanguage->getDefaultLanguage();
        $deletedOptionsTexts = [];
        $optionNames = \array_merge(self::CUSTOMIZER_TEXTS, $this->isPro() ? [TcfTexts::SETTING_STACKS_CUSTOM_DESCRIPTION, TcfTexts::SETTING_STACKS_CUSTOM_NAME] : []);
        foreach ($optionNames as $optionName) {
            // Always delete the original option, the following cases are covered by this option:
            // - No multilingual plugin in use
            // - The default language of a output buffer multilingual plugin like TranslatePress
            if (\delete_option($optionName)) {
                $deletedOptionsTexts[] = $optionName;
            }
            // Prepare a list of all languages so we can also delete options for `LanguageDependingOption`
            if ($compLanguage instanceof AbstractSyncPlugin) {
                foreach ($languages as $lang) {
                    $optionNameWithSuffix = $optionName . '-' . $lang;
                    if (\delete_option($optionNameWithSuffix)) {
                        $deletedOptionsTexts[] = $optionNameWithSuffix;
                    }
                }
            }
        }
        // Persist translations for output buffer plugins
        if ($compLanguage instanceof AbstractOutputBufferPlugin) {
            $bannerCustomize = Core::getInstance()->getBanner()->getCustomize();
            foreach ($optionNames as $optionName) {
                $setting = $bannerCustomize->getSetting($optionName);
                foreach ($languages as $locale) {
                    if ($locale !== $defaultLanguage) {
                        $resetTranslationPairs[$locale] = $resetTranslationPairs[$locale] ?? [];
                        $resetTranslationPairs[$locale][] = $setting;
                    }
                }
            }
        }
        return $deletedOptionsTexts;
    }
    /**
     * Reset service groups texts for the current running context.
     *
     * @param string[] $resetTranslationPairs
     * @param string[] $persistForLanguages A set of languages for which the translations should be persisted in `$resetTranslationPairs`, this is
     *                                      only relevant for output buffer plugins.
     */
    protected function textsServiceGroups(&$resetTranslationPairs, $persistForLanguages)
    {
        // Update terms
        $groupDescriptions = \DevOwl\RealCookieBanner\settings\CookieGroup::getInstance()->getDefaultDescriptions();
        $groupNames = \DevOwl\RealCookieBanner\settings\CookieGroup::getInstance()->getDefaultGroupNames();
        // We cannot currently determine the default groups as they do not have a property like services with `presetId`
        // which points to a template. As workaround, we reconstruct the order of creation by ID ascending.
        $groups = \array_filter(\DevOwl\RealCookieBanner\settings\CookieGroup::getInstance()->getOrdered(\true, \true), function ($group) {
            return $group->metas[\DevOwl\RealCookieBanner\settings\CookieGroup::META_NAME_IS_DEFAULT];
        });
        \usort($groups, function ($a, $b) {
            return $a->term_id <=> $b->term_id;
        });
        $result = [];
        $i = -1;
        $mapIToKey = ['essential', 'functional', 'statistics', 'marketing'];
        foreach ($groups as $group) {
            ++$i;
            $keyToUse = $mapIToKey[$i] ?? null;
            if ($keyToUse === null) {
                continue;
            }
            $texts = ['description' => $groupDescriptions[$keyToUse], 'name' => $groupNames[$keyToUse]];
            $result[$group->term_id] = \wp_update_term($group->term_id, \DevOwl\RealCookieBanner\settings\CookieGroup::TAXONOMY_NAME, $texts);
            foreach ($persistForLanguages as $locale) {
                foreach ($texts as $text) {
                    $resetTranslationPairs[$locale] = $resetTranslationPairs[$locale] ?? [];
                    $resetTranslationPairs[$locale][] = $text;
                }
            }
        }
        return $result;
    }
    /**
     * Reset texts for generic templates. This currently supports only services and blockers.
     *
     * @param string[] $languages
     * @param string $cpt
     * @param string[] $translatableMetaKeys
     * @param string[] $resetTranslationPairs
     * @param string $defaultLanguageWpCompatible Depending on the current language, the translations for the default language should be persisted in `$resetTranslationPairs`.
     * @param array $dry
     */
    protected function textsGenericTemplates($languages, $cpt, $translatableMetaKeys, &$resetTranslationPairs, $defaultLanguageWpCompatible, &$dry)
    {
        $result = [];
        $existing = \DevOwl\RealCookieBanner\settings\Cookie::getInstance()->getOrdered(null, \false, \get_posts(Core::getInstance()->queryArguments(['post_type' => $cpt, 'numberposts' => -1, 'nopaging' => \true, 'meta_query' => [['key' => \DevOwl\RealCookieBanner\settings\Blocker::META_NAME_PRESET_ID, 'compare' => 'EXISTS']], 'post_status' => ['publish', 'private', 'draft']], 'Reset::textsGenericTemplates')));
        $identifiersToLoad = [];
        foreach ($existing as $post) {
            $identifiersToLoad[] = $post->metas[\DevOwl\RealCookieBanner\settings\Blocker::META_NAME_PRESET_ID];
        }
        $consumer = $cpt === \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME ? TemplateConsumers::getCurrentServiceConsumer() : TemplateConsumers::getCurrentBlockerConsumer();
        $templates = $consumer->retrieveBy('identifier', $identifiersToLoad);
        $templates = \array_column($templates, null, 'identifier');
        foreach ($existing as $post) {
            $template = $templates[$post->metas[\DevOwl\RealCookieBanner\settings\Blocker::META_NAME_PRESET_ID]] ?? null;
            if ($template === null || $template->consumerData['isUntranslated']) {
                continue;
            }
            // Make `translations` available
            $template = $template->use();
            $persistForLanguages = \array_intersect($languages, \array_filter(\array_map(function ($translation) use($defaultLanguageWpCompatible) {
                return $translation['isUntranslated'] || $translation['language'] === $defaultLanguageWpCompatible ? null : $translation['language'];
            }, $template->consumerData['translations'])));
            if ($dry !== null) {
                $dry = \array_values(\array_unique(\array_merge($dry, $persistForLanguages)));
                continue;
            }
            $update = TemplateConsumers::getInstance()->createFromTemplate($template, null, $post->ID, $translatableMetaKeys, \false);
            if (\is_array($update)) {
                $result[$post->ID] = $update;
                $texts = \array_values(\array_unique(\array_merge([$update['post_content'], $update['post_title']], $update['meta_input'])));
                if ($defaultLanguageWpCompatible === $template->consumerData['context'] && \is_array($template->consumerData['translations'])) {
                    foreach ($persistForLanguages as $locale) {
                        $resetTranslationPairs[$locale] = $resetTranslationPairs[$locale] ?? [];
                        foreach ($texts as $text) {
                            $resetTranslationPairs[$locale][] = $text;
                        }
                    }
                }
            }
        }
        return $result;
    }
    /**
     * Clear all data.
     *
     * @param boolean $purgeConsents
     */
    public function all($purgeConsents = \false)
    {
        global $wpdb;
        \wp_rcb_invalidate_templates_cache();
        // Custom post types
        $postIds = $wpdb->get_col($wpdb->prepare("SELECT ID FROM {$wpdb->posts} WHERE post_type IN (%s, %s, %s)", \DevOwl\RealCookieBanner\settings\Cookie::CPT_NAME, \DevOwl\RealCookieBanner\settings\Blocker::CPT_NAME, \DevOwl\RealCookieBanner\settings\BannerLink::CPT_NAME));
        if ($this->isPro()) {
            $postIds = \array_merge($postIds, $wpdb->get_col($wpdb->prepare("SELECT ID FROM {$wpdb->posts} WHERE post_type IN (%s)", TcfVendorConfiguration::CPT_NAME)));
        }
        if (!empty($postIds)) {
            foreach ($postIds as $postId) {
                \wp_delete_post($postId, \true);
            }
        }
        // Custom taxonomies
        $terms = $wpdb->get_results($wpdb->prepare("SELECT term_id, taxonomy FROM {$wpdb->term_taxonomy} WHERE taxonomy IN (%s)", \DevOwl\RealCookieBanner\settings\CookieGroup::TAXONOMY_NAME));
        if (!empty($terms)) {
            foreach ($terms as $term) {
                \wp_delete_term($term->term_id, $term->taxonomy);
            }
        }
        // Options
        $optionNames = $wpdb->get_col($wpdb->prepare("SELECT option_name FROM {$wpdb->options} WHERE option_name LIKE %s AND option_name NOT IN('rcb-installation-date')", RCB_OPT_PREFIX . '-%'));
        if (!empty($optionNames)) {
            foreach ($optionNames as $option_name) {
                \delete_option($option_name);
            }
        }
        // Scanner
        $table_name = $this->getTableName(Persist::TABLE_NAME);
        // phpcs:disable WordPress.DB.PreparedSQL
        $wpdb->query("TRUNCATE TABLE {$table_name}");
        // phpcs:enable WordPress.DB.PreparedSQL
        // Queue items
        $queuePersist = Core::getInstance()->getRealQueue()->getPersist();
        $queuePersist->deleteByType(AutomaticScanStarter::REAL_QUEUE_TYPE);
        $queuePersist->deleteByType(Scanner::REAL_QUEUE_TYPE);
        if ($purgeConsents) {
            UserConsent::getInstance()->purge();
        }
        Core::getInstance()->getActivator()->addInitialContent();
    }
    /**
     * Get singleton instance.
     *
     * @return Reset
     * @codeCoverageIgnore
     */
    public static function getInstance()
    {
        return self::$me === null ? self::$me = new \DevOwl\RealCookieBanner\settings\Reset() : self::$me;
    }
}
