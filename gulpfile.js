"use strict";

var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('babel', function () {
	return gulp.src('./src/konami.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('uglify', function () {
	gulp.src('./src/konami.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
    gulp.watch('./src/konami.js', ['babel']);
});

gulp.task('default', ['uglify']);
