module.exports = function(grunt) {
     require('time-grunt')(grunt);
     var config = {
    usemin: {
        html: ['index.html', 'cards.html']
    },
    htmlmin: {
            dist: {
              options: {
                removeComments: true,
                collapseWhitespace: true
              },
              files: {
                'index.html': 'index.html',
                'carbs.html': 'cards.html'
              }
          }
    },
    copy: {
      main: {
          expand: true,
          cwd: 'dev/',
          src: ['**/*.html', 'styles/*.css'],
          dest: ''
      }
    },
    concat: {
        main:{
          files:[
             {
              dest: 'scripts/scripts.js',
              src: ['dev/scripts/angular.min.js', 'dev/scripts/angular-cookies.min.js', 'dev/scripts/app.js']
              }
             ]
        }
    },
    uglify:{
      main: {
        files: [
                  {
                    dest: 'scripts/scripts.js',
                    src: [ 'scripts/scripts.js' ]
                  },
                  {
                    dest: 'scripts/canvas.min.js',
                    src: [ 'dev/scripts/canvas.js' ]
                  }
               ]
             }
       },
      cssmin: {
        main: {
          files: {
            'styles/main.min.css': ['styles/main.css']
          }
        },
        cards: {
          files: {
            'styles/cards.min.css': ['styles/cards.css']
          }
        }
      },
      autoprefixer: {
          main: {
            expand: true,
            flatten: true,
            src: 'styles/*.css',
            dest: 'styles/'
          }
      }
};

  grunt.initConfig(config);

  // Load all Grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin', 'autoprefixer', 'usemin', 'htmlmin']);
};