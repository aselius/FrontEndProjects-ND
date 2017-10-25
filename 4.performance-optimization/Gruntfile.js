module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	var config = grunt.file.readYAML('Gruntconfig.yml');

	grunt.initConfig({
		jshint: {
			all:[
				'Gruntfile.js',
				config.jsSrcDir+'*.js'
			]
		},
		pagespeed: {
			options: {
				nokey: true,
				url: "http://35bb62a7.ngrok.io",
				locale: "en_GB"
			},
			local: {
				options: {
					strategy: "desktop",
					threshold: 90
				}
			},
			mobile: {
				options: {
					strategy: "mobile",
					threshold: 90
				}
			}
		},
		critical: {
			test: {
				options: {
					base: './',
					css: [
						'css/style.min.css'
					]
				},
				src: 'src/index.html',
				dest: 'src/inline/index.html'
			}
		},
		imagemin: {
			static: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{ removeViewBox: false }]
				},
				files: {
					'img/comp/2048.png': 'img/2048.png',
					'img/comp/cam_be_like.jpg': 'img/cam_be_like.jpg',
					'img/comp/mobilewebdev.jpg': 'img/mobilewebdev.jpg',
					'img/comp/profilepic.jpg': 'img/profilepic.jpg',
					'views/images/comp/pizza.png': 'views/images/pizza.png',
					'views/images/comp/pizzeria.jpg': 'views/images/pizzeria.jpg'
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html': 'src/inline/index.html'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: '*.css',
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/perfmatters.js': ['src/js/perfmatters.js']
				}
			}
		}
	});

	grunt.registerTask('default', [
		'jshint',
		'critical',
		'imagemin',
		'htmlmin',
		'cssmin',,
		'uglify'
		'pagespeed'
	]);
};