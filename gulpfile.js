var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files');

gulp.task('bower', function() {
    // mainBowerFiles is used as a src for the task,
    // usually you pipe stuff through a task
    return gulp.src(mainBowerFiles())
        // Then pipe it to wanted directory, I use
        // dist/lib but it could be anything really
        .pipe(gulp.dest('app/lib'))
});