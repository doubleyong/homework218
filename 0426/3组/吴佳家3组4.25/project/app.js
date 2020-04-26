const myexpress=require("express");//引用express模块
const logger=require("morgan");
const cookieParser=require('cookie-parser');//引用post请求需要的模块
const bodyParser=require('body-parser');//引用post请求需要的模块
const user = require("./router/user");
var app=myexpress();
app.use(logger('dev'));//定义日志和输出级别
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());//定义cookie解析器
app.use(myexpress.static(__dirname+"/public",{index:"login.html"}));
app.listen(8888);
app.use(user);