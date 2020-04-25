/**
 * Created by Administrator on 2020/4/22 0022.
 */
function ajax(method,url,syno,callback,param) {
    //创建对象
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
//    设置请求
    if(method.toLowerCase()=="get" && param){
        url = url+"?"+param;
    }
    xmlHttp.open(method,url,syno);
    // 接收响应回来的数据
    xmlHttp.onreadystatechange=function () {
        // console.log(xmlHttp.status);//状态
        // console.log(xmlHttp.readyState);//状态码
        if (xmlHttp.status==200 && xmlHttp.readyState==4){
            // console.log(xmlHttp.responseText);
            callback(xmlHttp.responseText);
        }
    };
    if(method.toLowerCase()=="post" ){
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp.send(param);
    }else{
        xmlHttp.send(null);
    }

}