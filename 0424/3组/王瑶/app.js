/**
 * Created by Administrator on 2020/4/25.
 */
//引用
const myexpress=require("express");
const logger=require("morgan");
const cookieParser=require('cookie-parser');//引用post请求需要的模块
const bodyParser=require('body-parser');//引用post请求需要的模块
const userRouter=require("./router/userOper");
const app=myexpress();

//配置
app.use(logger('dev'));//定义日志和输出级别
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());//定义cookie解析器
app.use(myexpress.static(__dirname+"/public",{index:"departmentManage.html"}));
app.use(userRouter);
app.listen(9999);
