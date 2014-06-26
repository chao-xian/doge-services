module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    qunit: {
      all: ['test/*.html']
    },
    uglify: {
      build: {
        files: {
          'build/js/app.js': ['js/lib/*.js', 'js/accordion.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: true
        },
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          keepalive: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the ruby-sass plugin for SASS compiling
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Load the Qunit plugin for running tests
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Load connect plugin for serving site
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Serve site task
  grunt.registerTask('serve', ['connect']);

  // Default task(s).
  grunt.registerTask('default', ['qunit', 'uglify', 'sass']);

};