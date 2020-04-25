const myexpress = require("express");
const DB = require("./sqlConfig"); // 引用mysql；自己写的模块前面需加./后面跟相应的文件地址
const router = myexpress.Router();//引用myexpress.Router()通过它来拦截路由
router.post("/login.do", function (request, response) {
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    //三个参数 1. sql语句 2. 参数数组 3. 回调函数
    //4. 数据库的操作
    //为了避免客户sql注入，需用参数的写法，
    let sql = `select * from zhanghao where tbuser = ? AND pwd = ?`;//数据库查询 // 检查用户与密码是否正确 ——  需要去数据库中检查
    //如果salConfig.js中的公开接口写的是query:DBOper,在这里使用(调用)就可用DB.query()
    DB.DBOper(sql, [user, pwd], function (err, data) {
        if (err) {//数据是否查询是否出错
            console.log(err);
        } else {
            if (data.length == 0) {//数据库返回数组[user,pwd]的长度是否为空
                response.send("用户名或密码出错")
            } else {
                response.send("<script>alert('登录成功');location.href='studentsMang.html'</script>");//location.href='student.html'跳转页面的地址student.html

            }
        }
    })
})
router.post("/reg.do", function (request, response) {//request接受用户输入值，response相应页面数据（给用户回应）
    var user = request.body.txtUser;
    var pwd = request.body.txtPwd;
    //为了避免客户sql注入，需用参数的写法 表的名称需与连接的数据库表名一致才能打开values(?,?)是与zhanghao(tbuser（是需要插入列的名）,pwd（是需要插入列的密码）)的名对应的值，
    let sql = `insert into zhanghao(tbuser,pwd) values(?,?)`;
    DB.DBOper(sql, [user, pwd], function (err, data) {
        if (err) {
            console.log(err);
            response.send("注册出错");
        } else {
            if (data.affectedRows > 0) {//注册时返回的不是一个数组而是一个对象   affectedRows是受影响的行数成功返回为1，
                response.send("注册成功");
            } else {
                response.send("注册失败");
            }
        }
    })
})

router.post("/postadd.do", function (request, response) {//request接受用户输入值，response相应页面数据（给用户回应）
    // var user = request.body.txtUser;
    // var pwd = request.body.txtPwd;
    var stid = request.body.studenttNo;
    var stname = request.body.studenttName;
    var stsex = request.body.studentSex;
    var stClass = request.body.studentAge;
    var birthday = request.body.birthday;
    var headeTeacher = request.body.headeTeacher;
    var enrolledDate = request.body.enrolledDate;
    console.log(request);

    console.log(stid);
    console.log(stname);
    console.log(stsex);
    console.log(stClass);
    console.log(birthday);
    console.log(headeTeacher);
    console.log(enrolledDate);
    //为了避免客户sql注入，需用参数的写法 表的名称需与连接的数据库表名一致才能打开values(?,?)是与zhanghao(tbuser（是需要插入列的名）,pwd（是需要插入列的密码）)的名对应的值，
    let sql = `insert into student(stid,stname,stsex,stClass,birthday,headeTeacher,enrolledDate) values(?,?,?,?,?,?,?)`;
    DB.DBOper(sql, [stid, stname, stsex, stClass, birthday, headeTeacher, enrolledDate], function (err, data) {
        if (err) {
            console.log(err);
            response.send("添加出错");
        } else {
            if (data.affectedRows > 0) {//注册时返回的不是一个数组而是一个对象   affectedRows是受影响的行数成功返回为1，
                response.send("添加成功");
            } else {
                response.send("添加失败");
            }
        }
    })
})
router.get("/userlist.do", function (request, response) {
    let sql = "select * from student";
    DB.DBOper(sql, [], function (err, data) {
        response.send(data);//返回到xmlHttp.responseText里，页面不会变化
    })
})
router.get("/delete.do", function (request, response) {
    var id = request.query.uid;
    console.log(id)
    let sql = "delete from student where stid=?";
    DB.DBOper(sql, [id], function (err, data) {
        console.log(err);
        console.log(data);
        if (data.affectedRows > 0) {
            response.send("删除成功");
        } else {
            response.send("删除失败")
        }
    })
})
router.post("/search.do", function (request, response) {

    var uname = request.body.user;
    console.log('request =n ' + request)

    var sex = request.body.sex;

    var curPage = request.body.curPage;
    var pageSize = request.body.pageSize;

    console.log('curPage= ' + curPage);
    console.log('pageSize= ' + pageSize);
    let sql = "select * from student where 1=1";//sql语句1=1是存在的
    // let sql="select * from student where stname like ?"
    // uname="%"+uname+"%";
    var param = [];
    console.log('uname= ' + uname);
    console.log("sex= " + sex)
    if (uname.trim() != "") {
        sql += " and stname like ?";
        uname = "%" + uname + "%";
        param.push(uname)

    }
    if (sex != -1) {
        sql += " and stsex = ?";
        param.push(sex);
    }
    sql += " limit ?,?";
    let start = (curPage - 1) * 3;
    param.push(start, Number(pageSize));//pageSize在传递的过程中已经转换成了字符串，所以一定要把pageSize转换成数字才可以使用，否则会出错；
    DB.DBOper(sql, param, function (err, data) {
        console.log(err);
        console.log(data);

        response.send(data);
    })
})
//获取总条数
router.post("/totalCount.do", function (request, response) {
    var uname = request.body.user;
    var sex = request.body.sex;
    var curPage = request.body.curPage;
    var pageSize = request.body.pageSize;

    let sql = "select count(*) as num from student where 1=1";//sql语句1=1是存在的
    // let sql="select * from student where stname like ?"
    // uname="%"+uname+"%";
    var param = [];
    console.log('curPage= ' + curPage);
    console.log('pageSize= ' + pageSize);
    console.log('uname= ' + uname);
    console.log("sex= " + sex)
    if (uname.trim() != "") {
        sql += " and stname like ?";
        uname = "%" + uname + "%";//模糊查询 包含%x%
        param.push(uname)

    }
    if (sex != -1) {
        sql += " and stsex = ?";
        param.push(sex);
    }
    // sql += " limit ?,?";
    // let start = (curPage - 1) * 3;
    // param.push(start, Number(pageSize));//pageSize在传递的过程中已经转换成了字符串，所以一定要把pageSize转换成数字才可以使用，否则会出错；
    DB.DBOper(sql, param, function (err, data) {
        console.log(err);
        console.log(data);

        response.send(data);
    })
})
module.exports = router;//公开（暴露）接口，模块私有需公才能访问