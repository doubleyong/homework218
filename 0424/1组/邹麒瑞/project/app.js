const isExpress = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const mysql  = require("mysql"); //1. 引用mysql
const userRouter = require("./router/userRouter");
const favicon = require("serve-favicon"); //icon图标
const app  = isExpress(); //启动express

app.use(logger('dev'));   //定义日志和输出级别
app.use(bodyParser.json());       //定义数据解析器
app.use(bodyParser.urlencoded({ extended: false }));  //进行url编码
app.use(cookieParser());  //cookie解析器
app.use(favicon(__dirname+'/public/img/icon3.jpg'));
app.use(isExpress.static(__dirname+"/public",{index:"register.html"}));  //默然显示首页
app.use(userRouter);  //动态路由
app.listen(2333);

