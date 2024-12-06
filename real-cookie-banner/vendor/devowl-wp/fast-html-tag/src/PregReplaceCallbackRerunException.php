<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\FastHtmlTag;

use RuntimeException;
/**
 * When thrown we catch this inside `Utils::preg_replace_callback_recursive` and rerun the callback with a modified subject.
 * @internal
 */
class PregReplaceCallbackRerunException extends RuntimeException
{
    /**
     * The subject to rerun the callback with. It gets the following parameters:
     *
     * - `string $subject`
     * - `array $matches`
     * - `array $offsets`
     *
     * @var callable
     */
    private $subject;
    /**
     * C'tor.
     *
     * @param callable $subject
     */
    public function __construct($subject)
    {
        parent::__construct('');
        $this->subject = $subject;
    }
    /**
     * Fetch the new subject.
     *
     * @param string $subject
     * @param array $matches
     * @param array $offsets
     * @return string
     */
    public function fetchNewSubject($subject, $matches, $offsets)
    {
        $fn = $this->subject;
        return $fn($subject, $matches, $offsets);
    }
}
