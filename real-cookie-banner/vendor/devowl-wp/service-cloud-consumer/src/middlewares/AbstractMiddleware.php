<?php

namespace DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\middlewares;

use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\consumer\ServiceCloudConsumer;
use DevOwl\RealCookieBanner\Vendor\DevOwl\ServiceCloudConsumer\templates\AbstractTemplate;
/**
 * Abstract implementation of a middleware for templates.
 * @internal
 */
abstract class AbstractMiddleware
{
    private $consumer;
    private $suspended = \false;
    /**
     * C'tor.
     *
     * @param ServiceCloudConsumer $consumer
     */
    public function __construct($consumer)
    {
        $this->consumer = $consumer;
    }
    /**
     * Allows to suspend or resume the middleware to take effect. This is efficient
     * if a middleware could be called recursively.
     *
     * @param boolean $state
     */
    public function suspend($state)
    {
        $old = $this->suspended;
        $this->suspended = $state;
        return $old;
    }
    /**
     * Check if the middleware is suspended.
     */
    public function isSuspended()
    {
        return $this->suspended;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getConsumer()
    {
        return $this->consumer;
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getVariableResolver()
    {
        return $this->getConsumer()->getVariableResolver();
    }
    /**
     * Disallow the creation of a service in the scanner. Additionally, you can add a message to the
     * consumer data which is shown to the user. The user can only acknowledge to the message and not create the service.
     *
     * @param AbstractTemplate $template
     * @param string[] $paragraphs
     * @param string[] $accordion A list of accordions with key as headline and value as message.
     * @param string $buttonLabel The label of the button.
     * @param string $buttonAction The action of the button, can be "ignore", "create" or "close".
     */
    protected function applyAcknowledgementMode($template, $paragraphs = [], $accordion = null, $buttonLabel = null, $buttonAction = null)
    {
        $template->consumerData['acknowledgement'] = ['paragraphs' => \array_values(\array_filter($paragraphs)), 'accordion' => $accordion, 'buttonLabel' => $buttonLabel, 'buttonAction' => $buttonAction];
    }
}
