<?php

declare (strict_types=1);
namespace DevOwl\RealCookieBanner\Vendor\JsonMachine;

/** @internal */
interface PositionAware
{
    /**
     * Returns a number of processed bytes from the beginning.
     *
     * @return int
     */
    public function getPosition();
}
