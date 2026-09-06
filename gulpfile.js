const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const rename = require("gulp-rename")
const cleanCSS = require("gulp-clean-css");
const imageMin = require("gulp-imagemin")

gulp.task('styles', function(){
    return gulp.src('src/styles/**/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('errors', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('build/styles'))
})

gulp.task('imageMin', function(){
    return gulp.src('src/images/**/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('build/images'))
})

gulp.task('default', gulp.series('styles', 'imageMin'))