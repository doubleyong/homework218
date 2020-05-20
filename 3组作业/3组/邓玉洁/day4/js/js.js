//类名查找元素实现方法
// function Class(className, obj) {
//     obj = obj || document;
//     if (obj.getElementsByClassName)
//         return obj.getElementsByClassName(className);
//
//     var result = [];
// var tags = obj.getElementsByTagName("*");
// for (var i = 0; i<tags.length; i++) {
//     var classNames = tags[i].className.split(" ");
//     for (var j = 0, l = classNames.length; j < l; j++) {
//         if (className === classNames[j]) { // 找到所需要进行查找的一个元素
//             result.push(tags[i]);
//             break;
//         }
//     }
// }
// return result;
// }
//工厂模式
/*
(function () {
    function msgFactory(type,value) {
        if (this instanceof  msgFactory){
            var result = new this[type](value);
            return result;
        }else {
            return new msgFactory(type,value);
        }
    }
    msgFactory.prototype={
        email:function (value) {
            var reg= /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if(!reg.test(value)){
                this.err = '邮箱格式不对';
            }
        },
        phone:function (value) {
            var reg = /^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))[0-9]{8}$/;
            if(!reg.test(value)){
                this.err = '电话格式不对';
            }
        },
        id:function (value) {
            var reg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/;
            if(!reg.test(value)){
                this.err = '身份证号格式不对';
            }
        }
    };
    window.msgFactory = msgFactory;
})();
*/

//工厂模式
/*
var phone = '15682008662';
var res = msgFactory('phone',phone);
console.log(res);
*/
//外观模式
/*
var btn = document.getElementById('btn2');
var btn2 = document.getElementById('btn');

btn2.onclick=function () {
    var oldClick = btn.onclick;
    btn.onclick=function () {
        if (typeof oldClick =='function'){
            oldClick();
            newClick();
        }else {
            newClick();
        }
    };
}
function newClick() {
    console.log('新添加的处理');
}
 */
//桥接模式
/*
var btn = document.getElementById('btn');
btn.onmouseover = function () {
    changeStyle(btn,'red','green');
};
btn.onmouseout = function () {
    changeStyle(btn,'green','red');
};
function changeStyle(dom,color,bg) {
    dom.style.color = color;
    dom.style.backgroundColor = bg;
}
*/
//状态模式
/*
function action(type) {
    if (type in obj){
        obj[type]();
    }
}
var obj = {
    jump(){

    },
    cry(){

    },
    smile(){

    }
}
 */

//适配器模式
/*
function objectApater(obj) {
    var arr = [];
    for (var key in obj){
        arr.push(key+'='+obj[key]);
    }
    return arr.join('&');
}
function ajax(method,url,async,param) {
    var xhr = new XMLHttpRequest();
    xhr.open(method,url,async);
    xhr.onreadystatechange = function () {

    };
    xhr.send();
}
 */

// (function () {
//     function msgFactory(type,value) {
//         if (this instanceof  msgFactory){
//             var result = new this[type](value);
//             return result;
//         }else {
//             return new msgFactory(type,value);
//         }
//     }
//     msgFactory.prototype={
//         email:function (value) {
//             var arr = ['123@qq.com','456@qq.com','456789@qq.com'];
//             if (arr.indexOf(value) > -1){
//                 arr.push(value)  ;
//
//             }else {
//                 alert('不存在')
//             }
//
//         }
//     };
//     window.msgFactory = msgFactory;
// })();
// JSON.parse(JSON.stringify(data).replace(/keyName/g, 'name'));


//失败品
// var $btnEvent = document.querySelectorAll('.btn');
// var $p = document.querySelectorAll('.p-hover');
// var $inputs = document.querySelectorAll('.input');
// var $btnColor = document.querySelectorAll('.btn-green');
// (function () {
//     function $(jquer) {
//         var Names = jquer.substr(0,1);
//         var Name = jquer.split(Names)[1];
//         if (Names=='.'){
//             document.querySelectorAll(Name);
//         }else if (Names=='#'){
//             return document.querySelectorAll(Name);
//         }else{
//             document.querySelectorAll(jquer);
//         }
//     }
// })();

//作业
    function $(param, obj) {
        obj = obj || document;
        //id
        if (param[0] === "#"){
            return document.getElementById(param.slice(1));
        }// class
        else if (param[0] === "."){
            return document.getElementsByClassName(param.slice(1));
        }else {//tag
            return obj.getElementsByTagName(param);
        }
    }




