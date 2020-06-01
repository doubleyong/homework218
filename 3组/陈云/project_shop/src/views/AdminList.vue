<template>
    <div>
      <!--顶部工具条-->
      <!--表格数据-->
      <el-table
        :data="adminlist"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="管理员名称"
          width="260">
        </el-table-column>
        <el-table-column
          prop="id"
          label="管理员ID"
          width="260">
        </el-table-column>
        <el-table-column
          prop="password"
          label="管理员密码"
          width="260">
        </el-table-column>
        <el-table-column label="创建时间" width="200">
          <template slot-scope= "scope">{{scope.row.createTime | date}}</template>
        </el-table-column>
        <el-table-column label="最后登录时间" width="200">
          <template slot-scope= "scope">{{scope.row.lastLoginTime | date}}</template>
        </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="warning"
              @click="changepwd(scope.row.id,scope.row.name);dialogFormVisible = true">修改</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="adminDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--页码-->
      <el-row :gutter="50" >
        <el-col :span="6" :offset="14">
          <el-pagination
            background
            @current-change="CurrentChange"
            layout="total, prev, pager, next, jumper"
            :current-page.sync='current'
            :total='adminlistpage.total'
            :page-size='pagesize'>
          </el-pagination>
        </el-col>
      </el-row>
      <!--模态框-->
      <el-dialog
        title="修改密码"
        :visible.sync="dialogFormVisible"
        width="25%"
        center>
        <el-form :model="changePwd" labelPosition="left" labelWidth="80px">
          <el-form-item label="当前账户">
            <el-input clearable size="medium" v-model="changePwd.name2" placeholder="名字" >
            </el-input>
          </el-form-item>
          <el-form-item label="旧密码">
            <el-input clearable size="medium" v-model="changePwd.oldpwd" placeholder="旧密码" >
            </el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input clearable size="medium" v-model="changePwd.newpwd" placeholder="新密码" >
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false;truechange()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
export default {
  name: '',
  inject: ['reload'],
  data () {
    return {
      adminlist: '',
      page: 1,
      pagesize: 5,
      adminlistpage: [],
      current: 1,
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '100px',
      changePwd: {
        name2: '',
        oldpwd: '',
        newpwd: ''
      },
      ID: ''
    }
  },
  methods: {
    CurrentChange (val) {
      const page = this.pagesize
      this.$axios.post('/api/admin/list', {
        page: val, // 当前页
        pageSize: page // 页容量
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res.data.data)
        this.adminlist = res.data.data.list
      })
    },
    adminDelete (id) {
      this.$confirm('此操作将永久删除该管理员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('/api/admin/delete', {
          id: id //  会员名字, 如果传递 模糊查询
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if (res.data.code !== 200) {
            return this.$message.error('失败')
          } else {
            this.$message.success('成功')
            this.reload()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    changepwd (id, adminname) {
      this.changePwd.name2 = adminname
      this.ID = id
    },
    truechange () {
      const oldpwd = this.changePwd.oldpwd
      const newpwd = this.changePwd.newpwd
      const id = this.ID
      this.$axios.post('/api/admin/change/pwd', {
        id: id,
        oldPwd: oldpwd,
        newPwd: newpwd
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.data.code !== 200) {
          this.$message.error(res.data.msg)
          this.reload()
        } else {
          this.$message.success(res.data.msg)
          this.reload()
        }
      })
    }
  },
  filters: {
    date (createTime) {
      const date = new Date(createTime)// 把定义的时间赋值进来进行下面的转换
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hours = date.getHours()
      const Minutes = date.getMinutes()
      return year + '/' + month + '/' + day + '-' + hours + ':' + Minutes
    },
    date2 (lastLoginTime) {
      const date = new Date(lastLoginTime)// 把定义的时间赋值进来进行下面的转换
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return year + '-' + month + '-' + day
    }
  },
  mounted: function () {
    this.$axios.post('/api/admin/list', {
      page: 1, // 当前页
      pageSize: 5 // 页容量
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res.data.data)
      this.adminlist = res.data.data.list
      this.adminlistpage = res.data.data
    })
  }
}
</script>
<style scope>

</style>
