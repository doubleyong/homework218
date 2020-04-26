const mysql = require("mysql");
function DBoper(sql, param, callback) {
    let myConnect = mysql.createConnection({
        host: "localhost",
        user: "root",
        pwd: "",
        database: "w218",
    });
    myConnect.connect();
    myConnect.query(sql, param, callback);
    myConnect.end();
}
module.exports = {
    query: DBoper
};

