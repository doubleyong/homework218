// // 第一种：
// (function(){
//     function jQuery(selector){
//         // console.log(selector);
//         return new init(selector);
//     }
//     function init(selector){
//         let elements = document.querySelectorAll(selector);
//         // console.log(elements);
//         this.eles = elements;
//     }
//     init.prototype.css = function(name,value){
//         for(let i=0; i<this.eles.length; i++){
//             let ele = this.eles[i];
//             ele.style[name] = value;
//         }
//     }
//     window.jQuery = window.$ = jQuery;
// })();

// (function(global){
//     function jQuery(selector){
//         // console.log(selector);
//         return new init(selector);
//     }
//     function init(selector){
//         let elements = document.querySelectorAll(selector);
//         // console.log(elements);
//         this.eles = elements;
//     }
//     init.prototype.css = function(name,value){
//         for(let i=0; i<this.eles.length; i++){
//             let ele = this.eles[i];
//             ele.style[name] = value;
//         }
//     }
//     global.jQuery = global.$ = jQuery;
// })(window);

// // 第二种：
// (function(global){
//     function jQuery(selector){
//         return new init(selector);
//     }
//     function init(selector){
//         let elements = document.querySelectorAll(selector);
//         for(let i=0; i<elements.length;i++){
//             this[i] = elements[i];
//         }
//         //将获取的DOM元素都添加到对象本身
//         this.length = elements.length;
//     }
//     init.prototype = {
//         constructor: init,
//         css (name,value){
//             for(let i=0; i<this.length; i++){
//                 let ele = this[i];
//                 ele.style[name] = value;
//             }
//         }
//     }
//     global.jQuery = global.$ = jQuery;
// })(window);

// // 第三种：（有错）
// (function(global){
//     function jQuery(selector){
//         return jQuery.prototype.init(selector);
//     }
//     jQuery.prototype = {
//         constructor: jQuery,
//         init:function(selector){
//             let elements = document.querySelectorAll(selector);
//             for(let i=0; i<elements.length;i++){
//                 this[i] = elements[i];
//             }
//             this.length = elements.length;
//         },
//         css (name,value){
//             for(let i=0; i<this.length; i++){
//                 let ele = this[i];
//                 ele.style[name] = value;
//             }
//         }
//     }
//     //让init的原型等于jQuery的原型，这样init就可以访问到jQuery.prototype下的css方法。
//     jQuery.prototype.init.prototype = jQuery.prototype;
//     global.jQuery = global.$ = jQuery;
// })(window);

// // 第四种：（有错）
// (function(global){
//     function jQuery(selector){
//         return jQuery.fn.init(selector);
//     }
//     jQuery.fn = jQuery.prototype = {
//         constructor: jQuery,
//         init:function(selector){
//             let elements = document.querySelectorAll(selector);
//             for(let i=0; i<elements.length;i++){
//                 this[i] = elements[i];
//             }
//             this.length = elements.length;
//         },
//         css (name,value){
//             for(let i=0; i<this.length; i++){
//                 let ele = this[i];
//                 ele.style[name] = value;
//             }
//         }
//     }
//     jQuery.fn.init.prototype = jQuery.fn;
//     global.jQuery = global.$ = jQuery;
// })(window);