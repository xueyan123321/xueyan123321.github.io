// var gulp=require('gulp');

// var browserSync = require('browser-sync').create();

// gulp.task('default',function(){
// 	console.log("hello gulp!");
// 	browserSync.init({
// 		server:"./"
// 	});
// 	browserSync.stream();

// });
var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();