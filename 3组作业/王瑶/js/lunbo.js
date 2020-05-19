/**
 * Created by Administrator on 2020/5/18.
 */
//函数封装
(function () {
    var box=document.getElementById("box");
    var img=document.getElementById("img");
    var li=document.getElementsByTagName("li");
    var pre=document.getElementById("pre");
    var next=document.getElementById("next");
    var imgUrlArr=[];
    var current=0;//默认显示图片下标
    var timer;//定时器
    var isAuto=false;//默认自动播放为false
    var speed=1500;//图片切换速度
    var lunbo={
        init:function (obj) {
            imgUrlArr=obj.imgData;
            current=0;//默认显示第一张，也就是下标为0
            isAuto=obj.auto||isAuto;//默认自动播放为false
            if(isAuto){//如果自动播放为真，才进入自动播放
                lunbo.autoplay();
            }
            speed=obj.speed||speed;
            if(typeof obj.speed=="string"){
                if(obj.speed=="fast"){
                    obj.speed=1500;
                }else if(obj.speed=="normal"){
                    obj.speed=2500;
                }else if(obj.speed=="slow"){
                    obj.speed=3500;
                }
            }
            lunbo.addEvent();
            lunbo.changeImg();
            lunbo.next();
            lunbo.pre();
            lunbo.dot();
            lunbo.mouseOut();
            lunbo.mouseOver()
        },
        //点击事件
        addEvent:function () {
            pre.onclick=function () {
                lunbo.pre();
            };
            next.onclick=function () {
                lunbo.next();
            };
            box.onmouseover=function () {
                lunbo.mouseOver();
            };
            box.onmouseout=function () {
                lunbo.mouseOut();
            };

        },
        //切换图片
        changeImg:function () {
            img.src=imgUrlArr[current];
            for(var i=0;i<li.length;i++){
                li[i].className="";
            }
            li[current].className="active";
        },
        //下一页
        next:function () {
            current++;
            if(current==imgUrlArr.length){
                current =0;//如果到了最后一张，返回第一张
            }
            lunbo.changeImg();
        },
        //上一页
        pre:function () {
            current--;
            if(current==-1){
                current= imgUrlArr.length-1;//如果到了第一张，返回最后一张
            }
            lunbo.changeImg();
        },
        //小圆点点击函数
        dot:function () {
            for(var i=0;i<imgUrlArr.length;i++){
                li[i].index=i;
                li[i].onclick=function () {
                    current=this.index;
                    lunbo.changeImg();
                }
            }
        },
        //自动播放
        autoplay:function(){
            timer= setInterval(function(){
                next.click();
            },1500)
        },
        //鼠标移出
        mouseOut:function(){
            timer=setInterval(function () {
                current++;
                current %=imgUrlArr.length;
                lunbo.changeImg();
            },1500);
        },
        //鼠标移入
        mouseOver:function(){
            window.clearInterval(timer);
        }
    };
    window.lunbo={init:lunbo.init};
})();

//用户传的obj数据
lunbo.init({
    isAuto:true,//是否自动播放
    speed:"slow",//自动播放的速度
    imgData:["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"]//显示的图片
});