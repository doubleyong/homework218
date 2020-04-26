const mysql = require("mysql");
function Dbo(sql,param,callback) {
  let myConnect = mysql.createConnection({
    host:"localhost",
    user:"windymumu",
    password:"",
    port:3306,
    database:"test"
  });
  myConnect.connect();  //打开连接
  myConnect.query(sql,param,callback);
  myConnect.end();  //关闭连接
}
module.exports={
  query:Dbo
};

