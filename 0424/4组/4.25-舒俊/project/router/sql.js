/**
 * Created by greatwo on 2020/4/25.
 */
const mysql = require("mysql");

function dbOper(sql,param,callback) {
    let myConnect = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        port:3306,
        database:"shujun",
    });
    myConnect.connect();
    myConnect.query(sql,param,callback);
    myConnect.end();
}

module.exports = {
    dbOper:dbOper
};