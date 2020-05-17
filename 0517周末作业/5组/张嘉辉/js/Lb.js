/**
 * Created by Administrator on 2020/5/15 0015.
 */
var imgArr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg"];
var id;
var imgNum=imgArr.length;
// console.log(imgNum);
$("figure").click(function () {
    $("#lightbox").hide();
    $("#zhezhao").show();
    id=$(this).attr("data-id");
    var num=id;
    $("#bigimg").attr("src",imgArr[id]);
    $(".toNext").click(function () {
        num++;
        if(num>(imgNum-1)){
            num=0;
        }
        $("#bigimg").attr("src",imgArr[num]);
    });
    $(".toPre").click(function () {
        num--;
        if(num<0){
            num=(imgNum-1);
        }
        $("#bigimg").attr("src",imgArr[num]);
    })

});
$(".close").click(function () {
    $("#zhezhao").hide();
    $("#lightbox").show();
});
