<template>
    <div class="goodsListBox">
      <breadcrumb text="商品>商品列表"></breadcrumb>
      <!--查询-->
      <el-form :inline="true" :model="formInline" class="demo-form-inline Search">
        <el-form-item label="商品名称">
          <el-input v-model="formInline.goodsName" placeholder="商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品编号">
          <el-input v-model="formInline.goodsId" placeholder="商品编号"></el-input>
        </el-form-item>
        <el-form-item label="上架状态">
          <el-select v-model="formInline.region" placeholder="上架状态">
            <el-option label="全部" value=""></el-option>
            <el-option label="上架" value="1"></el-option>
            <el-option label="下架" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
      <!--商品列表表格数据-->
      <el-table :data="goodsList" style="width: 100%" class="table">
        <el-table-column prop="id" label="商品编号" width="260"></el-table-column>
        <el-table-column label="商品图片" width="260">
          <template slot-scope= "scope"><img :src="'http://106.12.22.92:8080'+scope.row.goodsImgs" alt="" class="memberHeader"></template>
        </el-table-column>
        <el-table-column prop="goodsName" label="商品名称" width="260"></el-table-column>
        <el-table-column prop="goodsPrice" label="商品价格" width="260"></el-table-column>
        <el-table-column prop="goodsDetail" label="商品描述" width="260"></el-table-column>
        <el-table-column label="上架状态">
          <template slot-scope="scope">
            <el-switch
              style="display: block"
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value='1'
              :inactive-value='0'
              @change="activeStatus(scope.row.id,scope.row.status)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="258">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisible = true;getId(scope.row)" round></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--页码-->
      <div class="block page">
        <el-pagination background
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-size="pageSize"
                       layout="total, prev, pager, next, jumper"
                       :total="pageData.total">
        </el-pagination>
      </div>
      <!--模态框-->
      <el-dialog :visible.sync="dialogFormVisible" width="33%">
        <el-form :model="form">
          <el-form-item style="text-align: center"><h3 class="Formtitle">编辑商品</h3>
          </el-form-item>
          <el-form-item label="商品编号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品名称" :label-width="formLabelWidth">
            <el-input v-model="form.goodsName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" :label-width="formLabelWidth">
            <el-input v-model="form.goodsPrice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品详情" :label-width="formLabelWidth">
            <el-input v-model="form.goodsDetail" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false;edit()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import breadcrumb from './breadcrumb.vue'
export default {
  name: 'goodsList',
  components: {
    breadcrumb
  },
  inject: ['reload'],
  data () {
    return {
      // 以下为查询所需参数
      formInline: {
        goodsName: '',
        goodsId: '',
        region: ''
      },
      // 以下为显示数据所需参数
      goodsList: [],
      pageData: [],
      goodsImg: [],
      goodsStatus: '',
      currentPage: 1, // 翻页的步长
      pageSize: 5, // 页容量
      // 以下为模态框所需参数
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        id: '',
        //        goodsImgs: '',
        goodsName: '',
        goodsPrice: '',
        goodsDetail: '',
        brandId: '',
        catId: '',
        goodsScore: '',
        goodsTitle: '',
        //        keywords: '',
        recommend: '',
        status: ''
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    //    查询
    onSubmit () {
      var goodsName = this.formInline.goodsName
      var goodsId = this.formInline.goodsId
      var region = this.formInline.region
      if (region === null) {
        this.$axios.post('/api/goods/list', {
          goodsName: goodsName, //  商品名字,传递-模糊查询
          goodsId: goodsId, // 商品Id, 如果传递 模糊查询
          page: 1, // 当前页
          pageSize: 5 // 页容量
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response.data.data.list)
          console.log('查询啊')
          this.goodsList = response.data.data.list
        })
      } else {
        console.log(region)
        this.$axios.post('/api/goods/list', {
          goodsName: goodsName, //  商品名字,传递-模糊查询
          goodsId: goodsId, // 商品Id, 如果传递 模糊查询
          page: 1, // 当前页
          pageSize: 15, // 页容量
          status: region // 状态1:上架,0:下架, 不传: 所有状态
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response.data.data.list)
          this.goodsList = response.data.data.list
        })
      }
    },
    //    重置
    onReset () {
      console.log('Reset!')
    },
    //    页码
    handleCurrentChange (val) {
      const pageSize = this.pageSize
      this.$axios.post('/api/goods/list', {
        brandId: '', // 品牌ID-不传表示所有品牌
        catId: '', // 分类ID-不传表示所有分类
        goodsName: '', // 商品名字,传递-模糊查询
        page: val, // 当前页
        pageSize: pageSize, // 页容量
        status: 1// 状态1:上架,0:下架, 不传: 所有状态
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.data.data.pageNum)
        this.goodsList = response.data.data.list
        this.pageData = response.data.data
        this.pageSize = response.data.data.pageSize
      })
    },
    //    删除
    handleDelete (val) {
      this.$axios.post('/api/goods/delete', {
        id: val
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.data.code !== 200) {
          return this.$message.error('删除失败')
        } else {
          this.$message.success('删除成功')
        }
      })
      this.reload()
    },
    //    获取id
    getId (val) {
      console.log(val)
      for (var key in this.form) {
        this.form[key] = val[key]
      }
      //      var editId = val
      //      this.form.id = editId
    },
    //    修改（编辑）
    edit () {
      var id = this.form.id
      //      var goodsImgs = this.form.goodsImgs
      var goodsName = this.form.goodsName
      var goodsPrice = this.form.goodsPrice
      var goodsDetail = this.form.goodsDetail
      var brandId = this.form.brandId
      var catId = this.form.catId
      var goodsScore = this.form.goodsScore
      var goodsTitle = this.form.goodsTitle
      //      var keywords = this.form.keywords
      var recommend = this.form.recommend
      this.$axios.post('/api//goods/edit', {
        id: id,
        goodsImgs: '/goods/2020/05/08/ce3c6c0d1e804da3a43e4fda7994d967.png',
        goodsName: goodsName,
        goodsPrice: goodsPrice,
        goodsDetail: goodsDetail,
        brandId: brandId,
        catId: catId,
        goodsScore: goodsScore,
        goodsTitle: goodsTitle,
        keywords: 1,
        recommend: recommend
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.data)
        if (response.data.code !== 200) {
          return this.$message.error('编辑失败')
        } else {
          this.$message.success('编辑成功')
        }
      })
      this.reload()
    },
    //    修改状态
    activeStatus (id, status) {
      this.$axios.post('/api/goods/edit/status', {
        id: id,
        status: status
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.data)
      })
    }
  },
  mounted: function () {
    this.$axios.post('/api/goods/list', {
      brandId: '', // 品牌ID-不传表示所有品牌
      catId: '', // 分类ID-不传表示所有分类
      goodsName: '', // 商品名字,传递-模糊查询
      page: 1, // 当前页
      pageSize: 5, // 页容量
      status: 1// 状态1:上架,0:下架, 不传: 所有状态
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.data)
      this.goodsList = response.data.data.list
      this.pageData = response.data.data
      this.pageSize = response.data.data.pageSize
      console.log(response.data.data)
    })
  }
}
</script>
<style scoped>
  .memberName,.memberPhone,.memberStatus{
    margin-left: 15px;
    margin-right: 40px!important;
    width: 220px;
    border-radius: 17px!important;
  }
  .Search{
    height: 34px!important;
    line-height: 34px;
    display: flex;
    align-content: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .memberHeader{
    width:40px;
    height:40px;
    border-radius:50%;
  }
  .page{
    margin-top: 40px;
    text-align: right;
    padding-right: 100px!important;
  }
  .goodsListBox{
    text-align: center;
    width:1660px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .table,.Search{
    text-align: center;
  }
  span.el-dialog__title{
    font-size: 40px!important;
    line-height: 40px;
  }
  .el-form-item__content button{
    margin-left: 40px;
  }
  .Formtitle{
    font-size: 40px;
    height: 50px;
    line-height: 50px;
    margin: 0 0 10px 0;
  }
</style>
