
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
//  Sass
    sass: {                              // Task
      expanded: {                            // Target
        options: {                       // Target options
          outputStyle: 'expanded',
          sourcemap: false,
        },
        files: {
          'assets/dist/css/materialize.css': 'assets/sass/materialize.scss',
        }
      },

      min: {
        options: {
          outputStyle: 'compressed',
          sourcemap: false
        },
        files: {
          'assets/dist/css/materialize.min.css': 'assets/sass/materialize.scss',
        }
      }
    },

//  Watch Files
    watch: {
      sass: {
        files: ['assets/sass/**/*'],
        tasks: ['sass_compile'],
        options: {
          interrupt: false,
          spawn: false,
        },
      }
    },
});
  // load the tasks
  // grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  // define the tasks
  grunt.registerTask(
    'default',[
      'sass:expanded',
      'sass:min',
      'watch:sass'
    ]
  );
  grunt.registerTask('sass_compile', ['sass']);
  grunt.registerTask('monitor', ["concurrent:monitor"]);
};
