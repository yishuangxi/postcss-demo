/**
 * Created by lenovo on 2016/6/29.
 */
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var precss = require('precss')

gulp.task('precss', function(){
    var processors = [ precss()]
    return gulp.src('src/css/*.scss')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest/css'))
})