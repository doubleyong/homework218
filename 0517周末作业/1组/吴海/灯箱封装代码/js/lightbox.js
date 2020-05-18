(function () {
    let imgs = document.querySelectorAll(".imgsBOX img");
    let imgArr = [];
    let figures = document.querySelectorAll("figure");
    let exitBtn = document.getElementById('exitBtn');
    let hiddenDiv = document.getElementById('hiddenDiv');
    let currentImg = document.getElementById('currentImg');
    let preArrow = document.getElementById('preArrow');
    let nextArrow = document.getElementById('nextArrow');
    //遍历每张图片
    for (let i = 0; i < imgs.length; i++) {
        //获取每张图片的路径，并存入数组
        src = imgs[i].getAttribute('src');
        imgArr.push(src);
        //绑定点击事件
        figures[i].index = i;
        figures[i].onclick = function () {
            hiddenDiv.style.display = "block";
            currentImg.setAttribute("src", imgArr[this.index]);
            let imgNum = this.index
            //点击上一张
            preArrow.onclick = function () {
                imgNum--;
                if (imgNum < 0) {
                    imgNum = imgArr.length - 1;
                }
                currentImg.setAttribute("src", imgArr[imgNum]);
            }
            //点击下一张
            nextArrow.onclick = function () {
                imgNum++;
                if (imgNum > imgArr.length - 1) {
                    imgNum = 0;
                }
                currentImg.setAttribute("src", imgArr[imgNum]);
            }
        }
    }
    console.log(imgArr);
    //点击关闭遮罩
    exitBtn.onmousedown = function () {
        hiddenDiv.style.display = "none";
    }
})()