'use strict';

module.exports = function (grunt) {

  var path = require('path');
  var webpack = require('webpack');

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  var watchFiles = ['Gruntfile.js','./app/**/*.js', './app/**/*.css', './app/**/*.html'];

  grunt.initConfig({

    webpack: {
      client: {
        entry: __dirname + '/app/js/client.js',
        output: {
          path: path.join(__dirname, '/public'),
          filename: 'bundle.min.js'
        },
        plugins: [
          new webpack.optimize.UglifyJsPlugin({minimize: true})
         ]
      }
    },

    copy: {
      html: {
        cwd: 'app/',
        expand: true,
        flatten: false,
        src:'**/*.html',
        dest:'public/',
        filter: 'isFile'
      },
      images: {
        cwd: 'app/',
        expand: true,
        flatten: false,
        src: 'images/**/*',
        dest: 'public/'
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: 'css/**/*.css',
          dest: 'public/',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      files: watchFiles,
      html: {
        files: ['./app/**/*.html'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['./app/**/*.css'],
        options: {
          livereload: true
        }
      },
      tasks: ['build']
    },

    clean: {
      dev: {
        src: 'public/'
      }
    },
  });

  grunt.registerTask('build', ['webpack:client', 'copy:html', 'cssmin', 'copy:images'])
};
