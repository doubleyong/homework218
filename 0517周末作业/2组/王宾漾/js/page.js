$(function () {
    var arrSrc=[];
    var figure=$("figure");
    var num=0;
    var mythisSrc;
    var zhe=$(".zhezhao")
    for(var i=0;i<figure.length;i++){
        arrSrc.push(figure[i].firstElementChild.getAttribute("src"));
    }
    //console.log(arrSrc)
    figure.on("click","img",function(){
        mythisSrc=$(this).attr("src");
        console.log(mythisSrc);
        $(".zhezhao").append("<img class='big'/>").fadeIn(600);
        $(".big")[0].src=mythisSrc;
        for(var i=0;i<figure.length;i++){
            if(mythisSrc==arrSrc[i]){
                num=i+1;
                //console.log("num:"+num)
                return num;
            }
        }
    })
    zhe.on("click",".close",function(){
        $(".zhezhao").fadeOut(600)
    })
    zhe.on("click",".next",function(){
        //console.log(num)
        num+=1;
        //console.log(arrSrc.length)
//            回到第一张图片
        if(num==7){
            num=1;
        }
        $(".big").attr({src:"img/"+num+".jpg"});
    })
    zhe.on("click",".pre",function(){
        //console.log(num)
        num-=1;
//            回到第一张图片
        if(num==0){
            num=6;
        }
        $(".big").attr({src:"img/"+num+".jpg"});
    })
})

