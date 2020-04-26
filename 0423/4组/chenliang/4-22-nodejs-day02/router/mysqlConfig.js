/**
 * Created by Administrator on 2020/4/22 0022.
 */


const mysql = require("mysql");//引用MySQL
function DBOper(sql,param,callback) {
    //创建连接
    let myConnect = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"147456",
        port:"3306",
        database:"workerdb"
    });
    //打开链接
    myConnect.connect();
    //操作
    myConnect.query(sql,param,callback);
    // 关闭链接
    myConnect.end();
}

//暴露接口
module.exports={
    query:DBOper
}