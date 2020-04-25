

function ajax(method,url,sync,callback,param) {
    //1创建对象
    var xmlHttp;
    if (window.XMLHttpRequest){
        xmlHttp = new  XMLHttpRequest();
    }else if (window.ActiveXObject){
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //2设置请求
    if (method.toLowerCase() == 'get' && param){
        url = url+"?"+param;
    }
    xmlHttp.open(method,url,sync);
    //3接受响应数据
    xmlHttp.onreadystatechange = function () {
        // console.log(xmlHttp.status);//http请求状态
        // console.log(xmlHttp.readyState);
        if (xmlHttp.status == 200 && xmlHttp.readyState == 4){
            callback(xmlHttp.responseText);
        }
    };
    //4发起请求
    if (method.toLowerCase()=='post'){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp.send(param);
    }else {
        xmlHttp.send(null);
    }
}