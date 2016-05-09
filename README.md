# grunt-concat-define

> A Grunt plugin for the concat-define concatenator.

## The "concat-define" task

### Usage
In your project's Gruntfile, add a section named `concat-define` to the data object passed into `grunt.initConfig()`.

```js

grunt.initConfig({

    "concat-define": {

        options: {

            sourceRootDirectory: "src",
            outputFile: "target/myFile.js"
        }
    }
});

```
