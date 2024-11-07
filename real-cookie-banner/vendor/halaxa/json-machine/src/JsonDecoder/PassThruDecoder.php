<?php

declare (strict_types=1);
namespace DevOwl\RealCookieBanner\Vendor\JsonMachine\JsonDecoder;

/** @internal */
class PassThruDecoder implements ItemDecoder
{
    public function decode($jsonValue)
    {
        return new ValidResult($jsonValue);
    }
}
