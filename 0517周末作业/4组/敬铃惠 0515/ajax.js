/**
 * Created by adminpc on 2020/5/15.
 */

(function () {
    //创建XMLHttpRequest请求对象
    function xmlHttp() {
        var xmlHttp;
        if(window.XMLHttpRequest){
            xmlHttp = new XMLHttpRequest();
        }else {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xmlHttp;
    }
    
    function ajax(obj) {
        var xmlHttp = xmlHttp();

        if(typeof obj.param == "object"){
            var arr = [];
            for(var key in obj.param){
                arr.push(key+"="+obj.param[key]);
            }
            obj.param = arr.join("&");
        }

        //设置请求open
        if(obj.method.toLowerCase()=="get" && obj.param){
            url += "?"+obj.param;
        }
        xmlHttp.open(obj.method,obj.url,obj.svnc);
        
        //接收响应数据
        xmlHttp.onreadystatechange = function () {
            if(xmlHttp.status==200 && xmlHttp.readyState==4){
                obj.cellback(xmlHttp.responseText);
            }
        }

        //发起请求send()
        if(obj.method.toLowerCase()=="post"){
            //post传参要制定编码
            //设置请求头
            xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlHttp.send(obj.param);            //post方法传递参数写在send()里面     get写在url后面
        }else {
            xmlHttp.send(null);
        }
        
    }
    
    function post(obj) {
        obj.method="post";
        ajax(obj);
    }
    
    function get(obj) {
        obj.method="get";
        ajax(obj);
    }
    
    function postJson(obj) {
        var newCallback = function (text) {
            var json = JSON.parse(text);
            obj.callback(json);
        }
        obj.method="post";
        ajax(obj);
    }

    //暴露
    window.$ = {ajax:ajax,post:post,get:get,postJson:postJson};

})()

