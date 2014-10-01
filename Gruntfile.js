module.exports = function(grunt) {

	var opts = {
	    less: {
	      development: {
	        options: {
	          compress: true,
	          yuicompress: true,
	          optimization: 2,
/*	          paths: [
	          	"content/themes/drob/assets/"
	          ],
	          rootpath: "content/themes/drob/assets/"*/
	        },
	        // target.css file: source.less file
	        files: {},
	      }
	    },
	    watch: {
	      styles: {
	        files: ['content/themes/drob/assets/less/*.less'], // which files to watch
	        tasks: ['less'],
	        options: {
	          nospawn: true
	        }
	      }
	    }
	};
	var files = ["screen", "menus", "normalize", "hipster_sweaters"];
	var root = "content/themes/drob/assets/";
	files.forEach(function(key){
		opts.less.development.files[root + 'css/' + key + '.css'] = root + 'less/' + key + '.less';
	});

  grunt.initConfig(opts);

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};