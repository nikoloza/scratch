module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},

			build: ['Grunfile.js', 'scratch/js/**/*.js']
		},

		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'scratch/js/app.min.js': 'scratch/js/**/*.js'
				}
			}
		},

		less: {
			build: {
				files: {
					'scratch/style.css': 'scratch/less/style.less'
				}
			}
		},

		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			production: {
				files: {
					'scratch/style.min.css': 'scratch/style.css'
				}
			}
		},

		watch: {
			stylesheets: {
				files: ['scratch/less/**/*.less', 'scratch/js/**/*.js', '**/*.html'],
				tasks: ['less', 'cssmin'],
				options: {
					livereload: true
				}
			},

			scripts: {
				files: 'scratch/js/**/*.js',
				tasks: ['jshint']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch:stylesheets']);

};