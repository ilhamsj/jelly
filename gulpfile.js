// Panggil Plugin
var gulp = require('gulp');
var clean = require('gulp-clean');
connect = require('gulp-connect');

gulp.task('clean', function () {
	return gulp.src('public/', {read: false})
		.pipe(clean());
});

gulp.task('connect', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});