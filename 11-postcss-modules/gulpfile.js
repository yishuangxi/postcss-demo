/**
 * Created by yishuangxi on 16/7/26.
 */


var path = require('path')
var fs = require('fs')

var gulp = require('gulp')
var postcss = require('gulp-postcss')
var modules = require('postcss-modules')
var gulp_posthtml = require('gulp-posthtml');
var posthtml_css_modules = require('posthtml-css-modules')
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
        .pipe(gulp.dest('dest/css'))
})

gulp.task('clean', function(){
    return gulp.src(['dest/css', 'dest/js', 'dest/html', 'dest/json/*.json'] , {read: false})
        .pipe(gulp_clean({force: true}))
})

gulp.task('html', ['modules'], function() {
    var htmlList = fs.readdirSync('src/html')
    for (var i = 0; i < htmlList.length; i++) {
        var filename = htmlList[i]
        gulp.src('src/html/' + filename)
            .pipe(gulp_posthtml([posthtml_css_modules('./dest/json/' + filename.split('.')[0] + '.json')]))
            .pipe(gulp.dest('dest/html'));
    }
});

gulp.task('default', ['html'])

