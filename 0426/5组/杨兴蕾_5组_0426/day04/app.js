/**
 * Created by Administrator on 2020/4/25.
 */
const myespress=require("express");
// const favicon=require("serve-favicon");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const logger=require("morgan");
const fs=require("fs");
// const userRouter=require("./router/userRouter");
const app=myespress();
//定义日志
app.use(logger("dev"));
// 配置静态资源
app.use(myespress.static(__dirname+"/public",{index:"index.html"}));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//定义cookie解析器
app.use(cookieParser());
//加载图标
// app.use(favicon(__dirname+"/public/images/icon.png"));
//拦截路由
app.post("/upload.do",function (req,res) {
    //接收前台POST过来的base64
    var imgData=req.body.imgData;
    //过滤data:image/png;base64,
    var base64Data=imgData.replace(/data:image\/png;base64,/,"").replace(/s/g,"+");
    // 使用buffer对象处理二进制数据流
    var dataBuffer=new Buffer(base64Data,"base64");
    var filename=new Date().getTime()+"_small.png";//文件名,加入时间，避免文件名重复
    fs.writeFile("public/img/"+filename,dataBuffer,function (err) {
        if(err){
            res.send(err);
        }else{
            res.send("保存成功！路径为img/"+filename);
        }
    })
})
app.listen(8888);