// ==UserScript==
// @name         ReCaptchaSend
// @namespace    RainbowsBlood
// @version      0.2
// @description  sending Captcha
// @author       RainbowsBlood
// @match        https://gamekit.com/image/star/captcha/
// @grant        none
// @updateURL    https://github.com/RainbowsBlood/ReCaptchaSend/raw/master/ReCaptcha%20Send.user.js
// @downloadURL  https://github.com/RainbowsBlood/ReCaptchaSend/raw/master/ReCaptchaSend.user.js
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
