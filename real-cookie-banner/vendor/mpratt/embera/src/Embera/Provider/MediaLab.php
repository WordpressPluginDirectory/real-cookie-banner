<?php

/**
 * MediaLab.php
 *
 * @package Embera
 * @author Michael Pratt <yo@michael-pratt.com>
 * @link   http://www.michael-pratt.com/
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace DevOwl\RealCookieBanner\Vendor\Embera\Provider;

use DevOwl\RealCookieBanner\Vendor\Embera\Url;
/**
 * MediaLab Provider
 * View, distribute and store professional content with MediaLab. Specialized in Digital Media Man...
 *
 * @link https://medialab.co
 *
 * @internal
 */
class MediaLab extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://{subdomain}.medialab.{tld}/api/oembed/?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['*.medialab.co', '*.medialab.app'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~medialab\\.(app|co)/share/(watch|social|embed)/([^/]+)~i', (string) $url);
    }
    /** inline {@inheritdoc} */
    public function getEndpoint()
    {
        \preg_match('~https://([^\\.]+)\\.medialab\\.([^/]+)~', $this->url, $m);
        $translate = ['{subdomain}' => $m['1'], '{tld}' => $m['2']];
        return (string) \str_replace(\array_keys($translate), \array_values($translate), $this->endpoint);
    }
    /** inline {@inheritdoc} */
    public function normalizeUrl(Url $url)
    {
        $url->convertToHttps();
        $url->removeQueryString();
        return $url;
    }
}
