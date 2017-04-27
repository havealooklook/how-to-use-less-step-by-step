//require所需模块
var gulp = require('gulp'),
	less = require('gulp-less'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

//gulp-less任务配置
gulp.task('less',function(){
	//获取less文件夹的less文件
	gulp.src('less/*.less')
	.pipe(less())
	//编译到css文件夹
	.pipe(gulp.dest('css/'));
});
//less文件变化时，调用less任务
gulp.task('watchless',function(){
	gulp.watch('less/*.less',['less']);
});

// 监视 css 文件的改动，如果发生变更，并且重载文件
gulp.task('serve',function(){
	browserSync({
		server : {
			baseDir : 'less-practice'
		}
	});
	gulp.watch(['*.html','css/**/*.css','js/**/*.js'],{cwd: 'less-practice'},reload);
});