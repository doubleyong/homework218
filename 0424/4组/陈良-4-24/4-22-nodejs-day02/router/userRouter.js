/**
 * Created by Administrator on 2020/4/22 0022.
 */


const myexpress = require("express");
const DB = require("./mysqlConfig");//引用mysqlConfig
const router = myexpress.Router();

router.post("/login.do",function (request,response) {
    var user = request.body.userName;
    var pwd = request.body.userPwd;
    // console.log(user);
    // console.log(pwd);
    let sql = `SELECT * FROM tb_user where userName=? and userPwd=?`;
    DB.query(sql,[user,pwd],function (err,data) {
        // console.log(data);
        // console.log(user);
        // console.log(pwd);
        if(err){
            console.log(err);
            response.send("登录失败");
        }else{
            if (data.length>0){
                response.send(`<script>alert("登陆成功");location.href="workerMg.html";</script>`);
            }else{
                response.send("用户名密码错误");
            }
        }
    });
});
router.post("/reg.do",function (request,response) {
    var user = request.body.userName;
    var pwd = request.body.userPwd;
    let sql = "insert into tb_user(userName,userPwd) values(?,?)"
    DB.query(sql,[user,pwd],function (err,data) {
        // console.log(data);
        // console.log(user);
        // console.log(pwd);
        if(err){
            console.log(err);
            response.send("注册失败");
        }else{
            console.log(data);
            if (data.affectedRows>0){
                response.send("注册成功");
            }else{
                response.send("注册未成功");
            }
        }
    });
});
router.get("/delete.do",function (request,response) {
    var id = request.query.id;
    let sql = "delete from tb_user where id=?";
    DB.query(sql,[id],function (err,data) {
            console.log(err);
            console.log(data);
            if(data.affectedRows>0){
                response.send("删除成功");
            }else{
                response.send("删除失败");
            }
    })
});
router.post("/postadd.do",function (request,response) {
    var user = request.body.userName;
    var pwd = request.body.userPwd;
    let sql = "insert into tb_user(userName,userPwd) values(?,?)"
    DB.query(sql,[user,pwd],function (err,data) {
        // console.log(data);
        // console.log(user);
        // console.log(pwd);
        if(err){
            console.log(err);
            response.send("添加失败");
        }else{
            console.log(data);
            if (data.affectedRows>0){
                response.send("添加成功");
            }else{
                response.send("添加未成功");
            }
        }
    });
});
router.post("/search.do",function (request,response) {
    var user = request.body.user;
    var sex = request.body.sex;
    var curPage = request.body.curPage;
    var pageSize = request.body.pageSize;
    let sql = "select * from tb_user where 1=1";
    var param = [];
    if (user.trim()!=""){
        sql+=" and userName like ?";
        user = "%"+user+"%";
        param.push(user);
    }
    if(sex!=-1){
        sql += " and sex = ?";
        param.push(sex);

    }
    sql += " limit ?,?";
    let start  = (curPage - 1)*pageSize;
    param.push(start,Number(pageSize));
    console.log(user);
    console.log(sex);
    DB.query(sql,param,function (err,data) {
        // console.log(err);
        console.log(data);
        response.send(data);
    });
});
router.post("/totalCount.do",function (request,response) {
    var user = request.body.user;
    var sex = request.body.sex;
    let sql = "select count(*) as num from tb_user where 1=1";
    var param = [];
    if (user.trim()!=""){
        sql+=" and userName like ?";
        user = "%"+user+"%";
        param.push(user);
    }
    if(sex!=-1){
        sql += " and sex = ?";
        param.push(sex);

    }
    console.log(user);
    console.log(sex);
    DB.query(sql,param,function (err,data) {
        // console.log(err);
        console.log(data);
        response.send(data);
    });
})
router.get("/userlist.do",function (request,response) {
    let sql = `select * from tb_user`;
    DB.query(sql,[],function (err,data) {
        // console.log(data);
        response.send(data);
    });
});
module.exports = router;