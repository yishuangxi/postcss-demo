/**
 * Created by lenovo on 2016/6/29.
 */

var fs = require('fs');
var postcss = require('postcss');
var sprites = require('postcss-sprites').default; // Babel@6 drops support for CommonJS interop

var css = fs.readFileSync('./src/styles.css', 'utf8');
var opts = {
    stylesheetPath: './dist',
    spritePath: './dist/icons/'
};

postcss([sprites(opts)])
    .process(css, {
        from: './src/styles.css',
        to: './dist/styles.css'
    })
    .then(function(result) {
        fs.writeFileSync('./dist/styles.css', result.css);
    });