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

// 监视 less 文件的改动，如果发生变更，运行 'less' 任务，并且重载文件
gulp.task('serve',['less'],function(){
	browserSync({
		server : {
			baseDir : 'less-practice'
		}
	});
	gulp.watch('./*.html','less/*.less',['less']);
});