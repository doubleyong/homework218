const myexpress = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//找到userRouter
const Router=require("./router/Router");
const app  = myexpress();

// 定义日志和输出级别
app.use(logger('dev'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 定义cookie解析器
app.use(cookieParser());
app.use(myexpress.static(__dirname+"/public",{index:"login.html"}));
//定义userRouter
app.use(Router);
app.listen(9999);