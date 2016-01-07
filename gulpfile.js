"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");
var header = require("gulp-header");
var pkg = require("./package.json");

var src = "./src/*.js";
var banner = ["/**",
  " * <%= pkg.name %> - <%= pkg.description %>",
  " * @version v<%= pkg.version %>",
  " * @author <%= pkg.author %>",
  " * @license <%= pkg.license %>",
	" * @repository <%= pkg.repository.url %>",
  " */",
  ""].join("\n");

gulp.task("babel", function () {
	gulp.src(src)
		.pipe(babel())
		.pipe(header(banner, {pkg: pkg}))
		.pipe(gulp.dest("./dist"))
		.pipe(concat("konami.min.js"))
		.pipe(uglify({preserveComments: "some"}))
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch", function () {
	gulp.watch(src, ["default"]);
});

gulp.task("default", ["babel"]);
