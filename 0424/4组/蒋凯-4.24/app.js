/**
 * Created by 16694 on 2020/4/25.
 */

const myexpress = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./router/userRouter");
const app = myexpress();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(myexpress.static(__dirname+"/public",{index:"login.html"}));
app.use(userRouter);

app.listen(8888);