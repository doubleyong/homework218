const isExpress = require("express");
const DB = require("./isCoinfig");
const router = isExpress.Router();

router.post("/register.do",function (req,resp){
  var user = req.body.username;
  var pwd =  req.body.password;
  console.log(user);
  console.log(pwd);
  let sql = "insert into lbw(user_name,user_pwd) values(?,?)";
  DB.query(sql,[user,pwd],function (err,data){
    if (err){
      console.log(err);
      resp.send("出错");
      console.log(data);
    }else {
      if (data.affectedRows>0){
        resp.send("<script>alert('注册成功');location.href='login.html';</script>");
      }else {
        resp.send("注册失败");
      }
    }
  })
});
router.post("/login.do",function (req,resp) {
  var user = req.body.username;
  var pwd =  req.body.password;
  let sql = "select * from lbw where user_name = ? and user_pwd = ?";
  DB.query(sql,[user,pwd],function (err,data) {
    if (err){
      resp.send("出错");
    }else {
      if (data.length>0){
        resp.send("<script>alert('登录成功');location.href='https://img9.51tietu.net/pic/2019-091121/zwwkcobtj40zwwkcobtj40.jpg';</script>");
      }else {
        resp.send("失败");
      }
    }
  })
});
module.exports = router;
