

var zhe = document.getElementById("zhe");
var bigImg = document.querySelectorAll("#boxImg img")[0];

var imgs = document.querySelectorAll("#lightbox figure img");

var winIndex;
var timer;


$("#lightbox figure").each(function (index) {
    $(this).click(function () {
        light.showBigImg(index,imgs);
        winIndex = index;
       timer= setInterval(function () {
            winIndex++
            if(winIndex>light.getsrc(imgs) .length-1){
                winIndex = 0
            }
            light.next(winIndex,imgs)
        },2000)

    })
})
$("#next").click(function () {
    winIndex++
    if(winIndex>light.getsrc(imgs) .length-1){
        winIndex = 0
    }
    light.next(winIndex,imgs)
})

$("#pre").click(function () {

    winIndex--
    if(winIndex<0){
        winIndex = light.getsrc(imgs) .length-1
    }
    light.pre(winIndex,imgs)
})

$("#close").click(function () {
    light.close();
    clearInterval(timer)
})

$("#boxImg ").mouseover(function () {

    clearInterval(timer)
})
$("#boxImg ").mouseout(function () {
  timer=  setInterval(function () {
        winIndex++
        if(winIndex>light.getsrc(imgs) .length-1){
            winIndex = 0
        }
        light.next(winIndex,imgs)
    },2000)

})
// $("#zhe").click(function(event){
//     var e = event || window.event;
//    $(this).hide()
//
//
// });
$("#boxImg").click(function (event) {
    var e = event || window.event;
    e.stopPropagation()
})

$("#lightbox").click(function (event) {
    var e = event || window.event;
    e.stopPropagation()
})
$(document).click(function(){

    $("#zhe").hide()


});



















