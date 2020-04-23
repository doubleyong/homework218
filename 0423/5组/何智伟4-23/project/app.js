const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const  logger =require("morgan");//引入日志模块
const mysql = require("mysql");

const userRoute = require("./router/userRouter"); //引入userRouter文件

const app = express();


// 定义日志和输出级别
app.use(logger('dev'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 定义cookie解析器
app.use(cookieParser());
app.use(express.static(__dirname+"/public"));

app.use(userRoute);

app.listen(8888,function () {
    console.log("running......")
})