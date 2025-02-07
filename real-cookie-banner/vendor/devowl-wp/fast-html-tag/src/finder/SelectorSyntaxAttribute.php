<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\AbstractMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\Utils;
/**
 * An attribute definition for `SelectorSyntaxFinder` with attribute name, operator
 * and the requested value.
 * @internal
 */
class SelectorSyntaxAttribute
{
    private $finder;
    private $attribute;
    private $comparator;
    private $value;
    /**
     * Functions.
     *
     * @var SelectorSyntaxAttributeFunction[]
     */
    private $functions = [];
    const COMPARATOR_EXISTS = 'EXISTS';
    const COMPARATOR_EQUAL = '=';
    const COMPARATOR_CONTAINS = '*=';
    const COMPARATOR_STARTS_WITH = '^=';
    const COMPARATOR_ENDS_WITH = '$=';
    const COMPARATOR_REGULAR_EXPRESSION = '//=';
    const ALLOWED_COMPARATORS = [self::COMPARATOR_EQUAL, self::COMPARATOR_CONTAINS, self::COMPARATOR_STARTS_WITH, self::COMPARATOR_ENDS_WITH, self::COMPARATOR_REGULAR_EXPRESSION];
    /**
     * C'tor.
     *
     * @param SelectorSyntaxFinder $finder
     * @param string $attribute
     * @param string $comparator
     * @param string $value
     * @param string $functions
     */
    public function __construct($finder, $attribute, $comparator, $value, $functions)
    {
        $this->finder = $finder;
        $this->attribute = $attribute;
        $this->comparator = $comparator;
        $this->value = $value;
        if (!empty($functions)) {
            $this->functions = SelectorSyntaxAttributeFunction::fromExpression($this, $functions);
        }
    }
    /**
     * Checks if the current attribute and value matches the comparator.
     *
     * @param string $value
     */
    public function matchesComparator($value)
    {
        // Special case: When we search for a value with quotes, we should revert the decoding of the quotes of the passed `$value`
        if ($this->value !== null && \strpos($this->value, '&quot;') !== \false) {
            $value = \str_replace('"', '&quot;', $value);
        }
        switch ($this->comparator) {
            case self::COMPARATOR_EXISTS:
                return $value !== null;
            case SelectorSyntaxAttribute::COMPARATOR_EQUAL:
                return $value === $this->getValue();
            case SelectorSyntaxAttribute::COMPARATOR_CONTAINS:
                return $value !== null && \strpos($value, $this->getValue()) !== \false;
            case SelectorSyntaxAttribute::COMPARATOR_STARTS_WITH:
                return Utils::startsWith($value, $this->getValue());
            case SelectorSyntaxAttribute::COMPARATOR_ENDS_WITH:
                return Utils::endsWith($value, $this->value);
            case SelectorSyntaxAttribute::COMPARATOR_REGULAR_EXPRESSION:
                return \is_string($value) && \preg_match(\sprintf('/%s/', $this->getValue()), $value) > 0;
            // @codeCoverageIgnoreStart
            default:
                return \false;
        }
    }
    /**
     * Loose comparator that does not check for the exact value but only for the presence of the attribute and value.
     *
     * @param string $str
     */
    public function matchesComparatorLoose($str)
    {
        switch ($this->comparator) {
            case self::COMPARATOR_EXISTS:
                return \strpos($str, $this->attribute) !== \false;
            case SelectorSyntaxAttribute::COMPARATOR_EQUAL:
            case SelectorSyntaxAttribute::COMPARATOR_STARTS_WITH:
            case SelectorSyntaxAttribute::COMPARATOR_CONTAINS:
            case SelectorSyntaxAttribute::COMPARATOR_ENDS_WITH:
                return \is_string($this->attribute) && \is_string($this->value) && \strpos($str, $this->attribute) !== \false && \strpos($str, $this->value) !== \false;
            case SelectorSyntaxAttribute::COMPARATOR_REGULAR_EXPRESSION:
                return \true;
            // @codeCoverageIgnoreStart
            default:
                return \false;
        }
    }
    /**
     * Checks if the current attribute satisfies the passed functions.
     *
     * @param AbstractMatch $match
     */
    public function satisfiesFunctions($match)
    {
        foreach ($this->functions as $fn) {
            if (!$fn->execute($match)) {
                return \false;
            }
        }
        return \true;
    }
    /**
     * Getter.
     */
    public function getAttribute()
    {
        return $this->attribute;
    }
    /**
     * Getter.
     */
    public function getComparator()
    {
        return $this->comparator;
    }
    /**
     * Getter.
     */
    public function getValue()
    {
        return $this->value;
    }
    /**
     * Getter.
     */
    public function getFinder()
    {
        return $this->finder;
    }
    /**
     * Getter.
     */
    public function getFunctions()
    {
        return $this->functions;
    }
    /**
     * Setter.
     *
     * @param SelectorSyntaxFinder $finder
     */
    public function setFinder($finder)
    {
        $this->finder = $finder;
    }
}
