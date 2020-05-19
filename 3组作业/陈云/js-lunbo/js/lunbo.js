/**
 * Created by nihao on 2020/5/18.
 */
(function () {
    var imgArr;
    var index =0;
    var time;
    var img = document.getElementById("img");
    var lunbo = {
       init:function (option) {
           imgArr = option.imgArr;
           time = option.time;
           lunbo.addDom();
           lunbo.setClick();
           lunbo.auto(time);


       },
       addDom:function () {
           $("#banner").append(`
           <div id="next">&gt;</div>
            <div id="prev">&lt;</div>
           `);
       },
       setClick:function () {
           $("#banner").on("click","#next",lunbo.addright);
           $("#banner").on("click","#prev",lunbo.addleft);
               
       },
       addright:function () {
        index++;
        if (index<imgArr.length){
            img.setAttribute("src",imgArr[index]);
        }else {
            index = 0;
            img.setAttribute("src",imgArr[index]);
        }
    },
       addleft:function () {
           index--;
           if (index>=0){
               img.setAttribute("src",imgArr[index]);
           }else {
               index = imgArr.length-1;
               img.setAttribute("src",imgArr[index]);
           }
       },
       auto:function (time) {
            setInterval(lunbo.addright,time)
        }

   };
   window.lun = {lunbo:lunbo.init};
})();

