/**
 * Created by Administrator on 2020/5/15.
 */
(function () {

    function createXmlhttp() {
        //创建对象
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp=new XMLHttpRequest();
        }
        else {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xmlhttp;

    }
    function ajax(method,url,async,callback,param) {
        var xmlhttp = createXmlhttp();

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

    function get (url,async,callback,param){
        ajax("get",url,async,callback,param)
    }
    function post (url,async,callback,param){
        ajax("post",url,async,callback,param)
    }
    window.$ = {ajax:ajax,get:get}
})()
document.getElementById("btn").onclick = function(){
    // $.ajax("get","/del.do",true,function (data) {
    //
    // },"user=123")

    $.get("/del.do",true,function (data) {

    },"user=123")
}