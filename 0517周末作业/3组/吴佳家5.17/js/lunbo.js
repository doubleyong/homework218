
$(function () {
    $("figure").click(function () {
        display(1);//点击每一个figure时显示轮播
        $(".lunBox>img").remove();//点击后先把轮播区域的图片都移除了
        $(this).children("img").clone().prependTo(".lunBox");//给当前点击这个figure通过克隆图片，并把图片放到轮播里面
        $(this).addClass("choose");//给当前点击这个figure加choose
    });
//2表示隐藏   1表示显示
    function display(a) {
        if(a == 1){
            $(".zhe").show();
            $(".lunBox").show();
        }if(a==2) {
            $(".zhe").hide();
            $(".lunBox").hide();
            $("figure").removeClass("choose");
        }
    }
    $("body").on("click","#next",function () {
        $(".lunBox>img").remove();
        if($("figure:last-of-type").hasClass("choose")){
            $("figure").removeClass("choose");
            $("figure:first-of-type").addClass("choose");
            $("figure:first-of-type").children("img").clone().prependTo(".lunBox");
        }else {
            $(".choose").next().children("img").clone().prependTo(".lunBox");
            $(".choose").next().addClass("choose");
            $(".choose").eq(0).removeClass("choose");
        }
    });
    $("body").on("click","#prev",function () {
        $(".lunBox>img").remove();
        if($("figure:first-of-type").hasClass("choose")){
            $("figure").removeClass("choose");
            $("figure:last-of-type").addClass("choose");
            $("figure:last-of-type").children("img").clone().prependTo(".lunBox");
        }else {
            $(".choose").prev().children("img").clone().prependTo(".lunBox");
            $(".choose").prev().addClass("choose");
            $(".choose").eq(1).removeClass("choose");
        }
    });
    $("body").on("click","#close",function () {
        $(".lunBox").hide();
        $(".zhe").hide();
    });
    $("body").on("click",".zhe",function () {
        $(".zhe").hide();
        $(".lunBox").hide();
    });
    })();



