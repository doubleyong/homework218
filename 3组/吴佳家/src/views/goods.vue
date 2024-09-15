<template>
  <div class="goodsListBox">
    <!--查询-->
    <el-form :inline="true" class="demo-form-inline Search">
      <el-form-item label="商品名称" >
        <el-input v-model="goodsName" placeholder="商品名称" class="goodsName"></el-input>
      </el-form-item>
      <el-form-item label="商品编号">
        <el-input v-model="goodsId" placeholder="商品编号" class="memberPhone"></el-input>
      </el-form-item>
      <el-form-item label="上架状态">
        <el-select v-model="goodsStatus" placeholder="上架状态" class="memberStatus">
          <el-option label="上架" value="shanghai"></el-option>
          <el-option label="下架" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onReset">重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!--会员列表表格数据-->
    <el-table :data="goodsList" style="width: 100%" class="table">
      <el-table-column prop="id" label="商品编号" width="260"></el-table-column>
      <el-table-column label="商品图片" width="260">
        <template slot-scope= "scope"><img :src="'http://106.12.22.92:8080'+scope.row.goodsImgs" alt="" class="memberHeader"></template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称" width="260"></el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格" width="260"></el-table-column>
      <el-table-column prop="goodsDetail" label="商品描述" width="260"></el-table-column>
      <el-table-column label="操作" width="258">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" round>编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.row.id)" round>删除</el-button>
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
  </div>
</template>
<script>
export default {
  name: 'goodsList',
  inject: ['reload'],
  data () {
    return {
      goodsList: [],
      pageData: [],
      goodsImg: [],
      goodsStatus: '',
      goodsId: '',
      goodsName: '',
      currentPage: 1, // 翻页的步长
      pageSize: 5 // 页容量
    }
  },
  methods: {
    //    查询
    onSubmit () {
      var goodsName = this.goodsName
      var goodsId = this.goodsId
      var goodsStatus = this.goodsStatus
      if (goodsStatus === '上架') {
        goodsStatus = 1
      } else {
        goodsStatus = 0
      }
      this.$axios.post('/api/goods/list', {
        goodsName: goodsName, //  商品名字,传递-模糊查询
        goodsId: goodsId, // 商品Id, 如果传递 模糊查询
        page: 1, // 当前页
        pageSize: 15, // 页容量
        status: goodsStatus // 状态1:上架,0:下架, 不传: 所有状态
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
    }
    //    修改
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
  .memberPhone,.memberStatus{
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
  .el-form-item{
    float: left;
    /*width: 420px;*/
    height: 40px;
  }
  .table,.Search{
    text-align: center;
  }
  thead tr th{
    height: 60px !important;
  }
</style>
