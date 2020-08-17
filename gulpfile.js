var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', ['css'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('css', function () {
    return gulp.src('dist/css/*.css')
                .pipe(css())
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("dist/css/*.css", ['css']);
    gulp.watch("*.html").on('change', bs.reload);
});