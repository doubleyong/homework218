const express = require("express");
const logger = require("morgan");//引入日志模块
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const app = express();

// 定义日志和输出级别
app.use(logger('dev'));

// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 定义cookie解析器
app.use(cookieParser());

//配置静态资源
app.use(express.static(__dirname+"/public",{index:"login.html"}));
app.post("/upload.do",function (request,response) {
    let imgData= request.body.imgData;
    //过滤data:image/png;base64,
    var base64Data = imgData.replace(/data:image\/png;base64,/, "").replace(/\s/g,"+");
    //使用express接收POST值后，base64编码字符串中的“+”号被替换成空格了，
    // 引起编码出错，img.src = base64Data;直接把nodejs服务挂掉。
    //.replace(/\s/g,"+") 就是把空格还原成+号
    var dataBuffer = new Buffer(base64Data, 'base64');
    console.log(base64Data);

    var filename = new Date().getTime()+"_small.png";//文件名,加入时间，避免文件名重复
    fs.writeFile("public/img/"+filename, dataBuffer, function(err) {
        if(err){
            response.send(err);
        }else{
            response.send("保存成功！");
        }
    });

})



app.listen(8888,function () {
    console.log("running.....")
})