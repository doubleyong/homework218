'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    gulpif       = require('gulp-if'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify   = require('browserify'),
    babelify     = require('babelify'),
    handlebars   = require('browserify-handlebars'),
    buffer       = require('vinyl-buffer'),
    source       = require('vinyl-source-stream'),
    argv         = require('yargs').argv;

var flags = {
    dev: !argv.dist
};

var assets = require('./assets.json');

var browserified = function (entry, sourceName) {
    return browserify({
        entries: entry,
        debug:   flags.dev
    })
        .transform(handlebars)
        .transform(babelify)
        .bundle()
        .pipe(source(sourceName))
        .pipe(buffer());
};

gulp.task('scripts-main', function () {
    return browserified('./assets/scripts/main.js', 'bundle-main.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('scripts-assets', function () {
    return gulp.src(assets.js)
        .pipe(gulpif(flags.dev, sourcemaps.init()))
        .pipe(concat('bundle-assets.js'))
        .pipe(gulpif(flags.dev, sourcemaps.write()))
        .pipe(gulp.dest('./dist'));
});

gulp.task('styles-main', function () {
    return gulp.src([
        './assets/styles/main.scss'
    ])
        .pipe(gulpif(flags.dev, sourcemaps.init()))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulpif(flags.dev, sourcemaps.write()))
        .pipe(rename('bundle-main.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('styles-assets', function () {
    return gulp.src(assets.css)
        .pipe(gulpif(flags.dev, sourcemaps.init()))
        .pipe(concat('bundle-assets.css'))
        .pipe(gulpif(flags.dev, sourcemaps.write()))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/**/*.js', ['scripts-main']);
    gulp.watch('./assets/**/*.scss', ['styles-main']);
});

gulp.task('default', [
    'scripts-assets',
    'scripts-main',
    'styles-assets',
    'styles-main'
]);