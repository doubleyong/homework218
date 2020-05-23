(function () {
    function creatXML() {
        var xmlHttp;
        if(window.XMLHttpRequest){
            xmlHttp = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xmlHttp;
    }
    function ajax(obj) {
        //1.创建对象
        var xmlHttp = creatXML();

        if (typeof obj.param == "object"){
            var arr = [];
            for (var key in obj.param){
                arr.push(key+"="+obj.param[key]);
            }
            obj.param = arr.join("&");
        }


        //2.设置请求
        if(obj.method.toUpperCase() == "get" && obj.param){
            obj.url=obj.url+"?"+obj.param;
        }

        //open方法，三个参数，1.提交方式 2.请求url地址 3.同步(false)与异步(true,默认)
        xmlHttp.open(obj.method,obj.url,obj.sync);
        //3.接受响应回来数据
        xmlHttp.onreadystatechange = function () {
            if(xmlHttp.status == 200 && xmlHttp.readyState == 4){
                obj.callback(xmlHttp.responseText);
            }
        };
        //4.发起请求
        if (obj.method.toLocaleLowerCase() == "post"){
            xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlHttp.send(obj.param);
        }else {
            xmlHttp.send(null);
        }
    }
    function get(obj) {
        obj.methd = "get";
        ajax(obj)
    }
    function post(obj) {
        obj.methd = "post";
        ajax(obj)
    }
    function postJSON(obj) {
        var newCallBack = function (text) {
            var json = JSON.parse(text);
            callback(json);
        };
        obj.methd = "post";
        ajax(obj)
    }
    window.$ = {ajax:ajax,get:get,post:post};
})();
$.ajax({
    method:"",
    url:"",
    callback:function () {
        
    },
    param:{}
});

