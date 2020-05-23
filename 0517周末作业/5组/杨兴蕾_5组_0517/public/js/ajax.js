/**
 * Created by Administrator on 2020/4/22.
 */
(function(){
    function createXMLHttp() {
        var xmlHttp;
        if(window.XMLHttpRequest){//ie
            xmlHttp=new XMLHttpRequest();
        }else if(window.ActiveXObject){//dom
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        return xmlHttp;
    }
    function ajax(obj){
        // 1.创建对象
        var xmlHttp=createXMLHttp();
        // 2.设置请求
        if(typeof obj.param=="object"){
            var arr=[];
            for(var key in obj.param){
                arr.push(key+"="+obj.param[key])

            }
            obj.param=arr.join("&");

        }
        if(obj.method.toLowerCase()=="get"&&obj.param){
            obj.url=obj.url+"?"+obj.param;//get方法的参数传递在urlhoumian
        }
        xmlHttp.open(obj.method,obj.url,obj.async);
        // 3.接收响应回来的数据
        xmlHttp.onreadystatechange=function () {
            // console.log(xmlHttp.status);//http请求状态
            // console.log(xmlHttp.readyState);//ajax请求状态
            if(xmlHttp.status==200&& xmlHttp.readyState==4){
                obj.callback(xmlHttp.responseText);
            }
        };
        // 4.发起请求
        if(obj.method.toLowerCase()=="post"){
            xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");//post方法要设置请求头
            xmlHttp.send(obj.param);//post方法提交参数传递在send方法里面
        }else{
            xmlHttp.send(null);
        }

    }
    function get(obj){
        obj.method="get";
        ajax(obj)
    }
    function post(obj){
        obj.method="post";
        ajax(obj);
    }
    function postJson(obj){
        obj.method="post";
        var newCallBack=function (text) {
            var json=JSON.parse(text);
            callback(json)
        }
        ajax(obj)
    }
    window.$={ajax:ajax,get:get}
})();
