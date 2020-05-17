/**
 * Created by 16694 on 2020/5/17.
 */
$(function (){
    $("figure").on("click",function () {
        $("#lunbo").show();
        $(".zhe").show();
    });
    $("#right").on("click",toRight);
    $("#tLeft").on("click",toLeft);
    var imgArr=[];
    function close() {
        $("#close").on("click",function () {
            $("#lunbo").hide();
            $(".zhe").hide();
        });
    }
    function show(num) {
        for(var i=0;i<$("figure>img").length;i++){
            imgArr.push($($("figure>img")[i]).attr("src"));
        }
        $(".box>img").attr("src",imgArr[num-1]);
    }
    function toRight() {
        var showImgSrc = $(".box>img").attr("src");
        var len=imgArr.length;
        $("#right").on("click",function () {
            for(var i=0;i<imgArr.length;i++){
                if(showImgSrc==imgArr[i]){
                    $(".box>img").attr("src",imgArr[i+1]);
                }
                if(showImgSrc==imgArr[imgArr.length-1]){
                    $(".box>img").attr("src",imgArr[0]);
                }
            }
        })
    }
    function toLeft() {
        var showImgSrc = $(".box>img").attr("src");
        var len=imgArr.length;
        $("#tLeft").on("click",function () {
            for(var i=len - 1;i>0;i--){
                if(showImgSrc==imgArr[i]){
                    $(".box>img").attr("src",imgArr[i-1]);
                }
                if(showImgSrc==imgArr[0]){
                    $(".box>img").attr("src",imgArr[len - 1]);
                }
            }
        })
    }
    window.fz={show:show,close:close,toRight:toRight,toLeft:toLeft};
})();

