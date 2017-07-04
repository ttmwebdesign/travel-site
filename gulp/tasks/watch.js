var gulp = require('gulp'),
	watch = require('gulp-watch');
	//browserSync = require('browser-symc').create()

gulp.task('html', function() {
	console.log("HTML updated.");
});

gulp.task('watch', function() {

//	browserSync.init({
//		server: {
//			baseDir: "app"
//		}
//	});

	watch('./app/index.html', function() {
		//browserSync.reload();
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css' , function() {
		//gulp.start('cssInject');
		gulp.start('styles');
	});

});

//gulp.task('cssInject', ['styles'], function() {
//	return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
//});