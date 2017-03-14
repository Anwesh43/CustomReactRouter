var gulp = require('gulp')
var browserify = require('browserify')
gulp.task('compileES6',()=>{
    browserify('index.js').transform('babelify',{presets:['es2015','react']}).bundle().pipe(require('fs').createWriteStream('bundle.js'))
})
