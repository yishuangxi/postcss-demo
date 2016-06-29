/**
 * Created by lenovo on 2016/6/29.
 */

var gulp = require('gulp')
var postcss = require('gulp-postcss')
var font_magician = require('postcss-font-magician')

gulp.task('font', function(){
    var processors = [font_magician]

    return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest/css'))
})