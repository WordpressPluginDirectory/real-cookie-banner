<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\FastHtmlTag;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\TagWithContentFinder;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\BlockedResult;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Constants;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\matcher\AbstractMatcher;
/**
 * Allows to block custom elements.
 *
 * @see https://stackoverflow.com/a/22545622/5506547
 * @see https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example)
 * @internal
 */
class CustomElementBlocker extends AbstractPlugin
{
    const HTML_TAG_EXCLUDE = ['font-face'];
    private $customElements = [];
    /**
     * See `AbstractPlugin`.
     *
     * @param BlockedResult $result
     * @param AbstractMatcher $matcher
     * @param AbstractMatch $match
     */
    public function blockedMatch($result, $matcher, $match)
    {
        $tag = $match->getTag();
        if ($result->isBlocked() && !\in_array($tag, self::HTML_TAG_EXCLUDE, \true) && \strpos($tag, '-') !== \false) {
            if (!\in_array($tag, $this->customElements, \true)) {
                $this->customElements[] = $tag;
            }
        }
    }
    /**
     * We are using multiple mechanisms to block custom elements, like selector syntax rule `SelectorSyntaxFinder` or
     * `TagAttributeFinder`. At this time, the match is never a `TagWithContentMatch` and therefore we cannot simply use
     * `->setTag()` in the above `blockedMatch` method. For this, we are setting an invisible attribute on the custom
     * element which we are now cleaning up here and use the `TagWithContentFinder` to find the custom element and set
     * the correct tag e.g. `<mui-avatar` to `<consent-mui-avatar>`.
     *
     * @param string $html
     */
    public function modifyHtmlAfterProcessing($html)
    {
        if (!empty($this->customElements)) {
            $fastHtmlTag = new FastHtmlTag();
            $finder = new TagWithContentFinder($this->customElements, [Constants::HTML_ATTRIBUTE_BLOCKER_ID], \true);
            $finder->addCallback(function ($match) {
                $match->setTag('consent-' . $match->getTag());
            });
            $fastHtmlTag->addFinder($finder);
            $html = $fastHtmlTag->modifyHtml($html);
        }
        return $html;
    }
}
