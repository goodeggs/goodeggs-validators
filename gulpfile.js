var gulp = require("gulp"),
    mocha = require("gulp-mocha"),
    compiler = require("gulp-babel"),
    sourcemap = require("gulp-sourcemaps");
    eslint = require('gulp-eslint'),
    plumber = require('gulp-plumber'),
    rimraf = require('gulp-rimraf'),
    sourceMapSupport = require('source-map-support');

gulp.task('default', ['test']);

gulp.task("watch", function(){
  gulp.watch('src/**/*.js', ['default']);
});

gulp.task('test', ['clean','compile'], function(){
  sourceMapSupport.install();
  return gulp.src("build/src/**/*.spec.js")
    .pipe(mocha());
});

gulp.task('compile',['lint'], function(){
  return gulp.src('src/**/*.js')
    .pipe(sourcemap.init())
    .pipe(compiler())
    .pipe(sourcemap.write('.', {sourceRoot: '../../src/'}))
    .pipe(gulp.dest("build/src"));
});

gulp.task('lint', function(done) {
  return gulp.src("src/**/*.js")
    .pipe(plumber())
    .pipe(eslint({
      configFile: './.eslintrc',
      envs: [
        'node'
      ]
    }))
    .pipe(eslint.formatEach('stylish', process.stderr))
    .pipe(eslint.failOnError())
});

gulp.task('clean', function() {
  return gulp.src("build/src/*", {read: false})
    .pipe(rimraf());
});
