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
    private $matches;
    private $offsets;
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
     * Set the matches and offsets.
     *
     * @param string[] $matches
     * @param int[] $offsets
     */
    public function setMatches($matches, $offsets)
    {
        $this->matches = $matches;
        $this->offsets = $offsets;
    }
    /**
     * Fetch the new subject.
     *
     * @param string $subject
     * @return string
     */
    public function fetchNewSubject($subject)
    {
        $fn = $this->subject;
        return $fn($subject, $this->matches, $this->offsets);
    }
}
