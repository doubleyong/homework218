
window.onload = function () {
        var prev = document.getElementById('prev');
        var next = document.getElementById('next');
        // var box = document.getElementById('box');
        var zhezhao = document.getElementById('zhezhao');
        var $figure = document.getElementsByTagName('figure');
        var del = document.getElementById('del');
        //循环figure标签
        for (var i = 0; i < $figure.length; i++) {
            var fig = $figure[i];
            (function (index) {
                //'url("img/' + index  + '.jpg")'
                //figure标签的事件监听
                fig.addEventListener('click', function () {
                    zhezhao.style.display='block';
                    zhezhao.style.background='url("img/' + index + '.jpg") no-repeat 320px';
                    //下一张事件监听
                    next.addEventListener('click',function (event) {
                        index++;
                        if (index > $figure.length){
                            index = 1;
                        }
                        console.log(index);
                        zhezhao.style.background='url("img/' + index + '.jpg") no-repeat 320px';
                    });
                    //上一张事件监听
                    prev.addEventListener('click',function (event) {
                        index--;
                        if (index < 1){
                            index = $figure.length;
                        }
                        zhezhao.style.background='url("img/' + index + '.jpg") no-repeat 320px';
                        console.log(index);
                    });
                    //差差事件监听
                    del.addEventListener('click',function (event) {
                        zhezhao.style.display='none';
                    })
                })
            })(i+1)
        }
    };