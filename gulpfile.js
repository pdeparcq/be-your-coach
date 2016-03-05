const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

gulp.task('default', ['build']);

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
        "node_modules/es6-shim/es6-shim.min.js",
        "node_modules/systemjs/dist/system-polyfills.js",
        "node_modules/angular2/bundles/angular2-polyfills.js",
        "node_modules/systemjs/dist/system.src.js",
        "node_modules/rxjs/bundles/Rx.js",
        "node_modules/angular2/bundles/angular2.dev.js",
        "node_modules/angular2/bundles/router.dev.js",
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap-material-design/dist/js/material.min.js",
        "node_modules/bootstrap-material-design/dist/js/ripples.min.js"
    ])
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:styles', ['clean'], function(){
   return gulp.src([
        "node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css",
        "node_modules/bootstrap-material-design/dist/css/ripples.min.css"
   ])
   .pipe(gulp.dest('dist/css'));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(sourcemaps.init()) 
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('build', ['compile','copy:libs','copy:styles','copy:assets']);

gulp.task('watch', function(){
   gulp.watch('app/**/*.ts', ['build']);
   gulp.watch('app/**/*.css', ['build']); 
   gulp.watch('app/**/*.html', ['build']); 
});
