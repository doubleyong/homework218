var classTypeArr=["小班","中班","大班","学前班"];
var classNoOper="";//用于判断是添加还是修改，空表示添加，非空则是修改
var searchFirst=$("#searchFirst option:selected").val();//一级筛选
var searchSub1=$("#searchSub1 option:selected").val();//二级筛选1
var searchSub2=$("#searchSub2 option:selected").val();//二级筛选2
var operSearch="";//用于判断是搜索进行的操作还是原始数据进行的操作,空是原始，“1"是搜索
var page=1;//上一页页码，默认显示第一页
//模态框
//    bindData();
//    查看
function bindData(){
    $(".teaList")[0].innerHTML="";
    for(var i=0;i<6;i++){
        $(".teaList")[0].innerHTML+="<tr> <th>"+classArr[i].classId+"</th> <th>"+classArr[i].classNum+"</th> <th>"+classArr[i].classTypeName+"</th> " +
            "<th>"+classArr[i].className+"</th> <th>"+classArr[i].headeTeacher+"</th> <th>"+classArr[i].viceTeacher+"</th> <th>"+classArr[i].classTime+"</th> <th> " +
            "<button class='xiugai' onclick='updateClass("+classArr[i].classId+",this)' >修改</button> <button class='shanchu' onclick='delEach("+classArr[i].classId+",this)' >删除</button> <button class='shengji' onclick='shengClass("+classArr[i].classId+",this)'>升级</button> </th> </tr>"
    }
}
//    增加班级
function addData(){
//        先获取值
    var classId=$("#addId").val();//id
    var classTypeName=$("#addClassType option:selected").val();//类型
    var classNum=$("#addNum").val();//编号
    var className=$("#addClassName").text();//名称
    var headeTeacher=$("#addHeadTea").val();//班主任
    var viceTeacher=$("#addViceTea").val();//副班主任
    var classTime=$("#addclassTime").val();//创建时间
       // 根据班级编号判断是否存在
       if(classId==""){//id为空
           layer.confirm("id不能为空");
           layer.close(index);
       }else if(classNum==""){
           layer.confirm("班级名称不能为空");
           layer.close(index);
       }
    //判断是否存在班级
    if(classNoOper==""){//添加
        if(checkClaNo(classId)){
          layer.confirm("班级编号已被占用，请重写");
            layer.close(index);
            addData();
        }else{
            var obj= {
                "classId":classId,"classTypeName":classTypeName,"classNum":classNum,"className":className,"headeTeacher":headeTeacher,"viceTeacher":viceTeacher,"classTime":classTime
            };
            classArr.push(obj);
        }

    }else{//修改
        for(var i=0;i<classArr.length;i++){
            console.log("jjj");
            if(classArr[i].classId==classNoOper){//只修改班主任，和副班主任
                classArr[i].headeTeacher=headeTeacher;
                classArr[i].viceTeacher=viceTeacher;
//                    console.log(classArr[i]);
                break;
            }
        }
        $("#btnAddSubmit").on("click",function () {
            $("#addForm").removeClass("show");
            $("#addForm").addClass("hide");

        });//提交数据

    }
    if(operSearch==""){
        bindData();
    }else if(operSearch=="1"){
        searchClass();
    }
//        bindData();
    //添加完数据后清空
    $("#addId").val("");//id
    $("#addClassType option:selected").val("");//类型
    $("#addNum").val("");//编号
    $("#addClassName").val("");//名称
    $("#addHeadTea").val("");//班主任
    $("#addViceTea").val("");//副班主任
    $("#addclassTime").val("");//创建时间


}
//    检查班级是否存在
function checkClaNo(classId){
    for(var i=0;i<classArr.length;i++){
        if(classId==classArr[i].classId){
            return true;
        }
    }
    return false;
}
//添加
$("#add_btn_choose").on("click",function () {
    showForm();
    showModel();
});
$("#btnAddSubmit").on("click",function () {
    addData();
    //隐藏表单
    hideForm();
    hideModel();
//      console.log(2222)
});//提交数据
//    取消添加
$("#btn_cancel").on("click",function () {
    hideForm();
    hideModel();
});
//删除全部
function delAll() {
        layer.confirm('确定全部删除吗?', function(index){
            //do something
           $(".teaList") .html("");
            // classArr = [];
            // if(operSearch==""){
            //     bindData();
            //     layer.close(index);
            // }else if(operSearch=="1"){
            //     searchClass();
            //     layer.close(index);
            // }
            layer.close(index);
        });
}
//删除单个
function delEach(classId,obj){
    layer.confirm('确定删除吗?', function(index){
        //do something
        for(var i=0;i<classArr.length;i++){
            if(classId==classArr[i].classId){
                classArr.splice(i,1);
                break;
            }
        }
        if(operSearch==""){
            bindData();
        }else if(operSearch=="1"){
            searchClass();
        }
        layer.close(index);
    });
    $(obj).toggleClass("layui-btn");

}
//点击全部删除
$("#btnDelAll").on("click",function () {
    delAll();
});
//得到该班级的信息
function getClassInfo(classId){
    for(var i=0;i<classArr.length;i++){
        if(classArr[i].classId==classId){
            return classArr[i];
        }
    }
    return null;
}
//    显示表单
function showForm(){
    $("#addForm").removeClass("hide");
    $("#addForm").addClass("show");
}
//    隐藏表单
function hideForm(){
    $("#addForm").removeClass("show");
    $("#addForm").addClass("hide");
}
//显示模态框
function showModel() {
    $("#zheZhao").removeClass("hide");
    $("#zheZhao").addClass("show");
}
//    隐藏模态框
function hideModel() {
    $("#zheZhao").removeClass("show");
    $("#zheZhao").addClass("hide");
}
//修改
function updateClass(classId,obj) {
    //显示表单
    showForm();
    showModel();
    var classObj=getClassInfo(classId);
//        将信息显示在表单上
    if(classObj){
        classNoOper=classObj.classId;
        $("#addId").val(classObj.classId);//id
        $("#addClassType option:selected").val(classObj.classTypeName);//类型
        $("#addNum").val(classObj.classNum);//编号
        $("#addClassName").val(classObj.className);//名称
        $("#addHeadTea").val(classObj.headeTeacher);//班主任
        $("#addViceTea").val(classObj.viceTeacher);//副班主任
        $("#addclassTime").val(classObj.classTime);//创建时间
    }
    $(obj).toggleClass("layui-btn");
    $(obj).toggleClass("layui-btn-normal");
}
//    升班
function shengClass(classId,obj) {
    //    小班，中班，大班，一级一级的生，学前班毕业
    console.log("shenban");
    var classObj=getClassInfo(classId);
    layer.confirm('确定升级吗?', function(index){
        if(classObj.classTypeName=="学前班"){
            layer.alert("已经是学前班了不能升班")
            // alert("");
        }else {//升班
            for(var i=0;i<classArr.length;i++){
                if(classObj.classTypeName==classArr[i].classTypeName){//找到当前年级
                    for(var j=0;j<classTypeArr.length;j++){//
                        if(classArr[i].classTypeName==classTypeArr[j]){
                            classArr[i].classTypeName=classTypeArr[j+1];
                            break;
                        }
                    }
                    break;
                }
            }
        }
        if(operSearch==""){
            bindData();
        }else if(operSearch=="1"){
//            shengClass(classId);
            searchClass(classId);
        }
        layer.close(index);
    });
    // if(confirm("确定升年级吗？")){
    //     if(classObj.classTypeName=="学前班"){
    //         alert("已经是学前班了不能升班");
    //     }else {//升班
    //         for(var i=0;i<classArr.length;i++){
    //             if(classObj.classTypeName==classArr[i].classTypeName){//找到当前年级
    //                 for(var j=0;j<classTypeArr.length;j++){//
    //                     if(classArr[i].classTypeName==classTypeArr[j]){
    //                         classArr[i].classTypeName=classTypeArr[j+1];
    //                         break;
    //                     }
    //                 }
    //                 break;
    //             }
    //         }
    //     }
    // }
//        bindData();
//     if(operSearch==""){
//         bindData();
//     }else if(operSearch=="1"){
// //            shengClass(classId);
//         searchClass(classId);
//     }
    $(obj).toggleClass("layui-btn");
    $(obj).toggleClass("layui-btn-normal");

}
//    显示下拉列表
function selectShow(type) {
    type.removeClass("hide");
    type.addClass("show");
}
function selectHide(type){
    type.removeClass("show");
    type.addClass("hide");
}
//    先找到班级类型，在在班级类型中查找班级编号
function searchClass() {
//        operSearch="1";
    var searchSub1=$("#searchSub1 option:selected").text();//一级筛选
    var searchSub2=$("#searchSub2 option:selected").text();//二级筛选
    var yijiSearch=[];
    //找到一级
    for(var i=0;i<classArr.length;i++){
        if(classArr[i].classTypeName==searchSub1){
            yijiSearch.push(classArr[i]);
        }
    }
//        console.log(yijiSearch);
//        console.log()
    $(".teaList")[0].innerHTML="";
    for(var j=0;j<yijiSearch.length;j++){
        if(yijiSearch[j].classNum==searchSub2){
            $(".teaList")[0].innerHTML+="<tr> <th>"+yijiSearch[j].classId+"</th> <th>"+yijiSearch[j].classNum+"</th> <th>"+yijiSearch[j].classTypeName+"</th> " +
                "<th>"+yijiSearch[j].className+"</th> <th>"+yijiSearch[j].headeTeacher+"</th> <th>"+yijiSearch[j].viceTeacher+"</th> <th>"+yijiSearch[j].classTime+"</th> <th> " +
                "<button  class='xiugai' onclick='updateClass("+yijiSearch[j].classId+")'>修改</button> <button class='shanchu' onclick='delEach("+yijiSearch[j].classId+")'>删除</button> <button class='shengji' onclick='shengClass("+yijiSearch[j].classId+")'>升级</button> </th> </tr>"
        }
    }
}
//搜索
$("#searchGo").on("click",function () {
    operSearch="1";
    searchClass();
});
//    翻页
function fanYe(page){
//        每页显示6条数据，点击下一页，变换，要知道当前是第range几页，下一页page+，
// 上一页，page-，点击数字获得当前页,记录当前页码和上一页页码
    $(".teaList")[0].innerHTML="";
    for(var i=(page-1)*6;i<page*6;i++){
        $(".teaList")[0].innerHTML+="<tr> <th>"+classArr[i].classId+"</th> <th>"+classArr[i].classNum+"</th> <th>"+classArr[i].classTypeName+"</th> " +
            "<th>"+classArr[i].className+"</th> <th>"+classArr[i].headeTeacher+"</th> <th>"+classArr[i].viceTeacher+"</th> <th>"+classArr[i].classTime+"</th> <th> " +
            "<button class='xiugai' onclick='updateClass("+classArr[i].classId+")'>修改</button> <button class='shanchu' onclick='delEach("+classArr[i].classId+")'>删除</button> <button class='shengji' onclick='shengClass("+classArr[i].classId+")'>升级</button> </th> </tr>"
    }
}
//    上一页
function prePage() {
    console.log(page);
    if(page==1){
        layer.confirm("已是第一页");
        layer.close(index);
    }else{
        page=page-1;
        console.log(page);
        fanYe(page);
    }


}
$("#prePage").on("click",prePage);
//    下一页
function nextPage() {
    if(page==4){
        layer.confirm("已是最后一页");
        layer.close(index);
    }else{
        page=page+1;
        fanYe(page);
    }
}
$("#nextPage").on("click",nextPage);
//默认显示第一页
fanYe(1);
$("#page1").on("click",function () {
    fanYe(1);
});
$("#page2").on("click",function () {
    fanYe(2);
});
$("#page3").on("click",function () {
    fanYe(3);
});
$("#page4").on("click",function () {
    fanYe(4);
});
//    点击翻页按钮改变颜色
function ChangeCss(obj){
    var arr = document.getElementsByTagName("a");
    for(var i=0;i<arr.length;i++){
        if(obj==arr[i]){       //当前页样式
            obj.style.backgroundColor="#009671";
            obj.style.color="#ffffff";

        }
        else
        {
            arr[i].style.color="";
            arr[i].style.backgroundColor="";
        }
    }
}
// 判断数组是否为空
$(document).ready(function(){
    var username=$("#loginUser").text();
    var jiaose;
    for(var i=0;i<userArr.length;i++){
        if(username==userArr[i].userName){
            jiaose=userArr[i].juese;

        }
    }
    if(jiaose=="学生"){
        $("#add_btn_choose").hide();
        $("#btnDelAll").hide();
        $(".xiugai").hide();
        $(".shanchu").hide();
        $(".shengji").hide();
    }
});