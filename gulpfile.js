"use strict";

var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

var src = './src/konami.js';

gulp.task('babel', function () {
	return gulp.src(src)
		.pipe(plumber())
		.pipe(babel())
		.pipe(concat('konami.min.js'))
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch('./src/konami.js', ['default']);
});

gulp.task('default', ['babel']);
