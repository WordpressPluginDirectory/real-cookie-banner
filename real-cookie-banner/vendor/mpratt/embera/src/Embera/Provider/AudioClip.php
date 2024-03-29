<?php

/**
 * AudioClip.php
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
 * AudioClip Provider
 * I hear joy, audio clip! Meet special audio content for you.
 *
 * @link https://audioclip.naver.com
 *
 * @internal
 */
class AudioClip extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://audioclip.naver.com/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['audioclip.naver.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~audioclip\\.naver\\.com/(channels|audiobooks)/([^/]+)/?(clips/[^/]+)?~i', (string) $url);
    }
    /** inline {@inheritdoc} */
    public function normalizeUrl(Url $url)
    {
        $url->convertToHttps();
        $url->removeQueryString();
        return $url;
    }
}
