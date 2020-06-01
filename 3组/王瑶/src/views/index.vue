<template>
  <div>
    <el-container class="box">
      <el-aside width="260px" class="indexAside">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="white"
            text-color="#394273"
            active-text-color="#FD6A30">
            <p><span class="el-icon-s-home"></span></p>
            <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span slot="title"><router-link to='/Home'>首页</router-link></span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><router-link to='/memberList'>会员列表</router-link></span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title" style="height: 90px;">
                <i class="el-icon-location"></i>
                <span slot="title" class="shopss">商品</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1"><router-link to='/goodsList'>商品列表</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to='/addGoods'>添加商品</router-link></el-menu-item>
                <el-menu-item index="3-3">商品分类</el-menu-item>
                <el-menu-item index="3-4"><router-link to='/brandList'>品牌列表</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-document"></i>
              <span slot="title">订单</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">营销</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">权限</span>
            </el-menu-item>
          </el-menu>
      </el-aside>
      <el-container>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
console.log(sessionStorage.getItem('userName'))

export default {
  name: 'index',
  data () {
    return {

      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    box-shadow:0px 2px 19px 1px rgba(69,47,133,0.2);
    width: 1920px;
    height: auto;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 90px;
  }
  .el-aside {
    font-size: 22px;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 260px;
    min-height: 400px;
  }
  .el-icon-s-home{
    font-size: 100px;
    color: #FD6A30;
  }
  p{
    width: 260px;
    text-align: center;
  }
  .indexAside{
    font-size: 20px;
    border-right:1px solid #DADCE5 ;
  }
  .indexHeader{
    border-bottom:1px solid #DADCE5 ;
    height: 90px!important;
    padding: 0!important;
  }

  .el-col {
    border-radius: 4px;
    border-right: 1px solid #DADCE5 !important;
  }
  .grid-content {
    border-radius: 4px;
    height: 90px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  a{
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
    color: rgb(253,106,48);
  }
  li.el-menu-item{
    font-size: 22px;
    height: 80px;
    line-height: 80px;
    text-align: left;
    text-indent: 15px;
    letter-spacing: 3px;
  }
  div.el-submenu__title{
    height:80px ;
    line-height: 80px;
    font-size: 22px;
    text-align: left;
  }
  li.el-submenu span{
    font-size: 22px;
    letter-spacing: 3px;
  }
  li.el-submenu{
    line-height: 80px;
    text-indent: 15px;
  }
  li.el-menu-item i,li.el-submenu i{
    margin-right:20px;
    font-size: 22px;
  }
</style>
