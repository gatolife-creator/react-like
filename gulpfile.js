"use strict";

const gulp = require("gulp");
const { series } = require("gulp");

const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const cleanHTML = require("gulp-cleanhtml");
const minifyImages = require("gulp-imagemin");

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

function imageMinify(done) {
    gulp.src('tmp/src/imgs/*')
        .pipe(minifyImages())
        .pipe(gulp.dest('dist/imgs'));
    done();
}

exports.default = series(cssMinify, htmlMinify, jsMinify, imageMinify);