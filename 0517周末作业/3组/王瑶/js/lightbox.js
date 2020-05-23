/**
 * Created by Administrator on 2020/5/15.
 */
var myLightBox=function(){
    var i=0;
    //点击每个图片所在框显示大图
    function displayImg() {
        for(i=0;i<$("#imgDiv figure").length;i++){
            $($("#imgDiv figure")[i]).click(function () {
                $("#zheZhao").show();
                $("#displayBox").show();
                var bigImg=$(this).children("img").attr("src");
                $("#currentImg").attr("src",bigImg);
            })
        }
    }
    displayImg();

    //退出预览大图
    $("#exitBtn").click(function () {
        $("#zheZhao").hide();
        $("#displayBox").hide();
    });

    /**
     * 上一张*/
    $("#pre").click(function () {
        i--;
        if(i==-1){
            i = $("#imgDiv figure").length-1;//如果到了第一张，返回最后一张
        }
        $("#currentImg").attr("src",$($("#imgDiv figure")[i]).children("img").attr("src"));
    });

    /**
     * 下一张*/
    $("#next").click(function () {
        i++;
        if(i==$("#imgDiv figure").length){
            i =0;//如果到了最后一张，返回第一张
        }
        $("#currentImg").attr("src",$($("#imgDiv figure")[i]).children("img").attr("src"));
    })
};
window.onload=function (){
    var getLightBox=myLightBox;//得到封装的灯箱效果
    getLightBox();
}