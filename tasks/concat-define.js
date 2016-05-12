module.exports = function(grunt) {

	grunt.registerTask("concat-define", "", function() {

		var options = this.options();

		var concat = require("concat-define");

		var fileSystem = require("fs");

		var moduleFiles =
			fileSystem.readdirSync(options.sourceRootDirectory);

		var modulePaths = moduleFiles.map(function(file) {

			return "../../../" + options.sourceRootDirectory + "/" + file;
		});

		var build = concat(modulePaths);

		var fileSystem = require("fs");

		fileSystem.writeFileSync(options.outputFile, build);
	});
};
