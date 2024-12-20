<?php

declare (strict_types=1);
namespace DevOwl\RealCookieBanner\Vendor;

$version = $argv[1];
$changelogPath = $argv[2];
$changelogContents = \file_get_contents($changelogPath);
if (\false !== \strpos($changelogContents, $version)) {
    echo "Version {$version} already in {$changelogPath}. Stopping.";
    exit(1);
}
$releaseDate = \date('Y-m-d');
$changelogMatch = '## master';
$changelogReplace = "{$changelogMatch}\nNothing yet\n\n<br>\n\n## {$version} - {$releaseDate}";
\file_put_contents($changelogPath, \str_replace($changelogMatch, $changelogReplace, $changelogContents));
