<?php

/**
 * Ustudio.php
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
 * Ustudio Provider
 * Deliver corporate audio and video content securely to distant teams around the world on any dev...
 *
 * @link https://ustudio.com
 *
 * @internal
 */
class Ustudio extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://app.ustudio.com/api/v2/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['*.ustudio.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~ustudio\\.com/embed/([^/]+)~i', (string) $url);
    }
    /** inline {@inheritdoc} */
    public function normalizeUrl(Url $url)
    {
        $url->convertToHttps();
        $url->removeQueryString();
        $url->removeLastSlash();
        return $url;
    }
    /** inline {@inheritdoc} */
    public function getFakeResponse()
    {
        $embedUrl = $this->url;
        $attr = [];
        $attr[] = 'src="' . $embedUrl . '"';
        $attr[] = 'width="{width}"';
        $attr[] = 'height="{height}"';
        $attr[] = 'frameborder="0"';
        $attr[] = 'scrolling="no"';
        $attr[] = 'allowfullscreen="true"';
        $attr[] = 'webkitAllowFullScreen="true"';
        $attr[] = 'mozAllowFullScreen="true"';
        return ['type' => 'video', 'provider_name' => 'Ustudio', 'provider_url' => 'https://ustudio.com', 'title' => 'Unknown title', 'html' => '<iframe ' . \implode(' ', $attr) . '></iframe>'];
    }
}
