<template>
  <div class="brandListBox">
    <breadcrumb text="品牌>品牌列表"></breadcrumb>
    <!--查询-->
    <el-form :inline="true" :model="formInline" class="demo-form-inline Search">
      <el-form-item label="品牌名称">
        <el-input v-model="formInline.brandName" placeholder="品牌名称"></el-input>
      </el-form-item>
      <el-form-item label="品牌编号">
        <el-input v-model="formInline.brandId" placeholder="品牌名称"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.region" placeholder="屏蔽状态">
          <el-option label="全部" value=""></el-option>
          <el-option label="正常" value="1"></el-option>
          <el-option label="屏蔽" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
    <!--品牌列表表格数据-->
    <el-table :data="brandList" style="width: 100%" class="table">
      <el-table-column prop="id" label="品牌编号" width="260"></el-table-column>
      <el-table-column prop="brandName" label="品牌名称" width="260"></el-table-column>
      <el-table-column label="品牌LOGO" width="260">
        <template slot-scope= "scope"><img :src="'http://106.12.22.92:8080'+scope.row.brandLogo" alt="" class="memberHeader"></template>
      </el-table-column>
      <el-table-column prop="brandDesc" label="品牌描述" width="260"></el-table-column>
      <el-table-column label="品牌状态" width="260">
        <template slot-scope= "scope">{{scope.row.status == 1 ? '正常' : '锁定'}}</template>
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
        <el-form-item style="text-align: center"><h3 class="Formtitle">编辑品牌</h3>
        </el-form-item>
        <el-form-item label="品牌编号" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="品牌名称" :label-width="formLabelWidth">
          <el-input v-model="form.brandName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌详情" :label-width="formLabelWidth">
          <el-input v-model="form.brandDesc" autocomplete="off"></el-input>
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
  name: 'brandList',
  components: {
    breadcrumb
  },
  inject: ['reload'],
  data () {
    return {
      // 以下为查询所需参数
      formInline: {
        brandName: '',
        brandId: '',
        region: ''
      },
      // 以下为显示数据所需参数
      brandList: [],
      pageData: [],
      brandLogo: [],
      brandStatus: '',
      currentPage: 1, // 翻页的步长
      pageSize: 5, // 页容量
      // 以下为模态框所需参数
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        id: '',
        brandLogo: '',
        brandName: '',
        brandDesc: '',
        brandId: '',
        //        keywords: '',
        status: ''
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    //    查询
    onSubmit () {
      var brandName = this.formInline.brandName
      var brandId = this.formInline.brandId
      var region = this.formInline.region
      if (region === null) {
        this.$axios.post('/api/brand/list', {
          brandName: brandName, //  品牌名字,传递-模糊查询
          id: brandId, // 品牌Id, 如果传递 模糊查询
          brandLogo: '//brand/26022c040c22a.jpg',
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
          this.brandList = response.data.data.list
        })
      } else {
        console.log(region)
        this.$axios.post('/api/brand/list', {
          brandName: brandName, //  品牌名字,传递-模糊查询
          id: brandId, // 品牌Id, 如果传递 模糊查询
          brandLogo: '/brand/2791762c040c22a.jpg',
          page: 1, // 当前页
          pageSize: 5, // 页容量
          status: region // 状态1:上架,0:下架, 不传: 所有状态
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response.data.data.list)
          this.brandList = response.data.data.list
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
      this.$axios.post('/api/brand/list', {
        id: '', // 品牌ID-不传表示所有品牌
        brandName: '', // 品牌名字,传递-模糊查询
        brandLogo: '/brand/2791762c040c22a.jpg',
        page: val, // 当前页
        pageSize: pageSize // 页容量
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.data.data.pageNum)
        this.brandList = response.data.data.list
        this.pageData = response.data.data
        this.pageSize = response.data.data.pageSize
      })
    },
    //    删除
    handleDelete (val) {
      this.$axios.post('/api/brand/delete', {
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
    },
    //    修改（编辑）
    edit () {
      var id = this.form.id
      //      var brandImgs = this.form.brandImgs
      var brandName = this.form.brandName
      var brandDesc = this.form.brandDesc
      var brandId = this.form.brandId
      this.$axios.post('/api//brand/edit', {
        id: id,
        brandLogo: '/brand/2791762c040c22a.jpg',
        brandName: brandName,
        brandDesc: brandDesc,
        brandId: brandId
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
    }
  },
  mounted: function () {
    this.$axios.post('/api/brand/list', {
      brandId: '', // 品牌ID-不传表示所有品牌
      brandName: '', // 品牌名字,传递-模糊查询
      brandLogo: '/brand/2791762c040c22a.jpg',
      page: 1, // 当前页
      pageSize: 5 // 页容量
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.data)
      this.brandList = response.data.data.list
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
  .brandListBox{
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
