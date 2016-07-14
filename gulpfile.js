'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
//var path = require('path');

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("styles.css"))
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function(){
  gulp.watch(['./scss/*.scss'], ['sass']);
});

gulp.task('default',['sass','watch']);