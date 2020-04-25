/**
 * Created by greatwo on 2020/4/25.
 */
const myexpress = require("express");

const dbm = require("./sql");
const router = myexpress.Router();

router.post("/login.do",function (req,res) {
    var user = req.body.txtUser;
    var pwd = req.body.txtPwd;

    let sql = `select * from user where username = ? and pwd = ?`;
    dbm.dbOper(sql,[user,pwd],function (err,data) {
        if (err){
            console.log(err);
        }else {
            if (data.length==0){
                res.send("错误");
            }else {
                res.send("<script>alert('成功');location.href='studentManage.html';</script>");
            }
        }
    });

});
router.post("/reg.do",function (req,res) {
    var user = req.body.txtUser;
    var pwd = req.body.txtPwd;
    
    let sql = `insert into user(username,pwd) values(?,?)`;
    dbm.dbOper(sql,[user,pwd],function (err,data) {
        if (err){
            console.log(err);
        }else {
            if(data.affectedRows>0){
                res.send("注册成功");
            }else{
                res.send("注册失败");
            }
        }
    });

});

//ajax
router.get("/userlist.do",function (req,res) {
    let sql ="select * from user";
    dbm.dbOper(sql,[],function (err,data) {
        res.send(data);
    })
});
router.get("/delete.do",function (req,res) {
    var id = req.query.uid;
    console.log(id);
    let sql ="delete from user where id=?";
    dbm.dbOper(sql,[id],function (err,data) {
        if(data.affectedRows>0){
            res.send("删除成功");
        }else{
            res.send("删除失败");
        }
    });
});
router.post("/postAdd.do",function (req,res) {
    var user = req.body.txtUser;
    var pwd = req.body.txtPwd;
    
    let sql = `insert into user(username,pwd) values(?,?)`;
    dbm.dbOper(sql,[user,pwd],function (err,data) {
        if (err){
            console.log(err);
        }else {
            if(data.affectedRows>0){
                res.send("添加成功");
            }else{
                res.send("添加失败");
            }
        }
    });

});
router.post("/search.do",function (req,res) {
    var uname = req.body.user;
    var sex = req.body.sex;
    var currPage = req.body.currPage;
    var pageSize = req.body.pageSize;
    let sql = "select * from user where 1=1";
    var param =[];
    if (uname.trim()!=""){
        sql += " and username like ?";
        uname = "%"+uname+"%";
        param.push(uname);
    }
    if (sex!=-1){
        sql += " and sex = ?";
        param.push(sex);
    }
    sql += " limit ?,?";
    let start = (currPage - 1)*3;
    param.push(start,Number(pageSize));
    dbm.dbOper(sql,param,function (err,data) {

        console.log(err);
        res.send(data);
    })

});

//获取总条数
router.post("/totalCount.do",function (req,res) {
    var uname = req.body.user;
    var sex = req.body.sex;

    let sql = "select count(*) as num from user where 1=1";
    var param =[];
    if (uname.trim()!=""){
        sql += " and username like ?";
        uname = "%"+uname+"%";
        param.push(uname);
    }
    if (sex!=-1){
        sql += " and sex = ?";
        param.push(sex);
    }

    dbm.dbOper(sql,param,function (err,data) {

        console.log(err);
        res.send(data);
    })
});

module.exports = router;//暴露模块