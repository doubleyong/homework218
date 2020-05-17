(function () {
    function ajax(obj) {
        //1.创建一个XMLHttpRequest
        var xmlHttp;
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //2. 设置请求
        if(obj.method == "get" && obj.param){
            obj.url = obj.url + "?" + obj.data;
        }
        xmlHttp.open("get",obj.url);
        // 3.接收响应回来的数据
        xmlHttp.onreadystatechange = function (){
            if(xmlHttp.status == 200 && xmlHttp.readyState == 4){
                obj.success(xmlHttp.responseText);
            }
        }
        if(obj.method.toLowerCase()=="post"){
            xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlHttp.send(obj.param);
        }else{
            xmlHttp.send(null);
        }
    }
    window.ajax = ajax;
})();