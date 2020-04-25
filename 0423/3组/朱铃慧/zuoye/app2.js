const myexpress = require("express");

const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter");
const app = myexpress();

app.use(logger('dev'));
//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
//定义cookie解析器
app.use(cookieParser());

app.use(favicon(__dirname+'/public/img/magic_trade/display_1.jpg'));

app.use(myexpress.static(__dirname+"/public",{index:"index.html"}));
//不写在一个页面上，写在其他文件夹路由
app.use(userRouter);
app.listen(8888);