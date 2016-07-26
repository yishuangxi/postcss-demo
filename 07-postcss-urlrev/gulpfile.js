/**
 * Created by lenovo on 2016/6/29.
 */
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var urlrev = require('postcss-urlrev')

gulp.task('urlrev', function(){
    var processors = [ urlrev()]
    return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest/css'))
})