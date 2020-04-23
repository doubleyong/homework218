const mysql = require("mysql");

function DBOper(sql,param,callback) {
        //创建连接
        const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'dbstudent'
    });

    //打开连接
    connection.connect();

    //操作
    connection.query(sql,param,callback);

    //关闭连接
    connection.end();
}

module.exports = DBOper;