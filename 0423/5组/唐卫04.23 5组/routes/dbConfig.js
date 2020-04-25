/**
 * Created by 98088 on 2020/4/22.
 */
const mysql=require("mysql");
function DBoper(sql,param,callback) {
    let myConnect = mysql.createConnection({
        host:"localhost",
        user:"root",
        pwd:"",
        port:3306,
        database:"web218"
    });
    //创建连接
    myConnect.connect();
    myConnect.query(sql,param,callback);
    myConnect.end();
}
module.exports={
    query:DBoper
};