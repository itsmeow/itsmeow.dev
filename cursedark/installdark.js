var onClickFunction = function() {
    fadeOut(document.getElementById('darktitle'), showBrowserButton);
    //fadeOut(document.getElementById('installbutton'), showBrowserButton);
};

function onClick() {
    if(onClickFunction != null) {
        onClickFunction();
    }
}

function showBrowserButton() {
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    instb = document.getElementById('installbutton');
    if(!isFirefox && !isChrome) {
        instb.style.display = "none";
        document.getElementById('notification-dark-theme').innerHTML = "<div class=\"bottom-text-nice\" style=\"top:45%;color:#cccccc;font-weight:bold;\">Unsupported browser. Supported browsers: Firefox and Chrome</div>"
    } else {
        instb.style.fontSize = "1.2rem";
        instb.innerHTML = "Install " + (isFirefox ? "(Firefox)" : "(Chrome)");
        if(isFirefox) {
            document.getElementById('notification-dark-theme').innerHTML = "<a class=\"bottom-text-nice\" target=\"blank\" href=\"https://addons.mozilla.org/en-US/firefox/addon/styl-us/\">Stylus on Firefox Addon Store</a>"
        }
        onClickFunction = function(){
            setTimeout(updateButtonToUsercss, 1000);
            if(isFirefox) {
                window.location='https://addons.mozilla.org/firefox/downloads/file/3374955/stylus-1.5.5-fx.xpi?src=dp-btn-primary';
            } else if(isChrome) {
                window.open('https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne', '_blank');
            }
        };
    }
}

function updateButtonToUsercss() {
    instb = document.getElementById('installbutton');
    instb.style.fontSize = "1rem";
    instb.innerHTML = "Install Stylus User CSS Theme";
    onClickFunction = installUsercss;
}

function installUsercss() {
    window.open('curse-dark.user.css', '_blank');
    instb.innerHTML = "Done";
    onClickFunction = function() {location.reload();};
}

function fadeOut(element, onComplete) {
    var fadeEffect = setInterval(function () {
        if (!element.style.opacity) {
            element.style.opacity = 1;
        }
        if (element.style.opacity > 0) {
            element.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            if(onComplete != null) {
                onComplete();
            }
        }
    }, 20);
}