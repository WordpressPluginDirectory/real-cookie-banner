<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\plugins;

use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractBlockable;
use DevOwl\RealCookieBanner\Vendor\DevOwl\HeadlessContentBlocker\AbstractPlugin;
/**
 * Allows to sort blockables by multiple criteria. Blockables are applied from top to bottom, so the first blockable
 * has the highest priority. This is useful for the blocking mechanism itself as the first matching blockable blocks
 * the content. On the other hand, when using the scanner, multiple blockables can be applied to the same content.
 * @internal
 */
class BlockablesSorter extends AbstractPlugin
{
    private $sorters = [];
    /**
     * See `AbstractPlugin`.
     */
    public function init()
    {
        $this->addSorter([$this, 'byPriority']);
    }
    /**
     * See `AbstractPlugin`.
     *
     * @param AbstractBlockable[] $blockables
     * @return AbstractBlockable[]
     */
    public function modifyBlockables($blockables)
    {
        \usort($blockables, function ($a, $b) {
            // Sort by all available sorters
            foreach ($this->sorters as $sorter) {
                $result = $sorter[1]($a, $b);
                if ($result !== 0) {
                    return $result;
                }
            }
            return 0;
        });
        return $blockables;
    }
    /**
     * Add a sorter to the sorter array. See class description for more details.
     *
     * @param callable $sorter Arguments: `AbstractBlockable $a, AbstractBlockable $b`
     * @param int $priority
     */
    public function addSorter($sorter, $priority = 10)
    {
        $this->sorters[] = [$priority, $sorter];
        // Sort the sorters array by priority ascending
        \usort($this->sorters, function ($a, $b) {
            // in our tests we only have one sorter and therefore the callback is not executed
            // @codeCoverageIgnoreStart
            return $a[0] - $b[0];
            // @codeCoverageIgnoreEnd
        });
    }
    /**
     * Sorter by blockable priority (see `AbstractBlockable::getPriority()`).
     *
     * @param AbstractBlockable $a
     * @param AbstractBlockable $b
     * @return int
     */
    public static function byPriority($a, $b)
    {
        return $a->getPriority() - $b->getPriority();
    }
}
