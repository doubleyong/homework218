
var userYuan = [
];
var user;
var pageSize = 5; //每页显示的条数
var currentPage = 1 ; //默认第一页;
var totalpage;//总页数
var totalCount;//总条数
$(function(){
    getUserlist();
    pageBar();
    ajaxGetData();
    DelEvent();//添加删除
    resetEvent();//重置
    pageBar();//分页
    addEvent();//添加
    addSearchEvent();//添加搜索事件
    pageEvent();//分页事件
});
function pageEvent() {
    $('#divPage').on('click','button',function () {
        currentPage = Number($(this).text());
        getUserlist();
    })
}
function pageBar() {
    var searchName = $('#txtNameSearch').val();
    var sex = $('#selectSex').val();
    //总条数
    ajax('post','totalCount.do',true,function (data) {
        var json = JSON.parse(data);
        totalCount = json[0].num;
        totalpage = Math.ceil(totalCount/pageSize);
        $('#divPage').html('');
        for (var i = 1;i<=totalpage;i++){
            $('#divPage').append(`<button>${i}</button>`)
        }
    },'user='+searchName+'&sex='+sex)
}
//添加搜索事件
function addSearchEvent() {
    currentPage = 1;
    $('#btnSearch').click(function () {
       getUserlist();
        pageBar();
    })
}
//添加事件
function addEvent() {
    $('#btnAdd').click(function () {
        ajax('post','postAdd.do',true,function (data) {
            alert(data);
            getUserlist();
            $('#myModal').modal('hide');
        },$('#addForm').serialize());
        })
}
//重置
function resetEvent() {
    $('#reset').click(function () {
        $('#txtUser').val('');
        $('#txtPaw').val('');
        $('#txtAge').val('');
    })
}
//删除事件
function DelEvent() {
    $('#tbStudent').on('click','.del',function () {
        var id =$(this).attr('data-id');
        ajax('get','delete.do',true,function (data) {
            alert(data);
            getUserlist();
        },"sid="+id);
    })
}
//
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
            getUserlist();
        }
    };
    //4发起请求
    xmlHttp.send(null);
}
//
function getUserlist(){
    // ajax('get','userlist.do',true,function (result) {
    //     var json = JSON.parse(result);
    //     displayUSerData(json);
    // });

    var searchName = $('#txtNameSearch').val();
    var sex = $('#selectSex').val();
    ajax('post','search.do',true,function (data) {
        var json = JSON.parse(data);
        displayUSerData(json);
    },'user='+searchName+'&sex='+sex+'&curpage='+currentPage+'&pageSize='+pageSize);
}
//添加数组方法
function displayUSerData(arr) {
        $('#tbStudent').html('');
        arr.forEach(function (item,index) {
            $('#tbStudent').append(`
                <tr>
                    <td>${item.id}</td>
                    <td>${item.username}</td>
                    <td>${item.paw}</td>
                    <td>${item.Age}</td>
                    <td><button class="del btn btn-default" data-id="${item.id}">删除</button></td>
                </tr>
            `)
        })
    }
