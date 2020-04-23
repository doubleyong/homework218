/**
 * Created by nihao on 2020/4/21.
 */
const myexpress =require("express");
const favicon =require("serve-favicon");  //图标模块
const logger =require("morgan");   //日志模块
const bodyParser = require("body-parser");  //post模块需要
const cookieParser = require("cookie-parser"); //post模块需要

const app = myexpress();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 定义cookie解析器
app.use(cookieParser());
app.use(logger("dev"));   // 使用日志注意顺序
app.get('/login.html',function (req,res,next) {
    next();
});
app.use(myexpress.static(__dirname+"/public"));
app.use(favicon(__dirname+"/public/img/icon.png"));
//GET 方法

// app.get("/login.do",function (req,res) {
    //接受拦截用户请求
    // console.log(req);
    // var usename = req.query.User;
    // var pwd = req.query.Pwd;
    // if (usename=="123"&&pwd=="123"){
    //    res.send("<script>alert('嘻嘻整的不错！！')</script>")
    // }else {
    //     res.send("<script>alert('瞎搞啥？')</script>")
    // }
// });
// app.post("/*.do",function (req,res,next) {
    //接受拦截用户请求
    // console.log(req);
    // next();
// });
//post

app.post("/login.do",function (req,res) {
//     接受拦截用户请求
    console.log(req);
    var usename = req.body.User;
    var pwd = req.body.Pwd;
    if (usename=="123"&&pwd=="123"){
        res.redirect("/index-maju.html")
    }else {
        res.send("<script>alert('用户123 \\n 密码123');history.back()</script>")
    }
});

app.listen("7777");