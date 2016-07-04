/**
 * Created by lenovo on 2016/6/29.
 */
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssnext = require('postcss-cssnext')

gulp.task('cssnext', function(){
    var processors = [ cssnext()]
    return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest/css'))
})