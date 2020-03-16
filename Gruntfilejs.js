/* global module: true */
module.exports = function(grunt) {
    grunt.initConfig({
        uglify:{
            '1.js':'rectangle.js'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['uglify']);
};