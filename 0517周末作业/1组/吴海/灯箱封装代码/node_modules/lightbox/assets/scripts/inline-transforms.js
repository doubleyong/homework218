'use strict';

var closeButtonTemplate = require('./../templates/closebutton.handlebars');

module.exports = {

    /**
     * Sets the width of the lightbox
     *
     * @param lightbox
     * @param value
     */
    'lightbox-content-width': function (lightbox, value) {
        if (lightbox.isDesktop) {
            lightbox.$inner
                .width(value)
                .find('> div').innerWidth(value);
        }
    },

    /**
     * Adds custom classes to the lightbox
     *
     * @param lightbox
     * @param value
     */
    'lightbox-custom-classes': function (lightbox, value) {
        lightbox.$inner.addClass(value);
    },

    /**
     * Displays a close button in the top right of the lightbox
     *
     * @param lightbox
     * @param value
     */
    'lightbox-close-button': function (lightbox, value) {
        if (value === 'false' || value === false)
            return;
        var closeButton = closeButtonTemplate();
        lightbox.$content.prepend(closeButton);
    }
};