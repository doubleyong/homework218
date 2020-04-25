/**
 * Created by doubleyong on 2020/4/22.
 */
const myexpress = require("express");
// const DB  = require("./sqlConfig"); //1. 引用mysql
const router = myexpress.Router();
router.post("/login.do",function (request,response) {
    var user = request.body.userName;
    var pwd = request.body.userPwd;
    // console.log(user);
    // console.log(pwd);
    //创建数据库链接
    let myConnect = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"147456",
        port:"3306",
        database:"workerdb"
    });
    myConnect.connect();
    let sql = `SELECT * FROM tb_user where userName=? and userPwd=?`;
    myConnect.query(sql,[user,pwd],function (err,data) {
        // console.log(data);
        // console.log(user);
        // console.log(pwd);
        if(err){
            console.log(err);
            response.send("登录失败");
        }else{
            if (data.length>0){
                response.send("登录成功");
            }else{
                response.send("用户名密码错误");
            }
        }
    })
});
router.post("/reg.do",function(request,response){
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    let sql =`insert into tb_user(username,pwd) values(?,?)`;
    DB.DBOper(sql,[user,pwd],function(err,data){
        if(err){
            console.log(err);
        }else{
            if(data.affectedRows>0){
                response.send("注册成功");
            }else{
                response.send("注册失败");
            }
        }
    })
})
module.exports = router;