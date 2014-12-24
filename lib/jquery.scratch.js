/*!
    Scratch Framework (https://github.com/nikoloza/Scratch)
    Nika Tomadze (@nnikoloza)
    nika.tomadze@gmail.com

    -----
    Use grunt for linting your javascript.
    You need to install npm: 'grunt-contrib-jshint'
    and 'grunt-stylish' for stylish error reportings

    -----
    Use grunt to join js files.
    You need to install npm: grunt-contrib-concat

    -----
    Use grunt to minify js files.
    You need to install npm: grunt-contrib-uglify
*/

$(function(){

    $('html').removeClass('no-js');

    /* guess older IE
    ---------------------------------------------- */
        function ie(v) {
            var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
            return r.test(navigator.userAgent);
        }

        if (ie(10)) $('html').addClass('IE IE10');
        if (ie(9)) $('html').addClass('IE IE9');
        if (ie(8)) $('html').addClass('IE IE8');
        if (ie(7)) $('html').addClass('IE IE7');

    /* guess IE 11
    ---------------------------------------------- */
        if (Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject) $('html').addClass('IE IE11');

    /* guess device
    ---------------------------------------------- */
        var device = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) device = true;

    /* guess os
    ---------------------------------------------- */
        var os = "UnknownOS";
        if (navigator.appVersion.indexOf("Win") != -1) os = "Windows";
        if (navigator.appVersion.indexOf("Mac") != -1) os = "MacOS";
        if (navigator.appVersion.indexOf("X11") != -1) os = "UNIX";
        if (navigator.appVersion.indexOf("Linux") != -1) os = "Linux";

        $('html').addClass(os);


    /* Eliminating the 300ms delay for devices
    ---------------------------------------------- */
        FastClick.attach(document.body);

});

