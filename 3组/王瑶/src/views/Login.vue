<template>
    <div class="box">
      <div class="loginContainer">
        <!--登录-->
        <div class="left">
          <h1>登录</h1>
          <p>欢迎来到后台系统</p>
          <form action="">
            <p>用户名</p>
            <p><el-input placeholder="账号" clearable class="inputName" v-model="loginName"></el-input></p>
            <p>密码</p>
            <p><el-input placeholder="密码" show-password class="inputPwd" v-model="loginPwd"></el-input></p>
            <p><el-checkbox>记住密码</el-checkbox></p>
            <p><el-button type="warning" round id="btnLogin" @click="login()">登录</el-button></p>
          </form>
        </div>
        <!--背景-->
        <div class="right">
          <p><span class="el-icon-s-home"></span></p>
          <p>欢迎使用</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      loginName: '',
      loginPwd: ''
    }
  },
  methods: {
    login () {
      var loginName = this.loginName
      var loginPwd = this.loginPwd
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
          this.$router.push('/Home')
          window.sessionStorage.setItem('userNmae', loginName)
        }
      })
    }
  }
}
</script>
<style scoped>
  .box{
    width: 1920px;
    height: 950px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loginContainer{
    width: 900px;
    height: 600px;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow:0px 2px 19px 1px rgba(69,47,133,0.2);
  }
  h1{
    font-size:30px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(66,66,66,1);
  }
  .left{
    float: left;
    width: 641px;
    height: 600px;
    background-color: white;
    padding:50px 60px;
    box-sizing: border-box;
  }
  .left>p:nth-of-type(1){
    width: 150px;
    height: 38px;
    font-size: 14px;
    margin-bottom: 45px;
    color:rgba(148,148,148,1);
  }
  .right{
    float: right;
    width: 257px;
    height: 600px;
    background-image: url("../assets/loginBg.jpg");
    background-size: cover;
    opacity:0.7;
    text-align: center;
    padding-top: 230px;
    box-sizing: border-box;
    color: white;
    letter-spacing: 2px;
  }
  .el-icon-s-home{
    font-size: 80px;
  }
  #btnLogin{
    width:400px;
    height:40px;
    background:rgba(253,106,48,1);
    border-radius:20px;
  }
  form>p:nth-of-type(5){
    margin-bottom: 40px;
  }
  form>p:nth-of-type(1),form>p:nth-of-type(3){
    color:rgba(148,148,148,1);
  }
  .inputName,.inputPwd{
    width: 400px;
  }

</style>
