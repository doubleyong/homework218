/**
 * Created by doubleyong on 2020/4/22.
 */
const mysql = require("mysql");
 function DBOper(sql,param,callback )  {
    let myConnect= mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        port:3306,
        database:"w218"
    });
//3. 打开连接
    myConnect.connect();
//三个参数 1. sql语句 2. 参数数组 3. 回调函数
//4. 数据库的操作
    myConnect.query(sql,param,callback);
//5. 关闭连接
    myConnect.end();
}

module.exports={
     DBOper:DBOper
}