<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares;

use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\ServiceTemplate;
/**
 * Allows to read scan results for a given service and blocker template.
 * @internal
 */
class ScanResultsMiddleware extends AbstractTemplateMiddleware
{
    // Documented in AbstractTemplateMiddleware
    public function beforePersistTemplate($template, &$allTemplates)
    {
        // Silence is golden.
    }
    // Documented in AbstractTemplateMiddleware
    public function beforeUsingTemplate($template)
    {
        // Silence is golden.
    }
    // Documented in AbstractTemplateMiddleware
    public function beforeRetrievingTemplate($template)
    {
        $variableResolver = $this->getVariableResolver();
        $scanResults = $variableResolver->resolveDefault('serviceScan', []);
        $templateScanResult = $scanResults[$template->identifier] ?? null;
        $template->consumerData['scan'] = \is_array($templateScanResult) ? $templateScanResult : \false;
    }
}
