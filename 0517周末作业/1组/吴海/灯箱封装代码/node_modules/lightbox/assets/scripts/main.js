'use strict';

var $        = window.jQuery ? window.jQuery : require('jquery'),
    Lightbox = require('./lightbox');

var lightbox = new Lightbox();

if (!window.lightbox)
    window.lightbox = lightbox;

$(function () {

    var $body = $('body');

    $body.append(require('./../templates/lightbox.handlebars')());

    $.extend(lightbox, {
        $over:    $('#lightbox-over'),
        $inner:   $('#lightbox-inner'),
        $loader:  $('#lightbox-loader'),
        $content: $('#lightbox-content'),
        $page:    $body.children()
    });

    $('[data-lightbox-path]').each(function () {
        var $this                                          = $(this);
        lightbox.localContent[$this.data('lightbox-path')] = $this.html();
        $this.remove();
    });

    $(window).resize(function () {
        lightbox.isDesktop = $(window).width() > 767;
    });

    $(document).on({
        click: function (e) {
            var $link  = $(this);
            var target = $link.attr('href');
            lightbox.load_content(target);

            e.preventDefault();
        }
    }, 'a[target="lightbox"]');

    $(document).on({
        submit: function (e) {
            e.preventDefault();
            var $form         = $(this);
            var fieldworkForm = $form.data('fw-form');
            var mockEvent     = {
                proceed:        true,
                preventDefault: function () {
                    this.proceed = false;
                }
            };
            if (fieldworkForm)
                fieldworkForm.submit(mockEvent);
            if (!fieldworkForm || mockEvent.proceed) {
                var action = $form.attr('action');
                lightbox.load_content(action, {
                    url:    action,
                    method: $form.attr('method'),
                    data:   $form.serialize()
                });
                $form.find('[type="submit"]').attr('disabled', 'disabled');
            }
        }
    }, 'form[target="lightbox"]');

    $(document).on({
        click: function (e) {
            lightbox.close();
            if ($(e.target).attr('href') == '#')
                e.preventDefault();
        }
    }, '.action-lightbox-close');

    $(document).on({
        click: function (e) {
            lightbox.closePending();
            if ($(e.target).attr('href') == '#')
                e.preventDefault();
        }
    }, '.action-lightbox-close-pending');
});

module.exports = lightbox;