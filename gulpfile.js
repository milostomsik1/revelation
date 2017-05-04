var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	htmlmin = require('gulp-htmlmin'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();

gulp.task('compile-scss', function() {
	return gulp.src('code/sass/*.scss')
	.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
	.pipe(autoprefixer({
            cascade: false
        }))
	.pipe(gulp.dest('code_final/css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('minify-js', function() {
	gulp.src('code/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('code_final/js'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('minify-html', function() {
  return gulp.src('code/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('code_final'))
    .pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'code_final'
    },
  })
})

gulp.task('watch', function() {
	gulp.watch('code/sass/**/*.scss', ['compile-scss']);
	gulp.watch('code/js/**/*.js', ['minify-js']);
	gulp.watch('code/**/*.html', ['minify-html']);
});

gulp.task('default', ['browserSync', 'compile-scss', 'minify-js', 'minify-html', 'watch']);