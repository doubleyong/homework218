<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avater_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登陆表单区域 -->
      <!-- model绑定对象，rules绑定规则 -->
      <!-- 添加ref，后面的名称就是我们表单的引用对象 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0"
        class="login_form"
      >
        <!-- 用户名 -->
        <!-- pro不是加给input的，而是加给item的 -->
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginForm.username"
            prefix-icon="iconfont icon-yonghudenglu"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-mima"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" round @click="login">登录</el-button>
          <el-button type="primary" round @click="resetloginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //这是登陆表单的数据绑定对象,与上面的model绑定
      loginForm: {
        username: "",
        password: ""
      },
      //这是表单的验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          //trigger代表触发时机，失去焦点即触发
          { required: true, message: "请输入邮箱或电话号码", trigger: "blur" }
        ],
        //验证密码是否合法
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    //点击重置按钮，重置登陆界面
    resetloginForm() {
      //   console.log(this)
      //重置表单规则，数据是双向绑定，不会被重置
      this.$refs.loginFormRef.resetFields();
    },
    //登陆验证表单是否合格，通过获取表单引用对象，调用validate函数进行验证，会传入一个参数（true 或者false）
    login() {
      //为了简化promise操作就要用async   await
      this.$refs.loginFormRef.validate(async valid => {
        // console.log(valid);
        if (!valid) return;
        //data就是返回的结果，把它重命名一个res对象，判断状态码，200成功，不是200失败
        const { data: res } = await this.$http.post("login", this.loginForm);
        //通过res的meta属性判断是否成功
        if (res.meta.status !== 200) return this.$message.error("登录失败！");
        this.$message.success("登录成功");
        //将登录成功之后的token，保存在sessionStorage中,供以后访问其他接口
        window.sessionStorage.setItem("token", res.data.token);
        //通过编程式导航，跳转到后台主页
        this.$router.push("/home");
        //如果没有登录就访问页面，则要跳转到登录页面（这就是导航守卫）
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #654ad7;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avater_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;

    transform: translate(-50%, -50%);

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

// 设置按钮右边对其，element样式要另外写
.btns {
  display: flex;
  justify-content: flex-end;
}
//设置登陆框，按钮 在合适位置，最后一句form默认的是content-box，要改为border-box
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>




