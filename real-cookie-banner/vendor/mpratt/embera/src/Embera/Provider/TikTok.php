<?php

/**
 * TikTok.php
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
 * TikTok Provider
 * TikTok - trends start here. On a device or on the web, viewers can watch and discover millions ...
 *
 * @link https://tiktok.com
 * @see https://developers.tiktok.com/doc/
 * @internal
 */
class TikTok extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://www.tiktok.com/oembed';
    /** inline {@inheritdoc} */
    protected static $hosts = ['tiktok.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) (\preg_match('~tiktok\\.com/([^/]+)/video/([^/]+)$~i', (string) $url) || \preg_match('~tiktok\\.com/@([^/]+)~i', (string) $url));
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
