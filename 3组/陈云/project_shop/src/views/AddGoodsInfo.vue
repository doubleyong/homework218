<template>
  <div class="addGoodsBox">
    <el-form ref="form" label-width="120px">
      <h1>添加商品信息</h1>
      <el-col :span="10"  :offset="6">
        <el-form-item label="商品名称：" for="GoodsName">
          <el-input placeholder="商品名称" id="GoodsName" v-model="GoodsName" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="商品标题：" for="GoodsTitle" >
          <el-input placeholder="商品标题" id="GoodsTitle"  v-model="GoodsTitle" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="商品详情：" for="GoodsInfo">
          <el-input placeholder="商品详情" id="GoodsInfo"  v-model="GoodsInfo" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="商品价格：" for="GoodsPrice" >
          <el-input placeholder="商品价格" id="GoodsPrice"  v-model="GoodsPrice" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="商品积分：" for="GoodsScore">
          <el-input placeholder="商品积分" id="GoodsScore"  v-model="GoodsScore" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
      <el-form-item label="商品关键字："  for="GoodsKeys">
        <el-input placeholder="关键字" id="GoodsKeys"  v-model="GoodsKeys" clearable></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="商品ID："  for="GoodsID">
          <el-input placeholder="关键字" id="GoodsID"  v-model="GoodsID" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="商品图片："  for="GoodsID">
          <!--<el-upload-->
            <!--class="avatar-uploader"-->
            <!--action="/api/upload"-->
            <!--:show-file-list="false"-->
            <!--:on-success="handleAvatarSuccess"-->
            <!--:before-upload="beforeAvatarUpload">-->
            <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
          <!--</el-upload>-->
          <el-upload
            action="/api/upload"
            list-type="picture-card"
            :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url" alt=""
              >
              <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="商品品牌：" for="GoodsCAT">
          <el-input placeholder="品牌" id="GoodsCAT"  v-model="GoodsCAT" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="是否推荐：" >
          <el-radio-group>
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item label="上架状态：" >
          <el-radio-group>
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="10"  :offset="6">
        <el-form-item>
        <el-button type="primary" @click="AddGoods">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'addGoods',
  data () {
    return {
      // 商品名称
      GoodsName: '',
      // 商品标题
      GoodsTitle: '',
      // 商品详情
      GoodsInfo: '',
      // 商品价格
      GoodsPrice: '',
      // 商品积分
      GoodsScore: '',
      // 商品关键字
      GoodsKeys: '',
      // 商品品牌
      GoodsCAT: '',
      // 品牌ID
      GoodsID: '',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    AddGoods () {
      const GoodsCAT = this.GoodsCAT
      const GoodsKeys = this.GoodsKeys
      const GoodsScore = this.GoodsScore
      const GoodsPrice = this.GoodsPrice
      const GoodsInfo = this.GoodsInfo
      const GoodsTitle = this.GoodsTitle
      const GoodsName = this.GoodsName
      const GoodsID = this.GoodsID
      this.$axios.post('/api/goods/add', {
        brandId: GoodsCAT, //  品牌ID
        catId: GoodsID, // 分类ID
        goodsDetail: GoodsInfo, // 商品详情
        goodsImgs: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1287090210,3053473278&fm=26&gp=0.jpg', // 图片
        goodsName: GoodsName, // 商品名称
        goodsPrice: GoodsPrice, // 价格
        goodsScore: GoodsScore, // 积分
        goodsTitle: GoodsTitle, // 标题
        keywords: GoodsKeys, // 关键字
        recommend: 1, // 推荐
        status: 1 // 状态
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res)
        if (res.data.code !== 200) {
          return this.$message.error(res.data.msg)
        } else {
          this.$message.success(res.data.msg)
        }
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
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
