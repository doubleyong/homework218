<template>
  <div>
    <el-container class="box">
      <el-aside width="260px" class="indexAside">
        <el-row :gutter="20">
        <el-col :span="4">
          <el-row class="tac">
            <el-col :span="12">
<!--              <h5>默认颜色</h5>-->
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                width="260px"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span><router-link to='/Member'>会员管理</router-link></span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-goods"></i>
                    <span><router-link to='/goods'>商品管理</router-link></span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span><router-link to='/Member'>管理员管理</router-link></span>
                  </template>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-takeaway-box"></i>
                    <span><router-link to='/Member'>品牌管理</router-link></span>
                  </template>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-s-grid"></i>
                    <span><router-link to='/Member'>分类管理</router-link></span>
                  </template>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="20"><HelloWorld msg="Welcome to Your Vue.js App"/></el-col>
      </el-row>
      </el-aside>
      <el-container class="rightBig">
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
  components: {

  },
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

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .box{
    width: 1920px;
    box-sizing: border-box;
  }
  .el-aside {
    margin-top: 60px;
    font-size: 22px;
    width: 20%;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 80%;
  }
  .el-menu-vertical-demo{
    width: 260px;
  }
  a{
    text-decoration: none;
    color: #686666;
  }
</style>
