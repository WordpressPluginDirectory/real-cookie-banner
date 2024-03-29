<?php

/**
 * Spreaker.php
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
 * Spreaker Provider
 * Start your podcasting journey in a matter of seconds Spreaker, the one-stop-shop for recording,...
 *
 * @link https://spreaker.com
 *
 * @internal
 */
class Spreaker extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://api.spreaker.com/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['spreaker.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) (\preg_match('~spreaker\\.com/show/([^/]+)~i', (string) $url) || \preg_match('~spreaker\\.com/user/([^/]+)(/[^/]+)?~i', (string) $url));
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
