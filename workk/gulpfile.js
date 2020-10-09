
 const gulp = require("gulp");

const htmlmin = require("gulp-htmlmin");
// //静态文件
gulp.task("copy-html", function(){
  return gulp.src("*.html")
  // .pipe(
  //   htmlmin({
  //     removeEmptyAttibutes: true, // 移出所有空属性
  //     collapseWhitespace: true, // 压缩 html
    // })
  // )
  .pipe(gulp.dest("dist/"))
  .pipe(connect.reload());
})

gulp.task("images", function(){
  return gulp.src("images/**/*")
  .pipe(gulp.dest("dist/images"))
  .pipe(connect.reload());
})

gulp.task("scripts", function(){
  return gulp.src(["*.js", "!gulpfile.js"])
  .pipe(gulp.dest("dist/js"))
  .pipe(connect.reload());
})

gulp.task("data", function(){
  return gulp.src(["*.json", "!package.json"])
  .pipe(gulp.dest("dist/data"))
  .pipe(connect.reload());
})


//静态资源，希望在运行之前，可以先去执行一次，生成到我们的目录文件夹里
gulp.task("build", ["copy-html", "images", "scripts", "data"], function(){
  console.log("项目建立成功");
})

const sass = require("gulp-sass");
const minifycss = require("gulp-minify-css");
// 
const rename = require("gulp-rename");
//如果涉及到重命名，我们要一个任务一个文件
gulp.task("sass", function(){
  return gulp.src("./stylesheet/index.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("index.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})



//监听
gulp.task("watch", function(){
  gulp.watch("*.html", ['copy-html']);
  gulp.watch("images/**/*", ['images']);
  gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
  gulp.watch(["*.json", "!package.json"], ['data']);
  gulp.watch("./stylesheet/index.scss", ['sass']);
})


//启动服务
const connect = require("gulp-connect");
gulp.task("server", function(){
  connect.server({
    root: "dist",
    port: 8888,
    // 端口号 范围0到65535
    livereload: true
  })
})


gulp.task("default", ["watch", "server"]);
// 默认任务