(function () {


    function getSrc(arr) {
        var srcArr=[]
        for (var i=0;i<arr.length;i++){
            srcArr.push(arr[i].getAttribute("src"))
        }
        return srcArr;
    }

    function showBigImg(index,arr) {
        var srcArr = getSrc(arr)
        bigImg.setAttribute("src",srcArr[index])
        zhe.style.display = "block";

    }

    function next(index,arr){
        var srcArr = getSrc(arr);
        bigImg.setAttribute("src",srcArr[index])

    }
    function pre(index,arr){
        var srcArr = getSrc(arr);
        bigImg.setAttribute("src",srcArr[index])

    }

    function close(){
        zhe.style.display = "none";
    }
    window.light = {showBigImg:showBigImg,next:next,pre:pre,getsrc:getSrc,close:close}

})()