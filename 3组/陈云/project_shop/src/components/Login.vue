<template>
  <div class="login_content">
    <div class="box">
      <div class="left_form">
        <h1>登录</h1>
          <p>
            欢迎来到后台系统，<br/>
            请登录：
          </p>
          <form action="">
             <p>用户名</p>
             <p><el-input v-model="User" placeholder="请输入用户名" prefix-icon="el-icon-search"  clearable></el-input></p>
             <p>密码</p>
             <p><el-input placeholder="请输入密码" v-model="Pwd" show-password  prefix-icon="el-icon-search" clearable></el-input></p>
             <p><el-checkbox v-model="checked">记住密码</el-checkbox></p>
             <el-button id="btn-login" @click="login_go">登录</el-button>
          </form>
      </div>
      <div class="right_bg">
        <div>
          <span class="el-icon-s-opportunity"></span> <br>
          <p>欢迎使用</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      User: '',
      Pwd: ''
    }
  },
  methods: {
    login_go: function () {
      const LoginID = this.User
      const LoginPwd = this.Pwd
      this.$axios.post('/api/admin/login', {
        name: LoginID, //  会员名字, 如果传递 模糊查询
        password: LoginPwd // 会员电话, 如果传递 模糊查询
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res.data)
        if (res.data.code !== 200) {
          return this.$message.error(res.data.msg)
        } else {
          this.$message.success(res.data.msg)
          this.$router.push('/Statistical')
          window.sessionStorage.setItem('user', LoginID)
        }
      })
    }
  }
}
</script>
<style scope>
  *{
    margin: 0;
    padding: 0;
  }
  .login_content{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100vh;
  }
  .box{
    width: 900px;
    height: 600px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 19px 1px rgba(69,47,133,0.2);
    overflow: hidden;
  }
  .left_form{
    width: 641px;
    float: left;
    padding-left: 60px;
    padding-top: 70px;
    box-sizing: border-box;
  }
  .right_bg{
    float: left;
    height: 600px;
    width: 259px;
    display: flex;
    justify-content: center;
    align-items:center ;
    text-align: center;
    background-image: url("../assets/login-bg.jpg");
    background-size: cover;
  }
  .right_bg span{
    font-size: 50px;
    width: 50px;
    height: 70px;
    color: white;
  }
  .right_bg p{
    /*width:93px;*/
    height:23px;
    font-size:24px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:45px;
    opacity:0.8;
  }
  .left_form h1{
    font-size:30px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(66,66,66,1);
    line-height:45px;
    margin-bottom: 18px;
  }
  .left_form p:nth-child(2){
    /*width:134px;*/
    height:38px;
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(148,148,148,1);
    line-height:22px;
    margin-bottom: 59px;
  }
  form p{
    width: 400px;
    font-size:14px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(148,148,148,1);
    line-height:22px;
  }
  form p:nth-child(5){
    margin-top: 25px;
  }
  #btn-login{
    margin-top: 50px;
    width:400px;
    height:40px;
    background-color:rgba(253,106,48,1);
    border-radius:20px;
    color: white;
  }
</style>
