const myexpress = require("express");
const DBoper  = require("./mysqlConnect");
const router=myexpress.Router();
router.post("/login.do",function(request,response){
    var username=request.body.txtUser;
    var password=request.body.txtPwd;
    var sql="select * from login where username=? and upassword=?"
    DBoper.query(sql,[username,password],function(err,data){
        if(err){
            response.send("登录失败");
        }else{
            if(data.length>0){
                response.send("<script>alert('登录成功');location.href='teacher.html'</script>");
            }else{
                response.send("登录失败");
            }
        }
    });
});
router.post("/reg.do", function (request,response) {
    var username=request.body.txtUser;
    var password=request.body.txtPwd;
    var sql="insert into login(username,upassword) value(?,?)";
    DBoper.query(sql,[username,password],function(err,data){
        if(err){
            response.send("注册失败");
        }else{
            if(data.affectedRows>0){
                response.send("<script>alert('注册成功');location.href='login.html'</script>");
            }else{
                response.send("注册失败");
            }
        }
    });
});
router.get("/userlist.do",function(request,response){
    let sql="select * from login";
    DBoper.query(sql,[],function(err,data){
        response.send(data);
    })
})
router.get("/delete.do",function(request,response){
    var id=request.query.uid;
    var sql="delete from login where id=?";
    DBoper.query(sql,[id],function(err,data){
        console.log(err)
        if(data.affectedRows>0){
            response.send("删除成功");
        }else{
            response.send("删除出错");
        }
    })
})
router.post("/postadd.do",function(request,response){
    var user=request.body.txtUser;
    var pwd=request.body.txtPwd;
    let sql="insert into login(username,upassword) value (?,?)";
    DBoper.query(sql,[user,pwd],function(err,data){
        if(err){
            console.log(err);
            response.send("添加出错");
        }else{
            if(data.affectedRows>0){
                response.send("添加成功");
            }else{
                response.send("添加出错");
            }
        }
    })
})
router.post("/search.do",function(request,response){
    var user=request.body.user;
    var sex=request.body.sex;
    var curPage=request.body.curPage;
    var pageSize=request.body.pageSize;
    let sql="select * from login where 1=1";
    var param=[];
    if(user.trim()!=""){
        sql += " and username like ?";
        user="%"+user+"%";
        param.push(user);
    }
    if(sex!=-1){
        sql += " and sex=?";
        param.push(sex);
    }
    sql+=" limit ?,?";
    let start=(curPage-1)*3;
    param.push(start,Number(pageSize));
    DBoper.query(sql,param,function(err,data){
        //console.log(err);
        response.send(data);
    })
})
//获取总条数
router.post("/totalCount.do",function(request,response){
    var user=request.body.user;
    var sex=request.body.sex;
    let sql="select count(*) as num from login where 1=1";
    var param=[];
    if(user.trim()!=""){
        sql += " and username like ?";
        user="%"+user+"%";
        param.push(user);
    }
    if(sex!=-1){
        sql += " and sex=?";
        param.push(sex);
    }
    DBoper.query(sql,param,function(err,data){
        //console.log(err);
        response.send(data);
    })
})
//暴露接口
module.exports=router;