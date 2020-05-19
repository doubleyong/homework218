/**
 * Created by 16694 on 2020/5/17.
 */
(function () {
    var imgArr;
    var lunbo={
        init:function (obj) {
            imgArr = obj.imgArr;
            // lunbo.next();
            // lunbo.prev();
        },
        next:function () {
            var showImgSrc = $(".box>img").attr("src");
            for (var i = 0; i < imgArr.length; i++) {
                if (showImgSrc == imgArr[i]) {
                    $(".box>img").attr("src", imgArr[i + 1]);
                }
                if (showImgSrc == imgArr[imgArr.length - 1]) {
                    $(".box>img").attr("src", imgArr[0]);
                }
        }
        },
        prev:function () {
            var showImgSrc = $(".box>img").attr("src");
            var len = imgArr.length;
                for (var i = len - 1; i > 0; i--) {
                    if (showImgSrc == imgArr[i]) {
                        $(".box>img").attr("src", imgArr[i - 1]);
                    }
                    if (showImgSrc == imgArr[0]) {
                        $(".box>img").attr("src", imgArr[imgArr.length - 1]);
                    }
                }
        }
    };

    // function next() {
    //     var showImgSrc = $(".box>img").attr("src");
    //     $("#next").on("click",function () {
    //         for(var i=0;i<imgArr.length;i++){
    //             if(showImgSrc==imgArr[i]){
    //                 $(".box>img").attr("src",imgArr[i+1]);
    //             }
    //             if(showImgSrc==imgArr[imgArr.length-1]){
    //                 $(".box>img").attr("src",imgArr[0]);
    //             }
    //         }
    //     })
    // }
    // function prev() {
    //     var showImgSrc = $(".box>img").attr("src");
    //     var len=imgArr.length;
    //     $("#prev").on("click",function () {
    //         for(var i=len-1;i>0;i--){
    //             if(showImgSrc==imgArr[i]){
    //                 $(".box>img").attr("src",imgArr[i-1]);
    //             }
    //             if(showImgSrc==imgArr[0]){
    //                 $(".box>img").attr("src",imgArr[imgArr.length - 1]);
    //             }
    //         }
    //     })
    // }
    // function show() {
    //     for(var i=0;i<imgArr.length;i++){
    //         $("#list").append("<li></li>");
    //     }
    // }
    window.g={lunbo:lunbo.init,next:lunbo.next,prev:lunbo.prev};
})();
g.lunbo({
    imgArr:["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"],
});