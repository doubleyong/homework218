/**
 * Created by greatwo on 2020/5/15.
 */
(function () {

    function set() {
        $("body").prepend(`<div class="zhe"></div>
<div class="up">
<div id="next"><img src="img/toNext.png" alt=""></div>
<div id="prev"><img src="img/toPre.png" alt=""></div>
<div id="del"><img src="img/close.png" alt=""></div>
</div>`);
        function display(a) {
            if(a == 1){
                $(".zhe").show();
                $(".up").show();
            }else {
                $(".zhe").hide();
                $(".up").hide();
                $("figure").removeClass("choose");
            }
        }

        $("body").on("click",".zhe",function () {
            display(0);
        });
        $("body").on("click","#del",function () {
            display(0);
        });
        $("figure").click(function () {
            display(1);
            $(".up>img").remove();
            $(this).children("img").clone().prependTo(".up");
            $(this).addClass("choose");
        });
    }
    function page() {
        $("body").on("click","#next",function () {
            $(".up>img").remove();
            if($("figure:last-of-type").hasClass("choose")){
                $("figure").removeClass("choose");
                $("figure:first-of-type").addClass("choose");
                $("figure:first-of-type").children("img").clone().prependTo(".up");
            }else {
                $(".choose").next().children("img").clone().prependTo(".up");
                $(".choose").next().addClass("choose");
                $(".choose").eq(0).removeClass("choose");
            }
        });

        $("body").on("click","#prev",function () {
            $(".up>img").remove();
            if($("figure:first-of-type").hasClass("choose")){
                $("figure").removeClass("choose");
                $("figure:last-of-type").addClass("choose");
                $("figure:last-of-type").children("img").clone().prependTo(".up");
            }else {
                $(".choose").prev().children("img").clone().prependTo(".up");
                $(".choose").prev().addClass("choose");
                $(".choose").eq(1).removeClass("choose");
            }
        });
    }

    window.light = {view:set,page:page};
})();
// var LB = light();

