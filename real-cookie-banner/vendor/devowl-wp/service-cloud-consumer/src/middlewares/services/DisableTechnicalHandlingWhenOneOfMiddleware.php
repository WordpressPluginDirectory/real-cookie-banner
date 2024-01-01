<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\services;

use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\AbstractTemplateMiddleware;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\ServiceTemplate;
/**
 * Middleware to enable `attributes.shouldRemoveTechnicalHandlingWhenOneOf` in service templates
 * and reset some fields if necessary.
 * @internal
 */
class DisableTechnicalHandlingWhenOneOfMiddleware extends AbstractTemplateMiddleware
{
    const REMOVE_FIELDS = ['codeOptIn', 'codeOptOut', 'codeOnPageLoad', 'tagManagerOptInEventName', 'tagManagerOptOutEventName', 'executeCodeOptInWhenNoTagManagerConsentIsGiven', 'executeCodeOptOutWhenNoTagManagerConsentIsGiven'];
    // Documented in AbstractTemplateMiddleware
    public function beforePersistTemplate($template, &$allTemplates)
    {
        if ($template instanceof ServiceTemplate && \is_array($template->shouldRemoveTechnicalHandlingWhenOneOf) && \count($template->shouldRemoveTechnicalHandlingWhenOneOf) > 0) {
            $fulfilled = null;
            if ($this->getVariableResolver()->resolveOneOf($template->shouldRemoveTechnicalHandlingWhenOneOf, $template, $fulfilled)) {
                // Deactivate all technical handling
                foreach (self::REMOVE_FIELDS as $field) {
                    $template->{$field} = null;
                }
                // Show a notice to the user but only when the fulfilled variable is not a when-one-of "condition"
                if ($fulfilled !== null && !\in_array($fulfilled, $template->shouldRemoveTechnicalHandlingWhenOneOf, \true)) {
                    $oldNotice = empty($template->technicalHandlingNotice) ? '' : $template->technicalHandlingNotice;
                    $template->technicalHandlingNotice = \sprintf($this->getVariableResolver()->resolveDefault('i18n.DisableTechnicalHandlingWhenOneOfMiddleware.technicalHandlingNotice', 'You don\'t have to define a technical handling here, because this is done by the plugin <strong>%s</strong>.'), $fulfilled) . (empty($oldNotice) ? '' : \sprintf('<br /><br />%s', $oldNotice));
                }
            }
        }
    }
    // Documented in AbstractTemplateMiddleware
    public function beforeUsingTemplate($template)
    {
        // Silence is golden.
    }
}
