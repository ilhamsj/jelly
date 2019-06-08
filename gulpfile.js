// Panggil Plugin
var gulp = require('gulp');
var clean = require('gulp-clean');
connect = require('gulp-connect');

// memembuat task clean
gulp.task('clean', function () {
	return gulp.src('public/', {read: false})
		.pipe(clean());
});

// membuat task connect
gulp.task('connect', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});