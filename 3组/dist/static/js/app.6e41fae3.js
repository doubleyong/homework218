(function(e){function t(t){for(var a,n,l=t[0],i=t[1],d=t[2],c=0,m=[];c<l.length;c++)n=l[c],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],a=!0,l=1;l<o.length;l++){var i=o[l];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=o[0]))}return e}var a={},r={app:0},s=[];function n(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=a,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=i;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var a=o("85ec"),r=o.n(a);r.a},1542:function(e,t,o){},2798:function(e,t,o){},"32d8":function(e,t,o){"use strict";var a=o("a86c"),r=o.n(a);r.a},3888:function(e,t,o){"use strict";var a=o("1542"),r=o.n(a);r.a},"4e50":function(e,t,o){"use strict";var a=o("2798"),r=o.n(a);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("d3b7"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=o("bc3a"),s=o.n(r),n=o("5c96"),l=o.n(n),i=(o("0fae"),o("9e2f"),o("e05f"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("el-container",[o("el-aside",{attrs:{width:"200px"}},[o("ces")],1),o("el-container",[o("el-header",[o("navs")],1),o("el-main",[e.isRouterAlive?o("router-view"):e._e()],1)],1)],1)],1)}),d=[],u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:{nav:!0}},[o("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[o("el-menu-item",{attrs:{index:"1"}},[e._v("首页")]),o("el-submenu",{attrs:{index:"2"}},[o("template",{slot:"title"},[e._v("我的工作台")]),o("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),o("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),o("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")]),o("el-submenu",{attrs:{index:"2-4"}},[o("template",{slot:"title"},[e._v("选项4")]),o("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),o("el-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),o("el-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2),o("el-menu-item",{attrs:{index:"3",disabled:""}},[e._v("消息中心")]),o("el-menu-item",{attrs:{index:"4"}},[e._v("订单管理")]),o("el-menu-item",{attrs:{index:"5"}},[o("router-link",{class:{login:!0},attrs:{to:{name:"login"}}},[e._v("登录")])],1)],1)],1)},c=[],m={data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}},p=m,g=(o("3888"),o("2877")),f=Object(g["a"])(p,u,c,!1,null,"1449b47f",null),b=f.exports,h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:{che:!0}},[o("el-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:e.isCollapse,callback:function(t){e.isCollapse=t},expression:"isCollapse"}},[o("el-radio-button",{attrs:{label:!1}},[e._v("展开")]),o("el-radio-button",{attrs:{label:!0}},[e._v("收起")])],1),o("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[o("router-link",{class:{router:!0},attrs:{to:{name:"charts"}}},[o("el-menu-item",{attrs:{index:"1"}},[o("i",{staticClass:"el-icon-s-home"}),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])])],1),o("el-menu-item",{attrs:{index:"2"}},[o("i",{staticClass:"el-icon-menu"}),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("会员列表")])]),o("el-submenu",{attrs:{index:"3"}},[o("template",{slot:"title"},[o("i",{staticClass:"el-icon-s-shop"}),o("span",[e._v("商品")])]),o("el-menu-item-group",[o("router-link",{class:{router:!0},attrs:{to:{name:"tables"}}},[o("el-menu-item",{attrs:{index:"3-1"}},[e._v("商品列表 ")])],1),o("router-link",{class:{router:!0},attrs:{to:{name:"addGoods"}}},[o("el-menu-item",{attrs:{index:"3-2"}},[e._v(" 添加商品 ")])],1),o("el-menu-item",{attrs:{index:"3-3"}},[e._v("商品分类")]),o("el-menu-item",{attrs:{index:"3-4"}},[e._v("商品类型")]),o("el-menu-item",{attrs:{index:"3-5"}},[e._v("商品管理")])],1)],2),o("el-submenu",{attrs:{index:"4"}},[o("template",{slot:"title"},[o("i",{staticClass:"el-icon-s-order"}),o("span",[e._v("订单")])]),o("el-menu-item-group",[o("el-menu-item",{attrs:{index:"3-1"}},[e._v("订单1")]),o("el-menu-item",{attrs:{index:"3-2"}},[e._v("订单1")]),o("el-menu-item",{attrs:{index:"3-3"}},[e._v("订单1")]),o("el-menu-item",{attrs:{index:"3-4"}},[e._v("订单1")]),o("el-menu-item",{attrs:{index:"3-5"}},[e._v("订单1")])],1)],2),o("el-menu-item",{attrs:{index:"5"}},[o("i",{staticClass:"el-icon-s-marketing"}),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("营销")])]),o("el-menu-item",{attrs:{index:"6"}},[o("i",{staticClass:"el-icon-place"}),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("权限")])])],1)],1)},w=[],v={name:"ce",data:function(){return{isCollapse:!1}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},x=v,F=(o("92d1"),Object(g["a"])(x,h,w,!1,null,"2376d347",null)),k=F.exports,y={name:"App",provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},methods:{reload:function(){var e=this;this.isRouterAlive=!1,this.$nextTick((function(){e.isRouterAlive=!0}))}},components:{navs:b,ces:k}},_=y,$=(o("034f"),Object(g["a"])(_,i,d,!1,null,null,null)),I=$.exports,S=o("8c4f"),C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-col",{attrs:{span:8,offset:6}},[o("el-input",{attrs:{placeholder:"请输入搜素的商品名",icon:"search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),o("el-table",{class:{table:!0},staticStyle:{width:"100%"},attrs:{data:e.goodsList.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize).filter((function(t){return!e.search||t.goodsName.toLowerCase().includes(e.search.toLowerCase())}))}},[o("el-table-column",{attrs:{label:"input",width:"180"}},[[o("el-checkbox"),o("span",{staticStyle:{"margin-left":"10px"}})]],2),o("el-table-column",{attrs:{prop:"id",label:"编号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.id))])]}}])}),o("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.goodsName))])]}}])}),o("el-table-column",{attrs:{prop:"goodsPrice",label:"商品价格",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.goodsPrice))])]}}])}),o("el-table-column",{attrs:{prop:"goodsDetail",label:"商品详情",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.goodsDetail))])]}}])}),o("el-table-column",{attrs:{label:"商品图片",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"margin-left":"10px"}},[o("img",{class:{img:!0},attrs:{src:e.row.goodsImgs,alt:""}})])]}}])}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return e.editgsForm(t.$index,t.row.id)}}},[e._v("编辑")]),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return e.handleDelete(t.row.id)}}},[e._v("删除")])]}}])})],1),o("el-pagination",{class:{page:!0},attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pageSize,layout:"total, sizes,prev, pager, next",total:e.pageData.total,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),o("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{ref:"editForm",attrs:{model:e.update}},[o("el-form-item",{attrs:{label:"品牌ID","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.update.editbrandId,callback:function(t){e.$set(e.update,"editbrandId",t)},expression:"update.editbrandId"}})],1),o("el-form-item",{attrs:{label:"分类ID","label-width":e.formLabelWidth}},[o("el-input",{model:{value:e.update.editcatId,callback:function(t){e.$set(e.update,"editcatId",t)},expression:"update.editcatId"}})],1),o("el-form-item",{attrs:{label:"商品详情","label-width":e.formLabelWidth}},[o("el-input",{model:{value:e.update.editgoodsDetail,callback:function(t){e.$set(e.update,"editgoodsDetail",t)},expression:"update.editgoodsDetail"}})],1),o("el-form-item",{attrs:{label:"商品图片","label-width":e.formLabelWidth}},[o("el-input",{model:{value:e.update.editgoodsImgs,callback:function(t){e.$set(e.update,"editgoodsImgs",t)},expression:"update.editgoodsImgs"}})],1),o("el-form-item",{attrs:{label:"商品名称","label-width":e.formLabelWidth}},[o("el-input",{model:{value:e.update.editgoodsName,callback:function(t){e.$set(e.update,"editgoodsName",t)},expression:"update.editgoodsName"}})],1),o("el-form-item",{attrs:{label:"商品价格","label-width":e.formLabelWidth}},[o("el-input",{model:{value:e.update.editgoodsPrice,callback:function(t){e.$set(e.update,"editgoodsPrice",t)},expression:"update.editgoodsPrice"}})],1),o("el-form-item",{attrs:{label:"商品积分","label-width":e.formLabelWidth}},[o("el-input",{model:{value:e.update.editgoodsScore,callback:function(t){e.$set(e.update,"editgoodsScore",t)},expression:"update.editgoodsScore"}})],1),o("el-form-item",{attrs:{label:"商品标题","label-width":e.formLabelWidth}},[o("el-input",{model:{value:e.update.editgoodsTitle,callback:function(t){e.$set(e.update,"editgoodsTitle",t)},expression:"update.editgoodsTitle"}})],1),o("el-form-item",{attrs:{label:"关键字","label-width":e.formLabelWidth}},[o("el-input",{model:{value:e.update.editkeywords,callback:function(t){e.$set(e.update,"editkeywords",t)},expression:"update.editkeywords"}})],1),o("el-form-item",{attrs:{label:"是否推荐","label-width":e.formLabelWidth}},[o("el-switch",{model:{value:e.update.editrecommend,callback:function(t){e.$set(e.update,"editrecommend",t)},expression:"update.editrecommend"}})],1),o("el-form-item",{attrs:{label:"是否下架","label-width":e.formLabelWidth}},[o("el-switch",{model:{value:e.update.editstatus,callback:function(t){e.$set(e.update,"editstatus",t)},expression:"update.editstatus"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleEdit("editForm")}}},[e._v("确 定")])],1)],1)],1)},P=[],T={inject:["reload"],name:"goodsList",data:function(){return{update:{},editbrandId:"",editcatId:"",editgoodsDetail:"",editgoodsImgs:"",editgoodsName:"",editgoodsPrice:"",editgoodsScore:"",editgoodsTitle:"",editkeywords:"",editrecommend:"",editstatus:"",id:"",dialogFormVisible:!1,formLabelWidth:"120px",total:"",isSelectedAll:!1,goodsList:[],pageData:[],pageSize:5,search:"",currentPage:1}},methods:{editgsForm:function(e,t){console.log(e,t),this.dialogFormVisible=!0,this.Id=t},handleEdit:function(e){var t=this;!0===this.update.editrecommend?this.update.editrecommend=1:this.update.editrecommend=0,!0===this.update.editstatus?this.update.editstatus=1:this.update.editstatus=0,this.$refs[e].validate((function(e){if(e){var o={id:t.Id,brandId:t.update.brandId,catId:t.update.editcatId,goodsDetail:t.update.editgoodsDetail,goodsImgs:t.update.editgoodsImgs,goodsName:t.update.editgoodsName,goodsPrice:t.update.editgoodsPrice,goodsScore:t.update.editgoodsScore,goodsTitle:t.update.editgoodsTitle,keywords:t.update.editkeywords,recommend:t.update.editrecommend,status:t.update.editstatus};t.$axios.post("/api/goods/edit",o,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),200===e.data.code?(t.$message.success("编辑成功"),t.reload()):t.$message.error("编辑失败"),t.dialogFormVisible=!1})).catch((function(e){console.log(e)}))}}))},handleDelete:function(e){var t=this;this.$axios.post("/api/goods/delete",{id:e},{headers:{"Content-Type":"application/json"}}).then((function(e){200===e.data.code&&(t.$message.success("删除成功"),t.reload())})).catch((function(e){console.log(e)}))},handleSizeChange:function(e){this.pageSize=e,console.log(this.pageSize)},handleCurrentChange:function(e){this.currentPage=e,console.log(this.currentPage)}},mounted:function(){var e=this;this.$axios.post("/api/goods/list",{brandId:"",catId:"",goodsName:"",status:""},{headers:{"Content-Type":"application/json"}}).then((function(t){200===t.data.code&&(e.goodsList=t.data.data.list,e.pageData=t.data.data,e.total=t.data.data.total),console.log(t.data.data)})).catch((function(e){console.log(e)}))}},D=T,j=(o("90d0"),Object(g["a"])(D,C,P,!1,null,"3555fc96",null)),L=j.exports,O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}})},N=[],z=o("313e"),A=o.n(z),E={name:"charts",data:function(){return{charts:"",opinionData:["3","2","4","4","5"]}},methods:{drawLine:function(e){this.charts=A.a.init(document.getElementById(e)),this.charts.setOption({tooltip:{trigger:"axis"},legend:{data:["近七日收益"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["1","2","3","4","5"]},yAxis:{type:"value"},series:[{name:"订单数量",type:"line",stack:"总量",data:this.opinionData}]})}},mounted:function(){this.$nextTick((function(){this.drawLine("main")}))}},W=E,q=Object(g["a"])(W,O,N,!1,null,"ec2aef2c",null),R=q.exports,V=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"品牌id",prop:"newbrandId"}},[o("el-input",{model:{value:e.ruleForm.newbrandId,callback:function(t){e.$set(e.ruleForm,"newbrandId",t)},expression:"ruleForm.newbrandId"}})],1),o("el-form-item",{attrs:{label:"分类id",prop:"newcatId"}},[o("el-input",{model:{value:e.ruleForm.newcatId,callback:function(t){e.$set(e.ruleForm,"newcatId",t)},expression:"ruleForm.newcatId"}})],1),o("el-form-item",{attrs:{label:"商品详情",prop:"newgoodsDetail"}},[o("el-input",{model:{value:e.ruleForm.newgoodsDetail,callback:function(t){e.$set(e.ruleForm,"newgoodsDetail",t)},expression:"ruleForm.newgoodsDetail"}})],1),o("el-upload",{staticClass:"avatar-uploader",attrs:{action:"newgoodsImgs","show-file-list":!1,accept:"image/*","on-success":e.handleAvatarSuccess,"on-error":e.handleError,"on-change":e.handleChange,"before-upload":e.beforeAvatarUpload}},[e.ruleForm.newgoodsImgs?o("img",{staticClass:"avatar",attrs:{src:e.ruleForm.newgoodsImgs}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"},[e._v("上传图片")])]),o("el-form-item",{attrs:{label:"商品名称",prop:"newgoodsName"}},[o("el-input",{model:{value:e.ruleForm.newgoodsName,callback:function(t){e.$set(e.ruleForm,"newgoodsName",t)},expression:"ruleForm.newgoodsName"}})],1),o("el-form-item",{attrs:{label:"商品价格",prop:"newgoodsPrice"}},[o("el-input",{model:{value:e.ruleForm.newgoodsPrice,callback:function(t){e.$set(e.ruleForm,"newgoodsPrice",t)},expression:"ruleForm.newgoodsPrice"}})],1),o("el-form-item",{attrs:{label:"商品积分",prop:"newgoodsScore"}},[o("el-input",{model:{value:e.ruleForm.newgoodsScore,callback:function(t){e.$set(e.ruleForm,"newgoodsScore",t)},expression:"ruleForm.newgoodsScore"}})],1),o("el-form-item",{attrs:{label:"商品标题",prop:"newgoodsTitle"}},[o("el-input",{model:{value:e.ruleForm.newgoodsTitle,callback:function(t){e.$set(e.ruleForm,"newgoodsTitle",t)},expression:"ruleForm.newgoodsTitle"}})],1),o("el-form-item",{attrs:{label:"关键字",prop:"newkeywords"}},[o("el-input",{model:{value:e.ruleForm.newkeywords,callback:function(t){e.$set(e.ruleForm,"newkeywords",t)},expression:"ruleForm.newkeywords"}})],1),o("el-form-item",{attrs:{label:"是否推荐",prop:"newrecommend"}},[o("el-switch",{model:{value:e.ruleForm.newrecommend,callback:function(t){e.$set(e.ruleForm,"newrecommend",t)},expression:"ruleForm.newrecommend"}})],1),o("el-form-item",{attrs:{label:"状态",prop:"newstatus"}},[o("el-switch",{model:{value:e.ruleForm.newstatus,callback:function(t){e.$set(e.ruleForm,"newstatus",t)},expression:"ruleForm.newstatus"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.add("ruleForm")}}},[e._v("立即添加")]),o("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},M=[],U=(o("caad"),o("2532"),o("3ca3"),o("ddb0"),o("2b3d"),{inject:["reload"],name:"addGoods",data:function(){return{list:[],ruleForm:{newgoodsImgs:"",newbrandId:"",newcatId:"",newgoodsDetail:"",newgoodsName:"",newgoodsPrice:"",newgoodsScore:"",newgoodsTitle:"",newkeywords:"",newrecommend:!1,newstatus:!0},rules:{newbrandId:[{required:!0,message:"请输入品牌id",trigger:"blur"},{min:1,max:30,message:"长度在 3 到 5 个字符",trigger:"blur"}],newcatId:[{required:!0,message:"请输入分类id",trigger:"blur"},{min:1,max:30,message:"长度在 3 到 5 个字符",trigger:"blur"}],newgoodsDetail:[{required:!0,message:"请输入详情",trigger:"blur"},{min:1,max:50,message:"长度在 10 到 50 个字符",trigger:"blur"}],newgoodsName:[{required:!0,message:"请输入商品名称",trigger:"blur"},{min:1,max:15,message:"长度在 3 到 5 个字符",trigger:"blur"}],newgoodsPrice:[{required:!0,message:"请输入商品价格",trigger:"blur"},{min:1,max:6,message:"长度在 3 到 5 个字符",trigger:"blur"}],newgoodsScore:[{required:!0,message:"请输入商品积分",trigger:"blur"},{min:1,max:99999,message:"长度在 3 到 5 个字符",trigger:"blur"}],newgoodsTitle:[{required:!0,message:"请输入标题",trigger:"blur"},{min:1,max:30,message:"长度在 3 到 5 个字符",trigger:"blur"}],newkeywords:[{required:!0,message:"请输入关键字",trigger:"blur"},{min:1,max:20,message:"长度在 3 到 5 个字符",trigger:"blur"}]}}},methods:{handleAvatarSuccess:function(e,t){this.newgoodsImgs=URL.createObjectURL(t.raw),this.$message("上传成功")},beforeAvatarUpload:function(e){var t=e.type.includes("image"),o=e.size/10240/10240<2;return t?o?t&&o:(this.$message.error("上传头像图片大小不能超过 10MB!"),!1):(this.$message.error("上传头像只能是图片"),!1)},handleError:function(){this.$message.error("上传失败,请重新上传图片!")},handleChange:function(e,t){var o=this;if(e.raw){var a=new FileReader;a.onload=function(e){o.contentHtml=e.target.result},a.readAsText(e.raw,"gb2312")}console.log(e,t)},resetForm:function(e){this.$refs[e].resetFields()},add:function(e){var t=this;!0===this.ruleForm.newrecommend?this.ruleForm.newrecommend=1:this.ruleForm.newrecommend=0,!0===this.ruleForm.newstatus?this.ruleForm.newstatus=1:this.ruleForm.newstatus=0,this.$refs[e].validate((function(e){if(!e)return!1;t.$axios.post("/api/goods/add",{brandId:t.newbrandId,catId:t.newcatId,goodsDetail:t.newgoodsDetail,goodsImgs:t.newgoodsImgs,goodsName:t.newgoodsName,goodsPrice:t.newgoodsPrice,goodsScore:t.newgoodsScore,goodsTitle:t.newgoodsTitle,keywords:t.newkeywords,recommend:t.newrecommend,status:t.newstatus},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),t.newgoodsImgs=e.data.goodsImgs,200===e.code?(t.$message.success("新增成功"),t.reload()):t.$message.error("新增失败")})).catch((function(e){console.log(e)}))}))}}}),G=U,B=(o("4e50"),Object(g["a"])(G,V,M,!1,null,"cf4c5fc8",null)),J=B.exports,H=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:{login:!0}},[o("h2",[e._v("后台管理系统")]),o("form",[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"用户名",prop:"username"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入内容",maxlength:"15","show-word-limit":""},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),o("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[o("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"info"}},[e._v("注册")]),o("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)])},K=[],Q={name:"login",data:function(){var e=this,t=function(t,o,a){""===o?a(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),a())},o=function(t,o,a){""===o?a(new Error("请再次输入密码")):o!==e.ruleForm.password?a(new Error("两次输入密码不一致!")):a()};return{ruleForm:{password:"",checkPass:"",username:""},rules:{password:[{validator:t,trigger:"blur"}],checkPass:[{validator:o,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.$axios.post("/api/admin/login",{id:"",name:t.username,password:t.password,lastLoginTime:"",createTime:"",status:1,isDelete:0},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),200===e.data.code?(t.$router.push("/"),t.$notify({title:"提示",message:"用户登录成功",duration:3e3})):t.$notify({title:"提示",message:"用户名或密码错误",duration:3e3})})).catch((function(e){t.$notify({title:"提示",message:"用户访问错误",duration:3e3}),console.log(e)}))}))},resetForm:function(e){this.$refs[e].resetFields()}}},X=Q,Y=(o("32d8"),Object(g["a"])(X,H,K,!1,null,"862f4714",null)),Z=Y.exports;a["default"].use(S["a"]);var ee=[{path:"tables",name:"tables",component:L},{path:"login",name:"login",component:Z},{path:"/",name:"charts",component:R,meta:{requireAuth:!0}},{path:"add",name:"addGoods",component:J}],te=new S["a"]({mode:"history",base:"",linkActiveClass:"active",routes:ee}),oe=te;a["default"].directive("upper-word",(function(e,t){e.textContent=t.value.toUpperCase()})),a["default"].prototype.$axios=s.a,a["default"].config.productionTip=!1,a["default"].use(l.a),s.a.interceptors.request.use((function(e){return console.log("发起请求"),e}),(function(e){return Promise.reject(e)})),s.a.interceptors.response.use((function(e){return console.log("响应回来"),e})),new a["default"]({router:oe,render:function(e){return e(I)}}).$mount("#app")},"7fab":function(e,t,o){},"85ec":function(e,t,o){},"90d0":function(e,t,o){"use strict";var a=o("ee66"),r=o.n(a);r.a},"92d1":function(e,t,o){"use strict";var a=o("7fab"),r=o.n(a);r.a},a86c:function(e,t,o){},ee66:function(e,t,o){}});
//# sourceMappingURL=app.6e41fae3.js.map