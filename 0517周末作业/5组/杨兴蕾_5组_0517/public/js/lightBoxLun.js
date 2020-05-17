/**
 * Created by Administrator on 2020/5/15.
 */
(function () {

    function lunBo(obj){
        var index=0;
        // var current=3;//传
        // var imgArr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];//传的是变量
        $(obj.element).attr('src',obj.imgArr[obj.current-1]);//imglists传
//        上一页
        function prev() {
            if(index==0){
                index=obj.imgArr.length-1;
                $(obj.element).attr('src',obj.imgArr[index]);
            }else{
                index-=1;
                $(obj.element).attr('src',obj.imgArr[index]);
            }
        }
//        下一页
        function next() {
            if(index==obj.imgArr.length-1){
                index=0;
                $(obj.element).attr('src',obj.imgArr[index]);
            }else{
                index+=1;
                $(obj.element).attr('src',obj.imgArr[index]);
            }
        }
//        点击上一页
        $(obj.prevClick).click(function () {
            prev();
        });
//        点击下一页
        $(obj.nextClick).click(function () {
            next();
        });
    }

    window.Lun={lun:lunBo}
})();
