/**
 * Created by 98088 on 2020/4/24.
 */
var totalCount;//总数量
var totalPage;//总页数
var currentPage=1;//默认当前页为1
var pageSize=4;//每页显示数量
$(function () {
    getDateFn();
    pageBar();
    delEvent();
    addEvent();
    searchEvent();
    pageBtnEvent()

})

//分页,页码显示
function pageBar() {
    var searchName=$("#txtSearchNmae").val();
    var sex =$("#selSex").val();
    //获取总数量
    ajax("post","totalCount.do",true,function (data) {
        totalCount = JSON.parse(data)[0].num;
        totalPage = Math.ceil(totalCount/pageSize);

        $("#page").html("");
        for (var i=1; i<=totalPage;i++){

            $("#page").append(`<button>${i}</button>`)
        }

    },"user="+searchName+"&sex="+sex)
}

//分页按钮加事件
function pageBtnEvent() {
    $("#page").on("click","button",function () {
        currentPage =Number( $(this).text());
        getDateFn();
        pageBar();
    })

}

//删除方法
function delEvent() {
    $("#tbUser").on("click",".del",function () {
        var id = $(this).attr("data-id");
        console.log(id);
        ajax("get","del.do",true,function (data) {
            alert(data);
            getDateFn()
        },"uid="+id);
    })
}


function getDateFn() {
    var searchName=$("#txtSearchNmae").val();
    var sex =$("#Selsex").val();
    ajax("post","search.do",true,function (data) {
        displayData(JSON.parse(data))
    },"user="+searchName+"&sex="+sex);

}

//添加
function addEvent() {
    $("#benAdd").click(function () {
        console.log($("#addForm").serialize())
        ajax("post","add.do",true,function (data) {
            console.log(data);
            getDateFn();
        },$("#addForm").serialize())
    })
}

//搜索
function searchEvent() {
    $("#btnSearch").click(function () {
        currentPage=1
        getDateFn();
        pageBar();
    })

}

//读取数据
function displayData(url) {
    $("#tbUser").html("")
    for (var i=0;i<url.length;i++){
        $("#tbUser").append(`<tr>
                                    <td>${url[i].id}</td>
                                    <td>${url[i].usertxt}</td>
                                    <td>${url[i].pwd}</td>
                                    <td>${url[i].sex}</td>
                      
                                    <td><button type="button" class="del" data-id ="${url[i].id}">删除</button></td>
                                </tr>`)


    }
}
