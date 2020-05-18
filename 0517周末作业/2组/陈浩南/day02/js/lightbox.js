(function () {
    $(function () {
        lightBoxEvent();
        hide();//点击空白处隐藏mask和轮播
    });

    var imgArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
    var index = 0;
    $("#toNext").on("click", next);
    $("#toPre").on("click", prev);
    $("#close").on("click", close);
    $("#lunbo").on("mouseover", stop);
    $("#lunbo").on("mouseout", start);

    //给每个灯箱注册点击事件
    function lightBoxEvent() {
        $(".box").click(function () {
            index = $(this).index();
            $("#disImage").attr("src", imgArr[index]);
            start();
            $("#lunbo").show();
            $(".mask").show();
        });
    }

    function next() {
        index++;
        if (index == imgArr.length) {
            index = 0;
        }
        $("#disImage").attr("src", imgArr[index]);
    }

    function prev() {
        index--;
        if (index < 0) {
            index = imgArr.length - 1;
        }
        $("#disImage").attr("src", imgArr[index]);
    }

    function close() {
        $("#close").click(function () {
            $("#lunbo").hide();
            $(".mask").hide();
        });
    }

    function start() {
        timer = setInterval(next, 800);
    }

    function stop() {
        clearInterval(timer);
    }

    function hide() {
        $(document).click(function () {
            $("#lunbo").hide();
            $(".mask").hide();
        });

        $("#lightbox").click(function (event) {
            event.stopPropagation();
        });

        $("#lunbo").click(function (event) {
            event.stopPropagation();
        });
    }

    window.f = {
        l: lightBoxEvent,
        n: next,
        p: prev,
        c: close,
        st: start,
        sp: stop,
        h: hide
    }
})();