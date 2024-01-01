<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\services;

use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\AbstractTemplateMiddleware;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\ServiceTemplate;
/**
 * Mark manager-compatible services with a tag.
 * @internal
 */
class ManagerMiddleware extends AbstractTemplateMiddleware
{
    // Documented in AbstractTemplateMiddleware
    public function beforePersistTemplate($template, &$allTemplates)
    {
        if ($template instanceof ServiceTemplate) {
            $variableResolver = $this->getVariableResolver();
            $manager = $variableResolver->resolveRequired('manager');
            $tooltip = $variableResolver->resolveDefault('i18n.ManagerMiddleware.tooltip', 'This service template is optimized to work with %s.');
            $disabledTooltip = $variableResolver->resolveDefault('i18n.ManagerMiddleware.disabledTooltip', 'Please activate %s in settings to use this template.');
            $disabledText = $variableResolver->resolveDefault('i18n.disabled', 'Disabled');
            $disabled = \false;
            switch ($manager) {
                case 'none':
                    if (\in_array($template->identifier, ['gtm', 'mtm'], \true)) {
                        $template->consumerData['tags'][$disabledText] = \sprintf($disabledTooltip, $template->identifier === 'gtm' ? 'Google Tag Manager' : 'Matomo Tag Manager');
                        $disabled = \true;
                    }
                    break;
                case 'googleTagManager':
                    if (!empty($template->tagManagerOptInEventName) || !empty($template->tagManagerOptOutEventName)) {
                        $template->consumerData['tags']['GTM'] = \sprintf($tooltip, 'Google Tag Manager');
                    }
                    break;
                case 'matomoTagManager':
                    if (!empty($template->tagManagerOptInEventName) || !empty($template->tagManagerOptOutEventName)) {
                        $template->consumerData['tags']['MTM'] = \sprintf($tooltip, 'Matomo Tag Manager');
                    }
                    break;
                default:
                    break;
            }
            if ($disabled) {
                $template->consumerData['isDisabled'] = \true;
            }
        }
    }
    // Documented in AbstractTemplateMiddleware
    public function beforeUsingTemplate($template)
    {
        // Silence is golden.
    }
}
