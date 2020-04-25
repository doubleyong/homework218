var cunzai;
$(".denglu").click(function () {
    var loginNameVal = $(".changhao").val()
    var pwd = $(".mima").val();
    var userObj=search(loginNameVal);
    if (cunzai){
        if(pwd ==userObj.userPwd ){
            layer.alert("登陆成功");
            window.location.href ="index.html"
        }else {
            layer.alert("密码错误")
        }
    }else {
        layer.alert("用户不存在")
    }

    localStorage.setItem("loginName",userObj.userName);

    function search(nameVal) {
        for(var i=0;i<userArr.length;i++){
            if(nameVal==userArr[i].userName){
                cunzai = true
                return userArr[i];
            }else {
                cunzai = false;
            }
        }
    }

})