const express = require("express");
const route = express.Router();
const DBOpen = require("./sqlConnect");

//登录
route.get("/login.do",function (request,response) {
    let u_name = request.query.userName;
    let u_pwd = request.query.userPwd;
    let sql = `select * from user_tb where u_name=? and u_pwd=?`
    DBOpen(sql,[u_name,u_pwd],function (err,data) {
        if(err){
            console.log(err)
        }else {
           if(data.length>0){
               response.send("<script>alert('登录成功');location.href='studentManage.html';</script>")
           }else {
               response.send("<script>alert('用户名或密码错误');location.href='login.html';</script>")
           }
        }
    })
})

//注册
route.post("/reg.do",function (request,response) {
    let u_name = request.body.userName;
    let u_pwd = request.body.userPwd;
    let sql = `insert into user_tb (u_id,u_name,u_pwd) values (?,?,?)`
    DBOpen(sql,["null",u_name,u_pwd],function (err,data) {
        if(err){
            console.log(err)
        }else {
            if(data.affectedRows>0){
                response.send(`<script>alert("注册成功");location.href='login.html'</script>`)
            }else {
                response.send(`<script>alert("注册失败");location.href='reg.html'</script>`)
            }
        }
    })
})


//getData

route.post("/getData.do",function (request,response) {

    let sql = `select * from student_tb`;
    DBOpen(sql,[],function (err,data) {
        if (err){
            console.log(err)
        }else {
            response.send(data)
        }
    })

})

//删除
route.post("/del.do",function (request,response) {
    let id = request.body.id;
    let sql = `delete from student_tb where s_id=?`;
        console.log(id)
    DBOpen(sql,[id],function (err,data) {
        if (err){
            console.log(err)
        }else {
           if (data.affectedRows>0){
               response.send("删除成功")
           }else {
               response.send("删除失败")
           }
        }
    })

})

//添加
route.post("/add.do",function (request,response) {
    let addclick = request.body.addclick;
    let sNo = request.body.sNo;
    console.log(typeof sNo)
    let sName = request.body.sName;
    let sex = request.body.sex;
    let age = request.body.age;
    let birthday = request.body.birthday;
    if(addclick==1){
        let sql = `insert into student_tb (s_id,s_no,s_name,s_sex,s_age,s_birthday) values (?,?,?,?,?,?)`;
        DBOpen(sql,["null",sNo,sName,sex,age,birthday],function (err,data) {
            if (err){
                console.log(err)
                response.send("当前学号已存在");
            }else {
                if (data.affectedRows>0){
                    response.send("添加成功")
                }else {
                    response.send("添加失败")
                }
            }
        })
    }else {

        let sql = `update student_tb set  s_name=?,s_sex=?,s_age=?,s_birthday=? where s_no=?`
        DBOpen(sql,[sName,sex,age,birthday,sNo],function (err,data) {
            if (err){
                console.log(err)
            }else {
                if (data.affectedRows>0){
                    response.send("修改成功")
                }else {
                    response.send("修改失败")
                }
            }
        })
    }


})

//修改
route.post("/alter.do",function (request,response) {
    let id = request.body.id;
    console.log(id);
    let sql = `select * from student_tb where s_id=?`;
    DBOpen(sql,[id],function (err,data) {
        if (err){
            console.log(err)
        }else {
            response.send(data)
        }
    })

})

//搜索
route.post("/search.do",function (request,response) {
    let sNameVal = request.body.sName;
    let s_sexVal = request.body.s_sex;
    let curPageVal = request.body.curPage;
    let pageSizeVal = request.body.pageSize;
    let param=[];
    let sql = `select * from student_tb where 1=1`
    if(sNameVal.trim()!=""){
        sql+=" and s_name like ?";
        sNameVal = "%"+sNameVal+"%";
        param.push(sNameVal)
    }
    if (s_sexVal !="全部"){
        sql+=" and s_sex=?";
        param.push(s_sexVal)
    }
    sql+= " limit ?,?"
    let start = (curPageVal-1)*Number(pageSizeVal);
    param.push(start,Number(pageSizeVal))
    DBOpen(sql,param,function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
        }else {
            response.send(data);
        }
    })
})


//总数量
route.post("/totalCount.do",function (request,response) {
    let sNameVal = request.body.sName;
    let s_sexVal = request.body.s_sex;
    let param=[];
    let sql = `select count(*) as num from student_tb where 1=1`
    if(sNameVal.trim()!=""){
        sql+=" and s_name like ?";
        sNameVal = "%"+sNameVal+"%";
        param.push(sNameVal)
    }
    if (s_sexVal !="全部"){
        sql+=" and s_sex=?";
        param.push(s_sexVal)
    }
    DBOpen(sql,param,function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
        }else {
            response.send(data);
        }
    })
})
module.exports=route;