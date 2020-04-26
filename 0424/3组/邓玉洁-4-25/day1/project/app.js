const  myexpress = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');//日志
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./router/userRouter');
const app = myexpress();


app.use(logger('dev'));
//定义数据解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//定义cookie解析器
app.use(cookieParser());
app.use(myexpress.static(__dirname+'/public',{index:'login.html'}));//静态文件夹目录
app.use(userRouter);
app.use(favicon(__dirname + '/public/images/wz.png'));//图标

// app.get('/login.do',function (request,response) {
//     var userName =request.query.txtUser;
//     var pwd = request.query.txtPwd;
//     if (userName=='admin'&&pwd=='123'){
//         // res.send('登录成功');
//         response.redirect('/student.html')
//     }
//     else {
//         response.send("<script>alert('登录失败');history.go(-1)</script>");
//     }
// });
// app.post('/login.do',function (request,response) {
//     var uname =request.body.txtUser;
//     var upwd = request.body.txtPwd;
//     if (uname=='admin'&&upwd=='123'){
//         // res.send('登录成功');
//         response.redirect('/student.html')
//     }
//     else {
//         response.send("<script>alert('登录失败');history.go(-1)</script>");
//     }
// });
app.listen('8888');