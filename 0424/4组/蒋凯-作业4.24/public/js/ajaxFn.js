/**
 * Created by 16694 on 2020/4/22.
 */
// 发起Ajax的步骤：
// 1.创建对象
// 2设置请求     open方法，三个参数 ， 1.提交方式， 2.请求url地址 3.同步与异步 true异步 ， false同步
// 3接收响应回来的数据（以事件的形式）    //get 方式，传递的参数写在url后面
// 4发起请求           //post方法，传递的参数写在send方法里面
function ajax(method,url,sync,callback,param) {
    var xmlHttp;
    if (window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else if (window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (method.toLowerCase()=="get"&&param){
        url = url + "?" + param;
    }
    xmlHttp.open(method,url,sync);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.status==200&&xmlHttp.readyState==4){
           callback(xmlHttp.responseText);
        }
    };
    if (method.toLowerCase()=="post"){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp.send(param);
    }else {
        xmlHttp.send(null);
    }

}
