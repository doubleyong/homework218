const mysql = require("mysql");

function DBOpenFn(sql,param,callback) {
    //创建连接
    let connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'dbstudent'
    });
    //打开连接
    connection.connect();
    //操作
    connection.query(sql,param,callback);
    //断开连接
    connection.end();
}

module.exports=DBOpenFn;




