/**
 * ajax封装
 * url 发送请求的地址
 * data 发送到服务器的数据，数组储存，如：{"data":new Date().getTime(),"state":1}
 * async 默认值：true 默认设置下，所有请求均为异步请求，如果需要发送同步请求，请将此项设置为false。
 *      注意，同步请求将所著浏览器，用户其他操作必须等待请求完成才可以换行。
 * type 请求方式（"POST"或"GET"），默认为"GET"
 * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
 * successfn 成功回调函数
 * errorfn 失败回调函数
 * url，data，type，dataType
 **/
jQuery.ax = function (obj,successfn,errorfn) {
    if(!obj.async == false){
        obj.async = true;
    }
    $.ajax({
        type : obj.type || "post",
        data : JSON.stringify(obj.data) || {},
        async : obj.async,
        url : obj.url,
        dataType : obj.dataType || "json",
        contentType : obj.contentType || "application/json; charset=utf-8",
        success : function (d) {
            successfn(d)
        },
        error : function (e) {
            errorfn(e)
        }
    });
};
jQuery.ax1 = function (obj,successfn,errorfn) {
    $.ajax({
        type : obj.type || "post",
        data : JSON.stringify(obj.data) || {},
        async : false,
        uri : obj.url,
        dataType : obj.dataType || "json",
        success : function (d) {
            successfn(d)
        },
        error : function (e) {
            errorfn(e)
        }
    })
};