<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares;

use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\BlockerTemplate;
/**
 * Middleware to add a tag with label when TCF is required and not active. It also creates an array in `consumerData['tcfVendorConfigurations']`
 * with already created TCF vendor configurations (and their respective ID on the consumer environment).
 * @internal
 */
class TcfMiddleware extends AbstractTemplateMiddleware
{
    // Documented in AbstractTemplateMiddleware
    public function beforePersistTemplate($template, &$allTemplates)
    {
        // TODO [TCF]: currently, the service cloud does not support TCF vendors, so we need to reset the `serviceTemplateIdentifiers` to an empty array
        //             and additionally set the vendor ID for Google Adsense
        if ($template instanceof BlockerTemplate) {
            switch ($template->identifier) {
                case 'google-adsense-tcf':
                    $template->serviceTemplateIdentifiers = [];
                    $template->tcfVendorIds = [755];
                    break;
                case 'the-moneytizer-tcf':
                    $template->serviceTemplateIdentifiers = [];
                    $template->tcfVendorIds = [1265];
                    break;
            }
        }
    }
    // Documented in AbstractTemplateMiddleware
    public function beforeUsingTemplate($template)
    {
        if ($template instanceof BlockerTemplate) {
            $data = [];
            $existing = $this->getVariableResolver()->resolveDefault('tcfVendors.created', []);
            foreach ($template->tcfVendorIds as $vendorId) {
                foreach ($existing as $existingRow) {
                    if ($existingRow['vendorId'] === $vendorId) {
                        $data[] = $existingRow;
                        continue 2;
                    }
                }
                // No vendor configuration found for this
                $data[] = ['vendorId' => $vendorId, 'vendorConfigurationId' => \false, 'createAdNetwork' => $this->getNetworkForVendorId($vendorId)];
            }
            $template->consumerData['tcfVendorConfigurations'] = $data;
        }
    }
    // Documented in AbstractTemplateMiddleware
    public function beforeRetrievingTemplate($template)
    {
        $variableResolver = $this->getVariableResolver();
        $labelDisabled = $variableResolver->resolveDefault('i18n.TcfMiddleware.disabled', 'TCF required');
        $labelTcfDisabledTooltip = $variableResolver->resolveDefault('i18n.TcfMiddleware.disabledTooltip', 'This template requires the integration of TCF, as the provider of this template uses this standard. Please activate this in the settings to be able to block this service.');
        if ($template instanceof BlockerTemplate) {
            // TODO [TCF]: currently, yes, we do not have TCF compatibility in our service cloud yet, so `createAdNetwork` is part of `consumerData` instead of a property of `BlockerTemplate`
            if (\in_array($template->identifier, ['google-adsense-tcf', 'the-moneytizer-tcf'], \true)) {
                $isTcfActive = $variableResolver->resolveDefault('isTcfActive', \false);
                if (!$isTcfActive) {
                    $template->consumerData['tags'][$labelDisabled] = $labelTcfDisabledTooltip;
                }
                $template->consumerData['createAdNetwork'] = $this->getNetworkForVendorId($template->tcfVendorIds[0]);
            }
        }
    }
    /**
     * Get the network for a given vendor ID.
     *
     * TODO [TCF] shouldn't this be more generic by reading from a list of available networks?
     *
     * @param int $vendorId The vendor ID.
     * @return string The network name.
     */
    protected function getNetworkForVendorId($vendorId)
    {
        switch ($vendorId) {
            case 755:
                return 'google-adsense';
            case 1265:
                return 'the-moneytizer';
        }
        return null;
    }
}
