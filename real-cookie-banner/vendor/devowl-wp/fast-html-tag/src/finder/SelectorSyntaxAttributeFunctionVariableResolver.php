<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag\finder;

/** @internal */
interface SelectorSyntaxAttributeFunctionVariableResolver
{
    /**
     * Getter.
     *
     * @return string[]
     */
    public function getVariables();
    /**
     * Getter.
     *
     * @param string $variableName
     * @param mixed $default
     * @return string
     */
    public function getVariable($variableName, $default = '');
}
