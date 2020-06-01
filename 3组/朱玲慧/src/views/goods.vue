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
        <el-button type="" @click="onReset" icon="el-icon-refresh">重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="addgsForm" icon="el-icon-circle-plus-outline">新增</el-button>
      </el-form-item>
    </el-form>
    <!--商品列表表格数据-->
    <el-table :data="goodsList" style="width: 100%" :cell-style="tableCellStyle" :header-cell-style="tableHeaderCellStyle">
      <el-table-column fixed="left" prop="id" label="商品编号" width="300"></el-table-column>
      <el-table-column label="商品图片" width="260">
        <template slot-scope= "scope"><img :src="scope.row.goodsImgs" alt="" class="memberHeader"></template>
      </el-table-column>
      <el-table-column prop="goodsName" label="商品名称" width="260"></el-table-column>
      <el-table-column prop="goodsPrice" label="商品价格" width="260"></el-table-column>
      <el-table-column prop="goodsDetail" label="商品描述" width="260"></el-table-column>
      <el-table-column fixed="right" label="操作" width="258">
        <template slot-scope="scope">
          <el-button size="small" @click="editgsForm(scope.$index, scope.row.id)" type="primary" icon="el-icon-edit">编辑</el-button>
          <el-button size="small" @click="handleDelete(scope.row.id)" type="danger" icon="el-icon-delete">删除</el-button>
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
    <!--新增模态框开始-->
    <el-dialog :visible.sync="dialogAddgsVisible"  @close="closeDialogAddgsVisible">
      <el-form  :model="addForm" ref="addForm" >
        <el-form-item label="品牌ID" :label-width="formLabelWidth">
          <el-input v-model="addForm.addbrandId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类ID" :label-width="formLabelWidth">
          <el-input v-model="addForm.addcatId" ></el-input>
        </el-form-item>
        <el-form-item label="商品详情" :label-width="formLabelWidth">
          <el-input v-model="addForm.addgoodsDetail" ></el-input>
        </el-form-item>
        <el-form-item label="商品图片" :label-width="formLabelWidth">
          <el-input v-model="addForm.addgoodsImgs" ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.addgoodsName" ></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input v-model="addForm.addgoodsPrice" ></el-input>
        </el-form-item>
        <el-form-item label="商品积分" :label-width="formLabelWidth">
          <el-input v-model="addForm.addgoodsScore" ></el-input>
        </el-form-item>
        <el-form-item label="商品标题" :label-width="formLabelWidth">
          <el-input v-model="addForm.addgoodsTitle" ></el-input>
        </el-form-item>
        <el-form-item label="关键字" :label-width="formLabelWidth">
          <el-input v-model="addForm.addkeywords" ></el-input>
        </el-form-item>
        <el-form-item label="是否推荐" :label-width="formLabelWidth">
          <el-input v-model="addForm.addrecommend" ></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-input v-model="addForm.addstatus" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddgsVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveAddForm('addForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!--新增模态框结束-->
    <!--修改模态框开始-->
    <el-dialog :visible.sync="dialogEditgsVisible"  @close="closeDialogEditgsVisible">
      <el-form  :model="editForm" ref="editForm" >
        <el-form-item label="品牌ID" :label-width="formLabelWidth">
          <el-input v-model="editForm.editbrandId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类ID" :label-width="formLabelWidth">
          <el-input v-model="editForm.editcatId" ></el-input>
        </el-form-item>
        <el-form-item label="商品详情" :label-width="formLabelWidth">
          <el-input v-model="editForm.editgoodsDetail" ></el-input>
        </el-form-item>
        <el-form-item label="商品图片" :label-width="formLabelWidth">
          <el-input v-model="editForm.editgoodsImgs" ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="editForm.editgoodsName" ></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input v-model="editForm.editgoodsPrice" ></el-input>
        </el-form-item>
        <el-form-item label="商品积分" :label-width="formLabelWidth">
          <el-input v-model="editForm.editgoodsScore" ></el-input>
        </el-form-item>
        <el-form-item label="商品标题" :label-width="formLabelWidth">
          <el-input v-model="editForm.editgoodsTitle" ></el-input>
        </el-form-item>
        <el-form-item label="关键字" :label-width="formLabelWidth">
          <el-input v-model="editForm.editkeywords" ></el-input>
        </el-form-item>
        <el-form-item label="是否推荐" :label-width="formLabelWidth">
          <el-input v-model="editForm.editrecommend" ></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-input v-model="editForm.editstatus" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditgsVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEditForm('editForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!--修改模态框结束-->
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
      pageSize: 5, // 页容量
      // 添加数据
      addForm: {},
      addbrandId: '',
      addcatId: '',
      addgoodsDetail: '',
      addgoodsImgs: '',
      addgoodsName: '',
      addgoodsPrice: '',
      addgoodsScore: '',
      addgoodsTitle: '',
      addkeywords: '',
      addrecommend: '',
      addstatus: '',
      dialogAddgsVisible: false,
      // 修改数据
      editForm: {},
      editbrandId: '',
      editcatId: '',
      editgoodsDetail: '',
      editgoodsImgs: '',
      editgoodsName: '',
      editgoodsPrice: '',
      editgoodsScore: '',
      editgoodsTitle: '',
      editkeywords: '',
      editrecommend: '',
      editstatus: '',
      dialogEditgsVisible: false,
      formLabelWidth: '300px',
      Id: ''
    }
  },
  methods: {
    tableCellStyle (cell, cellIndex) {
      return 'text-align:center'
    },
    tableHeaderCellStyle (cell, cellIndex) {
      return 'text-align:center'
    },
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
        this.goodsList = response.data.data.list
      })
    },
    //    重置
    onReset () {
      this.goodsName = ''
      this.goodsId = ''
      this.goodsStatus = ''
      this.$options.methods.onSubmit.bind(this)()
      this.reload()
      console.log('Reset!')
    },
    // 新增模态框打开
    addgsForm () {
      this.dialogAddgsVisible = true
      // this.title = '新增分类'
    },
    // 关闭新增模态框，清空值
    closeDialogAddgsVisible () {
      this.$refs.addForm.resetFields()// element封装的方法,清空模态框的值
      // this.title = '' // 初始化title的值
      this.addForm = { // 初始化addForm中的值
        addbrandId: '',
        addcatId: '',
        addgoodsDetail: '',
        addgoodsImgs: '',
        addgoodsName: '',
        addgoodsPrice: '',
        addgoodsScore: '',
        addgoodsTitle: '',
        addkeywords: '',
        addrecommend: '',
        addstatus: ''
      }
    },
    // 关闭修改模态框，清空值
    closeDialogEditgsVisible () {
      this.$refs.editForm.resetFields()// element封装的方法,清空模态框的值
      // this.title = '' // 初始化title的值
      this.editForm = { // 初始化addForm中的值
        editbrandId: '',
        editcatId: '',
        editgoodsDetail: '',
        editgoodsImgs: '',
        editgoodsName: '',
        editgoodsPrice: '',
        editgoodsScore: '',
        editgoodsTitle: '',
        editkeywords: '',
        editrecommend: '',
        editstatus: ''
      }
    },
    // 修改模态框打开
    editgsForm (index, id) {
      console.log(index, id)
      this.dialogEditgsVisible = true
      this.Id = id
      console.log('这里是id==', id)
    },
    // 保存修改数据
    saveEditForm (aaa) {
      this.$refs[aaa].validate((valid) => {
        console.log(valid)
        console.log(this.$refs[aaa])
        if (valid) {
          const params = {
            id: this.Id,
            brandId: this.editForm.brandId,
            catId: this.editForm.editcatId,
            goodsDetail: this.editForm.editgoodsDetail,
            goodsImgs: this.editForm.editgoodsImgs,
            goodsName: this.editForm.editgoodsName,
            goodsPrice: this.editForm.editgoodsPrice,
            goodsScore: this.editForm.editgoodsScore,
            goodsTitle: this.editForm.editgoodsTitle,
            keywords: this.editForm.editkeywords,
            recommend: this.editForm.editrecommend,
            status: this.editForm.editstatus
          }
          this.$axios.post('/api/goods/edit', params,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
            console.log(res)
            if (res.data.code !== 200) {
              alert('错误')
              return this.$message.error(res.data.msg)
            } else {
              this.$message.success(res.data.msg)
              this.reload()
              alert('修改成功')
            }
            this.dialogEditgsVisible = false
          })
        }
      })
    },
    // 保存新增数据
    saveAddForm (aaa) {
      this.$refs[aaa].validate((valid) => {
        console.log(this.$refs[aaa])
        if (valid) {
          const params = {
            brandId: this.addForm.addbrandId,
            catId: this.addForm.addcatId,
            goodsDetail: this.addForm.addgoodsDetail,
            goodsImgs: this.addForm.addgoodsImgs,
            goodsName: this.addForm.addgoodsName,
            goodsPrice: this.addForm.addgoodsPrice,
            goodsScore: this.addForm.addgoodsScore,
            goodsTitle: this.addForm.addgoodsTitle,
            keywords: this.addForm.addkeywords,
            recommend: this.addForm.addrecommend,
            status: this.addForm.addstatus
          }
          this.$axios.post('/api/goods/add', params,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
            console.log(res)
            if (res.data.code !== 200) {
              alert('错误')
              return this.$message.error(res.data.msg)
            } else {
              this.$message.success(res.data.msg)
              this.reload()
              alert('新增成功')
            }
            this.dialogAddgsVisible = false
            // this.$router.push({name:'categories'})
            // this.init()
          })
        }
      })
    },
    // 页码
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
      const _this = this
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
          _this.$message.success('删除成功')
          _this.reload()
        }
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
      this.goodsList = response.data.data.list
      this.pageData = response.data.data
      this.pageSize = response.data.data.pageSize
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
    /*width: 1660px;*/
    margin: 0 auto;
    box-sizing: border-box;
  }
  .table,.Search{
    text-align: center !important;
  }
  thead tr th{
    height: 60px !important;
  }
</style>
