<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins\scanner;

use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\Markup;
/**
 * A scan result which can be persisted to the database.
 * @internal
 */
class ScanEntry
{
    /**
     * The template blockable which caused this scan entry to be found.
     *
     * @var ScannableBlockable
     */
    public $blockable;
    /**
     * The expression of the `host` which is used while found this scan entry. This
     * property is only filled for the scan process itself!
     *
     * @var string[]
     */
    public $expressions = [];
    /**
     * Template identifier for the content blocker.
     *
     * @var string
     */
    public $template = '';
    /**
     * The found blocked URL.
     *
     * @var string
     */
    public $blocked_url;
    /**
     * The found blocked URL (only the host) for grouping purposes.
     *
     * @var string
     */
    public $blocked_url_host;
    /**
     * The found blocked URL as hash to be used as `UNIQUE KEY`.
     *
     * @var string
     */
    public $blocked_url_hash = '';
    /**
     * Markup of the blocked element. This is only set for inline scripts, inline styles
     * and templates with `SelectorSyntaxBlocker`.
     *
     * @var Markup|null
     */
    public $markup;
    /**
     * The blockable HTML tag.
     *
     * @var string
     */
    public $tag;
    /**
     * The blockable HTML attribute.
     *
     * Can be `null`, e.g. inline scripts.
     *
     * @var string
     */
    public $attribute;
    /**
     * The source URL this entry was found.
     *
     * @var string
     */
    public $source_url;
    /**
     * The source URL this entry was found as hash to be used as `UNIQUE KEY`.
     *
     * @var string
     */
    public $source_url_hash;
    /**
     * If `true` no other false-positive mechanisms can modify this scan entry.
     */
    public $lock = \false;
    /**
     * Calculate some fields. This is necessary, so we do not need to always calculate
     * hashes and hosts. Do this before persisting to your database!
     */
    public function calculateFields()
    {
        if (!empty($this->blocked_url)) {
            $this->blocked_url_hash = \md5($this->blocked_url);
            $this->blocked_url_host = \parse_url($this->blocked_url, \PHP_URL_HOST);
            $this->blocked_url_host = \preg_replace('/^www\\./', '', $this->blocked_url_host);
        }
        // In tests this is not set
        // @codeCoverageIgnoreStart
        if (!empty($this->source_url)) {
            $this->source_url_hash = \md5($this->source_url);
        }
        // @codeCoverageIgnoreEnd
    }
    /**
     * Get the ID of this scan entry. In the scanner mechanism multiple scan entries
     * can be found for the same markup. This ID is unique for this scan entry so it can be used
     * together with the static method `deduplicate`.
     *
     * @return string
     */
    public function getId()
    {
        $this->calculateFields();
        return \md5(\json_encode(['blockable' => $this->blockable === null ? \false : $this->blockable->getIdentifier(), 'expressions' => $this->expressions, 'template' => $this->template, 'blocked_url_hash' => $this->blocked_url_hash, 'markup' => $this->markup === null ? \false : $this->markup->getId(), 'tag' => $this->tag, 'attribute' => $this->attribute, 'source_url_hash' => $this->source_url_hash]));
    }
    /**
     * Dedupe scan entries by their ID.
     *
     * @param ScanEntry[] $scanEntries
     * @return ScanEntry[]
     */
    public static function deduplicate($scanEntries)
    {
        $unique = [];
        foreach ($scanEntries as $scanEntry) {
            $unique[$scanEntry->getId()] = $scanEntry;
        }
        return \array_values($unique);
    }
}
