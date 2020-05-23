/**
 * Created by Administrator on 2020/5/15 0015.
 */
$(function lightMethod() {
    //点击图片，显示灯箱
    // $(".lightBoxImg").on("click",showLightBox);
    // //    点击遮罩层隐藏灯箱
    // $("#ligthBox").on("click",function () {
    //     $("#ligthBox,#Car").hide();
    // });
    // //给下一页按钮添加事件
    // $("#toNextIcon").on("click",nextImg);
    // // 给上一页按钮添加事件
    // $("#toPreIcon").on("click",preImg);
    //存放图片路径数组
        var imgSrcArr = [];
        function hideLightBox() {
            $("#ligthBox,#Car").hide();
        }
        function showLightBox(num) {
            imgSrcArr = [];
            for(var i=0 ; i<$(".lightBoxImg").length;i++){
//          获取所有图片src
                imgSrcArr.push($($(".lightBoxImg")[i]).attr("src"));
            }
            $("#showImg").attr("src",imgSrcArr[num-1]);
            $("#ligthBox,#Car").show();
        }
        function nextImg() {
            var showImgSrc =  $("#showImg").attr("src");
            var arrLength = imgSrcArr.length;
            for(var i=0;i<arrLength;i++){
//            点击按钮，显示下一张图片
                if(showImgSrc==imgSrcArr[i]){
                    $("#showImg").attr("src",imgSrcArr[i+1]);
                }
//            当图片为最后一张图片的时候，再点击下一页按钮，显示第一张图片
                if(showImgSrc==imgSrcArr[imgSrcArr.length-1]){
                    $("#showImg").attr("src",imgSrcArr[0]);
                }
            }
        }
        function preImg() {
            var showImgSrc =  $("#showImg").attr("src");
            var arrLength = imgSrcArr.length;
            for(var i=arrLength-1;i>0;i--){
//            点击按钮，显示上一张图片
                if(showImgSrc==imgSrcArr[i]){
                    $("#showImg").attr("src",imgSrcArr[i-1]);
                }
//            当图片为第一张的时候，再点击上一页按钮，显示最后一张图片
                if(showImgSrc==imgSrcArr[0]){
                    $("#showImg").attr("src",imgSrcArr[arrLength-1]);
                }
            }
        }
    window.lightMethod = {showLightBox:showLightBox,nextImg:nextImg,preImg:preImg,hideLightBox:hideLightBox};
})();

/**
 * 灯箱使用文档：
 * 给列表图片的class加上lightBoxImg
 * */
