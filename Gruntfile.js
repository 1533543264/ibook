/* global module: true */
module.exports = function(grunt) {
    grunt.initConfig({
        uglify:{
            'hello1.js':'hello.js'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['uglify']);
};