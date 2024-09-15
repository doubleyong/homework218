<template>
    <div class="box2">
      <!--顶部工具条-->
      <el-row :gutter="30">
      <el-form v-model="froma">

        <el-col :span="6">
        <div>
          <el-input v-model="froma.memberName" placeholder="会员昵称">
            <template slot="prepend">会员昵称</template>
          </el-input>
        </div>
        </el-col>

      <el-col :span="6">
        <div >
          <el-input v-model="froma.memberPhone" placeholder="手机号" >
            <template slot="prepend">手机号</template>
          </el-input>
        </div>
      </el-col>

        <el-col :span="3">
        <div >
          <el-select v-model="froma.region" placeholder="状态">
            <el-option label="正常" value="1"></el-option>
            <el-option label="异常" value="0"></el-option>
          </el-select>
        </div>
        </el-col>

        <el-col :span="3">
        <div>
          <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </div>
        </el-col>
      </el-form>
      </el-row>
      <!--表格数据-->
      <el-table
          :data="AssociatorList"
          stripe
          style="width: 100%">
          <el-table-column
            prop="memberName"
            label="会员昵称"
            width="260">
          </el-table-column>
          <el-table-column
            prop="memberPhone"
            label="会员手机号"
            width="260">
          </el-table-column>
          <el-table-column
            label="会员头像" width="260">
            <template slot-scope = "scope" >
              <img :src="scope.row.memberHeader" alt="用户头像" class="headerimg">
            </template>
          </el-table-column>
          <el-table-column
            label="会员状态"
            width="260">
            <template slot-scope="scope">
             {{scope.row.status==1?'正常':'锁定'}}
            </template>
          </el-table-column>
          <el-table-column label="创建时间" width="200">
              <template slot-scope= "scope">{{scope.row.createTime | date}}</template>
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
          <el-table-column label="操作" >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row.id)">删除</el-button>
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
          :total='Associator.total'
          :page-size='pageSize'>
        </el-pagination>
        </el-col>
      </el-row>
      <!--模态框-->
      <el-dialog
        title="新增会员"
        :visible.sync="dialogFormVisible"
        width="25%"
        center>
        <el-form :model="AddData" labelPosition="left" labelWidth="80px">
          <el-form-item label="会员头像">
          <el-input clearable size="medium" v-model="AddData.memberHeader" placeholder="会员头像" >
          </el-input>
          </el-form-item>
          <el-form-item label="会员昵称">
          <el-input clearable size="medium" v-model="AddData.memberName" placeholder="会员昵称" >
          </el-input>
          </el-form-item>
          <el-form-item label="会员电话">
          <el-input clearable size="medium" v-model="AddData.memberPhone" placeholder="会员电话" >
          </el-input>
          </el-form-item>
          <el-form-item label="会员编号">
          <el-input clearable size="medium" v-model="AddData.openId" placeholder="会员编号">
          </el-input>
          </el-form-item>
          <el-form-item label="状态">
          <el-select size="medium" v-model="AddData.status">
            <el-option label="正常" value='1'></el-option>
            <el-option label="锁定" value='0'></el-option>
          </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false;addmember()">确 定</el-button>
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
      froma: {
        memberName: '',
        memberPhone: '',
        region: ''
      },
      AddData: {
        memberHeader: '',
        memberName: '',
        memberPhone: '',
        openId: '',
        status: ''
      },
      current: 1,
      pageSize: 3,
      Associator: [],
      AssociatorList: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '100px',
      value: ''
    }
  },
  methods: {
    // 会员删除模块
    handleDelete (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('/api/member/delete', {
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
    //  修改方法
    activeStatus (id, stu) {
      this.$axios.post('/api/member/edit', {
        id: id,
        status: stu // 状态 1: 正常 或者 0 : 锁定  不传则表示所有状态
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.data.code !== 200) {
          return this.$notify.error(res.data.msg)
        } else {
          this.$notify.success(res.data.msg)
          this.reload()
        }
      })
    },
    // 分页方法
    CurrentChange (val) {
      const pageSize = this.pageSize
      this.$axios.post('/api/member/list', {
        memberName: '', //  会员名字, 如果传递 模糊查询
        memberPhone: '', // 会员电话, 如果传递 模糊查询
        page: val, // 当前页-必传
        pageSize: pageSize, // 页容量-必传
        status: ''// 状态 1: 正常 或者 0 : 锁定  不传则表示所有状态
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.AssociatorList = res.data.data.list
      })
    },
    // 搜索方法
    onSearch () {
      const memberName = this.froma.memberName
      const memberPhone = this.froma.memberPhone
      const region = this.froma.region
      this.$axios.post('/api/member/list', {
        memberName: memberName, //  会员名字, 如果传递 模糊查询
        memberPhone: memberPhone, // 会员电话, 如果传递 模糊查询
        status: region // 状态 1: 正常 或者 0 : 锁定  不传则表示所有状态
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.AssociatorList = res.data.data.list
        this.pageSize = res.data.data.pageSize
        this.Associator = res.data.data
      })
    },
    // 新增方法
    addmember () {
      const memberHeader = this.AddData.memberHeader
      const memberName = this.AddData.memberName
      const memberPhone = this.AddData.memberPhone
      const status = this.AddData.status
      const openId = this.AddData.openId
      console.log(this.AddData.status)
      this.$axios.post('/api/member/add', {
        memberName: memberName, //  会员名字, 如果传递 模糊查询\
        openId: openId,
        memberHeader: memberHeader, //  会员头像
        memberPhone: memberPhone, // 会员电话, 如果传递 模糊查询
        status: status // 状态 1: 正常 或者 0 : 锁定  不传则表示所有状态
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.data.code !== 200) {
          return this.$notify.error(res.data.msg)
        } else {
          this.$notify.success(res.data.msg)
          this.reload()
        }
      })
    }
  },
  // 时间过滤器
  filters: {
    date (createTime) {
      const date = new Date(createTime)// 把定义的时间赋值进来进行下面的转换
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return year + '-' + month + '-' + day
    }
  },
  mounted () {
    this.$axios.post('/api/member/list', {
      memberName: '', //  会员名字, 如果传递 模糊查询
      memberPhone: '', // 会员电话, 如果传递 模糊查询
      page: 1, // 当前页-必传
      pageSize: 3, // 页容量-必传
      status: ''// 状态 1: 正常 或者 0 : 锁定  不传则表示所有状态
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res.data.data.list)
      this.$message.info(res.data.msg)
      this.AssociatorList = res.data.data.list
      this.pageSize = res.data.data.pageSize
      this.Associator = res.data.data
    })
  }
}

</script>
<style scope>
  .box2{
    width: auto;
  }
  .headerimg{
    border-radius: 50%;
    width: 50px;
    height: auto;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
    width: 80px;
  }
  .el-select .el-input {
    width: 80px;
  }
  .el-row {
    margin-bottom: 100px;
    margin-top: 50px;
  }
  .el-row:last-child {
     margin-bottom: 0;
   }

</style>
