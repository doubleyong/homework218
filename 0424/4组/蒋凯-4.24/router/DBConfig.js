/**
 * Created by 16694 on 2020/4/25.
 */

const mysql = require("mysql");
function DBoper(sql,param,callback) {
    let myConnect = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        port:3306,
        database:"bd1"
    });
    myConnect.connect();
    myConnect.query(sql,param,callback);
    myConnect.end();
}

module.exports = {
    query:DBoper
}