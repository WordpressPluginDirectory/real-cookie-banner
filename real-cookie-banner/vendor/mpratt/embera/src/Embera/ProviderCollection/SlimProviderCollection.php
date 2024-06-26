<?php

/**
 * SlimProviderCollection.php
 *
 * @package Embera
 * @author Michael Pratt <yo@michael-pratt.com>
 * @link   http://www.michael-pratt.com/
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace DevOwl\RealCookieBanner\Vendor\Embera\ProviderCollection;

/**
 * A slim provider collection with popular oembed providers/sites.
 * There is no criteria for choosing this providers other than my perception of
 * popularity. if you want me to add a "popular" site to this collection
 * please let me know.
 * @internal
 */
class SlimProviderCollection extends ProviderCollectionAdapter
{
    /** inline {@inheritdoc} */
    public function __construct(array $config = [])
    {
        parent::__construct($config);
        $this->registerProvider(['DailyMotion', 'Deviantart', 'Facebook', 'Figma', 'Flickr', 'GettyImages', 'Giphy', 'Instagram', 'Imgur', 'Kickstarter', 'Livestream', 'Reddit', 'Scribd', 'Sketchfab', 'Slideshare', 'SoundCloud', 'SpeakerDeck', 'Spotify', 'Ted', 'Tumblr', 'Twitter', 'Vimeo', 'Wordpress', 'Youtube']);
    }
}
