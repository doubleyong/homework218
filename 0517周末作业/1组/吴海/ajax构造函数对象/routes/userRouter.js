/**
 * Created by coco on 2020/4/27.
 */
const express=require("express");//引用express模块
const db=require("./DBCmysql");//引用数据库
const router=express.Router();
router.post("/test.php",function (request,respouse) {
    var a = request.body.a;
    var b = request.body.b;
    console.log(a);
    console.log(b);
    respouse.send(a);
    // let sql="";
    // db.query(sql,[],function (err,data) {
    //
    // })
});
// router.post("/",function (request,respouse) {
    // let sql="";
    // db.query(sql,[],function (err,data) {
    //
    // })
// });
module.exports=router;//公开端口