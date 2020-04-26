/**
 * Created by LuxonD on 2020/4/24.
 */
const mysql = require("mysql");
function DBOper(sql,param,callbak) {
    var myDb = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        port:3306,
        database:"userdb"
    });
    myDb.connect();
    myDb.query(sql,param,callbak);
    myDb.end();
}
module.exports={
    DBOper:DBOper
}