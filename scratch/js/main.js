/* 
	Scratch Framework (https://github.com/nikoloza/Scratch)
	Nika Tomadze (@nnikoloza)
	nika.tomadze@gmail.com

	-----
	Use grunt for jshinting your javascript.
	You need to install npm: 'grunt-contrib-jshint'
	and 'grunt-contrib-jshint' for stylish error reportings

	-----
	Use grunt to minify js file.
	You need to install npm: grunt-contrib-uglify
*/

requirejs.config({
	paths: {
		'jquery': 'jquery.min',
		'fastclick': 'fastclick'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'fastclick': {
			exports: 'FastClick'
		}
	}
});

define(['jquery', 'fastclick'], function () {

	$(function(){

		$('html').removeClass('no-js');

		/* older ie
		---------------------------------------------- */
			function IE(v) {
				var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
				return r.test(navigator.userAgent);
			}

			if (IE(10)) $('body').addClass('IE IE10');
			if (IE(9)) $('body').addClass('IE IE9');
			if (IE(8)) $('body').addClass('IE IE8');
			if (IE(7)) $('body').addClass('IE IE7');

		/* ie 11
		---------------------------------------------- */
			if (Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject) $('body').addClass('IE IE11');

		/* if device
		---------------------------------------------- */
			var device = false;
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) device = true;

		/* which os
		---------------------------------------------- */
			var os = "UnknownOS";
			if (navigator.appVersion.indexOf("Win")!=-1) os="Windows";
			if (navigator.appVersion.indexOf("Mac")!=-1) os="MacOS";
			if (navigator.appVersion.indexOf("X11")!=-1) os="UNIX";
			if (navigator.appVersion.indexOf("Linux")!=-1) os="Linux";

			$('body').addClass(os);

		/* dom refference
		---------------------------------------------- */
			var doc 	 	= $(document),
				win 		= $(window);

				win.resize(function() {
					win.w 	= win.width();
					win.h 	= win.height();
				}).resize();

		/* helper methods
		---------------------------------------------- */
			$.fn.activate = function() {
				$(this)
					.addClass('active')
					.siblings()
					.removeClass('active');
			}


		/* hacking goes on
		---------------------------------------------- */
			// your code here

	});

});