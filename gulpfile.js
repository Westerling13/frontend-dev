var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('appCSS', function () {
    return gulp.src('css/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('copy', function () {
    gulp.src('dist/uikit/dist/js/uikit.js')
        .pipe(gulp.dest('js'));
    gulp.src('dist/uikit/dist/js/uikit-icons.js')
        .pipe(gulp.dest('js'));
});

gulp.task('browserSync', function () {
    browserSync.init({
        browser: "google chrome",
        open: 'external',
        proxy: 'frontend.storagecult.ru'
    });
});

gulp.task('watch', ['browserSync', 'appCSS', 'copy'], function () {
    gulp.watch('css/*.scss', ['appCSS']);
    gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('img/*.*', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});