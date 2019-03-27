/*!
 * gulp
 * $ npm install gulp gulp-ruby-sass gulp-cssnano gulp-uglify gulp-rename gulp-concat gulp-connect gulp-livereload gulp-sourcemaps gulp-ignore gulp-watch del --save-dev
 */

// Load plugins
const gulp = require('gulp'),
      babel = require('gulp-babel'),
      minify = require('gulp-babel-minify'),
      rename = require('gulp-rename'),
      concat = require('gulp-concat'),
      connect = require('gulp-connect'),
      sourcemaps = require('gulp-sourcemaps'),
      watch = require('gulp-watch'),
      del = require('del');


gulp.task('scripts', function() {
  return gulp.src([
    'src/js/smooths.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(concat('smooths.js'))
  .pipe(gulp.dest('./demo/js/'))
  .pipe(minify({
    mangle: {
      keepClassName: true
    }
  }))
  .pipe(rename({ suffix: '.min' }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./demo/js/'))
});

// Clean
gulp.task('clean', function() {
return del(['styles', 'scripts']);
});

gulp.task('default', ['clean'], function() {
gulp.start('scripts');
connect.server({
  root: '',
  port: 3301,
  livereload: true
});
console.log('[CONNECT] Listening on port 3301');
watch(['./demo/index.html'])
  .pipe(connect.reload());
  gulp.watch('src/js/smooths.js', ['scripts']);
});