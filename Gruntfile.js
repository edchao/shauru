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
            command : 'jekyll serve'
        },
    }


  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'shell']);

};