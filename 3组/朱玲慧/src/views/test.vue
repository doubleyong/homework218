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
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><router-link to='/memberList'>会员列表</router-link></span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1"><router-link to='/goodsList'>商品列表</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to='/addGoods'>添加商品</router-link></el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="">
                <el-menu-item index="3-3">商品分类</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="">
                <el-menu-item index="3-4">商品类型</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">订单</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">营销</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">权限</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header class="indexHeader">
            <el-col :span="20"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
          </el-header>
          <el-main><router-view/></el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
