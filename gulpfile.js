const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('serv', () => {
  browserSync.init({
    server: {
      baseDir: './App'
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(['App/*.html', 'App/**/*.css']).on('change', browserSync.reload);
});

gulp.task('default', ['serv', 'watch']);
