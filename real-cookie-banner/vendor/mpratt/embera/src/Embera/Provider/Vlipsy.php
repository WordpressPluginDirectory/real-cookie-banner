<?php

/**
 * Vlipsy.php
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
 * Vlipsy Provider
 * {{meta.description}}
 *
 * @link https://vlipsy.com
 *
 * @internal
 */
class Vlipsy extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://vlipsy.com/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['vlipsy.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~vlipsy\\.com/vlip/([^/]+)~i', (string) $url);
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
        \preg_match('~-(.+)$~', (string) $this->url, $m);
        $embedUrl = 'https://vlipsy.com/embed/' . $m['1'];
        $attr = [];
        $attr[] = 'src="' . $embedUrl . '"';
        $attr[] = 'frameborder="0"';
        $attr[] = 'width="{width}"';
        $attr[] = 'height="{height}"';
        $attr[] = 'webkitallowfullscreen mozallowfullscreen allowfullscreen';
        return ['type' => 'video', 'provider_name' => 'Vlipsy', 'provider_url' => 'https://vlipsy.com', 'title' => 'Unknown title', 'html' => '<iframe ' . \implode(' ', $attr) . '></iframe>'];
    }
}
