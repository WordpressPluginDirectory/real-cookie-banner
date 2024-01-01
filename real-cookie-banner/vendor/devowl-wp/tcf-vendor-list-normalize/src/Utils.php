<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\TcfVendorListNormalize;

/**
 * Utility functionalities.
 * @internal
 */
class Utils
{
    /**
     * "Correct" the restrictive purposes (e.g. `global` scope does not allow configurations) of a
     * TCF vendor configuration. It fills `$used` with used declarations.
     *
     * @param string $scope Can be `global` or `service-specific`
     * @param array $vendor The vendor object (including `purposes`, `specialPurposes`, ...)
     * @param array $restrictivePurposes
     * @param array $used Pass an empty array and it will automatically filled with used declarations
     */
    public static function correctRestrictivePurposes($scope, &$vendor, &$restrictivePurposes, &$used)
    {
        // "Correct" the restrictive purposes (e.g. `global` scope does not allow configurations)
        if ($scope === 'global') {
            $restrictivePurposes = ['normal' => (object) [], 'special' => (object) []];
        } else {
            $allPurposes = \array_merge($vendor['purposes'] ?? [], $vendor['legIntPurposes'] ?? []);
            $vendor['purposesAfterRestriction'] = $allPurposes;
            $vendor['specialPurposesAfterRestriction'] = $vendor['specialPurposes'];
            foreach ($restrictivePurposes as $type => &$configs) {
                foreach ($configs as $id => &$config) {
                    if (empty($config)) {
                        continue;
                    }
                    // Purposes existence
                    if ($type === 'normal' && !\in_array($id, $allPurposes, \true)) {
                        unset($configs[$id]);
                        continue;
                    }
                    // Special purposes existence (currently never possible!)
                    if ($type === 'special' && !\in_array($id, $vendor['specialPurposes'], \true)) {
                        unset($configs[$id]);
                        continue;
                    }
                    // Legitimate interest
                    if ($type === 'normal') {
                        $isFlexible = \in_array($id, $vendor['flexiblePurposes'], \true);
                        $isLegInt = \in_array($id, $vendor['legIntPurposes'], \true);
                        $expectedLegInt = $isLegInt ? 'yes' : 'no';
                        if (!$isFlexible || $config['legInt'] === $expectedLegInt) {
                            unset($config['legInt']);
                        }
                    }
                    if ($config['enabled'] === \false) {
                        $deleteFrom = $type === 'normal' ? 'purposesAfterRestriction' : 'specialPurposesAfterRestriction';
                        \array_splice($vendor[$deleteFrom], \array_search($id, $vendor[$deleteFrom], \true), 1);
                    }
                }
            }
        }
        // Make sure both arrays are objects to avoid `[]` typings
        $restrictivePurposes['normal'] = (object) ($restrictivePurposes['normal'] ?? []);
        $restrictivePurposes['special'] = (object) ($restrictivePurposes['special'] ?? []);
        // At the moment, special purposes can not be restricted
        unset($restrictivePurposes['special']);
        // Catch up all used (special) purposes and (special) features so we can calculate stacks
        foreach (Persist::DECLARATION_TYPES as $declaration) {
            $used[$declaration] = \array_unique(\array_merge($used[$declaration] ?? [], $vendor[$declaration . 'AfterRestriction'] ?? $vendor[$declaration] ?? []));
        }
        unset($vendor['purposesAfterRestriction']);
        unset($vendor['specialPurposesAfterRestriction']);
    }
}
