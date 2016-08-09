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
var concat =require('gulp-concat')
var gulp_clean = require('gulp-clean')

gulp.task('modules', function () {
    var processors = [modules({
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        getJSON: function (cssFileName, json) {
            var cssName = path.basename(cssFileName, '.css');

            var jsonFileName = path.resolve('./dest/json/', cssName + '.json');
            fs.writeFileSync(jsonFileName, JSON.stringify(json));
        }
    })]
    return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        // .pipe(concat('public.css'))
        .pipe(gulp.dest('dest/css'))
})

gulp.task('clean', function(){
    return gulp.src(['dest/css', 'dest/js', 'dest/html', 'dest/json/*.json'] , {read: false})
        .pipe(gulp_clean({force: true}))
})

gulp.task('html', ['modules'], function() {
    var posthtml = require('gulp-posthtml');

    var htmlList = fs.readdirSync('src/html')

    for (var i = 0; i < htmlList.length; i++) {
        var filename = htmlList[i]
        gulp.src('src/html/' + filename)
            .pipe(posthtml([require('posthtml-css-modules')('./dest/json/' + filename.split('.')[0] + '.json')]))
            .pipe(gulp.dest('dest/html'));
    }
});

gulp.task('default', ['html'])

// gulp.task('posthtml', ['modules'], function() {
//  return gulp.src('html/index.html')
//    .pipe(posthtml([ posthtmlCssModules('./deststyle.json') ]))
//    .pipe(gulp.dest('dest'));
// });

