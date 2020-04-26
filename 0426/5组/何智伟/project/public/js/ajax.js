function ajaxFn(method,url,async, callback,param) {
    //创建对象
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(method.toLowerCase()=="get" && param){
        url = url+'?'+param;
    }
//设置请求
    xmlhttp.open(method,url,async);
    //接收响应回来的数据
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            callback(xmlhttp.responseText);
        }
    }

    //发起请求

    if(method.toLowerCase()=="post"){
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xmlhttp.send(param);
    }else {
        xmlhttp.send(null);
    }


}