

// var userArr= [
//     {
//         "userID":1,"userNo":100,"userName":"admin","userPwd":"admin","userAge":"25","userSex":"男","juese":"管理员"
//     },
//     {
//         "userID":2,"userNo":101,"userName":"纪杞妃","userPwd":"123456","userAge":"25","userSex":"男","juese":"园长"
//     },
//     {
//         "userID":3,"userNo":102,"userName":"许泓鑫","userPwd":"123456","userAge":"25","userSex":"男","juese":"老师"
//     },
//     {
//         "userID":4,"userNo":103,"userName":"习宁玲","userPwd":"123456","userAge":"25","userSex":"女","juese":"老师"
//     },
//     {
//         "userID":5,"userNo":104,"userName":"羊若然","userPwd":"123456","userAge":"25","userSex":"男","juese":"学生"
//     },
//     {
//         "userID":6,"userNo":105,"userName":"羊多利","userPwd":"123456","userAge":"25","userSex":"女","juese":"学生",
//
//     }
//
//
//
// ]


// 页码显示
var pageSize = 4;//每一页显示的数目
pages()
function pages(){
    $("#pageStyle").html("");
    var page = Math.ceil(userArr.length/pageSize);
    for (var i=0;i<page;i++){
        $("#pageStyle").append(`<span class="pages">${i+1}<span>`)
    }
}
$("#pageStyle").on("click","span",function () {
    console.log($(this).text());
    $("#tbody").html("")
    dudata($(this).text()*4-4,$(this).text()*4)
})
dudata(0,4)
//读数据
function dudata(currentPage,pageLength){
    for(var i=currentPage;i<pageLength;i++){
        document.getElementById("tbody").innerHTML+=` <tr>
                    <td>${userArr[i].userID}</td>
                    <td>${userArr[i].userNo}</td>
                    <td>${userArr[i].userName}</td>
                    <td>${userArr[i].userPwd} </td>
                    <td>${userArr[i].userAge} </td>
                    <td>${userArr[i].userSex} </td>
                     <td>${userArr[i].juese} </td>
                    <td>
                        <button class="updata layui-btn layui-btn-warm">修改</button>
                        <button class="del layui-btn layui-btn-danger">删除</button>
                    </td>
                </tr>`

    }
}

$("#tbody").on("click",".del",function (event) {
    var e = event||window.event;
    e.stopPropagation();
    layer.confirm('你确定要删除么？', {
        time: 0 //不自动关闭
        ,btn: ['确定', '取消']
        ,yes: function(index){
            layer.close(index);
            var userNoVal = $(this.parentNode.parentNode).children().eq(1).text();//当前值
            for(var i=0;i<userArr.length;i++){
                if (userNoVal==userArr[i].userNo){
                    userArr.splice(i,1);
                }
            }
            $(this.parentNode.parentNode).remove();

        }
    });
})
// 删除
// $("#tbody").on("click",".del",function (event) {
//     var e = event||window.event;
//     e.stopPropagation();
//     if(window.confirm("确定删除此用户")){
//         var userNoVal = $(this.parentNode.parentNode).children().eq(1).text();//当前值
//         for(var i=0;i<userArr.length;i++){
//             if (userNoVal==userArr[i].userNo){
//                 userArr.splice(i,1);
//             }
//         }
//         $(this.parentNode.parentNode).remove();
//     }
//
// })
//修改
$("#tbody").on("click",".updata",function () {
    $("#neirong div:nth-of-type(2)").css("display","block");
    $("#neirong div:nth-of-type(2) h1").text("修改信息")
    // $(".rolesID").val(jueseArr[length-1].ID+1);
    $(".userNo").val( $(this.parentNode.parentNode).children().eq(1).text());
    $(".userName").val($(this.parentNode.parentNode).children().eq(2).text());
    $(".userPwd").val($(this.parentNode.parentNode).children().eq(3).text());
    $(".userSex").val($(this.parentNode.parentNode).children().eq(4).text());
    $(".userAge").val($(this.parentNode.parentNode).children().eq(5).text());
    $(".juese").val($(this.parentNode.parentNode).children().eq(6).text());
    $(".roles").attr( "disabled","disabled");

});
//添加用户
$(".add").click(function () {
    $(".userNo").val("用户编号");
    $(".userName").val("用户姓名");
    $(".userPwd").val("用户密码");
    $(".userSex").val("用户性别");
    $(".userAge").val("用户年龄");
    $(".juese").val("角色");
    $("#neirong div:nth-of-type(2)").css("display","block");

})
$(".userNo").focus(function () {
    $(".userNo").val("");
    $(".userName").val("");
    $(".userPwd").val("");
    $(".userSex").val("");
    $(".userAge").val("");
    $(".juese").val("");
})
// 保存

$("#neirong div:nth-of-type(2) form button:nth-of-type(2)").click(function () {
    // if($(".userNo").val()==""||){}
    for (var i=0;i<userArr.length;i++){
        if ($(".userNo").val()==userArr[i].userNo){
           layer.alert("用户已经存在")
            $("#neirong div:nth-of-type(2)").css("display","none");
            return ;
        }
    }

    userArr.push({"userID": userArr[userArr.length-1].userID+1,"userNo":$(".userNo").val(),"userName":$(".userName").val(),"userPwd":$(".userPwd").val(),"userAge":$(".userAge").val(),"userSex":$(".userSex").val(),"juese":$(".juese").val()})

    pages()
    $("#neirong div:nth-of-type(2)").css("display","none");
    $("#tbody").children().remove()
    dudata(0,4)

})


 // 取消
$("#neirong div:nth-of-type(2) form p button:nth-of-type(1)").click(function () {
    $("#neirong div:nth-of-type(2)").css("display","none");
})

//编号查询
$("#btn_1").click(function () {
    $("#pageStyle").hide()
    for (var i=0;i<userArr.length;i++){
        if($("#num").val()==userArr[i].userNo){
            $("#tbody").children().remove();
            document.getElementById("tbody").innerHTML+=` <tr>
                    <td>${userArr[i].userID}</td>
                    <td>${userArr[i].userNo}</td>
                    <td>${userArr[i].userName}</td>
                    <td>${userArr[i].userPwd} </td>
                    <td>${userArr[i].userAge} </td>
                    <td>${userArr[i].userSex} </td>
                     <td>${userArr[i].juese} </td>
                    <td>
                        <button class="updata clayui-btn layui-btn-warm">修改</button>
                        <button class="del layui-btn layui-btn-danger">删除</button>
                    </td>
                </tr>`

        }
    }
})

//姓名查询
$("#btn_2").click(function () {
    $("#pageStyle").hide()
    console.log(typeof $("#name").val())
    for (var i=0;i<userArr.length;i++){
        if($("#name").val()==userArr[i].userName){
            $("#tbody").children().remove();
            document.getElementById("tbody").innerHTML+=` <tr>
                    <td>${userArr[i].userID}</td>
                    <td>${userArr[i].userNo}</td>
                    <td>${userArr[i].userName}</td>
                    <td>${userArr[i].userPwd} </td>
                    <td>${userArr[i].userAge} </td>
                    <td>${userArr[i].userSex} </td>
                     <td>${userArr[i].juese} </td>
                    <td>
                        <button class="updata">修改</button>
                        <button class="del">删除</button>
                    </td>
                </tr>`

        }
    }
})
$(document).ready(function(){
    var username=$("#loginUser").text();
    var jiaose;
    for(var i=0;i<userArr.length;i++){
        if(username==userArr[i].userName){
            jiaose=userArr[i].juese;

        }
    }
    if(jiaose=="学生"){
        $("#neirong").hide();

    }
})






