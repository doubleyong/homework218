const mysql = require('mysql');
function DBoper(sql,param,callback) {
    let myConnect = mysql.createConnection({
        host:'localhost',
        user:'root',
        paw:'',
        port:'3307',
        database:'student'
    });
    myConnect.connect();
    myConnect.query(sql,param,callback);
    myConnect.end();
}
module.exports={
  query:DBoper
};
