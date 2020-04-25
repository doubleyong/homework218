

// var jueseArr= [
//         {
//             "rolesID":1,"juese":"管理员","range":"学生管理，班级管理，教职工管理，权限管理，照片墙，考勤管理，公告管理"
//         },
//         {
//             "rolesID":2,"juese":"园长","range":"学生管理，班级管理，教职工管理，照片墙，考勤管理，公告管理"
//         },
//         {
//             "rolesID":3,"juese":"老师","range":"对本班学生管理，对自己的照片墙管理"
//         },
//         {
//             "rolesID":4,"juese":"学生","range":"对自己信息信息修改，查看公告，查看本年级照片"
//         },
// ]

var pageSize = 4;//每一页显示的数目
var page;
pages()
function pages(){
    $("#pageStyle").html("");

        page=  Math.ceil(jueseArr.length/pageSize);


    for (var i=0;i< page;i++){
        $("#pageStyle").append(`
         <span class="pages">${i+1}<span>
        `)
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
                    <td>${jueseArr[i].rolesID}</td>
                    <td>${jueseArr[i].juese}</td>
                    <td>${jueseArr[i].range} </td>
                    <td>
                        <button class="updata layui-btn  layui-btn-warm  layui-btn-sm">修改</button>
                        <button class="del layui-btn layui-btn-danger  layui-btn-sm">删除</button>
                    </td>
                </tr>`
        // $("#tbody").append(` <tr>
        //             <td>${jueseArr[i].rolesID}</td>
        //             <td>${jueseArr[i].juese}</td>
        //             <td>${jueseArr[i].range} </td>
        //             <td>
        //                 <button class="updata">修改</button>
        //                 <button class="del">删除</button>
        //             </td>
        //         </tr>`)
    }
}

//修改
$("#tbody").on("click",".updata",function () {
        $("#neirong div:nth-of-type(2)").css("display","block");
        $("#neirong div:nth-of-type(2) h1").text("修改信息")
        // $(".rolesID").val(jueseArr[length-1].ID+1);
        var text_1 = $(this.parentNode.parentNode).children().eq(1).text();//当前值
        var text_2 = $(this.parentNode.parentNode).children().eq(2).text();//当前值
        $(".roles").val(text_1);
        $("textarea").val(text_2);
        $(".roles").attr( "disabled","disabled");

});
// 保存

$("#neirong div:nth-of-type(2) form p button:nth-of-type(2)").click(function () {
    if(typeof($(".roles").attr("disabled"))!="undefined"){
        for (var i=0;i<jueseArr.length;i++){
            if ( $(".roles").val() == jueseArr[i].juese){
                jueseArr[i].range = $("textarea").val();
                break;
            }
        }
    }else {
         if( $(".roles").val()==""||$("textarea").val()==""){
          layer.confirm("字段为空，不能提交");
             layer.close(index);
        }else {
             for (var i=0;i<jueseArr.length;i++){
                 if ( $(".roles").val() == jueseArr[i].juese){
                     layer.confirm("角色已存在");
                     layer.close(index);
                     $("#neirong div:nth-of-type(2)").css("display","none");
                     return ;
                 }
             }
             jueseArr.push({"rolesID": jueseArr[jueseArr.length-1].rolesID+1,"juese":$(".roles").val(),"range":$("textarea").val()})
         }
    }
    $("#neirong div:nth-of-type(2)").css("display","none");
    $("#tbody").children().remove()
    dudata()

})
//添加角色
$(".add").click(function () {
    $(".roles").val("角色 ")
    $("form textarea").val("权限 ")
    $(".roles").removeAttr( "disabled");
    $("#neirong div:nth-of-type(2)").css("display","block");

})
$(".roles").focus(function () {
    $(".roles").val("")
    $("form textarea").val("")
})

//删除
$("#tbody").on("click",".del",function (event) {
    var e = event||window.event;
    e.stopPropagation();
    layer.confirm('确定删除此用户吗？', function(index){
        var text_1 = $(this.parentNode.parentNode).children().eq(1).text();//当前值
        for(var i=0;i<jueseArr.length;i++){
            if (text_1==jueseArr[i].userName){
                userArr.splice(i,1);
            }
        }
        $(this.parentNode.parentNode).remove();
        layer.close(index);
    })
})
// 取消
$("#neirong div:nth-of-type(2) form p button:nth-of-type(1)").click(function () {
    $("#neirong div:nth-of-type(2)").css("display","none");
})





