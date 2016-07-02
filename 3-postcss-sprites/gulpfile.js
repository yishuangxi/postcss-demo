/**
 * Created by lenovo on 2016/6/29.
 */

var gulp = require('gulp')
var postcss = require('gulp-postcss');
var sprites = require('postcss-sprites').default;

var postcssModules = [
    sprites({
        path: '/',
        basePath: 'src', 
        stylesheetPath: './',//Defines relative path to output stylesheet
        spritePath: 'dist/images/sprite', // define relative path to ouput sprite.
    })
]

gulp.task('sprites', function () {
    return gulp.src('src/css/*.css')
        .pipe(postcss(postcssModules))
        .pipe(gulp.dest('dist/css'))
});
