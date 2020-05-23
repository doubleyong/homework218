const  myexpress = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');//日志
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const Router = require('./router/userRouter');
const app = myexpress();


app.use(logger('dev'));
//定义数据解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//定义cookie解析器
app.use(cookieParser());
app.use(myexpress.static(__dirname+'/public',{index:'index.html'}));//静态文件夹目录

app.post('/index.do',function (request,response) {
   var imgdata = request.body.imgData ;
   //过滤data：image/png：base64，
    var base64Data = imgdata.replace(/data:images\/png;base64,/,'').replace(/\s/g,'+');
    //使用express接受post值后，base64编码字符串中的“+”号被替换成空格；
    //引起编码出错，img。src = base64Data；直接把nodeis服务挂掉
    //。replace（/\s/g，‘+’）就是把空格还原成+hao
    var dataBuffer = new Buffer(base64Data,'base64');
    var filename = new Data().getTime()+'_head_small.png';//加时间
    fs.writeFile('public/images/head/'+filename,dataBuffer,function (err) {
        if (err){
            response.send(err);
        }else {
            response.send('保存成功,img/head'+filename);
        }
    })
});
app.listen('7788');