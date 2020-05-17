/**
 * Created by Administrator on 2020/5/16.
 */
(function () {
    // element,first1,second,closeBnt
    function showChange(obj1,objLun) {
        $(obj1.element).click(function () {
//        获得图片下标，图片下标为当前
            showLun();
            var currentIndex=$(this).attr("data-id");
            //    调用轮播
            Lun.lun(objLun)
        });
        function showLun() {
            $(obj1.first1).hide();
            $(obj1.second).show();
        }
        function closeLun() {
            $(obj1.second).hide();
            $(obj1.first).show();
        }
//    点击关闭按钮图片
        $(obj1.closeBtn).click(function () {
            closeLun();
        })
    }
    window.show={showChange:showChange}

})();