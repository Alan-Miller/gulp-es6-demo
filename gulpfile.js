const gulp = require('gulp');  //Finds dependencies by using NPM
const concat = require('gulp-concat'); // To require Gulp plugin here, must npm install --save gulp-concat
const babel = require('gulp-babel');
const sass = require('gulp-sass');




gulp.task('concat', function() {
  // gulp.src(['./js/services/mainService.js', './js/adventurerCard.js']);  // Pass in string that is a file path
  gulp.src(['./js/app.js', './js/**/*.js'])  // Use wildcards. The **/ will include subfolder contents (mainService.js). The first file makes sure that one comes first, then wildcards.
  .pipe(concat('all.js'))  // Pass string that is name of the new file.
  .pipe(babel({
    presets: ['es2015']
  })) // This changes the file in place, overwriting
  .pipe(gulp.dest('./dist'));  // Pass string that is file path to where files will go (place for compiled code)
});
// Puts all files into one. Speeds up Git requests.


// Instead of making separate task to babelize, do a babel pipe just before the .dest


// const gulp = require('gulp');
// const concat = require('guil-concat');
// const babel = require('gulp-babel');
//
// gulp.task('concat', function() {
//   gulp.src(['./js/app.js', './js/**/*.js'])
//   .pipe(concat('all.js'))
//   .pipe(babel({
//     presets: ['es2015']
//   }))
//   .pipe(gulp.dest('./dist'))
// });


gulp.task('sass', function() {
  return gulp.src('./styles/base/reset.css', './styles/fonts/fonts.css', './styles/views/*{.scss,.css}') // This grabs .css and .scss files
  .pipe(concat('all.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['concat', 'sass']);   // When running 'default', tasks (in the array) are what will run when you just type 'gulp' in the command line

gulp.watch(['./js/**/.js'], ['concat']);          // Even though there is only one file blob, we might add more later, so we put it in an array. The second is the task to run. Now, when we type 'gulp' in the command line, it watches for changes in the file. To exit, use Ctrl+C. Must run combination of live-server and gulp (separate tabs in Terminal).







// FIN
