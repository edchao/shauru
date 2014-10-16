module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/main.scss',
        }
      }
    },

    shell : {
        jekyllBuild : {
            command : 'jekyll build'
        },
    },

    watch : {
      files : [ '_layouts/*.html',
                '_posts/*.markdown',
                'sass/*.scss',
                'sass/*/*.scss',
                '_config.yml',
                'index.html'],
      tasks : ['sass','shell' ],
      options : {
          spawn : false,
          interrupt : true,
          atBegin : true,
          livereload : true
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: '_site'
        }
      }
    }


  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};