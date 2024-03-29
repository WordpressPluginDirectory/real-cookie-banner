<?php

/**
 * Jovian.php
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
 * Jovian Provider
 * Learn data science &amp; machine learning. Participate in live online courses. Build real-world...
 *
 * @link https://jovian.ml
 * @see https://jovian-py.readthedocs.io/en/latest/jvn/oembed.html
 * @internal
 */
class Jovian extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://api.jovian.ai/oembed.json?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['jovian.ml', 'jovian.ai', 'jovian.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \false;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~jovian\\.(ml|ai|com)/([^/]+)/([^/]+)~i', (string) $url);
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
