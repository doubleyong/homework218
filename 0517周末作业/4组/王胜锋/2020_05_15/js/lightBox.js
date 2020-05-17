/**
 * Created by admin on 2020/5/15.
 */
var ArrImageSrc = [];
// var src;
$("#Box").on("click",".cont",function () {
    $("#zhezhao").attr("class","show");
    $("#xianshi").attr("class","show");
    var Imagsrc = $(this).children("img").attr("src");
    console.log(Imagsrc);
    $("#BGimg").attr("src",Imagsrc);
    var Arr = $("#Box img");
    for(var i = 0;i<Arr.length;i++){
        ArrImageSrc.push($(Arr[i]).attr("src"))
    }
});
$("#top").click(function () {
    $("#zhezhao").attr("class","hide");
    $("#xianshi").attr("class","hide");
    ArrImageSrc=[];
});
$("#zhezhao").click(function(){
    $("#zhezhao").attr("class","hide");
    $("#xianshi").attr("class","hide");
    ArrImageSrc=[];
});
$("#left").click(function () {
    var BGimgSrc=$("#BGimg").attr("src")
    for(var i=ArrImageSrc.length-1;i>0;i--) {
        if (BGimgSrc == ArrImageSrc[i]) {
            $("#BGimg").attr("src",ArrImageSrc[i-1]);
        }
        if(BGimgSrc == ArrImageSrc[0]) {
            $("#BGimg").attr("src",ArrImageSrc[ArrImageSrc.length-1])
        }
    }
})
$("#right").click(function () {
    var BGimgSrc=$("#BGimg").attr("src")
    for(var i=0;i<ArrImageSrc.length;i++) {
        if (BGimgSrc == ArrImageSrc[i]) {
            $("#BGimg").attr("src",ArrImageSrc[i+1]);
        }
        if(BGimgSrc == ArrImageSrc[ArrImageSrc.length-1]) {
            $("#BGimg").attr("src",ArrImageSrc[0]);
        }
    }
})

