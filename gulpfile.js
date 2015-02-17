var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('clean', function (cb) {
  del([
    'dist/*',
  ], cb);
});

gulp.task('default', ['clean'], function() {
    gulp.src('src/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename(function (path) {
        path.basename += '.min';
    }))
    .pipe(gulp.dest('dist'));
});
