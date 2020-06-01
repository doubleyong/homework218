<template>
     <div id="container">
        <div id="LLeft">
           <h1>登录</h1>
           <p id="tit">欢迎来到后台系统，<br><span>请登录:</span></p>
           <form >
               <p><el-input id="username" v-model="username" placeholder="请输入内容"></el-input></p>
               <p><el-input type="password" id="password" v-model="password" placeholder="密码"></el-input></p>
               <p><el-button id="login" @click="login()" type="primary" round>登录</el-button></p>
           </form>
       </div>
        <div id="showPic">
        </div>
    </div>
</template>
<script>
export default {
  name: 'container',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      var loginName = this.username
      var loginPwd = this.password
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
<style scope>
    #container{
        width: 900px;
        height: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border: 2px solid silver;

    }

    #LLeft{
        position: absolute;
        width: 600px;
        height: 400px;

    }
    #username,#password{
        width: 300px;
        height: 50px;
        border-radius: 10px;
       margin-top: 15px;
    }
   #showPic{
       background-image: url("../assets/bg.jpg");
       position: absolute;
       width:300px ;
       height: 400px;
       right: 0;
       top: 0;
   }
    #login{
        position: absolute;
        bottom: 20px;
        left: 150px;
        width:300px ;
        height: 50px;

    }
    h1{
        font-size: 30px;
    }
    #tit{
        font-size: 16px;
    }

</style>
