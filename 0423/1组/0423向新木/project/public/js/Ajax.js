function ajax(metbod,url,sync,callback) {
  var xmlHttp;
if(window.XMLHttpRequest){
  xmlHttp = new XMLHttpRequest();
}else if(window.ActiveXObject){
  xmlHttp = new ActiveXobject("Microsoft,XMLHTTP")
}
  xmlHttp.open(metbod,url,sync);
  xmlHttp.onreadystatechange=function () {
    if(xmlHttp.status==200 && xmlHttp.readyState == 4){
      callback(xmlHttp.responseText);
    }
  };
  xmlHttp.send(null)
}
