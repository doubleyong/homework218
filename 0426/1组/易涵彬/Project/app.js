/**
 * Created by LuxonD on 2020/4/26.
 */
const myexpress = require("express");
const logger = require("morgan");
const favicon = require('serve-favicon');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const app  = myexpress();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(myexpress.static(__dirname+"/public"));
app.use(favicon(__dirname+"/public/img/favicon.png"));
app.post("/upload.do",function (req,res) {
    var imgdata = req.body.imgData;
    var base64Data = imgdata.replace(/data:image\/png;base64,/, "").replace(/\s/g,"+");
    var dataBuffer = new Buffer(base64Data, 'base64');
    console.log(base64Data);
    var filename = new Date().getTime()+"head_small.png";
    fs.writeFile("public/img/head/"+filename, dataBuffer, function(err) {
        if(err){
            res.send(err);
        }else{
            res.send("保存成功！");
        }
    });
});
app.listen(9575);
