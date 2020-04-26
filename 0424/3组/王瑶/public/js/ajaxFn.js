/**
 * Created by Administrator on 2020/4/25.
 */
//以下为部门管理的ajax操作封装函数
function ajax(method,url,sync,callback,param) {
    //1.创建对象
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }else if(window.ActiveXObject){
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //get请求，参数param用？拼接在url后面
    if(method.toLocaleLowerCase()=="get"&&param){
        url=url+"?"+param;
    }
    //2.设置请求
    xmlHttp.open(method,url,sync,callback,param);
    //3.接收响应回来的数据
    xmlHttp.onreadystatechange=function () {
        console.log(xmlHttp.status);
        console.log(xmlHttp.readyState);
        if(xmlHttp.status==200&&xmlHttp.readyState==4){
            callback(xmlHttp.responseText);
        }
    };
    //4.发送请求
    //post请求，参数param用send传递
    if(method.toLocaleLowerCase()=="post"){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp.send(param);
    }else {
        xmlHttp.send(null);
    }
}