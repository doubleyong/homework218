<template>
    <div class="addGoodsBox">
      <breadcrumb text="商品>添加商品"></breadcrumb>
      <el-form ref="form" label-width="120px">
        <h1>添加商品信息</h1>
        <el-col :span="10"  :offset="6"><el-form-item label="商品名称：" for="goodsName"><el-input id="goodsName" placeholder="商品名称" v-model="goodsName" clearable></el-input></el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="商品标题：" for="goodsTitle"><el-input id="goodsTitle" placeholder="商品标题" v-model="goodsTitle" clearable></el-input></el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="商品详情：" for="goodsDetail"><el-input id="goodsDetail" placeholder="商品详情" v-model="goodsDetail" clearable type="textarea" :rows="3"></el-input></el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="商品价格：" for="goodsPrice"><el-input id="goodsPrice" placeholder="商品价格" v-model="goodsPrice" clearable></el-input></el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="商品积分：" for="goodsScore"><el-input id="goodsScore" placeholder="商品积分" v-model="goodsScore" clearable></el-input></el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="商品关键字：" for="keywords"><el-input id="keywords" placeholder="关键字" v-model="keywords" clearable></el-input></el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="商品品牌：" for="brandId"><el-input id="brandId" placeholder="品牌" v-model="brandId" clearable></el-input></el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="商品类别：" for="catId"><el-input id="catId" placeholder="商品类别" v-model="catId" clearable></el-input></el-form-item></el-col>
        <!--图片上传-->
        <el-col :span="10"  :offset="6"><el-form-item label="上传图片：">
          <el-upload
            class="avatar-uploader"
            action="/api/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="商品推荐：">
          <el-switch v-model="value" :label="1"></el-switch><span >推荐</span>
        </el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item label="上架状态：">
          <el-radio-group>
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>
        </el-form-item></el-col>
        <el-col :span="10"  :offset="6"><el-form-item>
          <el-button type="primary" @click="addGoods">添加商品</el-button>
        </el-form-item></el-col>
      </el-form>
    </div>
</template>
<script>
import breadcrumb from './breadcrumb.vue'
export default {
  name: 'addGoods',
  components: {
    breadcrumb
  },
  inject: ['reload'],
  data () {
    return {
      imageUrl: '',
      brandId: '',
      catId: '',
      goodsName: '',
      goodsTitle: '',
      goodsDetail: '',
      goodsPrice: '',
      goodsScore: '',
      goodsImgs: '',
      keywords: '',
      recommend: '',
      value: '',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    addGoods () {
      var brandId = this.brandId
      var catId = this.catId
      var goodsName = this.goodsName
      var goodsTitle = this.goodsTitle
      var goodsDetail = this.goodsDetail
      var goodsPrice = this.goodsPrice
      var keywords = this.keywords
      //      var recommend = this.recommend
      var goodsScore = this.goodsScore
      var imageUrl = this.imageUrl
      this.$axios.post('/api/goods/add', {
        brandId: brandId, // 品牌ID-必传
        catId: catId, // 分类ID-必传
        goodsDetail: goodsDetail, // 商品详情-必传
        goodsName: goodsName, // 名字-必传
        goodsImgs: imageUrl, // 图片-必传
        goodsPrice: goodsPrice, // 商品价格-必传
        goodsScore: goodsScore, // 商品积分-必传
        goodsTitle: goodsTitle, // 商品标题-必传
        keywords: keywords, // 关键字-必传
        recommend: 1, // 是否推荐,1 推荐, 0 不推荐-必传
        status: 1// 状态, 1 上架, 0 下架-必传
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.data)
        console.log('查询啊')
        if (response.data.code === 200) {
          return this.$message.success(response.data.msg)
        } else {
          this.$message.error(response.data.msg)
        }
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped>
  .addGoodsBox{
    text-align: center;
    width:1660px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  h1{
    font-size: 35px;
  }
  label.el-form-item__label{
    font-size: 30px!important;
  }
  div.el-breadcrumb{
    font-size: 100px!important;
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
