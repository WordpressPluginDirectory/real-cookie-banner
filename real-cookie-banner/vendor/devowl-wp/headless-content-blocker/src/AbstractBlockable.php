<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\SelectorSyntaxMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxAttributeFunctionVariableResolver;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\SelectorSyntaxFinder;
/**
 * Describe a blockable item by selector syntax and regular expressions (e.g. to be used in `href` and `src`).
 * @internal
 */
abstract class AbstractBlockable implements SelectorSyntaxAttributeFunctionVariableResolver
{
    /**
     * See `SelectorSyntaxFinder`.
     *
     * @var SelectorSyntaxFinder[]
     */
    private $selectorSyntaxFinder = [];
    private $regexp = ['wildcard' => [], 'contains' => []];
    private $headlessContentBlocker;
    /**
     * Original rules from string rules.
     *
     * @var string[]
     */
    private $originalExpressions = [];
    /**
     * Variables can be passed as rule in format `:$myVar=...` and can be reused in selector syntax function arguments.
     *
     * @var string[]
     */
    private $variables = [];
    /**
     * C'tor.
     *
     * @param HeadlessContentBlocker $headlessContentBlocker
     */
    public function __construct($headlessContentBlocker)
    {
        $this->headlessContentBlocker = $headlessContentBlocker;
    }
    /**
     * Generate the custom element blockers and regular expressions and append
     * it to this blockable instance.
     *
     * @param string[] $blockers
     */
    public function appendFromStringArray($blockers)
    {
        // @codeCoverageIgnoreStart
        if (!\is_array($blockers)) {
            return;
        }
        // @codeCoverageIgnoreEnd
        // Filter out custom element expressions and variables
        foreach ($blockers as $idx => &$line) {
            $line = $this->headlessContentBlocker->runBlockableStringExpressionCallback($line, $this);
            // https://regex101.com/r/TfcqVi/1
            if (Utils::startsWith($line, ':$') && \preg_match('/^:\\$(\\w+)\\s*=(.*)$/m', $line, $matches)) {
                $this->variables[$matches[1]] = $matches[2];
                unset($blockers[$idx]);
                continue;
            }
            $selectorSyntaxFinder = SelectorSyntaxFinder::fromExpression($line);
            if ($selectorSyntaxFinder !== \false) {
                foreach ($selectorSyntaxFinder->getAttributes() as $attr) {
                    foreach ($attr->getFunctions() as $fn) {
                        $fn->setVariableResolver($this);
                    }
                }
                $selectorSyntaxFinder->setFastHtmlTag($this->headlessContentBlocker);
                unset($blockers[$idx]);
                $this->selectorSyntaxFinder[] = $selectorSyntaxFinder;
                $this->originalExpressions[] = $line;
            }
        }
        foreach ($blockers as $expression) {
            $this->regexp['wildcard'][$expression] = Utils::createRegexpPatternFromWildcardName($expression);
            $this->originalExpressions[] = $expression;
        }
        // Force to wildcard all hosts look like a `contains`
        foreach ($blockers as $host) {
            $this->regexp['contains'][$host] = Utils::createRegexpPatternFromWildcardName('*' . $host . '*');
        }
    }
    /**
     * Find a `SyntaxSelectorFinder` for a given `AbstractMatch`.
     *
     * @param AbstractMatch $match
     */
    public function findSelectorSyntaxFinderForMatch($match)
    {
        foreach ($this->getSelectorSyntaxFinder() as $selectorSyntaxFinder) {
            /**
             * The match to use
             *
             * @var SelectorSyntaxMatch
             */
            $useMatch = null;
            if ($match instanceof SelectorSyntaxMatch) {
                // @codeCoverageIgnoreStart
                $useMatch = $match;
                // @codeCoverageIgnoreEnd
            } elseif (\count($match->getAttributes()) > 0) {
                $useMatch = new SelectorSyntaxMatch($selectorSyntaxFinder, $match->getOriginalMatch(), $match->getTag(), $match->getAttributes(), \array_keys($match->getAttributes())[0]);
            } else {
                // It can never `matchesAttributes` as we do not have any attribute
                return null;
            }
            if ($selectorSyntaxFinder->getTag() === $useMatch->getTag()) {
                if ($selectorSyntaxFinder->matchesAttributes($useMatch->getAttributes(), $useMatch)) {
                    return $selectorSyntaxFinder;
                }
            }
        }
        return null;
    }
    /**
     * Get the blocker ID. This is added as a custom HTML attribute to the blocked
     * element so your frontend can e.g. add a visual content blocker.
     *
     * @return int|string|null
     */
    public abstract function getBlockerId();
    /**
     * Get required IDs. This is added as a custom HTML attribute to the blocked
     * element so your frontend can determine which items by ID are needed so the
     * item can be unblocked.
     *
     * @return (int|string)[]
     */
    public abstract function getRequiredIds();
    /**
     * The criteria type. This is added as a custom HTML attribute to the blocked
     * element so your frontend can determine the origin for the `getRequiredIds`.
     * E.g. differ between TCF vendors and another custom criteria.
     *
     * @return string
     */
    public abstract function getCriteria();
    /**
     * Determine if this blockable should be blocked.
     */
    public function hasBlockerId()
    {
        return $this->getBlockerId() !== null;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getSelectorSyntaxFinder()
    {
        return $this->selectorSyntaxFinder;
    }
    /**
     * Getter.
     *
     * @return string[]
     */
    public function getRegularExpressions()
    {
        return $this->regexp['wildcard'] ?? [];
    }
    /**
     * Getter.
     *
     * @return string[]
     */
    public function getContainsRegularExpressions()
    {
        return $this->regexp['contains'] ?? [];
    }
    /**
     * Getter.
     *
     * @return string[]
     */
    public function getOriginalExpressions()
    {
        return $this->originalExpressions;
    }
    // Documented in SelectorSyntaxAttributeFunctionVariableResolver
    // @codeCoverageIgnoreStart
    public function getVariables()
    {
        return $this->variables;
    }
    // @codeCoverageIgnoreEnd
    // Documented in SelectorSyntaxAttributeFunctionVariableResolver
    public function getVariable($variableName, $default = '')
    {
        return $this->variables[$variableName] ?? $default;
    }
}
