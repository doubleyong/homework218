
var currentImage = 1;   //从1开始
var imageCount = 6;     //图片总数
window.onload = function () {
    $("figure").each(function () {
        $(this).click(function () {
            $("#motai").show();
            var str = $(this).children('img').attr("src");
            console.log(str);
            var cha = $(this).children('img').attr("src").charAt(4);
            console.log(cha);
            // $(".lunbo").text("");
            $(".lunbo img").attr('src', str);
            currentImage = cha;
        });

    });
    function handChangeImage() {
        $(".lunbo img").attr('src', "img/" + currentImage + ".jpg");
    }
    $(".close").click(function () {  //关闭按钮 
        $("#motai").hide();
    })
    $(".toPre").click(function () {
        console.log("shang")
        shang()
    })
    $(".toNext").click(function () {
        console.log("xia")
        xia()
    })
    function shang() {
        if (currentImage > 1) {
            currentImage--;
        } else if (currentImage = 1) {
            currentImage = imageCount;
        }
        handChangeImage();
    }
    function xia() {
        if (currentImage < imageCount) {
            currentImage++;
        } else if (currentImage = imageCount) {
            currentImage = 1;
        }
        handChangeImage();
    }

    function selfChangeImage() {
        if (currentImage < imageCount) {
            currentImage++;
        } else if (currentImage = imageCount) {
            currentImage = 1;
        }

        $(".lunbo img").attr('src', "img/" + currentImage + ".jpg");
       
    }
setInterval(selfChangeImage, 2000)
};