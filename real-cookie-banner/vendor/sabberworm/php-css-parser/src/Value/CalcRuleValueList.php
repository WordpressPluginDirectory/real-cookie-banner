<?php

namespace DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\Value;

use DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\OutputFormat;
/** @internal */
class CalcRuleValueList extends RuleValueList
{
    /**
     * @param int $iLineNo
     */
    public function __construct($iLineNo = 0)
    {
        parent::__construct(',', $iLineNo);
    }
    /**
     * @return string
     */
    public function render(OutputFormat $oOutputFormat)
    {
        return $oOutputFormat->implode(' ', $this->aComponents);
    }
}
