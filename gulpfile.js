var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', function(){
    //run sass "sass --watch assets/css/app.scss:output.css"
    return gulp.src("assets/css/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("output.css"))
});