<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\Customize;

use DevOwl\RealCookieBanner\Vendor\DevOwl\Customize\controls\CustomHTML;
use DevOwl\RealCookieBanner\Vendor\DevOwl\Customize\controls\Headline;
use Exception;
use stdClass;
use WP_Customize_Control;
use WP_Customize_Manager;
use WP_Customize_Panel;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * An abstract implementation of a panel in WP customize.
 *
 * The main purpose of this abstract class is the following layer:
 *
 * - It creates a main panel
 * - That panel can contain multiple sections
 * - A section contains multiple controls
 * - A control holds a single setting
 *
 * If you need a more specific setting override the customize_register method!
 * @internal
 */
abstract class AbstractCustomizePanel
{
    /**
     * The main panel ID.
     *
     * @var string
     */
    private $panel;
    /**
     * The name of this panel.
     *
     * @var string
     */
    private $name;
    /**
     * The manager received through customize_register.
     *
     * @var WP_Customize_Manager
     */
    private $manager;
    /**
     * Cached sections definition.
     *
     * @var array
     */
    private $sections;
    /**
     * Cross-browser compatible font families.
     *
     * @see https://www.w3schools.com/cssref/css_websafe_fonts.asp
     */
    const WEB_SAFE_FONT_FAMILY = ['Georgia, serif', '"Palatino Linotype", "Book Antiqua", Palatino, serif', '"Times New Roman", Times, serif', 'Arial, Helvetica, sans-serif', '"Arial Black", Gadget, sans-serif', '"Comic Sans MS", cursive, sans-serif', 'Impact, Charcoal, sans-serif', '"Lucida Sans Unicode", "Lucida Grande", sans-serif', 'Tahoma, Geneva, sans-serif', '"Trebuchet MS", Helvetica, sans-serif', 'Verdana, Geneva, sans-serif', '"Courier New", Courier, monospace', '"Lucida Console", Monaco, monospace'];
    /**
     * C'tor.
     *
     * @param string $panel The main panel ID.
     * @param string $name The name of this panel, e. g. "banner". This is needed for frontend localization
     */
    public function __construct($panel, $name)
    {
        $this->panel = $panel;
        $this->name = $name;
    }
    /**
     * Return main arguments for this panel.
     *
     * @return array
     * @see https://developer.wordpress.org/reference/classes/wp_customize_panel/__construct/#parameters
     */
    protected abstract function getPanelArgs();
    /**
     * Return sections for this panel. Do not directly use this, use `getSections` instead.
     *
     * @return array Documentation follows soon, in the meantime have a look at Real Cookie Banner implementation
     * @see https://developer.wordpress.org/reference/classes/wp_customize_section/__construct/#parameters
     * @see https://developer.wordpress.org/reference/classes/wp_customize_setting/__construct/#parameters
     */
    public abstract function resolveSections();
    /**
     * Return sections for this panel with caching mechanism.
     *
     * @param boolean $force
     */
    public function getSections($force = \false)
    {
        if ($this->sections === null || $force) {
            $sections = $this->resolveSections();
            /**
             * Allows to modify all sections available for this panel.
             *
             * @hook DevOwl/Customize/Sections/$panel
             * @param {array} $sections
             * @param {string} $panel
             * @return {array}
             * @since 1.8.0
             */
            $this->sections = \apply_filters_ref_array('DevOwl/Customize/Sections/' . $this->getPanel(), [&$sections, $this->getPanel()]);
        }
        return $this->sections;
    }
    /**
     * Add cookie banner section. If you need a more granular customization you can safely override
     * this method!
     *
     * @param WP_Customize_Manager $wp_customize
     */
    public function customize_register($wp_customize)
    {
        $this->manager = $wp_customize;
        $wp_customize->add_panel(new WP_Customize_Panel($wp_customize, $this->getPanel(), ['title' => \__('Cookie Banner', RCB_TD), 'description' => \__('Design your cookie banner.', RCB_TD)]));
        $this->registerSections($this->getSections());
    }
    /**
     * Write defaults to database via `add_option` to avoid performance issues with `get_option` (autoload).
     *
     * @see https://wordpress.org/support/topic/does-not-update-false-values/#post-13323897
     */
    public function enableOptionsAutoload()
    {
        $sections = $this->getSections();
        $settingDefaults = $this->settingDefaults();
        foreach ($sections as $section) {
            foreach ($section['controls'] as $controlId => $control) {
                // Register associated setting
                if (!isset($control['setting'])) {
                    $control['setting'] = [];
                }
                if (!isset($control['name']) || isset($control['class']) && \in_array($control['class'], $this->getSkipControlClasses(), \true)) {
                    continue;
                }
                $setting = \array_merge($settingDefaults, $control['setting']);
                // Avoid overwriting and read current
                $default = $setting['default'] ?? '';
                \add_option($controlId, \get_option($controlId, $default));
            }
        }
    }
    /**
     * Register sections from the dynamic array.
     *
     * @param array $sections Result of getSections
     */
    protected function registerSections($sections)
    {
        $sectionDefaults = $this->sectionDefaults();
        $controlDefaults = $this->controlDefaults();
        $settingDefaults = $this->settingDefaults();
        $customize = $this->getManager();
        foreach ($sections as $sectionId => $section) {
            // Register section
            $section = \array_merge($sectionDefaults, $section, ['panel' => $this->getPanel()]);
            $customize->add_section(new CustomizeSection($customize, $sectionId, $section));
            // Create pseudo element on top of each section. Why? E.g. OceanWP hides sections completely
            // dynamically depending on the visibility of the first item of the section caused by conditional controls
            $pseudoEmptyElement = $sectionId . '-pseudo';
            $customize->add_setting($pseudoEmptyElement, []);
            $customize->add_control(new CustomHTML($customize, $pseudoEmptyElement, ['name' => $pseudoEmptyElement, 'section' => $sectionId, 'setting' => $pseudoEmptyElement, 'description' => '']));
            // Register controls
            foreach ($section['controls'] as $controlId => $control) {
                // Register associated setting
                if (!isset($control['setting'])) {
                    $control['setting'] = [];
                }
                $setting = \array_merge($settingDefaults, $control['setting']);
                $customize->add_setting($controlId, $setting);
                $control['setting'] = $controlId;
                // Afterwards, register the control
                $control = \array_merge($controlDefaults, $control, ['section' => $sectionId]);
                $class = isset($control['class']) ? $control['class'] : WP_Customize_Control::class;
                if (isset($control['enabled']) && !$control['enabled']) {
                    continue;
                }
                $customize->add_control(new $class($customize, $controlId, $control));
            }
        }
    }
    /**
     * Localize for frontend (registered panel, section and setting IDs).
     */
    public function localizeIds()
    {
        $localizeVariableName = 'customizeIds' . \ucfirst($this->getName());
        $result = ['panel' => $this->getPanel(), 'headlines' => [], 'sections' => [], 'settings' => []];
        // Populate section IDs
        foreach ($this->getSections() as $sectionId => $section) {
            $result['sections'][$section['name']] = $sectionId;
            if (!isset($result['settings'][$section['name']])) {
                $result['settings'][$section['name']] = [];
            }
            // Populate setting IDs
            foreach ($section['controls'] as $controlId => $control) {
                if (isset($control['class'])) {
                    $populateAs = '';
                    switch ($control['class']) {
                        case Headline::class:
                            $populateAs = 'headlines';
                            break;
                        case CustomHTML::class:
                            $populateAs = 'others';
                            break;
                        default:
                            break;
                    }
                    if (!empty($populateAs) && isset($control['name'])) {
                        $result[$populateAs][$control['name']] = $controlId;
                        continue;
                    }
                }
                if (!isset($control['name'])) {
                    continue;
                }
                $result['settings'][$section['name']][$control['name']] = $controlId;
            }
        }
        return [$localizeVariableName => $result];
    }
    /**
     * Localize for frontend (customize values)
     *
     * @param string $skipControlClasses
     */
    public function localizeValues($skipControlClasses = [])
    {
        $localizeVariableName = 'customizeValues' . \ucfirst($this->getName());
        $result = [];
        foreach ($this->getSections() as $sectionId => $section) {
            if (!isset($result[$section['name']])) {
                $result[$section['name']] = [];
            }
            // Populate setting IDs
            foreach ($section['controls'] as $controlId => $control) {
                if (!isset($control['name']) || isset($control['class']) && \in_array($control['class'], \array_merge($skipControlClasses, $this->getSkipControlClasses()), \true)) {
                    continue;
                }
                /**
                 * Allows to modify a customize value for the frontend.
                 *
                 * @hook DevOwl/Customize/LocalizedValue/$id
                 * @param {mixed} $value
                 * @param {string} $id
                 * @return {mixed}
                 */
                $value = \apply_filters('DevOwl/Customize/LocalizedValue/' . $controlId, $this->getSetting($controlId), $controlId);
                $result[$section['name']][$control['name']] = $value;
            }
        }
        return [$localizeVariableName => $result];
    }
    /**
     * Localize for frontend (customize defaults so they can be resetted)
     *
     * @param string $skipControlClasses
     */
    public function localizeDefaultValues($skipControlClasses = [])
    {
        $localizeVariableName = 'customizeDefaults' . \ucfirst($this->getName());
        $result = [];
        foreach ($this->getSections() as $sectionId => $section) {
            if (!isset($result[$section['name']])) {
                $result[$section['name']] = [];
            }
            // Populate setting IDs
            foreach ($section['controls'] as $controlId => $control) {
                if (!isset($control['name']) || isset($control['class']) && \in_array($control['class'], \array_merge($skipControlClasses, $this->getSkipControlClasses()), \true)) {
                    continue;
                }
                $default = $this->getSetting($controlId, \false);
                if ($default !== null) {
                    $result[$section['name']][$control['name']] = $default;
                }
            }
        }
        return [$localizeVariableName => $result];
    }
    /**
     * Override this for default overrides arguments.
     *
     * @return string[]
     */
    protected function getSkipControlClasses()
    {
        return [Headline::class, CustomHTML::class];
    }
    /**
     * Override this for default section arguments.
     *
     * @return array
     */
    protected function sectionDefaults()
    {
        return [];
    }
    /**
     * Override this for default control arguments.
     *
     * @return array
     */
    protected function controlDefaults()
    {
        return [];
    }
    /**
     * Override this for default setting arguments.
     *
     * @return array
     */
    protected function settingDefaults()
    {
        return [];
    }
    /**
     * Get the live preview url with autofocus.
     */
    public function getUrl()
    {
        return \admin_url('/customize.php?autofocus[panel]=' . $this->getPanel());
    }
    /**
     * Get value of a setting. Unfortunately, getting the managers' settings does not work as expected because
     * they are only available in customize, and not in frontend. We need to reconstruct the #value method.
     *
     * @param string $id The unique ID of the setting
     * @param boolean $resolve If `false`, it returns always the default values
     * @throws Exception When no setting with the given ID was found
     * @see https://developer.wordpress.org/reference/classes/wp_customize_setting/value/
     */
    public function getSetting($id, $resolve = \true)
    {
        $settingDefaults = $this->settingDefaults();
        foreach ($this->getSections() as $section) {
            foreach ($section['controls'] as $controlId => $control) {
                if ($controlId === $id) {
                    $setting = \array_merge($settingDefaults, isset($control['setting']) ? $control['setting'] : []);
                    $type = isset($setting['type']) ? $setting['type'] : 'theme_mod';
                    if (!$resolve && !isset($setting['default'])) {
                        return null;
                    }
                    $doSanitize = \true;
                    $controlType = isset($control['type']) ? $control['type'] : \false;
                    $default = isset($setting['default']) ? $setting['default'] : \false;
                    $transport = isset($setting['transport']) ? $setting['transport'] : 'refresh';
                    $sanitize_callback = isset($setting['sanitize_callback']) ? $setting['sanitize_callback'] : null;
                    // Obtain value
                    if ($resolve) {
                        switch ($type) {
                            case 'theme_mod':
                                $value = \get_theme_mod($id, $default);
                                break;
                            case 'option':
                                $value = \get_option($id, $default);
                                // When using `transport = refresh` in customizer with checkboxes and setting the checkbox value to
                                // `false` by unchecking the checkbox, it does not get reflected in the customizer.
                                // This is caused by the implementation of how preview values are injected to the customizer. First, it
                                // uses the `pre_option` filter of `get_option()`. But the `pre_option` is only respected when it is not `false`:
                                // https://github.com/WordPress/wordpress-develop/blob/8fd6b4825f8b2a825ca3f19998043f7cedcee860/src/wp-includes/option.php#L134-L152
                                // In case of a checkbox with unchecked value, it is defintely `false` and the `_preview_filter()` function does not
                                // work as expected:
                                // https://github.com/WordPress/WordPress/blob/b7b504dc0d42e2bdfdfc4294d7b5c3bfa09c7e78/wp-includes/class-wp-customize-setting.php#L436-L466
                                // Solution: Instead of `get_option` we use `_preview_filter()` directly for checkboxes in customizer.
                                if (\is_customize_preview() && $this->manager instanceof WP_Customize_Manager && $transport === 'refresh' && $controlType === 'checkbox') {
                                    $settingInstance = $this->getManager()->get_setting($id);
                                    if ($settingInstance->is_current_blog_previewed()) {
                                        $undefined = new stdClass();
                                        // Symbol hack.
                                        $post_value = $settingInstance->post_value($undefined);
                                        if ($undefined !== $post_value) {
                                            $value = $post_value;
                                            $doSanitize = \false;
                                            // with post_value() it is already sanitized
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new Exception(\sprintf('The setting type %s is not implemented.', $type));
                        }
                    } else {
                        $value = $default;
                    }
                    // Sanitize value
                    if ($doSanitize) {
                        $value = \is_null($sanitize_callback) ? $value : \call_user_func_array($sanitize_callback, [$value]);
                    }
                    /**
                     * Allows to modify a customize value.
                     *
                     * @hook DevOwl/Customize/Value/$id
                     * @param {mixed} $value
                     * @param {string} $id
                     * @return {mixed}
                     */
                    return \apply_filters('DevOwl/Customize/Value/' . $id, $value, $id);
                }
            }
        }
        throw new Exception(\sprintf('The setting with ID %s was not found.', $id));
    }
    /**
     * Get main panel id.
     *
     * @codeCoverageIgnore
     */
    public function getPanel()
    {
        return $this->panel;
    }
    /**
     * Get name.
     *
     * @codeCoverageIgnore
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * Get manager.
     *
     * @codeCoverageIgnore
     */
    public function getManager()
    {
        return $this->manager;
    }
    /**
     * Check depending on the `$response` of `customize_save_response` hook if a specific
     * prefix got changed.
     *
     * @param array $response
     * @param string $prefix
     */
    public static function gotUpdated($response, $prefix)
    {
        if (isset($response['changeset_status'], $response['setting_validities']) && $response['changeset_status'] === 'publish' && \is_array($response['setting_validities'])) {
            // Check if any RCB specific option was set
            foreach ($response['setting_validities'] as $key => $value) {
                if (\strpos($key, $prefix, 0) === 0 && $value === \true) {
                    return \true;
                }
            }
        }
        return \false;
    }
    /**
     * Sanitize boolean for checkbox. Note: We need to sanitize the value to "y" or "n".
     *
     * @param boolean $checked Whether or not a box is checked.
     * @see https://developer.wordpress.org/reference/functions/bool_from_yn/
     * @see https://github.com/WordPress/WordPress/blob/6677070a138f46d38517149472229a29324a95f4/wp-content/themes/twentytwenty/classes/class-twentytwenty-customize.php#L457
     * @return boolean
     */
    public static function sanitize_checkbox($checked)
    {
        return isset($checked) && (\true === $checked || '1' === (string) $checked) ? \true : \false;
    }
}
