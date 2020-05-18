/**
 * Created by coco on 2020/4/27.
 */
const mysql=require("mysql");//引用mysql模块
function DBoper(sql,param,callback) {
    let myConnect=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        port:3306,
        database:"cs"
    });
    myConnect.connect();
    myConnect.query(sql,param,callback);
    myConnect.end()
}
module.exports={
    query:DBoper
};
