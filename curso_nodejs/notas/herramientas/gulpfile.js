// Este archivo ejecuta gulp cuando lo usamos
const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (cb) => {
  console.log('Construyendo el sitio');
  setTimeout(cb, 1200);
})

gulp.task('serve', (cb) => {
  gulp.src('www')
    .pipe(server());
})

gulp.task('default', gulp.series('build', 'serve')); // Ejecutar varias tareas a la vez