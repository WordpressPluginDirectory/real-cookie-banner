<?php

namespace DevOwl\RealCookieBanner\Vendor\Sabberworm\CSS\Parsing;

/**
 * Thrown if the CSS parser encounters end of file it did not expect.
 *
 * Extends `UnexpectedTokenException` in order to preserve backwards compatibility.
 * @internal
 */
class UnexpectedEOFException extends UnexpectedTokenException
{
}
