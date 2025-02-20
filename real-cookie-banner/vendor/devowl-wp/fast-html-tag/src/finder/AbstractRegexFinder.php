<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\Utils;
/**
 * Find by regular expression.
 * @internal
 */
abstract class AbstractRegexFinder extends AbstractFinder
{
    const DISABLE_CURRENT_TAG_PLACEHOLDER = 'AbstractRegexFinder$#disableCurrentTag';
    /**
     * Get regular expression.
     *
     * @param string $html
     */
    public abstract function getRegularExpression();
    /**
     * A regexp match got found. Let's create a `AbstractMatch` instance.
     *
     * @param array $m
     * @return AbstractMatch|false|string Returns `false` if no match got found and we cannot process it. Return a string if you want to return that string to the caller.
     */
    protected abstract function createMatch($m);
    /**
     * See `AbstractFinder`.
     *
     * @param string $html
     */
    public function replace($html)
    {
        $regexResult = Utils::preg_replace_callback_recursive($this->getRegularExpression(), function ($m) {
            $match = $this->createMatch($m);
            $this->applyCallbacks($match);
            if ($match === \false) {
                return $m[0];
            } elseif (\is_string($match)) {
                return $match;
            } elseif (!$match->isOmitted()) {
                return $match->render();
            } else {
                return '';
            }
        }, $html);
        // Replace the placeholder with the original tag
        return \str_replace(self::DISABLE_CURRENT_TAG_PLACEHOLDER, '', $regexResult);
    }
    /**
     * Ghost the current tag by replacing its tag with a placeholder which never matches a regular expression
     * again. This is useful for e.g. `TagWithContentFinder` to find nested components.
     *
     * @param string $html
     */
    protected function ghostCurrentTag($html)
    {
        return \sprintf('<%s%s', self::DISABLE_CURRENT_TAG_PLACEHOLDER, \substr($html, 1));
    }
}
