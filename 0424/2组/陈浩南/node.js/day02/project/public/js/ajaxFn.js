function ajax(method, url, sync, callback, parma) {
    //1.创建对象
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.设置请求
    //open方法，三个参数，1.提交方式    2.请求URL地址   3.同步异步  默认true异步，false同步
    if (method.toLowerCase() == "get" && parma) {
        url = url + "?" + parma;
    }
    xmlHttp.open(method, url, sync);    //get方式传递的参数是写在URL后面
    //3.接受响应回来的数据（以事件的形式）
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.status == 200 && xmlHttp.readyState == 4) {
            callback(xmlHttp.responseText);
        }
    };
    //4.发起请求
    if (method.toLowerCase() == "post") {
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp.send(parma);     //post方式传递的参数是写在send方法里
    } else {
        xmlHttp.send(null);
    }

}
