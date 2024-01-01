<?php

/**
 * Deseretnews.php
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
 * Deseretnews Provider
 * In-depth news, analysis and opinion covering Utah and the nation.
 *
 * @link https://deseretnews.com
 * @internal
 */
class Deseretnews extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://embed.deseretnews.com/?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['graphics.deseretnews.com', 'graphics.deseret.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~deseret(news)?\\.com/([^/]+)/(iframe/)?([^/]+)$~i', (string) $url);
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
