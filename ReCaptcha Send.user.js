// ==UserScript==
// @name         ReCaptcha Send
// @namespace    RainbowsBlood
// @version      0.2
// @description  sending Captcha
// @author       RainbowsBlood
// @match        https://gamekit.com/image/star/captcha/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/MrCraftCod/TampermonkeyScripts/master/GamekitImageAutoRate/GamekitImageAutoRate.user.js
// @downloadURL  https://raw.githubusercontent.com/MrCraftCod/TampermonkeyScripts/master/GamekitImageAutoRate/GamekitImageAutoRate.user.js
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
