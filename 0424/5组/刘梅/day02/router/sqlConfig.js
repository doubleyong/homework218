const mysql = require("mysql");//配置数据库
function DBOper(sql,param,callback )  {
    //与数据库创建连接
    let myConnect= mysql.createConnection({
        //本机地址
        host:"localhost",
        //获取数据库名
        user:"root",
        //获取数据库密码
        password:"123456",
        //接口端口号
        port:3306,
        //访问文件名
        database:"w218"
    });
//3. 打开连接数据库
    myConnect.connect();
//4. 数据库的操作
    //三个参数 1. sql=sql语句 2. 参数数组param=[user,pwd],也可为空 3. 回调函数callback=function(err(查询数据是否出错),data（数据返回相关数组名及值）){}
    myConnect.query(sql,param,callback);
//5. 关闭连接
    myConnect.end();
}

module.exports={//公开（暴露）接口 模块私有需公才能访问
    DBOper:DBOper//也可写成query：DBOper
}