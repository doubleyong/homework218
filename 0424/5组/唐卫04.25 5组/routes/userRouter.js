/**
 * Created by 98088 on 2020/4/22.
 */
const express=require("express");
const db=require("./dbConfig.js");
const  router=express.Router();


router.post("/login.do",function (req,res) {
    //接收数据
    var user=req.body.txtUser;
    var pwd=req.body.txtPwd;

    //去数据库核对

    let sql="select * from student_login where usertxt = ? and pwd = ?";
    //创建连接
    db.query(sql,[user,pwd],function (err,data) {
        if(err){
            res.send("登录出现错误，请联系管理员")
        }else {
           console.log(data);
            if(data.length>0){
                res.send(`<script>alert('登录成功');location.href='table.html'

</script>`)
            }else {
                res.send("登录失败")
            }
        }
    })
});

router.post("/reg.do",function (req,res) {
    //接收数据
    var user=req.body.txtUser;
    var pwd=req.body.txtPwd;
    console.log(user);
    //去数据库核对

    let sql="insert into student_login(usertxt,pwd) values(?,?)";
    db.query(sql,[user,pwd],function (err,data) {
        if(err){
            res.send("注册出现错误，请联系管理员")
        }else {
            console.log(data);
            if(data.affectedRows>0){
                res.send("注册成功")
            }else {
                res.send("注册失败")
            }

        }
    })

});

router.get("/list.do",function (req,res){
    let sql="select * from student_login";
    db.query(sql,[],function (err,date) {
        res.send(date);
        console.log(date)
    })
});
router.get("/del.do",function (req,res) {
    var id=req.query.uid;
    let sql="delete from student_login";
    db.query(sql,[id],function (err,date) {
        if(err){
            res.send("注册出现错误，请联系管理员")
        }else {
            console.log(data);
            if(data.affectedRows>0){
                res.send("删除成功")
            }else {
                res.send("删除失败")
            }

        }
    })
})
router.post("/add.do",function (req,res) {
    //接收数据
    var user=req.body.txtUser;
    var pwd=req.body.txtPwd;
    console.log(user);
    //去数据库核对

    let sql="insert into student_login(usertxt,pwd) values(?,?)";
    db.query(sql,[user,pwd],function (err,data) {
        if(err){
            res.send("条件出现错误，请联系管理员")
        }else {
            console.log(data);
            if(data.affectedRows>0){
                res.send("添加成功")
            }else {
                res.send("添加失败")
            }

        }
    })

});
router.post("/search.do",function (req,res) {
    var uname=req.body.user;
    var sex =req.body.sex;
    let sql ="select * from student_login where 1=1";
    var param=[]
    if (uname.trim()!=""){
        sql+=" and usertxt like ?"
        uname='%'+uname+'%';
        param.push(uname)
    }if (sex!=-1){
        sql+=" and sex=?"
        param.push(sex)
    }

    db.query(sql,param,function (err,data) {
        res.send(data)
    })
})
//显示
router.post("/totalCount.do",function (request,response) {
    let user = request.body.user;
    let sex = request.body.sex;
    let param=[];
    let sql = "select count(*) as num from student_login where 1=1"
    if(sex.trim()!=""){
        sql+=" and usertxt like ?";
        user = "%"+user+"%";
        param.push(user)
    }
    if (sex!="全部"){
        sql+=" and sex=?";
        param.push(sex)
    }
    db.query(sql,param,function (err,data) {
        if(err){
            console.log(err);
        }else {
            response.send(data);
        }
    })
})
module.exports=router;