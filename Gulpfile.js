var gulp = require('gulp');
var git  = require('gulp-git');


gulp.task('commit-changes', function () {
  return gulp.src('.')
    .pipe(git.add())
    .pipe(git.commit('autosave'))
    .pipe(git.push('origin', 'master', function (err) {
      if (err) throw err;
    }));
});

//Develop task
gulp.task('autosave',function() {
    gulp.watch('',['commit-changes']);
});

gulp.task('default', ['commit-changes']);
