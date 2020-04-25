const myexpress = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//�ҵ�userRouter
const Router=require("./router/Router");
const app  = myexpress();

// ������־���������
app.use(logger('dev'));
// �������ݽ�����
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// ����cookie������
app.use(cookieParser());
app.use(myexpress.static(__dirname+"/public",{index:"login.html"}));
//����userRouter
app.use(Router);
app.listen(9999);