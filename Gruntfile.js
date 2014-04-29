module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: ['Gruntfile.js', 'assets/js/modules/scripts.js'],
			options: {
				browser: true,
				camelcase: true,
				indent: 4,
				curly: true
			}
		},

		requirejs: {
			compile: {
				options: {
					include: ['main'],
					mainConfigFile: "assets/js/main.js",
					name: "almond",
					wrap: true,
					insertRequire: ['main'],
					out: "assets/js/app.js",
					optimize: 'none'
				}
			}
        },

        bower: {
            install: {
           		options: {
           			install: true,
           			targetDir: './assets/js'
            	}
            }
        },

        uglify: {
        	options: {
				beautify: false,
				report: false,
				wrap: false,
				exportAll: false
			},
			uglify: {
				files: {
					'assets/js/app.min.js': ['assets/js/app.js'],
					'assets/js/modernizr.min.js': ['assets/js/bower_components/modernizr/modernizr.js']
				}
			}
		},

        sass: {
			dist: {
				files: {
					'assets/css/app.css' : 'assets/css/sass/style.scss'
				}
			}
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},

		cssmin: {
			minify: {
				expand: true,
				cwd: 'assets/css/',
				src: ['app.css'],
				dest: 'assets/css/',
				ext: '.min.css'
			}
		},

		clean: {
			after_build: {
				src: ["assets/js/app.js", "assets/css/app.css"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', [
		'requirejs:compile',
		'uglify:uglify',
		'sass',
		'cssmin:minify',
		'clean:after_build'
	]);
	grunt.registerTask('build:assets', [
		'requirejs:compile',
		'uglify:uglify',
		'sass',
		'cssmin:minify',
		'clean:after_build'
	]);
	grunt.registerTask('build:app', [
		'bower'
	]);
	grunt.registerTask('sass:watch', [
		'watch'
	]);
};
