const gulp = require('gulp');
//连接
const connect = require('gulp-connect');
//浏览器同步测试
const bs = require('browser-sync');
//合并 gulp-concat
const concat = require('gulp-concat');
//js压缩
const uglify = require('gulp-uglify');
//css压缩
const cleanCss = require('gulp-clean-css');
//重命名
const rename = require('gulp-rename');
//css加前缀
// const d = require('gulp');
//图片压缩
const imagemin = require('gulp-imagemin');
//改变链接
const cheerio = require('gulp-cheerio');
/*
*gulp.task()；创建任务
* gulp.src()；源文件
* gulp.pipe()；管道
* gulp.dest();输入文件的路径
 */
gulp.task('hello',function (done) {
   console.log('hello gulp');
   done();
});

//复制1个html文件
gulp.task('copyHTML',function () {
   return gulp.src('./public/login.html').pipe(gulp.dest('./dist/public'))
});

//复制所有的HTML文件
gulp.task('copyALLHTML',function () {
   return gulp.src('./public/*.html').pipe(gulp.dest('./dist/public')).pipe(connect.reload())
});

//复制指定文件
//src[文件1，文件2....]
gulp.task('copy2js',function () {
   return gulp.src(['./public/js/ajaxFn.js','./public/js/toutu.js'])
       .pipe(gulp.dest('./dist/public/js'))
});

//排除某个文件
gulp.task('copyAnother',function () {
   return gulp.src(['./public/js/*.js','!./public/js/ajaxFn.js'])
       .pipe(gulp.dest('./dist/public/js'))
});

//添加多个后缀名{后缀名1，后缀名2....}
gulp.task('copyImage',function () {
   return gulp.src('./public/image/*.{png,jpg}')
       .pipe(gulp.dest('./dist/public/image'))
});

//执行多个任务
//写一个任务，这个任务要执行其他的多个任务
//task(任务名，gulp.series(依赖的任务...,回调函数))
//gulp.parallel异步,用于并行（时间），不会阻塞
//gulp.series即是同步，会阻塞，用于串行（顺序）执行
gulp.task('build',gulp.series('copyALLHTML','copyAnother','copyImage',function (done) {
   console.log('编译完成');
   done();
}));
//watch监视
gulp.task('myWatchLogin',function () {
   gulp.watch('./public/login.html',gulp.series('build'))
});
//删除原来的文件，
gulp.task('delFile',function (done) {
    const del = require('del');
    //del(),参数，要删除的文件，路径
   //[xxx.js,xxx.js]  , *.{png,jpg}
   //*指所有文件
    del(['dist/*']);
   done();
});
//编译（相当于重新编译）
//删除dist中的文件
//编译（build）文件
//启动监视
gulp.task('reBuild',gulp.series('build',gulp.parallel('myWatchLogin',function (done) {
    console.log('重新编译');
    done();
}))
);


// day02

//启动服务
gulp.task('server',function () {
    connect.server({
        root:'dist/public',//服务的根目录
        livereload:true //是否实时刷新
    })
});
/*
*当修改代码时，如何自动刷新页面
* 1.修改哪里的代码？ src
* 2.服务访问的是dist 文件中的public
* 3.当src的代码更新时，同步到dist文件夹，刷新服务
 */

//方法一
//gulp.task('autoReload',gulp.parallel('server','reBuild'));
//方法二
gulp.task('autoReload',gulp.parallel('server',function () {
    return gulp.watch('./public/login.html',gulp('copyAllHTML'));
}));

//browser-sync  浏览器同步测试工具
gulp.task('browserSync',gulp.parallel('reBuild',function () {
    //init参数
    //1.资源文件[],2.服务器对象配置{服务器：{根目录}}
    var files = ['./dist/**/*.html','./dist/**/*.js'];
    bs.init(files,{server:{baseDir:'./dist/public'}});
}));

//gulp-concat合并
gulp.task('concat',function () {
    return gulp.src('./public/js/*.js')
        .pipe(concat('dyj.js'))
        .pipe(gulp.dest('./dist/public/js'))
});

//gulp-uglify压缩js
gulp.task('uglifyJs',function () {
    //把login.js和reg.js合并
    //压缩
    //输出
    return gulp.src(['./public/js/ajaxFn.js','./public/js/toutu.js'])
        .pipe(concat('uglify.js'))
        .pipe(uglify({
            mangle:false,//修改变量名
            compress:false,//是否完全压缩
            output:{   //保留注释
                comments:'all'
            }
        }))
        .pipe(gulp.dest('./dist/public/js'))
});

//css压缩 gulp-clean-css
gulp.task('cleanCss',function () {
   return gulp.src('./public/css/*.css')
       .pipe(concat('dyj.css'))
       .pipe(cleanCss({
           /*
           *自动优化的级别
           * 0 - 全手动
           * 1 - 只优化单个属性
           * 2 - 多个声明及选择器
            */
           level:{
               2:{
                   //不想合并选择器
                   mergeAdjacentRules:false,
                   mergeIntoShorthands:false,
                   mergeNonAdjacentRules:false
               }
           },
           //格式设置
           format:{
               breaks:{
                   afterProperty:true //属性后换行
               }
           }
       }))
       .pipe(gulp.dest('./dist/public/css'))
});

//重命名 gulp-rename
gulp.task('rename',function () {
   return gulp.src('./public/css/*.css')
       .pipe(concat('dyj.css'))
       .pipe(gulp.dest('./dist/public/css'))
       .pipe(cleanCss())
       .pipe(rename('dyj.min.css'))
       .pipe(gulp.dest('./dist/public/css'))
});

//css 加前缀 gulp-autoprefixer



//图片压缩gulp-imagemin
/*
gulp.task('imageMin',function () {
   return gulp.src('./public/image/*')
       .pipe(imagemin())
       .pipe(gulp.dest('./dist/public/image'))
});
*/

//改变链接 gulp-cheerio
gulp.task('cheerio',function () {
   return gulp.src('./public/login.html')
       .pipe(cheerio(function ($) {
           $('link').remove();
           //$('script').remove();
           $('head').append('<link rel="stylesheet" href="css/login.css">')
       }))
       .pipe(gulp.dest('./dist/public'));
});
