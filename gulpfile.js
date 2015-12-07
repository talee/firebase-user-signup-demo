var gulp = require('gulp');
var htmlAutoprefixer = require('gulp-html-autoprefixer');

gulp.task('default', function() {
  return gulp.src('src/index.html')
  .pipe(htmlAutoprefixer())
  .pipe(gulp.dest('./'));
});
