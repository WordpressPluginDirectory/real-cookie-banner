<?php

/**
 * Tumbl.php
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
 * Tumblr Provider
 * Tumblr is a place to express yourself, discover yourself, and bond over the stuff you love. It&...
 *
 * @link https://tumblr.com
 *
 * @internal
 */
class Tumblr extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://www.tumblr.com/oembed/1.0?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['*.tumblr.com'];
    /** inline {@inheritdoc} */
    protected $allowedParams = ['maxwidth', 'maxheight'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \false;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~tumblr\\.com/post/([^/]+)~i', (string) $url);
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
