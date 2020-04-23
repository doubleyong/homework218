const express = require("express");
const DB = require("./sqlConfig");//引用MySQL
const route = express.Router();

route.post("/login.do",function (request,response) {
    var userNameVal = request.body.userName;
    var pwdVal = request.body.pwd;
    let sql = `select * from user where u_name=? AND u_pwd=?`;
    DB(sql,[userNameVal,pwdVal],function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
        }else {
            if(data.length==0){
                response.send("用户或密码不存在");
            }else {
                response.send("登陆成功");
            }
        }
    })
})

route.post("/reg.do",function (request,response) {
    var userNameVal = request.body.userName;
    var pwdVal = request.body.pwd;
    let sql = `insert into user(u_name,u_pwd) values(?,?)`;
    DB(sql,[userNameVal,pwdVal],function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
        }else {
           if (data.affectedRows>0){
               response.send("添加成功");
           }else {
               response.send("添加失败");
           }
        }
    })
})


route.get("/studentManage.do", function (request,response) {
    let sql = `select * from t_student`;
    DB(sql,[],function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
        }else {
           response.send(data)
        }
    })
})

//删除操作
route.get("/del.do", function (request,response) {
   let id= request.query.id;
    let sql = `delete from t_student where s_id=?`;
    DB(sql,[id],function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
        }else {
            if(data.affectedRows>0){
                response.send("删除成功")
            }else {
                response.send("删除失败")
            }
        }
    })
})

//添加
route.post("/add.do",function (request,response) {
    let s_nameVal = request.body.s_name;
    let s_sexVal = request.body.sex;
    let s_ageVal = request.body.age;
    let s_classVal = request.body.s_class;
    let sql = `insert into t_student (s_id,s_name,s_sex,s_age,s_class_id) values(?,?,?,?,?)`;
    DB(sql,["null",s_nameVal,s_sexVal,s_ageVal,s_classVal],function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
        }else {
            if (data.affectedRows>0){
                response.send("添加成功");
            }else {
                response.send("添加失败");
            }
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
   let sql = `select * from t_student where 1=1`
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
    DB(sql,param,function (err,data) {
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
    let sql = `select count(*) as num from t_student where 1=1`
    if(sNameVal.trim()!=""){
        sql+=" and s_name like ?";
        sNameVal = "%"+sNameVal+"%";
        param.push(sNameVal)
    }
    if (s_sexVal !="全部"){
        sql+=" and s_sex=?";
        param.push(s_sexVal)
    }
    DB(sql,param,function (err,data) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
        }else {
            response.send(data);
        }
    })
})
module.exports = route;