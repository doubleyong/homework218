const myexpress=require("express");//引用express模块
const CO=require("./Connentmysql");
const router=myexpress.Router();//拦截路由
router.post("/login.do",function (request,response) {
    //获取用户输入的用户名与密码
    var username=request.body.txtUser;
    var password=request.body.txtPwd;
    //判断输入的与数据库中的数据是否一致
    let sql="select * from t_user where t_name=? and t_pwd=? ";
    CO.query(sql,[username,password],function (err,data) {
        if(err){
            console.log(err);
        }else{
            if(data.length>0){
                response.send("<script>alert('登录成功',location.href='list.html')</script>")
            }else{
                response.send("<script>alert('登录失败',history.go(-1))</script>")
            }
        }
    })
})
router.post("/reg.do",function (request,response) {
    //获取用户输入的用户名与密码
    var username=request.body.txtUser;
    var password=request.body.txtPwd;
    //判断输入的与数据库中的数据是否一致
    let sql="insert into t_user(t_name,t_pwd) values(?,?) ";
    CO.query(sql,[username,password],function (err,data) {
        if(err){
            console.log(err);
        }else{
            if(data.affectedRows>0){
                response.send("<script>alert('注册成功',location.href='list.html')</script>")
            }else{
                response.send("<script>alert('注册失败',history.go(-1))</script>")
            }
        }
    })
})
module.exports=router;