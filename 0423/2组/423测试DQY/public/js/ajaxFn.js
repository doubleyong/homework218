/**
 * Created by Allie on 2020/4/22.
 */
//method,url,sync,callback
function ajax(method,url,sync,callback) {  // sync--同步或者异步
    // 1-创建对象
    var xmlHttp;
    //判断兼容性
    if(window.XMLHttpRequest){  //以dom方式创建
        xmlHttp = new XMLHttpRequest();
    }else if (window.ActiveXObject){  // 以ie方式创建
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 2- 设置请求
    //open方法 ，三个参数 1.提交方式， 2.请求的url地址，3.同步与异步  true-异步(默认)  false-同步
    if(method.toLowerCase() == "get" && param){
        url = url + "?" + param;
    }

    xmlHttp.open(obj.method,url,sync);

    // 3- 接收响应回来的数据 ，以事件的形式
    xmlHttp.onreadystatechange = function () {  //状态发生改变时调用
        if(xmlHttp.status == 200 && xmlHttp.readyState == 4){  //请求完成  && 响应回来了
            callback(xmlHttp.responseText);
        }
    };
    // 4-发起请求
    if(method.toLowerCase() == "post"){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); //设置编码
        xmlHttp.send(param);
    }else {
        xmlHttp.send(null);
    }
   // xmlHttp.send(param);  //post方式传递参数是卸载send方法里面----
                            //get传递的参数是跟在url后面
}