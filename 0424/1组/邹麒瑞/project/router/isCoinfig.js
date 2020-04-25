const mysql = require("mysql");
function db(sql,param,callback) {
let myConnect = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"zqr123456",
  port:3306,
  database:"lbwnb"
});
  myConnect.connect();  //打开连接
  myConnect.query(sql,param,callback);  //1.sql语句 2.参数数组 3.回调函数
  myConnect.end();  //关闭连接
}
module.exports={
  query:db
};
