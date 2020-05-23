/**
 * Created by asus on 2020/5/15.
 */

(function(){


    function show() {
    var img;
    var imgArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
    var imgList = document.getElementsByTagName("img");
    //console.log(imgList);
        for (var i = 0; i < imgList.length; i++) {
            imgList[i].addEventListener('click', function () {
                $("#showList").css({display: "block"});
                $(".zhe").css({display: "block"});
                var imgsrc = this.getAttribute("src");
                var lastImgindex = imgArr.length - 1;
                var index = this.getAttribute("data-index");
                $("#showList").append(`
                    <img src="${imgArr[index]}"/>
                    <span id="leftImg"><img src="images/toPre.png" alt=""/></span>
                    <span id="rightImg"><img src="images/toNext.png" alt=""/></span>
                    <span id="closeImg"><img src="images/close.png" alt=""/></span>
                `);
                $("#showList").on("click","#closeImg",function(){
                    $("#showList").html("");
                    $("#showList").css({display: "none"});
                    $(".zhe").css({display: "none"});
                });
                $("#showList").on("click", "#leftImg", function () {
                    index -= 1;
                    //console.log(index)
                    //console.log(imgArr[index])
                    if (index != -1) {
                        $("#showList>img").attr({src: `${imgArr[index]}`});
                    } else if (index == -1) {
                        //console.log(lastImgindex);
                        $("#showList>img").attr({src: `${imgArr[lastImgindex]}`});
                        index = lastImgindex - 1;
                    }
                });
                $("#showList").on("click","#rightImg",function(){
                    index = ++index;
                    //console.log(index)
                    //console.log(imgArr[index])
                    if (index != lastImgindex + 1) {
                        $("#showList>img").attr({src: `${imgArr[index]}`});
                    } else if (index == lastImgindex + 1) {
                        //console.log(lastImgindex);
                        $("#showList>img").attr({src: `${imgArr[0]}`});
                        index = 0;
                    }
                })
            });
        }
    }
show();
})();

