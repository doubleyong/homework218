<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="品牌id" prop="newbrandId">
            <el-input v-model="ruleForm.newbrandId"></el-input>
        </el-form-item>
        <el-form-item label="分类id" prop="newcatId">
            <el-input v-model="ruleForm.newcatId"></el-input>
        </el-form-item>
        <el-form-item label="商品详情" prop="newgoodsDetail">
            <el-input v-model="ruleForm.newgoodsDetail"></el-input>
        </el-form-item>
        <el-upload
                class="avatar-uploader"
                action='newgoodsImgs'
                :show-file-list="false"
                :accept="'image/*'"
                :on-success="handleAvatarSuccess"
                :on-error="handleError"
                :on-change="handleChange"
                :before-upload="beforeAvatarUpload">
            <img v-if="ruleForm.newgoodsImgs" :src="ruleForm.newgoodsImgs" class="avatar">

            <i v-else class="el-icon-plus avatar-uploader-icon">上传图片</i>
        </el-upload>
        <el-form-item label="商品名称" prop="newgoodsName">
            <el-input v-model="ruleForm.newgoodsName"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="newgoodsPrice">
            <el-input v-model="ruleForm.newgoodsPrice"></el-input>
        </el-form-item>
        <el-form-item label="商品积分" prop="newgoodsScore">
            <el-input v-model="ruleForm.newgoodsScore"></el-input>
        </el-form-item>
        <el-form-item label="商品标题" prop="newgoodsTitle">
            <el-input v-model="ruleForm.newgoodsTitle"></el-input>
        </el-form-item>
        <el-form-item label="关键字" prop="newkeywords">
            <el-input v-model="ruleForm.newkeywords"></el-input>
        </el-form-item>
        <el-form-item label="是否推荐" prop="newrecommend">
            <el-switch v-model="ruleForm.newrecommend"></el-switch>
        </el-form-item>
        <el-form-item label="状态" prop="newstatus">
            <el-switch v-model="ruleForm.newstatus"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="add('ruleForm')">立即添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        inject:["reload"],
        name: "addGoods",
        data() {
            return {
                list:[],
                ruleForm: {
                    newgoodsImgs:'',
                    newbrandId:'',
                    newcatId:'',
                    newgoodsDetail:'',
                    newgoodsName:'',
                    newgoodsPrice:'',
                    newgoodsScore:'',
                    newgoodsTitle:'',
                    newkeywords:'',
                    newrecommend:false,
                    newstatus:true,
                },
                rules: {
                    newbrandId: [
                        { required: true, message: '请输入品牌id', trigger: 'blur' },
                        { min: 1, max: 30, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    newcatId: [
                        { required: true, message: '请输入分类id', trigger: 'blur' },
                        { min: 1, max: 30, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    newgoodsDetail: [
                        { required: true, message: '请输入详情', trigger: 'blur' },
                        { min: 1, max: 50, message: '长度在 10 到 50 个字符', trigger: 'blur' }
                    ],
                    newgoodsName: [
                        { required: true, message: '请输入商品名称', trigger: 'blur' },
                        { min: 1, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    newgoodsPrice: [
                        { required: true, message: '请输入商品价格', trigger: 'blur' },
                        { min: 1, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    newgoodsScore: [
                        { required: true, message: '请输入商品积分', trigger: 'blur' },
                        { min: 1, max: 99999, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    newgoodsTitle: [
                        { required: true, message: '请输入标题', trigger: 'blur' },
                        { min: 1, max: 30, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    newkeywords: [
                        { required: true, message: '请输入关键字', trigger: 'blur' },
                        { min: 1, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            // addGoods(){
            // },
            handleAvatarSuccess(res, file) {
                this.newgoodsImgs = URL.createObjectURL(file.raw);
                this.$message('上传成功')
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type.includes("image");
                // const isPng = file.type === 'image/png';
                // const isGIF = file.type === 'image/gif';
                const isLt2M = file.size / 10240 / 10240 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像只能是图片');
                    return false
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 10MB!');
                    return false
                }
                return isJPG && isLt2M
            },
            handleError() {
                this.$message.error("上传失败,请重新上传图片!");
            },
            handleChange(file, fileList) {
                var _this = this;
                if (file.raw) {
                    let reader = new FileReader()
                    reader.onload = function (e) {
                        _this.contentHtml = e.target.result;
                    };
                    reader.readAsText(file.raw,'gb2312');

                }
                console.log(file, fileList);
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            add(formName) {
                if (this.ruleForm.newrecommend === true){
                    this.ruleForm.newrecommend = 1
                }else{
                    this.ruleForm.newrecommend = 0
                }
                if (this.ruleForm.newstatus === true){
                    this.ruleForm.newstatus = 1
                }else{
                    this.ruleForm.newstatus = 0
                }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/goods/add',
                            {
                                brandId: this.newbrandId,// 品牌ID-必传
                                catId: this.newcatId,// 分类ID-必传
                                goodsDetail: this.newgoodsDetail,// 商品详情-必传
                                goodsImgs: this.newgoodsImgs,// 商品图片-必传
                                goodsName: this.newgoodsName,// 名字-必传
                                goodsPrice: this.newgoodsPrice, // 商品价格-必传
                                goodsScore: this.newgoodsScore,// 商品积分-必传
                                goodsTitle: this.newgoodsTitle, // 商品标题-必传
                                keywords: this.newkeywords, // 关键字-必传
                                recommend: this.newrecommend, // 是否推荐,1 推荐, 0 不推荐-必传
                                status: this.newstatus// 状态, 1 上架, 0 下架-必传
                            },
                            {
                                headers:
                                    {
                                        'Content-Type': 'application/json'
                                    }
                            })
                            .then((response) => {
                                console.log(response)
                                this.newgoodsImgs = response.data.goodsImgs
                                if (response.code === 200) {
                                    this.$message.success('新增成功')
                                    this.reload();
                                }else {
                                    this.$message.error('新增失败')
                                }
                            }).catch((err) => {
                            console.log(err)
                        })
                        // this.list.unshift({
                        //     brandId: this.newgoodsName,
                        //     catId: this.newgoodsName,
                        //     goodsDetail: this.newgoodsName,
                        //     goodsName: this.newgoodsName,
                        //     goodsPrice: this.newgoodsName,
                        //     goodsScore: this.newgoodsName,
                        //     goodsTitle: this.newgoodsName,
                        //     keywords: this.newgoodsName,
                        //     recommend: this.newgoodsName,
                        //     status: this.newgoodsName
                        // })

                    }else {
                        return false
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .el-input{
        width: 300px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>