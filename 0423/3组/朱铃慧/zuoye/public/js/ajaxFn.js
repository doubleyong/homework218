function ajax(method,url,sync,callback,param){
    // 1.创建对象
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 2.设置请求
    // open方法，三个参数，1.提交方式，2.请求url地址，
    if(method.toLowerCase()=="get"&&param){
        url = url + "?" + param;
    }

    // 3.同步与异步 true异步，false同步
    xmlHttp.open(method,url,sync);
    //get方式是写在url后面
    // 3.接收响应回来的数据（一事件的形式）
    // 当状态有改变的时候调用
    xmlHttp.onreadystatechange = function () {
        // console.log(xmlHttp.status);//http请求状态
        // console.log(xmlHttp.readyState);//ajax的状态
        if (xmlHttp.status==200&&xmlHttp.readyState==4){
            callback(xmlHttp.responseText);
            // userYuan = JSON.parse(xmlHttp.responseText);
            // ajax异步的特性不会等user=[...userYuan]执行
            // console.log(typeof xmlHttp.responseText);
            // console.log(xmlHttp.responseText);
        }
    }
    // 4.发起请求
    if(method.toLowerCase()=="post"){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp.send(param);
    }else {
        xmlHttp.send(null);
    }

    //post方式传递参数是写在send方法里面
}


















