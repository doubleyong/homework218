const myexpress = require('express');
const db = require('./DBCconfig');
const router = myexpress.Router();

//登录
router.post('/login.do',function (request,response) {
    //接受返回的数据
    var user = request.body.txtUser;
    var paw = request.body.txtPaw;
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
//注册
router.post('/reg.do',function (request,response) {
    //接受返回的数据
    var user = request.body.zUser;
    var paw = request.body.zPaw;
    //数据库查询信息是否正确
    let sql='insert into user(username,paw) values(?,?)';
    db.query(sql,[user,paw],function (err,data) {
        if (err){
            response.send('注册出错');
        }else {
            if (data.affectedRows>0){
                response.send("<script>alert('注册成功');location.href='login.html'</script>");
            }else {
                response.send('注册失败');
            }
        }
    })
});
//添加
router.post('/postAdd.do',function (request,response)  {
    //接受返回的数据
    var user = request.body.txtUser;
    var paw = request.body.txtPaw;
    var age = request.body.txtAge;
    console.log(user);
    console.log(paw);
    //数据库查询信息是否正确
    let sql='insert into user(username,paw,Age) values(?,?,?)';
    db.query(sql,[user,paw,age],function (err,data) {
        if (err){
            console.log(err);
            response.send('添加出错');
        }else {
            if (data.affectedRows>0){
                response.send('添加成功');
            }else {
                response.send('添加');
            }
        }
    })
});
//查询表格所有数据
router.get('/userlist.do',function (request,response) {
    let sql = 'select * from user';
    db.query(sql,[],function (err,data) {
        response.send(data);
    })
});
//删除
router.get('/delete.do',function (request,response) {
    var id = request.query.sid;
    let sql = 'delete from user where id=?';
    db.query(sql,[id],function (err,data) {
        console.log(err);
        console.log(data);
        if (data.affectedRows>0){
            response.send('删除成功');
        }else {
            response.send('删除失败');
        }
    })
});
//搜索
router.post('/search.do',function (request,response) {
    var username = request.body.user;//user要对应
    var sex = request.body.sex;
    var curpage = request.body.curpage;
    var pageSize = request.body.pageSize;
    let sql = 'select * from user where 1=1';
    var param=[];
    if (username.trim()!=''){
        sql+=' and username like ?';
        username = '%' + username + '%';
        param.push(username);
    }
    if (sex!=-1){
        sql+=' and sex = ?';
        param.push(sex);
    }

    sql +=' limit ?,?';
    let start = (curpage - 1)*pageSize;
    param.push(start,Number(pageSize));
    param.push();

    db.query(sql,param,function (err,data) {
        console.log(err);
        response.send(data);
    })
});

router.post('/totalCount.do',function (request,response) {
    var username = request.body.user;//user要对应
    var sex = request.body.sex;
    let sql = 'select count(*) As num from user where 1=1';
    var param=[];
    if (username.trim()!=''){
        sql+=' and username like ?';
        username = '%' + username + '%';
        param.push(username);
    }
    if (sex!=-1){
        sql+=' and sex = ?';
        param.push(sex);
    }

    username = '%'+username+'%';

    db.query(sql,param,function (err,data) {
        response.send(data);
    })
});
module.exports = router;