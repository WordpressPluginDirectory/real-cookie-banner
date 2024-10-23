<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\serviceCloudConsumer;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxFinder;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\HeadlessContentBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\scanner\BlockableScanner;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\scanner\ScannableBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\ScriptInlineExtractExternalUrl;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares\AbstractConsumerMiddleware;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\BlockerTemplate;
/**
 * This is not directly a plugin but a middleware to handle the service cloud consumer `@devowl-wp/service-cloud-consumer`.
 * This middleware will notify you when an external URL is now covered by a blocker template.
 *
 * @codeCoverageIgnore
 * @internal
 */
abstract class ServiceCloudConsumerExternalUrlNotifierMiddleware extends AbstractConsumerMiddleware
{
    /**
     * Fetch external URLs which got found by your scanner.
     *
     * Return an array of objects with the following properties:
     * - `identifier` (string): The identifier of the external URL.
     * - `externalUrl` (string): The external URL.
     * - `markup` (string): The markup of the external URL. (optional)
     *
     * @return array[]
     */
    public abstract function fetchExternalUrls();
    /**
     * Notify the external URL which is now covered by a blocker template.
     *
     * @param ScanEntry[] $scanEntries
     */
    public abstract function notify($scanEntries);
    /**
     * Check if the external URL is already notified. It should return a list of hostnames which are already notified so
     * we do never notify twice.
     *
     * @return string[]
     */
    public abstract function alreadyNotified();
    /**
     * Configure the headless content blocker before it gets `setup()`.
     *
     * @param HeadlessContentBlocker $headlessContentBlocker
     */
    public function configure($headlessContentBlocker)
    {
        // Silence is golden.
    }
    // Documented in AbstractConsumerMiddleware
    public function beforeDownloadAndPersistFromDataSource()
    {
        // Silence is golden.
    }
    // Documented in AbstractConsumerMiddleware
    public function afterDownloadAndPersistFromDataSource($exception, $blockerTemplates)
    {
        $headlessContentBlocker = new HeadlessContentBlocker();
        foreach ($blockerTemplates as $blockerTemplate) {
            if ($blockerTemplate instanceof BlockerTemplate) {
                /**
                 * A list of URL rules that are now covered by a blocker template.
                 * We strip away all other selector syntax rules due to performance reasons.
                 *
                 * @var string[]
                 */
                $urlRules = [];
                foreach ($blockerTemplate->rules as $rule) {
                    $expression = $rule['expression'];
                    if (!SelectorSyntaxFinder::fromExpression($expression)) {
                        $urlRules[] = $expression;
                    }
                }
                if (\count($urlRules) > 0) {
                    $headlessContentBlocker->addBlockables([new ScannableBlockable($headlessContentBlocker, $blockerTemplate->identifier, null, $urlRules)]);
                }
            }
        }
        if (\count($headlessContentBlocker->getBlockables()) > 0) {
            $externalUrls = $this->fetchExternalUrls();
            if (\count($externalUrls) > 0) {
                /**
                 * This plugin needs to be available after our custom hooks fired in `Plugin`
                 *
                 * @var BlockableScanner
                 */
                $scanner = $headlessContentBlocker->addPlugin(BlockableScanner::class);
                $headlessContentBlocker->addPlugin(ScriptInlineExtractExternalUrl::class);
                $this->configure($headlessContentBlocker);
                $headlessContentBlocker->setup();
                foreach ($externalUrls as $externalUrl) {
                    $headlessContentBlocker->modifyHtml($externalUrl['markup'] ?? \sprintf('<script src="%s"></script>', $externalUrl['externalUrl']));
                }
                $scanner->filterFalsePositives();
                $scanEntries = $scanner->flushResults();
                $alreadyNotified = $this->alreadyNotified();
                $relevantScanEntries = [];
                foreach ($scanEntries as $scanEntry) {
                    if (empty($scanEntry->template)) {
                        continue;
                    }
                    if (\in_array($scanEntry->blocked_url_host, $alreadyNotified, \true)) {
                        continue;
                    }
                    $scanEntry->calculateFields();
                    foreach ($externalUrls as $externalUrl) {
                        if ($scanEntry->blocked_url === $externalUrl['externalUrl']) {
                            $relevantScanEntries[] = $scanEntry;
                        }
                    }
                }
                if (\count($relevantScanEntries) > 0) {
                    $this->notify($relevantScanEntries);
                }
            }
        }
    }
    // Documented in AbstractConsumerMiddleware
    public function beforeUseTemplate($template)
    {
        // Silence is golden.
    }
    // Documented in AbstractConsumerMiddleware
    public function afterUseTemplate($template)
    {
        // Silence is golden.
    }
}
