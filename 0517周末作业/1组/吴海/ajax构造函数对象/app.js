/**
 * Created by coco on 2020/4/27.
 */
const express=require("express");//引用express模块
const favicon=require("serve-favicon");//引入favicon图标模块
const morgan=require("morgan");//引用日志模块
const userRouter=require("./routes/userRouter");//引用路由文件
const bodypas=require("body-parser");//引用post模块
const cookie=require("cookie-parser");//引用cookie模块
const myejs=require("ejs");//引用ejs视图语言包模块
const app=express();//启动express
app.use(morgan("dev"));//配置日志morgan
app.use(bodypas.json());//配置bodypas适用post
app.use(bodypas.urlencoded({extended:false}));//配置url编码/适用post
app.use(cookie());//配置cookie/适用post
app.use(favicon(__dirname+"/public/favicon.ico"));//配置favicon图标路径
app.set("views",__dirname+"/view");//配置ejs视图路径
app.engine("html",myejs.__express);//创建html引擎
app.set("view engine","html");//配置ejs视图引擎
app.get("/cs.html",function (request,response) {
    response.render("cs.html");
});
app.use(express.static(__dirname+"/public",{index:"DL.html"}));//配置express
app.use(userRouter);//配置路由文件
app.listen("8888");//设置端口号







// const myexpress=require("express");//模块express引入
// const favicon=require("serve-favicon");//模块图标引入
// const logger=require("morgan");//模块日志
// const bodyparse=require("bodyparse");//模块bodyparse设置post请求
// const cookieparse=require("cookie-parser");//模块bodyparse设置post请求
// const userRouter=require("./routes/userRouter")//引用路由 模块
// const app=myexpress();//启动express
// app.use(logger("dev"));//配置日志
// app.use(bodyparse.json());//bodyparse的配置
// app.use(bodyparse.urlencoded({extended:false}));//url编码
// app.use(cookieparse());//配置cookieparse
// app.use(favicon(__dirname+"/public/image/favicon/favicon.ico"));//配置图标
// app.use(myexpress.static(__dirname+"/public"));//配置express
// app.use(userRouter);//配置路由
// app.listen("0000");//设置端口号









