//使用ajax去调用数据
function ajax(method,url,sync,callback,param) {
//1.创建对象
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }else if(window.ActiveXObject){
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.设置请求
    //open方法，三个参数，1.提交方式，2.请求URL地址，3.同步与异步 true(异步)，false(同步)
   if(method.toLowerCase()=="get"&&param){//将method的参数转换成小写toLowerCase()；
  url=url+"?"+param;

   }
    xmlHttp.open(method,url,sync);//get方式参数传递的方式是（写）拼接在URL里面的
    //3.接收影响回来数据（以事件的形式）
    xmlHttp.onreadystatechange=function () {//onreadystatechange状态有改变的时候
        if(xmlHttp.status==200&&xmlHttp.readyState==4){
            // console.log(xmlHttp.responseText)// xmlHttp.responseText是响应回来的文本
           callback(xmlHttp.responseText);
        }
    }
    //4.发起请求
    if(method.toLowerCase()=="post"){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")//设置请求头（的编码）
        xmlHttp.send(param);//post方式，传递参数的方式是写在send中的
    }else {
        xmlHttp.send(null);
    }


}