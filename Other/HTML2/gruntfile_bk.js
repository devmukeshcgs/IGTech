const sass = require('node-sass');

module.exports = function (grunt) {
    // Configurable paths
    var config = {
        src: 'src',
        dist: 'dist'
    };

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['src/sass/**/*.{scss,sass}', 'src/sass/_partials/**/*.{scss,sass}', 'src/css/**/*.css'],
                tasks: ['sass:dist', 'cssmin']
            },
            javascript: {
                files: ['src/js/**/*.js'],
                tasks: ['concat', 'uglify']
            },
            livereload: {
                files: ['dist/*.html', 'dist/js/**/*.{js,json}', 'dist/css/*.css', 'dist/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'dist/css/main.min.css': 'src/sass/main.scss'
                }
            }
        },
        cssmin: {
            deps: {
                src: [
                    'src/css/slider-pro.min.css',
                    'src/fonts/roboto/stylesheet.css',
                    'src/css/owl.carousel.css'
                ],
                dest: 'dist/css/vendor.css'
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'dist/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            options: {
                seperator: '\n\n',
                sourceMap: false,
                stripeBanners: true,
                banner: '/*!<%= pkg.name %> - v<%= pkg.version %> - ' + ' <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist: {
                src: ['src/js/jquery.min.js',
                    'src/js/script.js'
                ],
                dest: 'dist/js/ish.js',
            },
            deps: {
                src: [
                    'src/js/plugins/jquery.jquery.parallax-1.1.3.js',
                    'src/js/plugins/jquery.sliderPro.min.js',
                    'src/js/plugins/owl.carousel.js',
                    'src/js/plugins/TweenMax.min.js',
                    'src/js/plugins/ScrollMagic.min.js',
                    'src/js/plugins/animation.gsap.min.js',
                    'src/js/plugins/debug.addIndicators.min.js',
                    'src/js/plugins/jquery.easing.min.js',
                    'src/js/app.js'
                ],
                dest: 'dist/js/vendor.js'
            },
        },
        uglify: {
            options: {
                manage: false,
                sourceMap: true,
                preserveComments: 'all'
            },
            // Following task will take all the js in "dest/js" folder and combine in one minifyed js
            minifyalljs: {
                files: {
                    'dist/js/app_ish.min.js': ['dist/js/ish.js', 'dist/js/vendor.js']
                }
            },
        },
        imagemin: {
            // static: {
            //     options: {
            //         optimizationLevel: 3,
            //         svgoPlugins: [{removeViewBox: false}],
            //         use: [mozjpeg()] // Example plugin usage 
            //     },
            //     files: {
            //         'dist/img.png': 'src/img.png',
            //         'dist/img.jpg': 'src/img.jpg',
            //         'dist/img.gif': 'src/img.gif'
            //     }
            // },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images/tiny/'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['dist/js/*.js', 'dist/css/*.css', 'dist/*.html']
                },
                options: {
                    watchTask: true,
                    server: 'dist/'
                }
            }
        },
    });
    grunt.registerTask('default', ['browserSync', 'watch', 'sass:dist', 'imagemin:dynamic']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};