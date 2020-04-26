const myexpress = require("express");
const DB = require("./sqlConfig");
const router = myexpress.Router();

// 登录
router.post("/login.do",function (request,response) {
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    let sql = `select * from tb_user where username = ? and pwd = ?`;
    let sqlParam = [user,pwd];
    DB.DBOper(sql,sqlParam,function (err,data) {
        if (err){
            console.log(err);
        }else{
            if (data.length==0){
                response.send("<script>alert('用户名或密码出错');history.go(-1)</script>");
            }else{ //data.length>0
                // response.send("登录成功");
                response.send("<script>alert('登录成功');location.href='studentManage.html';</script>");
            }
        }
    })
});

// 注册
router.post("/reg.do",function (request,response) {
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    let sql = `insert into tb_user(username,pwd) values(?,?)`;
    let sqlParam = [user,pwd];
    DB.DBOper(sql,sqlParam,function (err,data) {
        if (err){
            console.log(err);
        }else{
            if (data.affectedRows>0){
                response.send("<script>alert(\"注册成功\");history.go(-1)</script>");
                // response.send("注册成功");

            }else{
                // response.send("注册成功");
                response.send("注册失败");
            }
        }
    })
});

//userlist路由
router.get("/userlist.do",function (request,response){
    let sql = "select * from tb_user";
    console.log(sql);
    DB.DBOper(sql,[],function (err,data) {
        response.send(data); //返回的数据是json字符串
    })
})

// 添加路由
router.post("/postadd.do",function (request,response) {
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    console.log(user);
    console.log(pwd);
    let sql = `insert into tb_user(username,pwd) values(?,?)`;
    let sqlParam = [user,pwd];
    DB.DBOper(sql,sqlParam,function (err,data) {
        if (err){
            console.log(err);
        }else{
            if (data.affectedRows>0){
                response.send("<script>alert(\"添加成功\");history.go(-1)</script>");
            }else{
                response.send("添加失败");
            }
        }
    })
});

// 删除路由
router.get("/delete.do",function (request,response){
    var id = request.query.uid;
    let sql = "delete from tb_user where id=?";
    console.log(sql);
    DB.DBOper(sql,[id],function (err,data) {
        response.send(data); //返回的数据是json字符串
    });
})

//搜索路由（模糊查询）
router.post("/search.do",function (request,response){
    var uname = request.body.user;
    var sex = request.body.sex;
    var curPage = request.body.curPage;
    var pageSize = request.body.pageSize;
    let sql = "select * from tb_user where 1=1";
    var param = [];
    // 按名字模糊搜索
    if(uname.trim()!=""){
        sql += " and username like ?";
        uname = "%" + uname + "%";
        param.push(uname);
    }
    // 按性别搜索
    if(sex!=-1){
        sql += " and sex = ?";
        param.push(sex);
    }
    sql += " limit ?,?";
    let start = (curPage-1)*3;
    //pageSize是字符串
    param.push(start,Number(pageSize));

    DB.DBOper(sql,param,function (err,data) {
        response.send(data); //返回的数据是json字符串
        console.log(err);
        console.log(data);
    });
})

//分页获取总条数路由
router.post("/totalCount.do",function (request,response) {
    var uname = request.body.user;
    var sex = request.body.sex;
    let sql = "select count(*) as num from tb_user where 1=1";
    var param = [];
    // 按名字模糊搜索
    if(uname.trim()!=""){
        sql += " and username like ?";
        uname = "%" + uname + "%";
        param.push(uname);
    }
    // 按性别搜索
    if(sex!=-1){
        sql += " and sex = ?";
        param.push(sex);
    }
    DB.DBOper(sql,param,function (err,data) {
        console.log(err);
        // console.log(data[0].num);
        //不能直接返回数字，在前端返回数字
        response.send(data); //返回的数据是json字符串

    });
})


// 修改路由（待补充）
router.post("/postadd.do",function (request,response) {
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    console.log(user);
    console.log(pwd);
    let sql = `insert into tb_user(username,pwd) values(?,?)`;
    let sqlParam = [user,pwd];
    DB.DBOper(sql,sqlParam,function (err,data) {
        if (err){
            console.log(err);
        }else{
            if (data.affectedRows>0){
                response.send("<script>alert(\"添加成功\");history.go(-1)</script>");
            }else{
                response.send("添加失败");
            }
        }
    })
});

//studentlist路由（另一个表的数据）
router.get("/studentlist.do",function (request,response){
    let sql = "select * from tb_user";
    console.log(sql);
    DB.DBOper(sql,[],function (err,data) {
        response.send(data); //返回的数据是json字符串
    })
})


module.exports = router;