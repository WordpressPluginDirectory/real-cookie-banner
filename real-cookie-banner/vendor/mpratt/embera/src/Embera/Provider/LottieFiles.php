<?php

/**
 * LottieFiles.php
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
 * LottieFiles Provider
 * Display lightweight, scalable, and interactive Lottie animations on your websites and apps.
 *
 * @link https://lottiefiles.com
 *
 * @internal
 */
class LottieFiles extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://embed.lottiefiles.com/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['*.lottiefiles.com', '*.lottie.host'];
    /** inline {@inheritdoc} */
    protected $allowedParams = ['maxwidth', 'maxheight'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \false;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~(lottiefiles\\.com|lottie\\.host)/([0-9]+)\\-~i', (string) $url);
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
