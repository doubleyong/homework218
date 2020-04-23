/**
 * Created by greatwo on 2020/4/23.
 */
function ajax(method,url,sync,callback,param) {
    //1.创建对象
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.设置请求
    if(method.toUpperCase()=="get" && param){
        url=url+"?"+param;
    }

    //open方法，三个参数，1.提交方式 2.请求url地址 3.同步(false)与异步(true,默认)
    xmlHttp.open(method,url,sync);
    //3.接受响应回来数据
    xmlHttp.onreadystatechange = function () {
        if(xmlHttp.status == 200 && xmlHttp.readyState == 4){
            callback(xmlHttp.responseText);
        }
    };
    //4.发起请求
    if (method.toLocaleLowerCase()=="post"){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp.send(param);
    }else {
        xmlHttp.send(null);
    }

}