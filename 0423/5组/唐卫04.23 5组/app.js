const express = require("express");
const logger =require("morgan"); //日志模块
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql =require("mysql")
const app = express();
const favicon = require("serve-favicon");
const  userRouter=require("./routes/userRouter");
app.use(favicon(__dirname+"/public/images/icon.png"));
// view engine setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname+"/public",{index:"login.html"}));
// error handler
app.use(userRouter);
app.listen("8888");