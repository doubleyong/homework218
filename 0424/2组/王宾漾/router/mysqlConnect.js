const mysql  = require("mysql");
function DBoper(sql,param,callback){
    let Db=mysql.createConnection({
        host:"localhost",
        user:"root",
        pwd:"",
        database:"wby"
    })
    Db.connect();
    Db.query(sql,param,callback);
    Db.end();
}
module.exports={
    query:DBoper
}