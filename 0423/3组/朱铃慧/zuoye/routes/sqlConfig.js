const mysql = require("mysql");

function DBOper(sql,param,callback) {
    // let sql = `select * from tb_user where username = '${user}' and pwd = '${pwd}'`;
    let myConnect = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        port:3306,
        database:"w218"
    });
    // 3.打开连接
    myConnect.connect();
    //三个参数 1.sql语句 2.参数数组 3.回调函数
    // 4.数据库的操作
    myConnect.query(sql,param,callback);

    //5.关闭连接
    myConnect.end();
}
module.exports={
    DBOper:DBOper
}