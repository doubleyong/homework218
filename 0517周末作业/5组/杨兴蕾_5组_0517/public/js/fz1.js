/**
 * Created by Administrator on 2020/5/15.
 */
(function(){
    var b=10;
    function getB() {
        return b;
    }
    function setB(num) {
        // 设置值的时候要考虑值的类型，引用类型还是原始类型
        if(typeof num == "number"){
            b=num;
        }
    }
    // 通过window方式暴露
    window.b={get:getB,set:setB}
})();
