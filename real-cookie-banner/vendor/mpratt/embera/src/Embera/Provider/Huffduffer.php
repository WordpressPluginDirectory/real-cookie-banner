<?php

/**
 * Huffduffer.php
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
 * Huffduffer Provider
 * Create your own podcast: find links to audio files on the Web; huffduff the links (add them to ...
 *
 * @link https://huffduffer.com
 *
 * @internal
 */
class Huffduffer extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://huffduffer.com/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['huffduffer.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~huffduffer\\.com/(?:[^/]+)/(?:[0-9]+)/?$~i', (string) $url);
    }
    /** inline {@inheritdoc} */
    public function normalizeUrl(Url $url)
    {
        $url->convertToHttps();
        $url->removeQueryString();
        return $url;
    }
}
