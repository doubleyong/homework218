(function () {
    var _imgArr = [];
    var current;//默认第几
    var speed = 2000;//过渡
    var timer = 2000;//自动轮播时间
    var isAuto = false;//默认为true
    var fig = document.getElementsByTagName('figure');
    var img = fig.getElementsByTagName('img');
    var _lunBo = {
        //初始化
        init:function (obj) {
            _imgArr = obj.imgData;
            current = 0;
            //显示第一张
            //上一页下一页
            //加事件
            if (obj.isAuto){
                this._autoPlay();
            }
            if (obj.speed=='1'){
                obj.speed=1000;
            }else if (obj.speed=='2'){
                obj.speed=2000;
            }else if (obj.speed=='3'){
                obj.speed=3000;
            }
            speed=obj.speed || speed;//速度要么等于obj中的速度，否则默认2000
            var timer = obj.timer || 1000;
            this._addDom();
            this._addNext();
            this._addPrev();
        },
        _autoPlay:function(){
            timer = setInterval(function () {
                this._addNext();
            },timer);
        },
        _addDom:function () {
            var htmlStr = `
            <div class="event">
                <p class="prev"> > </p>
                <p class="next"> < </p>
            </div>
            ` ;
            document.body.innerHTML += htmlStr;
        },
        _addPrev:function () {
            var prev = document.getElementsByClassName('prev');
            prev.onclick = function () {
                this.prev();
            }
        },
        _addNext:function () {
            var next = document.getElementsByClassName('next');
            next.onclick = function () {
                this.next();
            }
        },
        prev:function () {
            current--;
            for (var i=0;i<fig.length;i++){
                if (current < 0){
                    current = fig.length-1;
                }
            }
        },
        next:function () {
            current++;
            for (var i=0;i<fig.length;i++){
                if (current > fig.length){
                    current = 0;
                }
            }
        },
    };
    window.lunBo = {init:_lunBo.init}
})();