<?php

namespace DevOwl\RealCookieBanner\overrides\interfce\settings;

// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/** @internal */
interface IOverrideGeneral
{
    /**
     * Initially add PRO-only options.
     */
    public function overrideEnableOptionsAutoload();
    /**
     * Register PRO-only options.
     */
    public function overrideRegister();
    /**
     * Get an array of hidden page ids (not imprint and privacy policy, there are own options!).
     *
     * @return int[]
     */
    public function getAdditionalPageHideIds();
    /**
     * Get the option "Load services after consent via".
     *
     * @return string
     */
    public function getSetCookiesViaManager();
}
