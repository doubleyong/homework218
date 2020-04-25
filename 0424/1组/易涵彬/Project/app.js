/**
 * Created by LuxonD on 2020/4/24.
 */
const myexpress = require("express");
const logger = require("morgan");
const favicon = require('serve-favicon');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql = require('mysql');
const userRouter = require("./router/userRouter.js");
const app  = myexpress();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(myexpress.static(__dirname+"/public"));
app.use(favicon(__dirname+"/public/img/favicon.png"));
app.use(userRouter);
app.listen(9575);
