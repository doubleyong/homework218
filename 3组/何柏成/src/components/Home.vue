<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>

    <!-- 页面主体区 -->
    <el-container>
      <!-- 左侧栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区 -->
        <el-menu background-color="#D8DFDF" text-color="white" active-text-color="#ffd04b">
          <!-- 一级菜单模版区域 -->
          <el-submenu index="1">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>子菜单</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <el-menu background-color="#D8DFDF" text-color="#fff" active-text-color="#ffd04b">
          <!-- 二级菜单模版区域 -->
          <el-submenu index="1">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>角色管理</span>
              </template>
            </el-menu-item>
             <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>权限列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <el-menu background-color="#D8DFDF" text-color="#fff" active-text-color="#ffd04b">
          <!-- 三级菜单模版区域 -->
          <el-submenu index="1">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>商品列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>分类管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>参数管理</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <el-menu background-color="#D8DFDF" text-color="#fff" active-text-color="#ffd04b">
          <!-- 四级菜单模版区域 -->
          <el-submenu index="1">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>子菜单</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <el-menu background-color="#D8DFDF" text-color="#fff" active-text-color="#ffd04b">
          <!-- 五级菜单模版区域 -->
          <el-submenu index="1">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-4-1">
                <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>子菜单</span>
            </template>

                
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧栏 -->
      <el-main></el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #38e8c7;
  display: flex;
  color: white;
  font-size: 26px;
  //   左右贴边对其
  justify-content: space-between;
  padding-left: 0;
  padding-top: 0;
  //文字上下居中
  align-items: center;
}
.el-header img {
  width: 75px;
  height: 75px;
  vertical-align: middle;
}
.el-aside {
  background-color: #eef6f6;
}
.el-main {
  background-color: #ffffff;
}
.home-container {
  height: 100%;
}
</style>