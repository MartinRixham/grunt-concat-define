module.exports = function(grunt) {

	grunt.registerTask("concat-define", "", function() {

		var options = this.options();

		var concat = require("concat-define");

		var readdirSync = require("recursive-readdir-sync");

		var root = options.sourceRootDirectory;

		var files = readdirSync(root);

		var path = require("path");

		var moduleFiles =
			files.map(function(file) {

				return path.relative(root, file).replace(".js", "");
			});

		var build = concat("../../../" + root, moduleFiles);

		var fileSystem = require("fs");

		fileSystem.writeFileSync(options.outputFile, build);
	});
};
