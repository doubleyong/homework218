/**
 * Created by Administrator on 2020/3/27 0027.
 */
//学生数据
function $(id) {
    return document.getElementById(id);
}
var studentArr = [
    {"stuNo":1,"stuName":"张三","stuSex":"男","stuAge":20,"stuClass":"web218"},
    {"stuNo":2,"stuName":"张小三","stuSex":"女","stuAge":21,"stuClass":"web238"},
    {"stuNo":3,"stuName":"张大三","stuSex":"男","stuAge":19,"stuClass":"web228"},
    {"stuNo":4,"stuName":"李四","stuSex":"男","stuAge":22,"stuClass":"web212"},
    {"stuNo":5,"stuName":"李小四","stuSex":"女","stuAge":20,"stuClass":"web208"},
    {"stuNo":6,"stuName":"小李四","stuSex":"女","stuAge":27,"stuClass":"web205"},
    {"stuNo":7,"stuName":"大李四","stuSex":"男","stuAge":18,"stuClass":"web203"},
    {"stuNo":8,"stuName":"小张三","stuSex":"女","stuAge":25,"stuClass":"web201"},
    {"stuNo":9,"stuName":"大张三","stuSex":"男","stuAge":30,"stuClass":"web200"}
];
var stuNoopera = "";
/**
 *
 * 删除选中学生
 */
function delBatchStu() {
    var myCheckStu = document.getElementsByName("checkStu");
    // console.log(myCheckStu);
    if(confirm("是否删除选中学生")){
        for(var i=studentArr.length-1 ; i>=0; i--){
           if(myCheckStu[i].checked){
               studentArr.splice(i,1);
           }
        }
        displayStuData();
        alert("删除成功");
    }
}
/*
* 修改学生信息
* */
function upData(stuNo) {
    stuNoopera = stuNo;
    $("addStuNo").readOnly="readonly";
    var stuObj = getStudentByStuNo(stuNo);
    if (stuObj){
        addDivShow();
        $("addStuNo").value = stuObj.stuNo;
        $("addStuName").value = stuObj.stuName;
        $("addStuSexSelect").value = stuObj.stuSex;
        $("addStuAge").value = stuObj.stuAge;
        $("addStuClass").value = stuObj.stuClass;
    }else {
        alert("找不到此学生");
    }
}
function getStudentByStuNo(StuNo) {
    for (var i=0 ; i<studentArr.length; i++){
        if (studentArr[i].stuNo==StuNo){
            return studentArr[i];
        }
    }
    return false;
}

/**
 *
 * 判断学号是否存在
 */
function DoesItExist(stuNo) {
    for(var i=0 ; i<studentArr.length; i++){
        if(studentArr[i].stuNo==stuNo){
            return true;
        }
    }
    return false;
}
function onesagin() {
    $("addStuNo").valueOf().value = "";
    $("addStuName").valueOf().value = "";
    $("addStuSexSelect").valueOf().value = "男";
    $("addStuAge").valueOf().value = "";
    $("addStuClass").valueOf().value = "";
    $("addStuNo").readOnly="";
    stuNoopera = "";
}
