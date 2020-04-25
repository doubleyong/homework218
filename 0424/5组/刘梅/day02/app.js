const myexpress=require("express");
const favicon=require("serve-favicon");//图标模块
const logger=require("morgan");//日志模块
const bodyParser=require("body-parser");//post引用模块
const cookieParser=require("cookie-parser");//post引用模块
// const mysql=require("mysql");//数据库引用配置
const userRouter = require("./router/userRouter");//引用MySQL；自己写的模块前面需加./后面跟相应的文件地址
const app=myexpress();
//配置


//定义日志后台输出级别 ;注意的是日志需放在前面加载才能顺利输出日志及加载顺序 ，放在后面就输出不了日志和输出顺利
app.use(logger('dev'));

//cookie-parser，body-parser需要写在静态页面的前面，写在接收app.的前面
//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//定义cookie解析器
app.use(cookieParser());

//定义网页头的icon图标
app.use(favicon(__dirname+'/public/images/news-bg.jpg'));

//——dirname:全局变量，当前文件所在的目录  自带
console.log(__dirname)
//配置静态文件夹目录    需注意的是刷新后从新打开页面才会加载 ；{index："login.html"} 这个是设置成默认显示页面
app.use(myexpress.static(__dirname+"/public",{index:"login.html"}));
app.use(userRouter);//动态的需加在静态页面的后面


app.listen("8888");