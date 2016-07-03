/**
 * Created by lenovo on 2016/6/29.
 */

var gulp = require('gulp')
var postcss = require('gulp-postcss');
var postcssSprites = require('postcss-sprites')
var sprites = postcssSprites.default;
var assets = require('postcss-assets')

var postcssModules = [
    sprites({
        path: '/',
        basePath: 'src', 
        stylesheetPath: './',//Defines relative path to output stylesheet
        spritePath: 'dist/images/sprite', // define relative path to ouput sprite.
        hooks: {
            onUpdateRule: function (rule, comment, image) {
                //更新生成后的规则，这里主要是改变了生成后的url访问路径
                return spritesOnUpdateRule(true, rule, comment, image);
            }
        }
    })
]

gulp.task('sprites', function () {
    return gulp.src('src/css/*.css')
        .pipe(postcss(postcssModules))
        .pipe(gulp.dest('dist/css'))
});

function spritesOnUpdateRule(isDev, rule, comment, image){
    image.spriteUrl = "/public/"+image.spriteUrl
    postcssSprites.updateRule(rule, comment, image);
}

