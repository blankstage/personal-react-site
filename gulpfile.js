var gulp = require('gulp')
var sass = require('gulp-sass')
var cssnano = require('gulp-cssnano')

gulp.task('watch', ['sass'], function() {
  gulp.watch('src/css/**/*.+(scss|sass)', ['sass'])
})

gulp.task('sass', function() {
  return gulp.src('src/css/main.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('src/css/'))
})

gulp.task('default', ['watch'])
