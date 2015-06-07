module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
        options: {
            stderr: false
        },
        target: {
            command: 'egret build  -sourcemap'
        }
    },
    watch: {
      files: ['src/**/*.ts','src/**/*.exml'],
      tasks: ['shell']
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['shell']);

};
