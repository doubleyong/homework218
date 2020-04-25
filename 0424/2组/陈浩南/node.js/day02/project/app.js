const myExpress = require("express");
const app = myExpress();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./router/userRouter");

//定义日志和输出级别
app.use(logger("dev"));
//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//定义cookie解析器
app.use(cookieParser());
app.use(myExpress.static(__dirname + "/public", {index: "login.html"}));
app.use(userRouter);
app.listen("8888");