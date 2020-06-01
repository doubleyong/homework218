<template>
    <div>
      <el-container>
        <el-aside width="300px">
          <el-menu
            class="el-menu-vertical-demo"
            default-active="1"
            background-color="#FFFFFF"
            text-color="#394273"
            active-text-color="#FD6D34"
            :collapse="isCollapse">
            <span class="el-icon-s-opportunity" id="index-logo"></span>
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <router-link to='/Statistical' slot="title">主页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-star-off"></i>
              <router-link to='/AssociatorList' slot="title">会员名称</router-link>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-shopping-bag-1"></i>
                <span slot="title">商品</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <router-link to="/Goodsinfo">商品列表</router-link>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <router-link to="/AddGoodsInfo">添加商品</router-link>
                </el-menu-item>
                <el-menu-item index="3-3">
                  <router-link to="">商品分类</router-link>
                </el-menu-item>
                <el-menu-item index="3-4">
                  <router-link to="">商品类型</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-notebook-2"></i>
              <span slot="title">订单</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-medal-1"></i>
              <span slot="title">营销</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <router-link slot="title" to="/AdminList">权限</router-link>
            </el-menu-item>
          </el-menu>
          <el-radio-group v-model="isCollapse" style="margin-top: 20px;" size="mini">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
        </el-aside>
        <el-container>
          <el-header>
              <el-col :span="3" :offset="21">
              <div><router-link to="/login">退出</router-link></div>
              </el-col>
          </el-header>
          <el-main>
            <router-view >
            </router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script>
import ElCol from 'element-ui/packages/col/src/col'
export default {
  components: {
    ElCol
  },
  name: '',
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>
<style scope>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 850px;
  }
  .el-menu-vertical-demo .el-menu-item:hover{
    background: #6db6ff !important;
  }
  .el-menu-vertical-demo li.el-menu-item:hover {
    border-right: solid #FD6D34 3px !important;
  }
  a {
    text-decoration: none;
  }
  div.el-submenu__title{
    height:70px ;
    line-height: 70px;
    font-size: 22px;
    text-align: left;
  }
  li.el-menu-item{
    font-size: 22px;
    height: 70px;
    line-height: 70px;
    text-align: left;
  }
  .router-link-active {
    text-decoration: none;
    color: #FD6D34;
  }
  /*.router-link-hover{*/
    /*color: #FD6D34;*/
  /*}*/
  .el-header {
    background-color: #FFFFFF;
    color: #333;
    line-height: 60px;
    border-bottom: solid 1.5px #f1f1f1;
  }

  .el-aside {
    text-align: center;
  }
  #index-logo{
    font-size: 100px;
    color: #FD6D34;
    margin-bottom: 50px;
    margin-top: 50px;
  }
  main.el-main{
    box-sizing: border-box;
  }
</style>
