var userYuan = [

];

var user;
var pageSize = 5; //每页显示的条数
var currentPage = 1 ; //当前显示的页面;



$(function(){
    ajaxGetData();
    pageEvent();
    addEvent();
    addSearchEvent();

    addDelEvent(); //添加删除事件
});

// 使用ajax调用数据
function ajaxGetData(){
    // 1.创建对象
    var xmlHttp;
    if(window.XMLHttpRequest){//dom
        xmlHttp = new XMLHttpRequest();
    }else if(window.ActiveXObject){//ie
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 2.设置请求
    // open方法，三个参数，1.提交方式，2.请求url地址，3.同步与异步 true异步（默认），false同步
    xmlHttp.open("get","studentlist.do");
    // 3.接收响应回来的数据（以事件的形式）
    // 当状态有改变的时候调用
    //清除缓存
    xmlHttp.setRequestHeader("If-Modified-Since","0");
    xmlHttp.onreadystatechange = function () {
        console.log(xmlHttp.status);//http请求状态
        console.log(xmlHttp.readyState);//ajax的状态
        if (xmlHttp.status==200&&xmlHttp.readyState==4){
            // readyState:
            // 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
            // 0: 请求未初始化
            // 1: 服务器连接已建立
            // 2: 请求已接收
            // 3: 请求处理中
            // 4: 请求已完成，且响应已就绪
            // status:
            // 200: "OK"
            // 404: 未找到页面
            userYuan = JSON.parse(xmlHttp.responseText);
            user = [...userYuan];  //解构形式
            //不能确保要数据的时候已经解析，是异步
            dispalyData(); //显示数据
            pageBar(); //生成页码
            // ajax异步的特性不会等user=[...userYuan]执行
            // console.log(typeof xmlHttp.responseText);
            console.log(typeof userYuan);
            console.log(xmlHttp.responseText);
        }
    }
    // 4.发起请求
    // XMLHttpRequest.setRequestHeader("If-Modified-Since","0");

    xmlHttp.send(null);
}


function addSearchEvent(){
    $("#btnSearch").click(function(){
            var cardSearch = $("#txtCardSearch").val();
            user = userYuan.filter(function(item){
                return item.cardId.indexOf(cardSearch)>-1;
            });
            pageBar();
            dispalyData();
        }
    )
}
function addEvent(){
    $("#btnAdd").click(function(){
        var id=$("#inputID").val();
        var nickname=$("#inputNickname").val();
        var username=$("#inputUsername").val();
        var pwd=$("#inputPassword").val();
        var sex=$("#inputSex").val();
        var age=$("#inputAge").val();
        var address=$("#inputAddress").val();
        var obj = {id: id, nickname: nickname, username: username,
           pwd: pwd, sex: sex, age: age, address: address};
        userYuan.push(obj);
        user.push(obj);
        pageBar();
        dispalyData();
        alert("添加成功");
        $("#inputID").val("");
        $("#inputNickname").val("");
        $("#inputUsername").val("");
        $("#inputPassword").val("");
        $("#inputSex").val("");
        $("#inputAge").val("");
        $("#inputAddress").val("");
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
    $("#tbStudent").on('click','.del',delStudent);
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
        $("#tbStudent").append(`<tr><td>${user[i].id}</td><td>${user[i].nickname}</td>
        <td>${user[i].username}</td><td>${user[i].pwd}</td>
        <td>${user[i].sex}</td><td>${user[i].age}</td><td>${user[i].address}</td>
        <td><button class='btn btn-primary'>修改</button>
        <button class="btn btn-danger del" data-id='${user[i].id}'>删除</button></td></tr>`)
    }
    // for(var i=start;i<end && i<user.length;i++){
    //      $("#tbStudent").append(`<tr><td>${user[i].id}</td><td>${user[i].cardId}</td><td>${user[i].pwd}
    //       </td><td>${user[i].money}</td><td><button class='btn btn-primary'>修改</button>
    //       <button class="btn btn-danger del" data-id='${user[i].id}'>删除</button></td></tr>`)
    // }
}
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