/**
 * Created by 16694 on 2020/5/15.
 */
// (function () {
//     var b = 10;
//     function getB() {
//         return b;
//     }
//     function setB(num) {
//         if (typeof num == 'number'){
//             b = num;
//         }
//     }
//     window.b = {get:getB,set:setB};
// })();
var data = (function data() {
    var b = 10;
    function getB() {
        return b;
    }
    function setB(num) {
        if (typeof num == 'number'){
            b = num;
        }
    }
    return {get:getB,set:setB};
})();