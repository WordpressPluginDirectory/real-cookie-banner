<?php

/**
 * SpeakerDeck.php
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
 * SpeakerDeck Provider
 * No description.
 *
 * @link https://speakerdeck.com
 *
 * @internal
 */
class SpeakerDeck extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://speakerdeck.com/oembed.json?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['speakerdeck.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~speakerdeck\\.com/([^/]{2,})/([^/]+)/?$~i', (string) $url);
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
