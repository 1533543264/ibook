/* global module: true */
module.exports = function(grunt) {
    grunt.initConfig({
     cssmin:{
         '1.css':'rectangle.css'
     }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default',['cssmin']);
};