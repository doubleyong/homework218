/**
 * Created by greatwo on 2020/4/22.
 */
const mysql = require("mysql");

function dbOper(sql,param,callback) {
    let myConnect = mysql.createConnection({//2.创建连接
        host:"localhost",
        user:"root",
        password:"",
        port:3306,
        database:"shujun",
    });
    //3.打开连接
    myConnect.connect();
    //4.数据库操作
    //三个参数 1.sql语句 2.数组 3.回调函数
    myConnect.query(sql,param,callback);
    //5.关闭连接
    myConnect.end();
}
module.exports = {
    dbOper:dbOper
};//暴露模块