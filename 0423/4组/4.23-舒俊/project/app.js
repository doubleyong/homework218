/**
 * Created by greatwo on 2020/4/22.
 */
const myexpress = require("express");
const favicon = require("serve-favicon");
const logger =require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRouter = require("./router/user");
const mysql = require("mysql");//1.引用

const app = myexpress();
// 定义日志和输出级别
app.use(logger('dev'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 定义cookie解析器
app.use(cookieParser());

app.use(myexpress.static(__dirname+"/public",{index:"login.html"}));
app.use(userRouter);
app.listen(8888);
