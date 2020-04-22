/**
 * Created by Allie on 2020/4/22.
 */

const mysql = require("mysql");  //1-引用mysql
function DBOper(sql,param,callback) {
    let myConnect = mysql.createConnection({  // 2-创建连接
        host:"localhost",
        user:"root",
        password:"",
        port:3306,  //默认就是3306 可以省略
        database:"w218"
    });
    myConnect.connect(); // 3-打开连接
// 4-数据库操作
//三个参数 1-sql语句  2-参数数组 3-回调函数
    myConnect.query(sql,param,callback);
// 5-关闭连接
    myConnect.end();
}

module.exports = {
    DBOper:DBOper
};
