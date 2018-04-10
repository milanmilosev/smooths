// Load plugins
var gulp = require('gulp'),
  babel = require('gulp-babel'),
  minify = require("gulp-babel-minify"),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  livereload = require('gulp-livereload'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpIgnore = require('gulp-ignore'),
  watch = require('gulp-watch'),
  autoprefixer = require('gulp-autoprefixer'),
  del = require('del');


gulp.task('js', function() {
  return gulp.src([
    'src/js/*.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(concat('smooths.js'))
  .pipe(gulp.dest('./dist/js/'))
  .pipe(minify({
    mangle: {
      keepClassName: true
    }
  }))
  .pipe(rename({ suffix: '.min' }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/js/'))
  .pipe(gulp.dest('./demo/dist/js/'))
});

// Clean
gulp.task('clean', function() {
  return del(['styles', 'js']);
});

gulp.task('default', ['clean'], function() {
  gulp.start('js');
  // Start a server
  connect.server({
    root: './demo/',
    port: 3301,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3301');
  watch(['./demo/'])
  .pipe(connect.reload());
  gulp.watch('src/js//**/*.js', ['js']);
});

