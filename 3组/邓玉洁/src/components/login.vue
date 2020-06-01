<template>
    <div :class="{'login':true}">
        <h2>后台管理系统</h2>
        <form>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" placeholder="请输入内容" v-model="ruleForm.username" maxlength="15" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="info">注册</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </form>
    </div>


</template>

<script>
    export default {
        name:'login',
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    password: '',
                    checkPass: '',
                    username:'',
                },
                rules: {
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                },

            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/admin/login',
                            {
                                id:'', // ID
                                name:this.username, // 用户名
                                password: this.password,
                                lastLoginTime:'', // 登陆时间
                                createTime:'', //创建时间
                                status: 1,//状态
                                isDelete: 0//是否删除

                            },
                            {
                                headers:
                                    {
                                        'Content-Type': 'application/json'
                                    }
                            }).then((response) => {
                                console.log(response)
                            if (response.data.code === 200){
                                this.$router.push('/')
                                this.$notify({
                                    title:'提示',
                                    message:'用户登录成功',
                                    duration:3000,
                                })
                            }else {
                                this.$notify({
                                    title:'提示',
                                    message:'用户名或密码错误',
                                    duration:3000,
                            }
                                 )}
                        }).catch((err) => {
                            this.$notify({
                                title: '提示',
                                message: '用户访问错误',
                                duration: 3000
                            });
                            console.log(err)
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    form{
        width: 400px;
        margin-left: 50px;
    }
    .login{
        width: 600px;
        height: 380px;
        margin:200px auto;
        box-shadow: 0px 0px 10px 10px rgb(238,237,237);
    }
    h2{
        color: rgb(80,84,88);
        text-align: center;
        line-height: 100px;
    }
</style>