var gulp = require("gulp"),
  watch = require('gulp-watch'),
  batch = require('gulp-batch'),
  include = require("gulp-include");

gulp.task("build", function() {
  gulp.src("src/theme.html")
    .pipe(include())
    .on('error', console.log)
    .pipe(gulp.dest("dist"));
  console.log('Theme built');
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['build']);
});

gulp.task("default", ["build"]);
