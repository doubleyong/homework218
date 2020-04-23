/**
 * Created by LuxonD on 2020/4/22.
 */
function ajax(metbod,url,sync,callback,canshu) {
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(metbod.toLowerCase()=='get' && canshu){
        url=url+'?'+canshu;
    }

    xmlHttp.open(metbod,url,sync);
    xmlHttp.onreadystatechange=function () {
        if(xmlHttp.status==200 && xmlHttp.readyState == 4){
            // backData = JSON.parse(xmlHttp.responseText);
            callback(xmlHttp.responseText);
        }
    };
    if(metbod.toLowerCase()=='post'){
        xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xmlHttp.send(canshu);
    }
    else{
        xmlHttp.send(null);
    }
}