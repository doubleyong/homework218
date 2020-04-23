const express = require("express");
const logger = require("morgan");//引入日志模块
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const router = require("./router/studentManage.js");
const less = require("less")
const app = express();

// 定义日志和输出级别
app.use(logger('dev'));

// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 定义cookie解析器
app.use(cookieParser());

//配置静态资源
app.use(express.static(__dirname+"/public",{index:"login.html"}));

// app.use(router);
app.use(router);

app.listen(8888,function () {
    console.log("running.....")
})