<?php

/**
 * Sudomemo.php
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
 * Sudomemo Provider
 * Sudomemo: Share your Flipnotes with the world! For Nintendo DSi and 3DS.
 *
 * @link https://sudomemo.net
 *
 * @internal
 */
class Sudomemo extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://www.sudomemo.net/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['sudomemo.net', 'flipnot.es'];
    /** inline {@inheritdoc} */
    protected $allowedParams = ['maxwidth', 'maxheight'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \false;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) (\preg_match('~sudomemo\\.net/watch/([^/]+)~i', (string) $url) || \preg_match('~flipnot\\.es/([^/]+)~i', (string) $url));
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
