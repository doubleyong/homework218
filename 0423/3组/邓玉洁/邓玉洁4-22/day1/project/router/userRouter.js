const myexpress = require('express');
const db = require('./DBCconfig');
const router = myexpress.Router();


router.post('/login.do',function (request,response) {
    //接受返回的数据
    var user = request.body.txtUser;
    var paw = request.body.txtPwd;
    //数据库查询信息是否正确

    let sql='select * from user where username=? and paw=?';
    db.query(sql,[user,paw],function (err,data) {
        if (err){
            console.log(err);
            response.send('登录出错');
        }else {
            if (data.length>0){
                response.send("<script>alert('登录成功');location.href='table.html'</script>");
            }else {
                response.send('用户名或密码错误');
            }
        }
    })
});

router.post('/reg.do',function (request,response) {
    //接受返回的数据
    var user = request.body.txtUser;
    var paw = request.body.txtPwd;
    //数据库查询信息是否正确
    let sql='insert into user(username,paw) values(?,?)';
    db.query(sql,[user,paw],function (err,data) {
        if (err){
            console.log(err);
            response.send('注册出错');
        }else {
            if (data.affectedRows>0){
                response.send('注册成功');
            }else {
                response.send('注册失败');
            }
        }
    })
});

router.get('/userlist.do',function (request,response) {
    let sql = 'select * from user';
    db.query(sql,[],function (err,data) {
        console.log(err,data);
        response.send(data);
    })
});
module.exports = router;