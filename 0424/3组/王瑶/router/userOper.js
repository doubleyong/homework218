/**
 * Created by Administrator on 2020/4/25.
 */
const myexpress=require("express");//引用express模块
const SQ=require("./sqlConfig");//引用数据库路由
const router=myexpress.Router();//使用路由拦截

//操作

//ajax显示数据操作,显示数据和查询都是用的这一个路由拦截
router.post("/search.do",function (request,response) {
    var searchName=request.body.staffName;
    var searchDepart=request.body.depart;
    var currPage=request.body.currPage;
    var pageSize=request.body.pageSize;
    let sql="select * from departMentTable where 1=1";
    var param=[];
    if(searchName.trim()!=""){
        sql+=" and staffName like ?";
        searchName="%"+searchName+"%";
        param.push(searchName);
    }
    if(searchDepart!=-1){
        sql+=" and departId=?";
        param.push(searchDepart);
    }
    sql+=" limit ?,?";
    let start=(currPage-1)*pageSize;
    param.push(start,Number(pageSize));
    SQ.query(sql,param,function (err,data) {
        console.log(err);
        console.log(data);
        response.send(data);
    })
});

//ajax总条数路由
router.post("/totalCount.do",function (request,response) {
    var searchName=request.body.staffName;
    var searchDepart=request.body.depart;
    let sql="select count(*) as num from departMentTable where 1=1";
    var param=[];
    if(searchName.trim()!=""){
        sql+=" and staffName like ?";
        searchName="%"+searchName+"%";
        param.push(searchName);
    }
    if(searchDepart!=-1){
        sql+=" and departId=?";
        param.push(searchDepart);
    }
    SQ.query(sql,param,function (err,data) {
        response.send(data);
    })
});

//ajax删除路由
router.post("/delete.do",function (request,response) {
    var id=request.body.id;
    let sql="delete from departMentTable where id=?";
    SQ.query(sql,id,function (err,data) {
        if(err){
            response.send("删除失败，请联系管理员！")
        }else{
            if(data.affectedRows>0){
                response.send("删除成功！");
            }else {
                response.send("删除失败！")
            }
        }
    })
});

//ajax添加路由
router.post("/add.do",function (request,response) {
    var inputName=request.body.inputName;
    var inputSex=request.body.inputSex;
    var inputNumber=request.body.inputNumber;
    var inputPost=request.body.inputPost;
    var inputDepartment=request.body.inputDepartment;
    let sql="insert into departMentTable(staffName,sex,phoneNumber,post,depart) values(?,?,?,?,?)";
    SQ.query(sql,[inputName,inputSex,inputNumber,inputPost,inputDepartment],function (err,data) {
        if(err){
            response.send("添加失败，请联系管理员！");
        }else {
            if(data.affectedRows>0){
                console.log(data);
                response.send("添加成功！");
            }else {
                response.send("添加失败！");
            }
        }
    })
});

module.exports=router;//暴露router模块接口,，如果不写这句，则不会被外界引用

