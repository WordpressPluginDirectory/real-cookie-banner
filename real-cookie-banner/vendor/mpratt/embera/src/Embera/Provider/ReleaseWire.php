<?php

/**
 * ReleaseWire.php
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
 * ReleaseWire Provider
 * ReleaseWire’s press release distribution, targeting, marketing, online media contact manageme...
 *
 * @link https://releasewire.com
 *
 * @internal
 */
class ReleaseWire extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://publisher.releasewire.com/oembed/?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['releasewire.com', 'rwire.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) (\preg_match('~releasewire\\.com/([^/]+)/(.+)\\.html?$~i', (string) $url) || \preg_match('~rwire\\.com/([^/]+)$~i', (string) $url));
    }
    /** inline {@inheritdoc} */
    public function normalizeUrl(Url $url)
    {
        $url->convertToHttps();
        $url->removeQueryString();
        $url->removeLastSlash();
        return $url;
    }
}
