/**
 * Created by Administrator on 2020/4/25.
 */
//此为部门管理的数据库操作使用的函数路由包
const mysql=require("mysql");//1.引用数据库模块
function SqlOper(sql,param,callback) {
    //2.创建连接
    let myconnect=mysql.createConnection({
        host:"localhost",
        user:"root",
        pwd:"",
        post:3306,
        database:"nodeMysql"
    });
    //3.打开连接
    myconnect.connect();
    //4.数据库操作
    myconnect.query(sql,param,callback);
    //5.关闭数据库
    myconnect.end();
}
module.exports={
  query:SqlOper
};
