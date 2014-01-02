module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.initConfig({

        sass: {
            dist: {
                files: {
                    'client/public/stylesheets/main.css': 'client/src/stylesheets/main.scss'
                }
            }
        },

        jshint: {
            all: ['*.js', 'server/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        browserify: {
            'client/public/javascripts/app.js': ['client/src/javascripts/*.js']
        },

        clean: ['client/public/stylesheets/main.css'],

        nodemon: {
          dev: {
            options: {
              file: 'web.js',
              ignoredFiles: ['node_modules/**', '.git/**'],
              watchedExtensions: ['js', 'hbs'],
              watchedFolders: ['server', '.'],
              delayTime: 1,
              cwd: __dirname
            }
          }
        },

        watch: {
            files: ['client/src/stylesheets/*.scss', 'client/src/javascripts/**/*.js', 'client/src/views/**/*.hbs'],
            tasks: ['sass', 'browserify'],
            options: {
                spawn: false,
            },
        }

    });

    grunt.registerTask('build', ['clean', 'jshint', 'sass', 'browserify', 'watch']);
    grunt.registerTask('dist', ['clean', 'jshint', 'sass', 'test']);
    grunt.registerTask('run', ['nodemon']);
    grunt.registerTask('default', ['build']);
};

