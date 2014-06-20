/* 	
	Nika Tomadze
	This framework is written in a year before and it was implemented everyday. Today I decide to configure it for Github and make it public and everyone can download and use who'll need it. 
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

		// older ie
			function IE(v) {
				var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
				return r.test(navigator.userAgent);
			}

			if (IE(10) || IE(9) || IE(8) || IE(7)) { $('body').addClass('ie'); }
			if (IE(10)) { $('body').addClass('ie10')};
			if (IE(9)) { $('body').addClass('ie9')};
			if (IE(8)) { $('body').addClass('ie8')};
			if (IE(7)) { $('body').addClass('ie7')};

		// ie 11
			if (Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject) {
				$('body').addClass('ie ie11');
			};

		// something new comes up

	});
});