module.exports = function(grunt) {

  // Load profiler plugin
  require('time-grunt')(grunt);

  // Automatically load all the plugins
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
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
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['sass/*.sass'],
        tasks: ['sass']
      },
      tests: {
        files: ['test/tests.js'],
        tasks: ['qunit']
      }
    },
    concurrent: {
      things: ['watch', 'connect'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  // Load tasks organised into other files
  grunt.loadTasks('grunt-tasks');

  // Serve site task
  grunt.registerTask('serve', ['connect']);

  // Default task(s).
  grunt.registerTask('default', ['qunit', 'uglify', 'sass']);

};