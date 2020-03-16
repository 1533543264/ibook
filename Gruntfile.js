/* global module: true */
module.exports = function(grunt) {
    grunt.initConfig({
       htmlmin:{
           options:{
               removeComments:true,
               collapseWhitespace:true
           },
           files:{
               src:'./2.html',
               dest:'./3.html'
           }
       }
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default',['htmlmin']);
};