/**
 * Created by greatwo on 2020/4/26.
 */
const myexpress = require("express");

const logger =require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");

const mysql = require("mysql");//1.引用

const app = myexpress();
// 定义日志和输出级别
app.use(logger('dev'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 定义cookie解析器
app.use(cookieParser());

app.use(myexpress.static(__dirname+"/public",{index:"index.html"}));
app.post("/upload.do",function (req,res) {
    var imgdata = req.body.imgData;
    //过滤data:image/png;base64,
    var base64Data = imgdata.replace(/data:image\/png;base64,/, "").replace(/\s/g,"+");
    //使用express接收POST值后，base64编码字符串中的“+”号被替换成空格了，
    // 引起编码出错，img.src = base64Data;直接把nodejs服务挂掉。
    //.replace(/\s/g,"+") 就是把空格还原成+号
    var dataBuffer = new Buffer(base64Data, 'base64');
    console.log(base64Data);

    var filename = new Date().getTime()+"_small.png";//文件名,加入时间，避免文件名重复
    fs.writeFile("public/image/"+filename, dataBuffer, function(err) {
        if(err){
            res.send(err);
        }else{
            res.send("保存成功！");
        }
    });
});
app.listen(8888);