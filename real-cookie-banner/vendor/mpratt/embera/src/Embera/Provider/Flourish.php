<?php

/**
 * Flourish.php
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
 * Flourish Provider
 * Engage your audience Create agency-quality data graphics and
 * animated stories that bring your data to life.
 *
 * @link https://flourish.studio
 * @internal
 */
class Flourish extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://app.flourish.studio/api/v1/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['*.flourish.studio'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~flourish\\.studio/(visualisation|story)/([^/]+)$~i', (string) $url);
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
        $embedUrl = $this->url . '/embed';
        $attr = [];
        $attr[] = 'src="' . $embedUrl . '"';
        $attr[] = 'frameborder="0"';
        $attr[] = 'scrolling="no"';
        $attr[] = 'height="{height}"';
        $attr[] = 'width="{width}"';
        $attr[] = 'style="width:100%"';
        return ['type' => 'rich', 'provider_name' => 'Flourish', 'provider_url' => 'https://app.flourish.studio', 'title' => 'Unknown title', 'html' => '<iframe ' . \implode(' ', $attr) . '></iframe>'];
    }
}
