/**
 * Created by lenovo on 2016/7/3.
 */

var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function(){
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dest/css'))
})