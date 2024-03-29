<?php

/**
 * CacheAdapter.php
 *
 * @package Embera
 * @author Michael Pratt <yo@michael-pratt.com>
 * @link   http://www.michael-pratt.com/
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace DevOwl\RealCookieBanner\Vendor\Embera\Cache;

use InvalidArgumentException;
/**
 * This class is responsible for holding duplicate logic
 * in the cache class.
 * @internal
 */
abstract class CacheAdapter
{
    /**
     * Obtains multiple cache items by their unique keys.
     *
     * @param iterable $keys    A list of keys that can obtained in a single operation.
     * @param mixed    $default Default value to return for keys that do not exist.
     *
     * @return iterable A list of key => value pairs.
     *
     * @throws InvalidArgumentException
     */
    public function getMultiple($keys, $default = null)
    {
        $return = [];
        foreach ($keys as $k) {
            $return[$k] = $this->get($k, $default);
        }
        return $return;
    }
    /**
     * Persists a set of key => value pairs in the cache, with an optional TTL.
     *
     * @param iterable               $values A list of key => value pairs for a multiple-set operation.
     * @param null|int|\DateInterval $ttl    Optional. The TTL value of this item
     * @return bool
     *
     * @throws InvalidArgumentException
     */
    public function setMultiple($values, $ttl = null)
    {
        foreach ($values as $k => $v) {
            $this->set($k, $v, $ttl);
        }
        return \true;
    }
    /**
     * Deletes multiple cache items in a single operation.
     *
     * @param iterable $keys A list of string-based keys to be deleted.
     * @return bool
     *
     * @throws InvalidArgumentException
     */
    public function deleteMultiple($keys)
    {
        foreach ($keys as $k) {
            $this->delete($k);
        }
        return \true;
    }
    /**
     * Fetches a value from the cache.
     *
     * @param string $key     The unique key of this item in the cache.
     * @param mixed  $default Default value to return if the key does not exist.
     * @return mixed The value of the item from the cache, or $default in case of cache miss.
     *
     * @throws InvalidArgumentException
     */
    public function get($key, $default = null)
    {
        return \true;
    }
    /**
     * Set data in cache.
     *
     * @param string                 $key   The key of the item to store.
     * @param mixed                  $value The value of the item to store. Must be serializable.
     * @param null|int|\DateInterval $ttl   Optional. The TTL value of this item. If no value is sent and
     * @return bool
     *
     * @throws InvalidArgumentException
     */
    public function set($key, $value, $ttl = null)
    {
        return \true;
    }
    /**
     * Delete an item from the cache by its unique key.
     *
     * @param string $key The unique cache key of the item to delete.
     * @return bool
     *
     * @throws InvalidArgumentException
     */
    public function delete($key)
    {
        return \true;
    }
}
