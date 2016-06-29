/**
 * Created by qiubai on 2016/4/19.
 */
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssgrace = require('cssgrace');
var media_minmax = require('postcss-media-minmax');

gulp.task('style', function(){
    var processers = [autoprefixer, cssgrace, media_minmax];
    return gulp.src('./src/style.css')
        .pipe(postcss(processers))
        .pipe(gulp.dest('./dest'));
});

// gulp.task('css', function () {
//     var processors = [
//     ];
//     return gulp.src('./src/*.css')
//         .pipe(postcss(processors))
//         .pipe(gulp.dest('./dest'));
// });
