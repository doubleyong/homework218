<template>
    <div class="Box">
      <breadcrumb text="会员列表"></breadcrumb>
      <!--查询-->
      <el-form :inline="true" :model="formInline" class="demo-form-inline Search">
        <el-form-item label="会员昵称">
          <el-input v-model="formInline.memberName" placeholder="会员昵称"></el-input>
        </el-form-item>
        <el-form-item label="会员电话">
          <el-input v-model="formInline.memberPhone" placeholder="会员电话"></el-input>
        </el-form-item>
        <el-form-item label="会员状态">
          <el-select v-model="formInline.region" placeholder="会员状态">
            <el-option label="全部" value=""></el-option>
            <el-option label="正常" value="1"></el-option>
            <el-option label="锁定" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">搜索</el-button>
          <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">新增</el-button>
        </el-form-item>
      </el-form>
      <!--会员列表表格数据-->
      <el-table :data="memberList" style="width: 100%" class="table">
        <el-table-column prop="memberName" label="会员昵称" width="260"></el-table-column>
        <el-table-column prop="memberPhone" label="会员手机号" width="260"></el-table-column>
        <el-table-column label="会员头像" width="260">
          <template slot-scope= "scope"><img :src="scope.row.memberHeader" alt="" class="memberHeader"></template>
        </el-table-column>
        <el-table-column label="状态">
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
        <el-table-column label="创建时间" width="260">
          <template slot-scope= "scope" value-format="yyyy-MM-dd">{{scope.row.createTime | date}}</template>
        </el-table-column>
        <el-table-column label="操作" width="258">
         <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" @click="handleDelete(scope.row.id)" round></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--页码-->
      <div class="block page">
        <el-pagination background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageData.total">
        </el-pagination>
      </div>
      <!--增加会员模态框-->
      <el-dialog :visible.sync="dialogFormVisible" width="33%">
        <el-form :model="form">
          <el-form-item style="text-align: center"><h3 class="Formtitle">添加会员</h3>
          </el-form-item>
          <el-form-item label="会员编号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="会员昵称" :label-width="formLabelWidth">
            <el-input v-model="form.memberName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="会员手机号" :label-width="formLabelWidth">
            <el-input v-model="form.memberPhone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="会员状态" :label-width="formLabelWidth">
            <el-input v-model="form.status" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false;add()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import breadcrumb from './breadcrumb.vue'
export default {
  name: 'memberList',
  components: {
    breadcrumb
  },
  inject: ['reload'],
  data () {
    return {
      formInline: {
        goodsName: '',
        goodsId: '',
        region: ''
      },
      memberList: [],
      pageData: [],
      currentPage: 1, // 翻页的步长
      pageSize: 5, // 页容量
      // 以下为模态框所需参数
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        id: '',
        memberHeader: '',
        memberName: '',
        memberPhone: '',
        openId: '',
        status: ''
      },
      formLabelWidth: '120px',
      formTitieWidth: '100%'
    }
  },
  //  时间过滤器
  filters: {
    date (createTime) {
      const date = new Date(createTime)// 把定义的时间赋值进来进行下面的转换
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return year + '-' + month + '-' + day
    }
  },
  methods: {
    //    查询
    onSubmit () {
      var memberName = this.formInline.memberName
      var memberPhone = this.formInline.memberPhone
      var region = this.formInline.region
      //      var memberStatus = this.memberStatus
      //      var command = this.command
      var currPage = this.currPage
      console.log(region)
      //      console.log(memberStatus)
      if (region === null) {
        this.$axios.post('/api/member/list', {
          memberName: memberName, //  会员名字, 如果传递 模糊查询
          memberPhone: memberPhone, // 会员电话, 如果传递 模糊查询
          page: currPage, // 当前页-必传
          pageSize: 5 // 页容量-必传
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response.data.data.list)
          console.log('查询啊')
          this.memberList = response.data.data.list
        })
      } else {
        this.$axios.post('/api/member/list', {
          memberName: memberName, //  会员名字, 如果传递 模糊查询
          memberPhone: memberPhone, // 会员电话, 如果传递 模糊查询
          page: currPage, // 当前页-必传
          pageSize: 5, // 页容量-必传
          status: region // 状态 1: 正常 或者 0 : 锁定  不传则表示所有状态
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response.data.data.list)
          console.log('查询啊')
          this.memberList = response.data.data.list
        })
      }
    },
    //    重置
    onReset () {
      console.log('Reset!')
    },
    //    页码
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      console.log(`${val}`)
      const pageSize = this.pageSize
      this.$axios.post('/api/member/list', {
        memberName: '', //  会员名字, 如果传递 模糊查询
        memberPhone: '', // 会员电话, 如果传递 模糊查询
        page: val, // 当前页-必传
        pageSize: pageSize, // 页容量-必传
        status: '' // 状态 1: 正常 或者 0 : 锁定  不传则表示所有状态
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.data.data.list)
        this.memberList = response.data.data.list
        this.pageData = response.data.data
        this.pageSize = response.data.data.pageSize
        console.log(this.pageData.total)
      })
    },
    //    删除
    handleDelete (val) {
      this.$axios.post('/api/member/delete', {
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
    //    增加
    add () {
      var id = this.form.id
      var memberName = this.form.memberName
      var memberPhone = this.form.memberPhone
      var status = this.form.status
      this.$axios.post('/api/member/add', {
        id: id,
        memberName: memberName,
        memberPhone: memberPhone,
        openId: 1,
        memberHeader: '/goods/2020/05/08/ce3c6c0d1e804da3a43e4fda7994d967.png', // 图片-必传
        status: status
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response.data.msg)
        console.log(response.data.code)
        this.memberList = response.data.data.list
      })
    },
    //    修改状态
    activeStatus (id, status) {
      this.$axios.post('/api/member/edit', {
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
    const pageSize = this.pageSize
    this.$axios.post('/api/member/list', {
      memberName: '', //  会员名字, 如果传递 模糊查询
      memberPhone: '', // 会员电话, 如果传递 模糊查询
      page: 1, // 当前页-必传
      pageSize: pageSize, // 页容量-必传
      status: '' // 状态 1: 正常 或者 0 : 锁定  不传则表示所有状态
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.data.data.list)
      this.memberList = response.data.data.list
      this.pageData = response.data.data
      this.pageSize = response.data.data.pageSize
      console.log(this.pageData.total)
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
  .Box{
    text-align: center;
    width:1660px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .table,.Search{
    text-align: center;
  }
  .el-form-item__content button:nth-of-type(1){
    margin-left: 40px;
  }
  .Formtitle{
    font-size: 40px;
    height: 50px;
    line-height: 50px;
    margin: 0 0 10px 0;
  }
</style>
