/**
 * Created by lenovo on 2016/6/29.
 */
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssnano = require('cssnano')


gulp.task('cssnano', function(){
    var processors = [cssnano]
    gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest/css'))
})