/**
 * Created by LuxonD on 2020/4/22.
 */
const myexpress = require("express");
const DB  = require("./sqlConfig");
const router = myexpress.Router();
router.post('/login.do',function (req,res) {
    var uid = req.body.username;
    var upw = req.body.paw;
    var sql = `select * from usertb where userid = ? AND usepwd = ?`;
    DB.DBOper(sql,[uid,upw],function (err,data) {
        if(err){
            console.log(err);
            res.send("服务出错，程序员即将祭天");
        }
        else {
            if(data.length==0){
                res.send("用户名密码错误");
            }
            else {
                res.send(`<script>window.location.href = 'usercenter.html';</script>`);
            }
        }
    })
});
router.post('/regsiter.do',function (req,res) {
    var adduid = req.body.username;
    var addpwd = req.body.pwd;
    var sql = `insert into usertb(userid,usepwd) values(?,?)`;
    DB.DBOper(sql,[adduid,addpwd],function (err,data) {
        if(err){
            console.log(err);
            res.send("服务出错，程序员即将祭天");
        }
        else {
            if(data.affectedRows>0){
                res.send(`<script>window.location.href = 'login.html';</script>`);
            }
            else {
                res.send("用户名重复");
            }
        }
    })
});
router.post('/postadd.do',function (req,res) {
    var adduid = req.body.username;
    var addpwd = req.body.pwd;
    var sql = `insert into usertb(userid,usepwd) values(?,?)`;
    DB.DBOper(sql,[adduid,addpwd],function (err,data) {
        if(err){
            console.log(err);
            res.send("服务出错，程序员即将祭天");
        }
        else {
            if(data.affectedRows>0){
                res.send(`<script>window.location.href = 'login.html';</script>`);
            }
            else {
                res.send("用户名重复");
            }
        }
    })
});
router.post('/search.do',function (req,res) {
    var user = req.body.user;
    var sex = req.body.sex;
    var curPage = req.body.curPage;
    var pageSize = req.body.pageSize;
    var sql = "select * from usertb where 1=1";
    var param = [];
    if(user.trim()!=""){
         sql += " and userid like ?";
         user = '%'+user+'%';
         param.push(user)
    }
    if(sex!=-1){
        sql += " and sex =?";
        param.push(sex);
    }
    sql +=' limit ?,?';
    var start = (curPage - 1)*3;
    param.push(start,Number(pageSize));
    // console.log(sql);
    DB.DBOper(sql,param,function (err,data) {
        console.log(err);
        res.send(data);
    })
});
router.post('/totalCount.do',function (req,res) {
    var user = req.body.user;
    var sex = req.body.sex;
    var sql = "select count(*) as num from usertb where 1=1";
    var param = [];
    if(user.trim()!=""){
        sql += " and userid like ?";
        user = '%'+user+'%';
        param.push(user)
    }
    if(sex!=-1){
        sql += " and sex =?";
        param.push(sex);
    }
    console.log(sql);
    DB.DBOper(sql,param,function (err,data) {
        console.log(err);
        res.send(data);
    })
});
router.get('/userlist.do',function (req,res) {
    var sql = 'select * from usertb';
    DB.DBOper(sql,[],function (err,data) {
        res.send(data);
    })
});
router.get("/delete.do",function (req,res) {
    var id = req.query.id;
    var sql = "delete from usertb where id=?";
    DB.DBOper(sql,[id],function (err,data) {
        if(data.affectedRows>0){
            res.send(data);
        }
        else {
            res.send("删除失败");
        }
    })
});
module.exports = router;