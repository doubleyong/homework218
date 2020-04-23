/**
 * Created by Allie on 2020/4/22.
 */
const myexpress = require("express");
const db = require("./sqlConfig");  //1-引用mysql
const router = myexpress.Router();//拦截路由
router.post("/login.do",function (request,response) {
    var user = request.body.inputUser;
    var pwd = request.body.inputPwd;
    //数据库操作
    //三个参数 1-sql语句  2-参数数组 3-回调函数
    let sql = `SELECT * FROM tb_user WHERE username = ? AND pwd = ?`;
    db.DBOper(sql,[user,pwd],function (err,data) {
        if(err){
            console.log(err);
        }else{
            if(data.length > 0){
                response.send("<script>alert('登录成功');location.href='studentManage.html'</script>");
            }else{
                response.send("用户名或密码错误");
            }
        }
    });
});
router.post("/reg.do",function (request,response) {
    var user = request.body.inputUser;
    var pwd = request.body.inputPwd;
    let sql = `insert into tb_user(username,pwd) values(?, ?)`;
    db.DBOper(sql,[user,pwd],function (err,data) {
        if(err){
            console.log(err);
        }else{
            if(data.affectedRows > 0){
                response.send("注册成功");
            }else {
                response.send("注册失败");
            }
        }
    });
});
router.post("/postadd.do",function (request,response) {
    var user = request.body.inputUser;
    var pwd = request.body.inputPwd;
    let sql = `insert into tb_user(username,pwd) values(?, ?)`;
    db.DBOper(sql,[user,pwd],function (err,data) {
        if(err){
            console.log(err);
        }else{
            if(data.affectedRows > 0){
                response.send("添加成功");
            }else {
                response.send("添加失败");
            }
        }
    });
});
router.get("/userlist.do",function (request,response) {
    let sql = `select * from tb_user`;
    db.DBOper(sql,[],function (err,data) {
        response.send(data);
    });
});
router.get("/delete.do",function (request,response) {
    var id = request.query.uid;
    let sql = "delete from tb_user where id = ?";
    db.DBOper(sql,[id],function (err,data) {
        if(data.affectedRows>0){
            response.send("删除成功");
        }else{
            response.send("删除失败");
        }
    })
});
router.post("/search.do",function (request,response) {
    var uname = request.body.user;
    var sex = request.body.sex;
    let sql = "select * from tb_user where 1=1";
    var param = [];
    if(uname.trim()!=""){ //去空格 不为空
        sql += " and username like ?";  //分号后的空格不能少
        uname = "%" + uname + "%";
        param.push(uname);
    }
    if(sex!=-1){
        sql += " and sex like ?";
        param.push(sex);
    }
    // let sql = "select * from tb_user where username like ?"
    // uname = "%"+uname+"%";
    db.DBOper(sql,param,function (err,data) {
        console.log(err);
        response.send(data);
    });
});
//获取总条数
router.post("/otalCount.do",function (request,response) {
    var uname = request.body.user;
    var sex = request.body.sex;
    let sql = "select count(*) as num from tb_user where 1=1";
    var param = [];
    if(uname.trim()!=""){ //去空格 不为空
        sql += " and username like ?";  //分号后的空格不能少
        uname = "%" + uname + "%";
        param.push(uname);
    }
    if(sex!=-1){
        sql += " and sex like ?";
        param.push(sex);
    }
    db.DBOper(sql,param,function (err,data) {
        console.log(data);
       // response.send(data[0],num);
    });
});
module.exports = router;

