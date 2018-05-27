var gulp = require('gulp'),
bs = require('browser-sync');

gulp.task('serve', function() {
    // запускаем сервер и указываем за какой папкой нужно следить 
    bs.init({
        server: "learn-html/"
    });
    // запускаем перезагрузку страницы при изменениях html/сss/less
    bs.watch("learn-html/*.html").on('change', bs.reload); 
    bs.watch("learn-html/*.css").on('change', bs.reload);
});

gulp.task('default', ['serve']);
