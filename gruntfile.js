// ----------------------------------------------------------------------------------------
//  _____                _       _
// /  ___|              | |     | |
// \ `--.  ___ _ __ __ _| |_ ___| |__
//  `--. \/ __| '__/ _` | __/ __| '_ \
// /\__/ / (__| | | (_| | || (__| | | |
// \____/ \___|_|  \__,_|\__\___|_| |_|
//
// ----------------------------------------------------------------------------------------
//  gruntfile.js
//  > grunt             // simply compile files
//  > grunt run         // watch and compile files
//  > grunt server		// run express based simple http server, watch and compile files
//  > grunt production	// make files ready for production
//  > grunt clean		// clean all grunt generated files
// ----------------------------------------------------------------------------------------


// Gruntfile.js
module.exports = function(grunt) {

	// defining files
	// var lib_js =

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// conf and files
		options: {
			serverFile: 'server.js',
			libraries: [
				'lib/jquery/dist/jquery.min.js',
				'lib/modernizr/modernizr.js',
				'lib/fastclick/lib/fastclick.js',
				'lib/jquery.scratch.js'
			]
		},

		// JS TASKS ================================================================
		// check js files for errors
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			target: ['scratch/app.js']
		},

		// concat all js files
		concat: {
			// developer js
			app: {
				options: {
					sourceMap: true,
					sourceMapName: 'scratch/app.map'
				},
				files: {
					'scratch/app.js': 'app/**/*.js'
				}
			}
		},

		// take all the js files and minify them into app.min.js
		uglify: {
			// minify lib
			lib: {
				options: {
					sourceMap: true,
					sourceMapName: 'scratch/lib.min.map'
				},
				files: {
					'scratch/lib.min.js': '<%= options.libraries %>'
				},
			},

			// developer js
			app: {
				options: {
					sourceMap: true,
					sourceMapName: 'scratch/app.min.map'
				},
				files: {
					'scratch/app.js': 'scratch/app.min.js'
				}
			},

			// minify stand-alone resources
			stand_alones: {
				files: {
					'scratch/js/html5shiv.js': 'lib/html5shiv/dist/html5shiv.js'
				}
			}
		},

		// CSS TASKS ===============================================================
		// process the less file to style.css
		less: {
			build: {
				// mapping
				options: {
					paths: ["less"],
					sourceMap: true,
					sourceMapFilename: 'scratch/style.css.map',
					sourceMapURL: 'style.css.map',
					sourceMapBasepath: '../',
					sourceMapRootpath: '../'
				},
				files: {
					'scratch/style.css': 'scratch/less/style.less'
				}
			}
		},

		// take the processed style.css file and minify
		cssmin: {
			build: {
				files: {
					'scratch/style.min.css': 'scratch/style.css'
				}
			}
		},

		// COOL TASKS ==============================================================
		// watch css and js files and process the above tasks
		watch: {
			less: {
				files: 'scratch/less/**/*.less',
				tasks: 'less',
				options: {
					spawn: true
				}
			},
			js: {
				files: 'app/**/*.js',
				tasks: ['jslint', 'concat', 'uglify']
			},
			sprite: {
				files: [
					'scratch/sprite/*/**/*.png'
				],
				tasks: 'sprite',
				options: {
					spawn: false
				}
			},
			reload: {
				files: [
					'index.html',
					'scratch/style.css',
					'scratch/**/*.js',
					'scratch/sprite.png',
					'scratch/**/*.png'
				],
				tasks: [],
				options: {
					livereload: true
				}
			}
		},

		// spriting images
		sprite: {
			all: {
				src: 'scratch/sprite/**/*.png',
				destImg: 'scratch/sprite.png',
				destCSS: 'scratch/less/helpers/sprite-generated.less',
				cssFormat: 'css',
				imgPath: 'sprite.png',
				algorithm: 'binary-tree',
				cssOpts: {
					cssClass: function(item) {
						return '.sprite.' + item.name;
					}
				}
			}
		},

		// watch our node server for changes
		nodemon: {
			dev: {
				script: '<%= options.serverFile %>'
			}
		},

		// run watch and nodemon at the same time
		concurrent: {
			server: {
				options: {
					logConcurrentOutput: true
				},
				tasks: ['nodemon', 'watch']
			}
		},

		// clean solution for production
		clean: {
			dev: [
				// clean lib.js
				'scratch/lib.min.js',
				'scratch/lib.min.map',

				// clean app.js
				'scratch/app.js',
				'scratch/app.map',
				'scratch/app.min.js',
				'scratch/app.min.map',

				// clean css
				'scratch/style.css',
				'scratch/style.min.css',
				'scratch/style.css.map',

				// clean sprite image
				'scratch/sprite.png'
			]
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-notify');


	// one time project compile
	// > grunt
	grunt.registerTask('default', function() {
		var tasks = [
			'clean',
			'sprite',
			'less',
			'cssmin',

			'concat',
			'uglify:lib',

			'jshint'
		];

		if (!grunt.file.exists('scratch/js/html5shiv.js')) {
			tasks.push('uglify:stand_alones');
		}

		grunt.task.run(tasks);
	});

	// watch and compile files
	// > grunt run
	grunt.registerTask('run', [
		'default',
		'watch'
	]);

	// run express based server, watch and compile files
	// > grunt server
	grunt.registerTask('server', [
		'default',
		'concurrent'
	]);

	// make files ready for production
	// > grunt production
	grunt.registerTask('production', [
		'default',
		'uglify:app',
	]);

};
