module.exports = function(grunt) {

	grunt.registerTask("concat-define", "", function() {

		var concat = require("concat-define");
		var readdirSync = require("recursive-readdir-sync");
		var path = require("path");
		var fileSystem = require("fs");

		var options = this.options();
		var root = options.sourceRootDirectory;
		var files = readdirSync(root);
		var main = options.main;

		var moduleFiles =
			files.map(function(file) {

				return path.relative(root, file).replace(".js", "");
			});

		var build = concat("../../../" + root, moduleFiles, main);

		fileSystem.writeFileSync(options.outputFile, build);
	});
};
