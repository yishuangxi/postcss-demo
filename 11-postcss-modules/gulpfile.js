/**
 * Created by yishuangxi on 16/7/26.
 */


var path = require('path')
var fs = require('fs')

var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var modules = require('postcss-modules')
// var posthtml = require('posthtml')
var posthtml = require('gulp-posthtml');
var posthtmlCssModules = require('posthtml-css-modules')
var dist = __dirname + '/dest'

gulp.task('modules', function () {
    var processors = [modules({
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        getJSON: function (cssFileName, json) {
            var cssName = path.basename(cssFileName, '.css');
            var jsonFileName = path.resolve('./dest' + cssName + '.json');
            fs.writeFileSync(jsonFileName, JSON.stringify(json));
        }
    })]
    return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest/css'))
})

gulp.task('html', ['modules'], function() {
    var posthtml = require('gulp-posthtml');
    return gulp.src('src/**/*.html')
        .pipe(posthtml([ require('posthtml-css-modules')('./deststyle.json') ]/*, options */))
        .pipe(gulp.dest('dest/'));
});

// gulp.task('posthtml', ['modules'], function() {
//  return gulp.src('html/index.html')
//    .pipe(posthtml([ posthtmlCssModules('./deststyle.json') ]))
//    .pipe(gulp.dest('dest'));
// });

