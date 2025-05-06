<?php

namespace DevOwl\RealCookieBanner\view\blockable;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\services\Blocker as ServicesBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\services\Service;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\HeadlessContentBlocker;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\imagePreview\ImagePreviewBlockable;
use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\lite\settings\TcfVendorConfiguration;
use DevOwl\RealCookieBanner\lite\view\blocker\ImagePreviewBlockableTrait;
use DevOwl\RealCookieBanner\settings\Blocker;
use WP_Post;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Describe a blockable item by `WP_Post` custom post type.
 * @internal
 */
class BlockerPostType extends AbstractBlockable implements ImagePreviewBlockable
{
    use UtilsProvider;
    use ImagePreviewBlockableTrait;
    private $post;
    private $allServices;
    /**
     * C'tor.
     *
     * @param HeadlessContentBlocker $headlessContentBlocker
     * @param WP_Post $post
     * @param Service[] $allServices
     * @codeCoverageIgnore
     */
    public function __construct($headlessContentBlocker, $post, $allServices)
    {
        parent::__construct($headlessContentBlocker);
        $this->post = $post;
        $this->allServices = $allServices;
        $this->appendFromStringArray($post->metas[Blocker::META_NAME_RULES]);
        $legalBasis = [];
        foreach ($this->getRequiredServices() as $service) {
            $legalBasis[] = $service->getLegalBasis();
        }
        $this->setData(AbstractBlockable::DATA_KEY_LEGAL_BASIS, $legalBasis);
    }
    // Documented in Blockable
    public function getBlockerId()
    {
        return $this->getPost()->ID;
    }
    // Documented in Blockable
    public function getRequiredIds()
    {
        $metas = $this->getPost()->metas;
        $criteria = $metas[Blocker::META_NAME_CRITERIA];
        switch ($criteria) {
            case ServicesBlocker::CRITERIA_TCF_VENDORS:
                // Map Custom Post Type Post ID to vendor ID
                $tcfVendorConfigurations = TcfVendorConfiguration::getInstance()->getOrdered();
                $vendorIds = \array_map(function ($postId) use($tcfVendorConfigurations) {
                    foreach ($tcfVendorConfigurations as $tcfVendorConfiguration) {
                        if ($tcfVendorConfiguration->ID === $postId) {
                            return $tcfVendorConfiguration->metas[TcfVendorConfiguration::META_NAME_VENDOR_ID];
                        }
                    }
                    return 0;
                }, $metas[Blocker::META_NAME_TCF_VENDORS]);
                // `getRequiredIds` needs to return an flat array, so hacky prefix purposes with `p`
                foreach ($metas[Blocker::META_NAME_TCF_PURPOSES] as $purposeId) {
                    $vendorIds[] = \sprintf('p%d', $purposeId);
                }
                return $vendorIds;
            default:
                return $metas[Blocker::META_NAME_SERVICES];
        }
    }
    // Documented in Blockable
    public function getCriteria()
    {
        return $this->getPost()->metas[Blocker::META_NAME_CRITERIA];
    }
    /**
     * Get `Service` instances of all required services.
     *
     * @return Service[]
     */
    public function getRequiredServices()
    {
        $requiredIds = $this->getRequiredIds();
        $requiredServices = [];
        foreach ($this->allServices as $service) {
            if (\in_array($service->getId(), $requiredIds, \true)) {
                $requiredServices[] = $service;
            }
        }
        return $requiredServices;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getPost()
    {
        return $this->post;
    }
}
