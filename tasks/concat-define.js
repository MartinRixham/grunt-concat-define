module.exports = function(grunt) {

	grunt.registerTask("concat-define", "", function() {

		var options = this.options();

		var concat = require("concat-define");

		var build = concat("../../../" + options.sourceRootDirectory);

		var fileSystem = require("fs");

		fileSystem.writeFileSync(options.outputFile, build);
	});
};
