

//ajax的封装



//原生js封装
function ajax() {
    var ajaxData={
        type:(arguments[0].type||'GET').toUpperCase(),//请求的类型
        url:arguments[0].url||'',//url地址
        async:arguments[0].async||'ture',//同步或异步，默认为异步
        data:arguments[0].data||null,//数据
        dataType:arguments[0].dataType||'json',//数据类型，默认为json类型
        contentType:arguments[0].contentType||'application/x-www-form-urlencode;charset=url-8',//编码方式
        beforeSend:arguments[0].beforeSend||function () {},
        //beforeSend 局部事件,当一个Ajax请求开始时触发.如果需要，你可以在这里设置XHR对象.
        success:arguments[0].success||function () {},//成功执行的函数
        error:arguments[0].error||function () {}//出错时执行的函数
    }
    ajaxData.beforeSend()
    var xhr=createxmlHttpRequest();
    xhr.responseType=ajaxData.dataType//数据返回的类型




    xhr.open(ajaxData.type,ajaxData.url,ajaxData.async)//设置请求
    xhr.setRequestHeader('Content-Type',ajaxData.contentType)
    xhr.send(convertData(ajaxData.data))//发送数据


//更优化的方法 start
    var params = {};
    for(var key in ajaxData.data){
        params.push(key + "=" + data[key]);
    }
    var sendData = params.join("&");
    if(ajaxData.type.toUpperCase() == "GET"){
        xhr.open(ajaxData.type, ajaxData.url + "?" + sendData, ajaxData.async);
        xhr.send(null);
    }else{
        xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
        xhr.send(sendData);
    }
//end

    xhr.onreadystatechange=function () {
        if (xhr.readyState==4){
            if (xhr.status==200){
                ajaxData.success(xhr.response)
            }else {
                ajaxData.error()
            }
        }
    }
}


//创建一个http请求
function createxmlHttpRequest(){
    if (window.ActiveXObject){
        return new ActiveXObject('Microsoft.XMLHTTP');
    }else if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
}
//数据传送的格式
function convertData() {
    if (typeof data==='object'){
        var convertResult='';
        for(var c in data){
            convertResult+=c+'='+data[c]+'&';
        }
        convertResult=convertResult.substring(0,convertResult.length-1)
        return convertResult;
    }else {
        return data;
    }
}