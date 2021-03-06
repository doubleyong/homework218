/**
 * Created by coco on 2020/5/14.
 */
function ajax (method, url, params, fun) {   //'get', 'test.php', {}, fun
    method = method.toUpperCase() ;           //在传入method的时候可以忽略大小写(转化为大写)
//1.0创建一个AJAX对象
    var xhr = new XMLHttpRequest();

    if (typeof params === 'object') {        //如果在地址传入的东西是一个对象，我们将它的格式转化为urlencoded
        var tempArr = [];
        for (var key in params) {
            var value = params[key];
            tempArr.push(key + '=' + value)
        }
        params = tempArr.join('&') //===>这里的格式就为parsms="key1=value&key2=value2"
    }

    if (method === 'GET') { //2.0设置请求
        url += '?' + params //  "url?key1=value&key2=value2"
    }
// 2.0设置请求
// xhr.open("请求提交的方式","请求url的地址","同步还是异步true异步/false同步")
    xhr.open(method, url, false);

    var data = null;
    if (method === 'POST') {    //如果请求的方式为POST，需要手动设置请求头的Content-Type
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        data = params
    }
//3.0接受响应的数据

    xhr.onreadystatechange=function () {
        console.log(xhr.status);//http请求的状态
        console.log(xhr.readyState);//AJAX请求的状态
        if(xhr.status==200&&xhr.readyState==4){
            fun(this.responseText);//获取响应结果（接收路由响应值）
        }
    };

//4.0发起请求
    xhr.send(data)
}

// 调用者

var fun = function (res) {
    da=res;
    console.log(da);
};
ajax('get', 'test.php', {}, fun);