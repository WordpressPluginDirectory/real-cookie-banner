<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\frontend;

use DevOwl\RealCookieBanner\Vendor\DevOwl\CookieConsentManagement\Utils;
use Requests_Cookie;
use Requests_Response_Headers;
use WpOrg\Requests\Cookie;
use WpOrg\Requests\Response\Headers;
/**
 * This class allows you to simulate a call to the REST API which saves consent and check if saving
 * worked as expected. It analyzes the result of the request response when the request failed and
 * returns suggestions, if available.
 * @internal
 */
class SavingConsentViaRestApiEndpointChecker
{
    const ERROR_DIAGNOSTIC_ERROR_CODE = 'errorCode';
    const ERROR_DIAGNOSTIC_RESPONSE_BODY = 'responseBody';
    const ERROR_DIAGNOSTIC_NO_COOKIES = 'noCookies';
    const ERROR_DIAGNOSTIC_COOKIE_PATH = 'cookiePath';
    const ERROR_DIAGNOSTIC_COOKIE_HTTP_ONLY = 'cookieHttpOnly';
    const ERROR_DIAGNOSTIC_REDIRECT = 'redirect';
    const ERROR_DIAGNOSTIC_403_FORBIDDEN_HTACCESS_DENY = '403htaccessDeny';
    const RETRY_IN_SECONDS = 60 * 30;
    const RETRY_IN_SECONDS_WHEN_NON_BLOCKING_REQUEST_STARTED = 20;
    const RETRY_IN_SECONDS_WHEN_OPERATION_TIMED_OUT = 20;
    /**
     * Start time.
     *
     * @var float
     */
    private $start;
    private $requestArguments = ['body' => ['dummy' => \true, 'buttonClicked' => 'main_all', 'decision' => [2 => [3]], 'gcmConsent' => ['ad_storage'], 'tcfString' => 'TCFSTRING=='], 'cookies' => [], 'headers' => [], 'redirection' => 0, 'timeout' => 20, 'sslverify' => \true];
    private $result = ['tests' => [], 'retryAt' => 0, 'allowRetry' => \true];
    /**
     * C'tor.
     */
    public function __construct()
    {
        // Silence is golden.
    }
    /**
     * Pass a cached result of the process and check if a request should be sent again.
     *
     * @param array $cachedResult
     */
    public function shouldInvalidate($cachedResult)
    {
        $result = !\is_array($cachedResult) || !isset($cachedResult['tests']) || \time() > $cachedResult['retryAt'];
        if ($result && \is_array($cachedResult) && isset($cachedResult['allowRetry']) && !$cachedResult['allowRetry']) {
            $this->result['allowRetry'] = \false;
        }
        return $result;
    }
    /**
     * Call this method directly before you do the dummy REST API call.
     *
     * @param string $url The full URL where the POST request gets sent
     * @param boolean $nonBlockingRequestStarted Has a non-blocking request started concurrently which could potentially dead-lock our request?
     */
    public function start($url, $nonBlockingRequestStarted)
    {
        if ($nonBlockingRequestStarted) {
            $this->result['retryAt'] = \time() + self::RETRY_IN_SECONDS_WHEN_NON_BLOCKING_REQUEST_STARTED;
            return \false;
        }
        $this->start = \microtime(\true);
        // Include Basic auth in loopback requests.
        if (isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW'])) {
            $this->requestArguments['headers']['Authorization'] = 'Basic ' . \base64_encode(\wp_unslash($_SERVER['PHP_AUTH_USER']) . ':' . \wp_unslash($_SERVER['PHP_AUTH_PW']));
        }
        // Include all cookies except WordPress login cookies
        foreach ($_COOKIE as $key => $value) {
            // Exclude authentication cookies: https://github.com/WordPress/WordPress/blob/06615abcf77d4e87df3906381f5d362e5eff5943/wp-includes/default-constants.php#L270-L289
            if (!Utils::startsWith($key, 'wordpress_') && !\in_array($key, [
                // Disable existing session as this could lead to errors in loopback requests and lead to the following error:
                // cURL error 28: Operation timed out after 1000 milliseconds with 0 bytes received
                'PHPSESSID',
            ], \true)) {
                // Check for array, as a cookie with `[]` indicates an array, example: `test[]`
                $this->requestArguments['cookies'][$key] = \is_array($value) ? \rawurlencode_deep($value) : \urlencode($value);
            }
        }
        $this->addError($url, []);
        return \true;
    }
    /**
     * Call this method directly after you do the dummy REST API call.
     *
     * Additional arguments:
     *
     * ```
     * string       'htaccess'         The content of the .htaccess file for checks when the response receives a 403 Forbidden error
     * string[]     'internalIps'      An string array of all internal IPs, needed for `htaccess`
     * ```
     *
     * @param string $url
     * @param string $bodyString The response body
     * @param array $headers The response headers
     * @param int $code The response status code
     * @param array $args Additional arguments
     */
    public function received($url, $bodyString, $headers, $code, $args = [])
    {
        $errors = [];
        //$time = microtime(true) - $this->start;
        // The response did not work
        if ($code < 200 || $code > 299) {
            $errors[] = [self::ERROR_DIAGNOSTIC_ERROR_CODE, $code];
            if (!empty($bodyString)) {
                $errors[] = [self::ERROR_DIAGNOSTIC_RESPONSE_BODY, $bodyString];
            }
            // Is the loopback request perhaps blocked by `.htaccess`?
            // Some customers told me that they have denied the own IP as some plugins are doing too
            // many loop back requests.
            $htaccess = $args['htaccess'] ?? \false;
            $internalIps = $args['internalIps'] ?? \false;
            if ($code === 403 && \is_string($htaccess) && \is_array($internalIps) && \count($internalIps) > 0) {
                // Split line by line
                $htaccess = \explode("\n", $htaccess);
                foreach ($htaccess as $line) {
                    foreach ($internalIps as $ip) {
                        if (\strpos($line, $ip) !== \false) {
                            $errors[] = [self::ERROR_DIAGNOSTIC_403_FORBIDDEN_HTACCESS_DENY, $line];
                        }
                    }
                }
            }
            $this->addError($url, $errors);
            return;
        }
        // WordPress backwards-compatibilty 6.1
        if (\class_exists(Headers::class)) {
            $headersInstance = new Headers();
        } else {
            $headersInstance = new Requests_Response_Headers();
        }
        foreach ($headers as $key => $value) {
            $headersInstance[$key] = $value;
        }
        $cookies = self::parseCookiesFromHeaders($headersInstance);
        if (\count($cookies) > 0) {
            // Check for invalid path
            foreach ($cookies as $cookie) {
                $pathIsValid = Utils::startsWith($cookie->attributes['path'] ?? '/', '/');
                if (!$pathIsValid) {
                    $errors[] = [self::ERROR_DIAGNOSTIC_COOKIE_PATH, $cookie->name, $cookie->attributes['path']];
                    break;
                }
            }
            // Check for HttpOnly flag
            foreach ($cookies as $cookie) {
                if ($cookie->attributes['httponly'] ?? \false) {
                    $errors[] = [self::ERROR_DIAGNOSTIC_COOKIE_HTTP_ONLY, $cookie->name];
                    break;
                }
            }
        } else {
            $errors[] = [self::ERROR_DIAGNOSTIC_NO_COOKIES];
        }
        // Check for a `Location` redirect
        $location = $headersInstance->getValues('Location');
        if (!empty($location)) {
            $errors[] = [self::ERROR_DIAGNOSTIC_REDIRECT, $location[0]];
        }
        // For testing purposes
        /*$errors[] = [self::ERROR_DIAGNOSTIC_ERROR_CODE, 500];
          $errors[] = [self::ERROR_DIAGNOSTIC_RESPONSE_BODY, 'This request is blocked'];
          $errors[] = [self::ERROR_DIAGNOSTIC_NO_COOKIES];
          $errors[] = [self::ERROR_DIAGNOSTIC_COOKIE_PATH, 'my_cookie', 'httpss://'];
          $errors[] = [self::ERROR_DIAGNOSTIC_COOKIE_HTTP_ONLY, 'my_cookie'];
          $errors[] = [self::ERROR_DIAGNOSTIC_REDIRECT, 'https://example.com'];*/
        $this->addError($url, $errors);
    }
    /**
     * Get the result which you can persist to your database.
     */
    public function teardown()
    {
        $this->result['retryAt'] = \time() + self::RETRY_IN_SECONDS;
        $foundError = \false;
        foreach ($this->result['tests'] as $errors) {
            if (\count($errors) > 0) {
                $foundError = \true;
                break;
            }
        }
        if ($this->result['allowRetry']) {
            // Special case: cURL error 28: Operation timed out
            foreach ($this->result['tests'] as $errors) {
                foreach ($errors as $error) {
                    if (\is_string($error) && \stripos($error, 'cURL error 28: Operation timed out') !== \false) {
                        $this->result['allowRetry'] = \false;
                        $this->result['retryAt'] = \time() + self::RETRY_IN_SECONDS_WHEN_OPERATION_TIMED_OUT;
                        $this->result['tests'] = [];
                        break;
                    }
                }
            }
        } elseif (!$foundError) {
            $this->result['allowRetry'] = \true;
        }
        return $this->result;
    }
    /**
     * Add custom error to the tests if you e.g. want to add network errors.
     *
     * @param string $url
     * @param string|string[] $error
     */
    public function addError($url, $error)
    {
        // Save the URL base64-encoded so no search & replace destroys the value in the database
        $url = \base64_encode($url);
        $this->result['tests'][$url] = $error;
    }
    /**
     * Setter.
     *
     * @param string $key
     * @param mixed $value
     * @codeCoverageIgnore
     */
    public function setRequestArgument($key, $value)
    {
        $this->requestArguments[$key] = $value;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getRequestArguments()
    {
        return $this->requestArguments;
    }
    /**
     * Parse the `Set-cookie` headers to a valid `Cookie` instance, but only the cookies starting with `real_cookie_banner`.
     *
     * @param Headers $headers
     * @see https://github.com/WordPress/Requests/blob/47a1b69b618b136bdbd98af693cc73b850b78808/src/Cookie.php#L487-L495
     * @return Cookie[]
     */
    protected static function parseCookiesFromHeaders($headers)
    {
        $cookieHeaders = Utils::array_flatten($headers->getValues('Set-Cookie'));
        if (empty($cookieHeaders)) {
            return [];
        }
        $cookies = [];
        foreach ($cookieHeaders as $header) {
            // WordPress backwards-compatibilty 6.1
            if (\class_exists(Cookie::class)) {
                $parsed = Cookie::parse($header, '', null);
            } else {
                $parsed = Requests_Cookie::parse($header, '', null);
            }
            if (Utils::startsWith($parsed->name, 'real_cookie_banner')) {
                $cookies[] = $parsed;
            }
        }
        return $cookies;
    }
}
