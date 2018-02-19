// ==UserScript==
// @name         ReCaptcha Send
// @namespace    Gorazd
// @version      0.1
// @description  sending Captcha
// @author       Gorazd
// @match        https://gamekit.com/image/star/captcha/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        setTimeout(function Send()
                   {
            var button = $('#google_recaptcha_send');
            if(!button || button === null || button === undefined)
                setTimeout(Send, 100);
            else
                button.click();
        }, 10000);
    })();