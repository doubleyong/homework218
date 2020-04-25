const myExpress = require("express");
const db = require("./DBConfig");
const router = myExpress.Router();


router.post("/login.do", function (request, response) {
    //1.接受数据
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    //2.去数据库查询用户名和密码是否正确
    let sql = "select * from tb_user where username = ? and pwd = ?";
    db.query(sql, [user, pwd], function (err, data) {
        if (err) {
            console.log(err);
            response.send("登录出错,请联系管理员");
        } else {
            if (data.length > 0) {
                response.send("<script>alert('登录成功');location.href='studentManage.html';</script>");
            } else {
                response.send("用户名或密码错误");
            }
        }
    })
});
router.post("/reg.do", function (request, response) {
    //1.接受数据
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    //2.去数据库查询用户名和密码是否正确
    let sql = "insert into tb_user(username,pwd) value(?,?)";
    db.query(sql, [user, pwd], function (err, data) {
        if (err) {
            console.log(err);
            response.send("注册出错,请联系管理员");
        } else {
            if (data.affectedRows > 0) {
                response.send("注册成功");
            } else {
                response.send("注册失败");
            }
        }
    })
});
router.get("/userlist.do", function (request, response) {
    let sql = "select * from tb_user";
    db.query(sql, [], function (err, data) {
        response.send(data);
    })
});
router.get("/delete.do", function (request, response) {
    var id = request.query.uid;
    let sql = "delete from tb_user where id=?";
    db.query(sql, [id], function (err, data) {
        console.log(err);
        console.log(data);
        if (data.affectedRows > 0) {
            response.send("删除成功");
        } else {
            response.send("删除失败");
        }
    });
});
router.post("/postadd.do", function (request, response) {
    //1.接受数据
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    console.log(user);
    console.log(pwd);
    //2.去数据库查询用户名和密码是否正确
    let sql = "insert into tb_user(username,pwd) value(?,?)";
    db.query(sql, [user, pwd], function (err, data) {
        if (err) {
            console.log(err);
            response.send("添加出错,请联系管理员");
        } else {
            if (data.affectedRows > 0) {
                response.send("添加成功");
            } else {
                response.send("添加失败");
            }
        }
    })
});
router.post("/search.do", function (request, response) {
    var uname = request.body.user;
    var sex = request.body.sex;
    var curPage = request.body.curPage;
    var pageSize = request.body.pageSize;
    var param = [];
    let sql = "select * from tb_user where 1 = 1";
    if (uname.trim() != "") {
        sql += " and username like ?";
        uname = "%" + uname + "%";
        param.push(uname);
    }
    if (sex != -1) {
        sql += " and sex = ?";
        param.push(sex);
    }
    sql += " limit ?,?";
    let start = (curPage - 1) * 3;
    param.push(start, Number(pageSize));
    db.query(sql, param, function (err, data) {
        console.log(err);
        response.send(data);
    });
});
//获取总条数
router.post("/totalCount.do", function (request, response) {
    var uname = request.body.user;
    var sex = request.body.sex;
    var param = [];
    let sql = "select count(*) as num from tb_user where 1 = 1";
    if (uname.trim() != "") {
        sql += " and username like ?";
        uname = "%" + uname + "%";
        param.push(uname);
    }
    if (sex != -1) {
        sql += " and sex = ?";
        param.push(sex);
    }

    db.query(sql, param, function (err, data) {
        response.send(data);
    })
});

module.exports = router;