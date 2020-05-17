/**
 * Created by 16694 on 2020/5/15.
 */
(function () {
    function createXML()  {
        var xmlHttp;
        if (window.XMLHttpRequest){
            xmlHttp = new XMLHttpRequest();
        }else if (window.ActiveXObject){
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xmlHttp;
    }
    function ajax(obj) {

        if(typeof obj.param == "object"){
            var arr = [];
            for(var key in obj.param){
                arr.push(key+"="+obj.param[key]);
            }
            obj.param = arr.join("&");
        }

        var xmlHttp = createXML();
        if (obj.toLowerCase()=="get"&&obj.param){
            obj.url = obj.url + "?" + obj.param;
        }
        xmlHttp.open(obj.method,obj.url,sync);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.status==200&&xmlHttp.readyState==4){
                obj.callback(xmlHttp.responseText);
            }
        };
        if (obj.toLowerCase()=="post"){
            xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlHttp.send(obj.param);
        }else {
            xmlHttp.send(null);
        }

    }
    function get(obj) {
        obj.method = "get";
        ajax(obj);
    }
    function post(obj) {
        obj.method = "post";
        ajax(obj);
    }
    function postJSON(obj) {
        var newCallback = function (text) {
            var json = JSON.parse(text);
            callback(json);
        };
        ajax("post",url,sync,callback,param);
    }
    window.$ = {ajax:ajax,get:get,post:post};
    // window.ajax = ajax;
})();

$.ajax = ({
   method:"post",
    url:"xxx",
    callback:function () {

    },
    param:{user:"xxx",pwd:"xxxx"}
});
