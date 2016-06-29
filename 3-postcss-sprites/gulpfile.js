/**
 * Created by lenovo on 2016/6/29.
 */

var gulp = require('gulp')
var postcss = require('gulp-postcss');
var sprites = require('postcss-sprites').default;

var postcssModules = [
    sprites({
        basePath: './src/',
        stylesheetPath: './src/css',
        spritePath: './dist/icons'
    })
]

gulp.task('css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(postcss(postcssModules))
        .pipe(gulp.dest('./dist/css'))
});
