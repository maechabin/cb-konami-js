"use strict";

var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('babel', function () {
	return gulp.src('./src/konami.js')
		.pipe(babel())
		.pipe(gulp.dest('./dist'));
});

gulp.task('uglify', ['babel'], function () {
	gulp.src('./dist/konami.js')
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(rename('konami.min.js'))
		.pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
	gulp.watch('./src/konami.js', ['babel']);
});

gulp.task('default', ['uglify']);
