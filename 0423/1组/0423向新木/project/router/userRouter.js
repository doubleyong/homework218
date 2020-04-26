const isExpress = require("express");
const DB = require("./sqlConfig");
const router = isExpress.Router();
router.post("/login.do",function (req,resp) {
  var user = req.body.txtUser;
  var pwd =  req.body.txtPwd;
  console.log(user);
  console.log(pwd);
  let sql = "select * from t_user where username = ? and pwd = ?";
  DB.query(sql,[user,pwd],function (err,data) {
    if (err){
      console.log(err);
      resp.send("出错");
      console.log(data);
    }else {
      // console.log(data);
      if (data.length >0){
        resp.send("<script>alert('登录成功');location.href='stuoper.html';</script>");
      }else {
        resp.send("用户名或密码出错");
      }
    }
  })
});

module.exports = router;
