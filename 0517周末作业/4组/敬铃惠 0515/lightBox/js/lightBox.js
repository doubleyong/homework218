/**
 * Created by adminpc on 2020/5/17.
 */
(function (){
    var nowPhoto;
    var photoArr= [];
    $("#lightBox").on("click","figure",function () {
        var arr = $("#lightBox figure");
        nowPhoto = $(this).index();
        for(var i=0;i<arr.length;i++){
            photoArr.push($(arr[i]).children("img").attr("src"));
        }
        $(this).parent().append(`<div id='modal'><div id='photoContent'><img src='img/close.png'id='close'><img src='img/toPre.png'id='toPre'><img src='img/toNext.png'id='toNext'></div></div>`);
        $("#photoContent").css("background-image",`url(${photoArr[nowPhoto]})`);
    })
    $("#lightBox").on("click","#toPre",function () {
        if(--nowPhoto>=0){
            $("#photoContent").css("background-image",`url(${photoArr[nowPhoto]})`);
        }else {
            nowPhoto=photoArr.length-1;
            $("#photoContent").css("background-image",`url(${photoArr[nowPhoto]})`);
        }
    })
    $("#lightBox").on("click","#toNext",function () {
        if(++nowPhoto<photoArr.length){
            $("#photoContent").css("background-image",`url(${photoArr[nowPhoto]})`);
        }else {
            nowPhoto=0;
            $("#photoContent").css("background-image",`url(${photoArr[nowPhoto]})`);
        }
    })
    $("#lightBox").on("click","#close",function () {
        $("#modal").remove();
    })
})();