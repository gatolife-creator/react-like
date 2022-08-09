"use strict";

const gulp = require("gulp");
const { series } = require("gulp");

const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const cleanHTML = require("gulp-cleanhtml");

function cssMinify(done) {
    gulp.src('tmp/src/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
    done();
}

function jsMinify(done) {
    gulp.src('tmp/src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    done();
}

function htmlMinify(done) {
    gulp.src('tmp/src/**/*.html')
        .pipe(cleanHTML())
        .pipe(gulp.dest('dist'));
    done();
}

exports.default = series(cssMinify, htmlMinify, jsMinify);