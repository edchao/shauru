module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
        }
      }
    }


  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['compass']);

};