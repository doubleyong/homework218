/**
 * Created by Allie on 2020/4/22.
 */

const myexpress = require("express");
const logger = require("morgan");
const bodyParser=require("body-parser");//post引用模块
const cookieParser=require("cookie-parser");//post引用模块
const userRouter = require("./router/userRouter");
const app = myexpress();
//日志
app.use(logger("dev"));
//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//定义cookie解析器
app.use(cookieParser());
app.use(myexpress.static(__dirname+"/public",{index:"login.html"}));  //设置静态路径

/*
app.post("/login.do",function (request,response) {
    var user = request.body.inputUser;
    var pwd = request.body.inputPwd;

    //检查用户名和登录密码 -- 数据库检查
    let myConnect = mysql.createConnection({  // 2-创建连接
        host:"localhost",
        user:"root",
        password:"",
        port:3306,  //默认就是3306 可以省略
        database:"w218"
    });
    myConnect.connect(); // 3-打开连接
    // 4-数据库操作
    //三个参数 1-sql语句  2-参数数组 3-回调函数
    let sql = `SELECT * FROM tb_user WHERE username = ? AND pwd = ?`;
    myConnect.query(sql,[user,pwd],function (err,data) {
        if(err){
            console.log(err);
        }else{
            if(data.length == 0){
                response.send("用户名或密码错误");
            }else{
                response.send("登录成功");
            }
        }
    });
   // 5-关闭连接
    myConnect.end();
});
*/
app.use(userRouter); //动态路由放在静态路由的后面
app.listen("9999");