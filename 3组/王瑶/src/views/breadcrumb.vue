<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }" style="font-size: 30px;margin-bottom: 40px">首页</el-breadcrumb-item>
        <el-breadcrumb-item style="font-size: 30px;margin-bottom: 40px">{{text}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>
<script>
export default {
  name: 'breadcrumb',
  props: ['text'],
  data () {
    return {}
  }
}
</script>
<style scoped>
</style>
