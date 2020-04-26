var userYuan = [];
var pageSize = 5;//每页显示的条数
var currentPage = 1;//当前显示的页面

$(function () {
    ajaxGetData();
    addevent();
    pageEvent();
    addDelEvent();//添加删除事件
});

//使用ajax去调用数据
function ajaxGetData() {
    //1.创建对象
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.设置请求
    //open方法，三个参数，1.提交方式    2.请求URL地址   3.同步异步  默认true异步，false同步

    xmlHttp.open("get", "userlist.do");
    //3.接受响应回来的数据（以事件的形式）
    xmlHttp.onreadystatechange = function () {
        console.log(xmlHttp.status);//200
        console.log(xmlHttp.readyState);//4
        if (xmlHttp.status == 200 && xmlHttp.readyState == 4) {
            userYuan = JSON.parse(xmlHttp.responseText);
            user = [...userYuan];
            displayData();//显示数据
            pageBar();//生成页码
        }
    };
    //4.发起请求
    xmlHttp.send(null);
}

function addevent() {
    $("#btnAdd").click(function () {
        var id = $("#inputID").val();
        var card = $("#inputCard").val();
        var pwd = $("#inputPassword3").val();
        var money = $("#inputMoney").val();
        var obj = {id: id, cardId: card, pwd: pwd, money: money}
        user.push(obj);
        pageBar();
        displayData();
        alert("添加成功");
        $("#inputID").val("");
        $("#inputCard").val("");
        $("#inputPassword3").val("");
        $("#inputMoney").val("");
        $("#myAddModal").modal("hide")

    });
}

//给页码添加事件
function pageEvent() {
    $("#divPage").on("click", "button", function () {
        currentPage = $(this).text();
        $("#divPage button").removeClass("btn-primary");
        $(this).addClass("btn-primary btn-default");
        displayData();
    })
}

function addDelEvent() {
    $("#tbStudent").on("click", ".del", delStudent)
}

function delStudent() {
    if (confirm("确定要删除吗？")) {
        var id = $(this).attr("data-id");
        for (i = 0; i < user.length; i++) {
            if (id == user[i].id) {
                user.splice(i, 1);
                pageBar();//生成页码
                displayData();//显示数据
                alert("删除成功");
                break;
            }
        }
    }
}

function displayData() {
    var start = (currentPage - 1) * pageSize;
    var end = start + pageSize;
    $("#tbStudent").html("");
    for (var i = start; i < end && i < user.length; i++) {
        $("#tbStudent").append(`<tr><td>${user[i].id}</td><td>${user[i].username}</td><td>${user[i].pwd}</td>
        <td>${user[i].age}</td><td><button class="btn btn-primary">修改</button>
        <button data-id="${user[i].id}" class="btn btn-danger del">删除</button></td></tr>`)
    }
}

function pageBar() {
    var totalCount = user.length;
    var totalPage = Math.ceil(totalCount / pageSize);
    currentPage = currentPage > totalPage ? currentPage = totalPage : currentPage;
    $("#divPage").html("");
    for (var i = 1; i <= totalPage; i++) {
        if (i == currentPage) {
            $("#divPage").append(`<button class="btn btn-primary">${i}</button>`)
        } else {
            $("#divPage").append(`<button class="btn btn-default">${i}</button>`)
        }
    }
}


