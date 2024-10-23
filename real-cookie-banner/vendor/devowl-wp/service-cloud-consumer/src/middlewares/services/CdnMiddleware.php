<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\services;

use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\AbstractTemplateMiddleware;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\ServiceTemplate;
/**
 * If a service is a CDN, add a notice to the service which is shown in UI and disallows the creation of the service.
 * @internal
 */
class CdnMiddleware extends AbstractTemplateMiddleware
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
        /*if ($template->identifier === 'wordpress-comments') {
              if ($template instanceof ServiceTemplate) {
                  $template->isCdn = true;
                  $template->dataProcessingInCountriesSpecialTreatments = [
                      ServiceTemplate::SPECIAL_TREATMENT_STANDARD_CONTRACTUAL_CLAUSES,
                  ];
                  $template->group = 'essential';
                  $template->isEmbeddingOnlyExternalResources = true;
                  $template->sccConclusionInstructionsNotice =
                      '<p>Create an <a href="http://wordpress.com/" rel="noopener noreferrer" target="_blank">WordPress.com</a> account at wordpress.com/start. You can then request a “Data Processing Addendum (DPA)” by email as a PDF at wordpress.com/me/privacy. As part of the data processing addendum, you conclude standard contractual clauses. You must then sign the document and return it to privacypolicyupdates@automattic.com.</p>';
              } elseif ($template instanceof BlockerTemplate) {
                  $template->isHidden = true;
              }
          }*/
        if ($template instanceof ServiceTemplate && $template->isCdn) {
            $hasScc = \in_array(ServiceTemplate::SPECIAL_TREATMENT_STANDARD_CONTRACTUAL_CLAUSES, $template->dataProcessingInCountriesSpecialTreatments, \true);
            $isEssential = $template->group === 'essential';
            $isEmbeddingOnlyExternalResources = $template->isEmbeddingOnlyExternalResources;
            if (!$hasScc || !$isEssential || $isEmbeddingOnlyExternalResources) {
                $paragraph1 = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.introduction', '%s is a network of globally distributed servers that cache content and deliver it to your website visitors faster based on their location, reducing website load times and improving performance. This technology is also known as a content delivery network (CDN). {{strong}}Servers may also be located in countries that are considered unsafe in terms of data protection law.{{/strong}}'), $template->name);
                $paragraphNoScc = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.introductionNoScc', 'In order to use the service in a way that complies with data protection regulations, the only practical option would be to conclude standard contractual clauses (SCCs) with %1$s that guarantee the safe processing of personal data of your website visitors (in particular IP addresses). Unfortunately, %1$s does not offer the option of concluding standard contractual clauses to our knowledge. Therefore, in our legal opinion, {{strong}}it is not possible to use this service in a legally compliant manner.{{/strong}}'), $template->name);
                $paragraphNotEssential = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.introductionNotEssential', '%s unfortunately sets cookies that are not technically essential according to our knowledge, for which consent would be required. At the same time, the CDN cannot be blocked with a content blocker until the website visitors have given their consent, as otherwise parts of your website may malfunction. Therefore, in our legal opinion, {{strong}}it is not possible to use this service in a legally compliant manner.{{/strong}}'), $template->name);
                $paragraphSccAndEmbedsOnlyExternalResources1 = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.introductionSccAndEmbedsOnlyExternalResources1', 'In order to use the service in a way that complies with data protection regulations, the only practical option would be to conclude standard contractual clauses (SCCs) with %s that guarantee the safe processing of personal data of your website visitors (in particular IP addresses).'), $template->name);
                $paragraphSccAndEmbedsOnlyExternalResources2 = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.introductionSccAndEmbedsOnlyExternalResources2', '{{strong}}Please make sure that you have concluded standard contract clauses with %1$s, which can be done on their website!{{/strong}} Since %1$s does not set cookies to our knowledge, we do not recommend creating a service in your cookie banner for it. However, you must mention the use of %1$s in your privacy policy.'), $template->name);
                $paragraphRemoveService = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.introductionRemoveService', 'Please remove %s from your website!'), $template->name);
                $moreInfoTooltipTitle = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.moreInfoTitle', 'Why is %s integrated into my website at all?'), $template->name);
                $moreInfoTooltipDescription = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.moreInfoDescription', 'If you do not consciously integrate %1$s, it is most likely that a plugin or theme you are using uses this CDN to load external scripts, fonts or media such as images. The best way to find out who is integrating the CDN is to disable the individual plugins or themes and scan again. Once you have found out where the integration is coming from, contact the developer of the plugin or theme to see if it can be used without %1$s or replace this plugin/theme!'), $template->name);
                $paragraphs = [];
                $accordion = [];
                $allowNotice = \true;
                if (!$hasScc) {
                    $paragraphs[] = $paragraphNoScc;
                    $allowNotice = \false;
                } elseif (!$isEssential) {
                    $paragraphs[] = $paragraphNotEssential;
                    $allowNotice = \false;
                } elseif ($hasScc && $isEmbeddingOnlyExternalResources) {
                    $paragraphs[] = $paragraphSccAndEmbedsOnlyExternalResources1;
                    $paragraphs[] = $paragraphSccAndEmbedsOnlyExternalResources2;
                }
                if (!empty($template->sccConclusionInstructionsNotice) && $allowNotice) {
                    $sccConclusionInstructionsNoticeTitle = \sprintf($variableResolver->resolveDefault('i18n.CdnMiddleware.sccConclusionInstructionsNoticeTitle', 'How do I conclude standard contractual clauses with %s?'), $template->name);
                    $accordion[$sccConclusionInstructionsNoticeTitle] = \preg_replace('/^<p>|<\\/p>$/', '', $template->sccConclusionInstructionsNotice);
                }
                $accordion[$moreInfoTooltipTitle] = $moreInfoTooltipDescription;
                $this->applyAcknowledgementMode($template, [$paragraph1, ...$paragraphs, !$hasScc || !$isEssential ? $paragraphRemoveService : null], $accordion, $variableResolver->resolveDefault('i18n.CdnMiddleware.buttonLabel', 'Acknowledged'), 'ignore');
            }
        }
    }
}
