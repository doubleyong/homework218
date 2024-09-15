<template>
  <div>
<!--    <el-radio-group v-model="labelPosition" size="small">-->
<!--      <el-radio-button label="left">左对齐</el-radio-button>-->
<!--      <el-radio-button label="right">右对齐</el-radio-button>-->
<!--      <el-radio-button label="top">顶部对齐</el-radio-button>-->
<!--    </el-radio-group>-->
<!--    <div style="margin: 20px;"></div>-->
    <el-form :label-position="labelPosition" label-width="40px">
<!--      :model="formLabelAlign"-->
      <el-form-item label="帐号">
        <el-input v-model="loginname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginpwd"></el-input>
      </el-form-item>
      <el-form-item label-width="0">
        <el-button @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      loginname: '',
      loginpwd: ''
    }
  },
  methods: {
    login () {
      var loginName = this.loginname
      var loginPwd = this.loginpwd
      this.$axios.post('/api/admin/login', {
        name: loginName,
        password: loginPwd
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response)
        if (response.data.code !== 200) {
          return this.$message.error('登录失败')
        } else {
          this.$message.success('登录成功')
          this.$router.push('/index')
        }
      })
    }
  }
}
</script>

<style scoped>
div{
  /*width: 800px;*/
}
.el-form{
  width: 300px;
  background-color: lightgoldenrodyellow;
  opacity: .8;
  padding: 30px 40px;
  /*margin: 0 auto;*/
}
.el-form-item{
  width: 300px;
  margin: 10px auto;
}
.el-input{
  margin-left: 10px;
  width: 220px;
}
.el-form-item:last-of-type{
  width: 300px;
  /*margin: 0 auto;*/
}
.el-button{
  display: block;
  width: 80px;
  text-align: center;
  margin: 0 auto;
}
</style>
