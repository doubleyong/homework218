
const mysql=require("mysql");
function ConnOper(sql,param,callback) {
    let sqlConnent = mysql.createConnection({//创建数据库
        host:"localhost",
        user:"root",
        password:"123456",
        post:3306,
        database:"yh",
    })
    //链接数据库
    sqlConnent.connect();
    //操作数据库
    sqlConnent.query(sql,param,callback);
    //关闭数据库
    sqlConnent.end();
}
//暴露接口
module.exports={
    query:ConnOper
}