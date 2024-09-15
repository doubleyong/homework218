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
        <el-button type="warning" icon="el-icon-refresh-right" @click="onReset" circle></el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" circle @click="onSubmit"></el-button>
      </el-form-item>
    </el-form>
    <!--会员列表表格数据-->
    <el-table :data="goodsList" style="width: 100%" class="table">
      <el-table-column prop="brandId" label="商品编号" width="260"></el-table-column>
      <el-table-column label="商品图片" width="260">
        <template slot-scope= "scope">
          <img :src="scope.row.goodsImgs" alt="" class="goodsImg">
        </template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称" width="260"></el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格" width="260"></el-table-column>
      <el-table-column prop="goodsDetail" label="商品描述" width="260"></el-table-column>
      <el-table-column label="操作" width="258">
        <template slot-scope="scope">
          <el-button  @click="handleEdit(scope.$index, scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
          <el-button  @click="handleDelete(scope.row.id)" type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--页码-->
    <div class="block">
      <el-pagination
        background
        @current-change="CurrentChange"
        layout="total, prev, pager, next, jumper, sizes"
        :current-page.sync='current'
        :page-sizes="[pagesize, pagesize+1, pagesize+2]"
        :total='ArrLength.total'
        :page-size='pagesize'
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  name: 'goodsList',
  data () {
    return {
      goodsList: [],
      goodsStatus: '',
      goodsId: '',
      goodsName: '',
      ArrLength: [], // 当前页
      current: 1, // 下一页的步长
      pagesize: 1// 取得的数据要用数组再.xxx  该值为
    }
  },
  methods: {
    //    查询
    onSubmit () {
      var goodsName = this.goodsName
      var goodsId = this.goodsId
      var goodsStatus = this.goodsStatus
      if (goodsStatus === '正常') {
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
        console.log(response.data.data.list.goodsImgs)
        console.log('查询啊')
        this.goodsList = response.data.data.list
      })
    },
    //    重置
    onReset () {
      console.log('Reset!')
    },
    //    页码
    CurrentChange (val) {
      const pagesize = this.pagesize
      this.$axios.post('/api/goods/list', {
        brandId: '', // 品牌ID-不传表示所有品牌
        catId: '', // 分类ID-不传表示所有分类
        goodsName: '', // 商品名字,传递-模糊查询
        page: val, // 当前页
        pageSize: pagesize, // 页容量
        status: ''// 状态1:上架,0:下架, 不传: 所有状态
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res.data.data.pageNum)
        this.goodsList = res.data.data.list
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
          return this.$message.error(response.data.msg)
        } else {
          this.$message.success(response.data.msg)
          this.reload()
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
      pageSize: 3, // 页容量
      status: ''// 状态1:上架,0:下架, 不传: 所有状态
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res.data.data.pageSize)
      this.goodsList = res.data.data.list
      this.ArrLength = res.data.data
      this.pagesize = res.data.data.pageSize
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
    width:100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .table,.Search{
    text-align: center;
  }
  .goodsImg{
    width: 110px;
    height: auto;
  }
</style>
