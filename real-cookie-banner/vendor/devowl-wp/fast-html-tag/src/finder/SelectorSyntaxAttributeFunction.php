<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder;

use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder\match\SelectorSyntaxMatch;
use DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\Utils;
/**
 * An function definition for `SelectorSyntaxAttribute` with function name and parsed arguments.
 * @internal
 */
class SelectorSyntaxAttributeFunction
{
    /**
     * Variables can be resolved in argument values with `{{ .myVar }}`.
     *
     * @see https://regex101.com/r/wKi38x/3
     */
    const VARIABLE_TEMPLATE_REGEXP = '/{{\\s*\\.([-_\\w]+)\\s*}}/m';
    private $attribute;
    private $name;
    private $arguments;
    /**
     * A variable resolver for the arguments.
     *
     * @var SelectorSyntaxAttributeFunctionVariableResolver
     */
    private $variableResolver;
    /**
     * C'tor.
     *
     * @param SelectorSyntaxAttribute $attribute
     * @param string $name
     * @param string[] $arguments
     */
    public function __construct($attribute, $name, $arguments)
    {
        $this->attribute = $attribute;
        $this->name = $name;
        $this->arguments = $arguments;
    }
    /**
     * Execute the function with registered functions.
     *
     * @param SelectorSyntaxMatch $match
     */
    public function execute($match)
    {
        $functionCallback = $this->getFinder()->getFastHtmlTag()->getSelectorSyntaxFunction($this->name);
        if (\is_callable($functionCallback)) {
            return $functionCallback($this, $match, $match->getAttribute($this->getAttributeName()));
        }
        return \true;
    }
    /**
     * Expose variables from the variable resolver on the argument values once when we want to access the argument.
     */
    protected function exposeVariablesToArgumentValues()
    {
        if ($this->variableResolver !== null) {
            // Arguments can be also an array, e.g. `key[]=val1&key[]=val2`
            \array_walk_recursive($this->arguments, function (&$val) {
                if (\strpos($val, '{{') !== \false) {
                    $val = \preg_replace_callback(self::VARIABLE_TEMPLATE_REGEXP, function ($m) {
                        return $this->getVariableResolver()->getVariable($m[1]);
                    }, $val);
                }
            });
        }
    }
    /**
     * Get argument by name.
     *
     * @param string $argument
     * @param mixed $default
     */
    public function getArgument($argument, $default = null)
    {
        return $this->getArguments()[$argument] ?? $default;
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
    public function getAttributeName()
    {
        return $this->attribute->getAttribute();
    }
    /**
     * Getter.
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * Getter.
     */
    public function getArguments()
    {
        $this->exposeVariablesToArgumentValues();
        return $this->arguments;
    }
    /**
     * Getter.
     */
    public function getFinder()
    {
        return $this->getAttribute()->getFinder();
    }
    /**
     * Getter.
     */
    public function getVariableResolver()
    {
        return $this->variableResolver;
    }
    /**
     * Setter.
     *
     * @param SelectorSyntaxAttributeFunctionVariableResolver $variableResolver
     */
    public function setVariableResolver($variableResolver)
    {
        $this->variableResolver = $variableResolver;
    }
    /**
     * Convert a string expression to multiple function instances.
     *
     * Example: `matchUrls(arg1=test),another()`;
     *
     * @param SelectorSyntaxAttribute $attribute
     * @param string $expression
     * @return SelectorSyntaxAttributeFunction[]
     */
    public static function fromExpression($attribute, $expression)
    {
        $result = [];
        if (\is_string($expression)) {
            $splitExpression = \explode('),', $expression);
            foreach ($splitExpression as $expr) {
                $functionName = \explode('(', $expr, 2);
                if (isset($functionName[0])) {
                    $arguments = \preg_replace('/\\)$/m', '', $functionName[1] ?? '');
                    $functionName = \trim($functionName[0]);
                    $argsArray = [];
                    if (!empty($arguments)) {
                        $argsArray = Utils::isJson($arguments);
                        if ($argsArray === \false) {
                            \parse_str($arguments, $parseStr);
                            $argsArray = $parseStr;
                        }
                    }
                    $result[] = new SelectorSyntaxAttributeFunction($attribute, $functionName, $argsArray);
                }
            }
        }
        return $result;
    }
}
