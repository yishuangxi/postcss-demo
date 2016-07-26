/**
 * Created by qiubai on 2016/4/19.
 */
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssgrace = require('cssgrace');

gulp.task('cssgrace', function(){
    var processers = [autoprefixer, cssgrace];
    return gulp.src('./src/*.css')
        .pipe(postcss(processers))
        .pipe(gulp.dest('./dest'));
});
