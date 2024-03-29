<?php

/**
 * UstreamTV.php
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
 * UstreamTV Provider
 * End to end video platform for media &amp;amp; enterprises. Live streaming, video hosting, trans...
 *
 * @link https://ustream.tv
 *
 * @internal
 */
class UstreamTV extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://video.ibm.com/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['ustream.tv', 'video.ibm.com', 'ustream.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \false;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~ibm\\.com/(channel|recorded)/([^/]+)$~i', (string) $url);
    }
    /** inline {@inheritdoc} */
    public function normalizeUrl(Url $url)
    {
        $url->setHost('video.ibm.com');
        $url->convertToHttps();
        $url->removeQueryString();
        $url->removeLastSlash();
        return $url;
    }
}
