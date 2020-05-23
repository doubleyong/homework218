var isLightbox = (function () {
  function lightbox(figure,LunBo,Img,modelImg,isClose,isLeft,isRight,ImgArr) {
    for (var i = 0; i< Img.length; i++) {
      ImgArr.push(Img[i].getAttribute('src'));
      figure[i].index = i;
      figure[i].onmousedown = function () {
        LunBo.style.display = 'block';
        modelImg.setAttribute('src', ImgArr[this.index]);
        //左
        var imgindex = this.index;
        isLeft.onclick = function () {
          imgindex--;
          if (imgindxe == -1){
            imgindex = ImgArr.length - 1;
          }
          modelImg.setAttribute('src', ImgArr[imgindex]);
        };
        //又
        isRight.onclick = function () {
          imgindex++;
          if(imgindex == ImgArr.length){
            imgindex = 0;
          }
          modelImg.setAttribute('src', ImgArr[imgindex]);
        }
      }
    }
    isClose.onclick =function () {
      LunBo.style.display = 'none';
    };
  }
  return lightbox;
})();
window.onload = function () {
  var figure = document.getElementsByTagName('figure');
  var LunBo = document.getElementById('LunBo');
  var Img = document.querySelectorAll('figure img');
  var modelImg = document.getElementById('modelImg');
  var isClose = document.getElementById('isClose');
  var isLeft = document.getElementById('isLeft');
  var isRight = document.getElementById('isRight');
  var ImgArr = [];
  var getlightbox = isLightbox;
  getlightbox(figure,LunBo,Img,modelImg,isClose,isLeft,isRight,ImgArr);
};

