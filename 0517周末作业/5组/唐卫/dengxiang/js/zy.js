/**
 * Created by 98088 on 2020/5/17.
 */
var arr=new Array();
arr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg"];
var curIndex=0;
$(function(){
  img()
    $(".bigImg span").each(function(){
        $(this).click(function(){
            $(this).parent().hide();
        });
    });
    $(".next").click(function(){
        if(curIndex == 0){
            curIndex = arr.length-1;
        }else{
            curIndex--;
        }
        $(".bigImg img").attr("src",arr[curIndex]);
    });
    $(".last").click(function(){
        if(curIndex == arr.length-1){
            curIndex = 0;
        }else{
            curIndex++;
        }
        $(".bigImg img").attr("src",arr[curIndex]);
    });

});
function img() {
    $("figure img").each(function(){
        $(this).click(function(){
            $(this).next(".bigImg").show();
        });
    });
}
