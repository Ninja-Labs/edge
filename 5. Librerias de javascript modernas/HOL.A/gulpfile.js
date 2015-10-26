/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'src/app',
    livereload: true,
    port: 8080
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/**/*.css')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
	gulp.watch(['./app/*.html'], ['html']);
  	gulp.watch(['./app/css/*.css'], ['css']);
});
 
gulp.task('default', ['connect', 'watch']);