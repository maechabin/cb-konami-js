"use strict";

var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

var src = './src/konami.js';

gulp.task('babel', function () {
	gulp.src(src)
		.pipe(babel())
		.pipe(concat('konami.min.js'))
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(gulp.dest('./dist', {cwd: './'}));
});

gulp.task('watch', function() {
	gulp.watch(src, ['default']);
});

gulp.task('default', ['babel']);
