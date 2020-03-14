/* global module: true */
module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src:'./1.html',
                dest:'./66.html'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default',['htmlmin']);
};