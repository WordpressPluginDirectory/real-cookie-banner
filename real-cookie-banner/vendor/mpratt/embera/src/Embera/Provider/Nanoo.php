<?php

/**
 * Nanoo.php
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
 * Nanoo Provider
 *
 *
 * @link https://nanoo.tv
 *
 * @internal
 */
class Nanoo extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://www.nanoo.tv/services/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['*.nanoo.tv', '*.nanoo.pro'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \false;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~nanoo\\.(tv|pro)/link/v/([^/]+)~i', (string) $url);
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
        \preg_match('~/link/v/([^/]+)~i', (string) $this->url, $matches);
        $embedUrl = 'https://www.nanoo.tv/link/' . $matches['1'];
        $attr = [];
        $attr[] = 'width="{width}"';
        $attr[] = 'height="{height}"';
        $attr[] = 'src="' . $embedUrl . '"';
        $attr[] = 'frameborder="0"';
        $attr[] = 'allow="autoplay; fullscreen"';
        $attr[] = 'allowfullscreen';
        $attr[] = 'scrolling="no"';
        $attr[] = 'sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"';
        return ['type' => 'video', 'provider_name' => 'Nanoo', 'provider_url' => 'https://*.nanoo.tv', 'title' => 'Unknown title', 'html' => '<iframe ' . \implode(' ', $attr) . '></iframe>'];
    }
}
