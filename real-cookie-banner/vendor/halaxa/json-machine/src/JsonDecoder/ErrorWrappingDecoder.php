<?php

declare (strict_types=1);
namespace DevOwl\RealCookieBanner\Vendor\JsonMachine\JsonDecoder;

/** @internal */
class ErrorWrappingDecoder implements ItemDecoder
{
    /**
     * @var ItemDecoder
     */
    private $innerDecoder;
    public function __construct(ItemDecoder $innerDecoder)
    {
        $this->innerDecoder = $innerDecoder;
    }
    public function decode($jsonValue)
    {
        $result = $this->innerDecoder->decode($jsonValue);
        if (!$result->isOk()) {
            return new ValidResult(new DecodingError($jsonValue, $result->getErrorMessage()));
        }
        return $result;
    }
}
