<?php

declare (strict_types=1);
namespace DevOwl\RealCookieBanner\Vendor;

require_once __DIR__ . '/../../vendor/autoload.php';
$client = new \DevOwl\RealCookieBanner\Vendor\GuzzleHttp\Client();
$response = $client->request('GET', 'https://httpbin.org/anything?key=value');
// Gets PHP stream resource from Guzzle stream
$phpStream = \DevOwl\RealCookieBanner\Vendor\GuzzleHttp\Psr7\StreamWrapper::getResource($response->getBody());
foreach (\DevOwl\RealCookieBanner\Vendor\JsonMachine\Items::fromStream($phpStream) as $key => $value) {
    \var_dump([$key, $value]);
}
