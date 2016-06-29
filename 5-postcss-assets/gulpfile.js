/**
 * Created by lenovo on 2016/6/29.
 */
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var assets = require('postcss-assets')

gulp.task('assets', function(){
    var processors = [ assets({
        basePath: 'src/images',
        baseUrl: 'http://static.example.com',
        cachebuster: true
    }) ]
    return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest/css'))
})