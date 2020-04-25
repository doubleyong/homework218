/**
 * Created by doubleyong on 2020/4/16.
 */
var userYuan = [
];
var user;
var pageSize = 5; //每页显示的条数
var currentPage = 1 ; //当前显示的页面;
var operid = -1;
$(function(){
    ajaxGetData();
    // pageEvent();
    // pageBar();
    // addEvent();
    // addSearchEvent();
    // addDelEvent();
});
function addSearchEvent(){
    $("#btnSearch").click(function(){
            var cardSearch = $("#txtCardSearch").val();
            user = userYuan.filter(function(item){
                return item.cardId.indexOf(cardSearch)>-1;
            });
            pageBar();
            dispalyData();
            pageBar(); //生成页码
        }
    )
}
function ajaxGetData() {
    //1创建对象
    var xmlHttp;
    if (window.XMLHttpRequest){
        xmlHttp = new  XMLHttpRequest();
    }else if (window.ActiveXObject){
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //2设置请求

    xmlHttp.open('get','userlist.do');
    //3接受响应数据
    xmlHttp.onreadystatechange = function () {
        console.log(xmlHttp.status);//http请求状态
        console.log(xmlHttp.readyState);
        if (xmlHttp.status == 200 && xmlHttp.readyState == 4){
            userYuan = JSON.parse(xmlHttp.responseText);
            user = [...userYuan];
            dispalyData(); //显示数据
            // pageBar();
        }
    };
    //4发起请求
    xmlHttp.send(null);
}

function addEvent(){
    $("#btnAddForm").click(function(){
        operid= -1;
        $("#addUser").modal('show');
    });
    $("#btnAdd").click(function(){
        var id=$("#inputID").val();
        var card=$("#inputCard").val();
        var pwd=$("#inputPassword3").val();
        var money=$("#inputMoney").val();
        var obj = {id: id, cardId:card, pwd: pwd, money: money};
        userYuan.push(obj);
        if (operid=-1){
            user.push(obj);
        }else{
            user.splice(operid,1,obj);
        }
        dispalyData();
        pageBar();
        alert("添加成功");
        $("#inputID").val("");
        $("#inputCard").val("");
        $("#inputPassword3").val("");
        $("#inputMoney").val("");
        $('#myAddModal').modal('hide')
    })
}
//给页码添加 事件
function pageEvent(){
    $("#divPage").on("click","button",function(){
        currentPage = $(this).text();
        $("#divPage button").removeClass("btn-primary");
        $(this).addClass("btn-primary");
        dispalyData();
    })
}
function addDelEvent(){
    $("#tbStudent").on('click','.del',delStudent)
}
function delStudent(){
    if(confirm("确定要删除嘛")){
        var id = $(this).attr("data-id");
        for(var i=0;i<user.length;i++){
            if(user[i].id == id){
                user.splice(i,1);
                pageBar(); //生成页码
                dispalyData(); //显示数据
                alert("删除成功");
                break;
            }
        }
        for(var i=0;i<userYuan.length;i++){
            if(userYuan[i].id == id){
                userYuan.splice(i,1);
                break;
            }
        }
    }
}
function dispalyData(){
    var start = (currentPage-1)*pageSize;
    var end = start + pageSize;
    $("#tbStudent").html("");
    for(var i=start;i<end && i<user.length;i++){
         $("#tbStudent").append(`<tr><td>${user[i].id}</td><td>${user[i].username}</td><td>${user[i].paw}
          </td><td>${user[i].Age}</td><td><button class='btn btn-primary'>修改</button>
          <button class="btn btn-danger del" data-id='${user[i].id}'>删除</button></td></tr>`)
    }
}
/* 全部选中*//* 10.全部取消*/
$("#checkAll").click(function() {
    if (this.checked) {
        $("[name=check]:checkbox").prop("checked", true);
    }else {
        $("[name=check]:checkbox").prop("checked", false);
    }
});
/* 批量删除*/
$('#plDel').click(function () {
    if (confirm('确定全部删除吗')) {
        var isChe = $(':CheckBox:checked');
        isChe.each(function () {
            $(this).parent().parent().remove();
        })
    }
});
/**
 * pageSize每页显示的条数
 * currentPage当前显示的页面
 * totalCount当前总条数
 * totalPage当前总页
 */
function pageBar(){
    var totalCount = user.length;
    var totalPage = Math.ceil(totalCount / pageSize);
    currentPage =currentPage>totalPage?totalPage:currentPage;
    $("#divPage").html("");
    for(var i=1;i<=totalPage;i++){
        if(i==currentPage){
            $("#divPage").append(`<button class="btn btn-primary ">${i}</button>`);
        }else{
            $("#divPage").append(`<button class="btn btn-default">${i}</button>`);
        }
    }
}