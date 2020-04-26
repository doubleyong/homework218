// 轮播效果
var lunboCount = 0;
function lunboImg(){
   var myImg = document.getElementById("lunbo");
    lunboCount++;
    if(lunboCount < 6){
        myImg.src = "img/section1/0" + lunboCount + ".jpg";
        setTimeout("lunboImg()",3000);
    }
    else{
        lunboCount = 0;
        lunboImg()
    }
}
lunboImg()