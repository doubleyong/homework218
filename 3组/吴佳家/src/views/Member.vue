<template>
  <div class="memberBox">
<!--    表单区域开始-->
    <el-form :inline="true" class="demo-form-inline Search">
      <el-form-item label="会员昵称">
        <el-input v-model="memberName" placeholder="会员昵称" class="memberName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="memberPhone" placeholder="手机号" class="memberPhone"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="memberStatus" placeholder="状态" class="memberStatus">
          <el-option label="正常" value="shanghai"></el-option>
          <el-option label="异常" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
<!--    表单区域结束-->
<!--    表格区域开始-->
    <el-table :data="memberList" style="width: 100%" class="table">
      <el-table-column prop="id" label="编号" width="260"></el-table-column>
      <el-table-column prop="memberName" label="会员昵称" width="260"></el-table-column>
      <el-table-column prop="memberPhone" label="会员手机号" width="260"></el-table-column>
      <el-table-column label="会员头像" width="260">
        <template slot-scope= "scope"><img :src="scope.row.memberHeader" alt="" class="memberHeader"></template>
      </el-table-column>
      <el-table-column label="会员状态" width="260">
        <template slot-scope= "scope">{{scope.row.status == 1 ? '正常' : '异常'}}</template>
      </el-table-column>
      <el-table-column label="创建时间" width="260">
        <template slot-scope= "scope" value-format="yyyy-MM-dd">{{scope.row.createTime}}</template>
      </el-table-column>
      <el-table-column label="操作" width="258">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" round>编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.row.id)" round>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--    表格区域结束-->
<!--    页码区域开始-->
    <div class="block page">
      <el-pagination background
                     :current-page="currentPage"
                     :page-sizes="[5, 10, 15, 20]"
                     layout=", sizes, prev, pager, next, jumper" :total="pageData.total">
      </el-pagination>
    </div>
<!--    页码区域结束-->
  </div>
</template>

<script>
export default {
  name: 'Member',
  props: {
    msg: String
  },
  data: function () {
    return {
      labelPosition: 'left',
      memberList: [],
      pageData: [],
      memberName: '',
      memberPhone: '',
      memberStatus: '',
      currentPage: 1 // 翻页的步长
      // pageSize: 5 // 页容量
    }
  },
  mounted () {
    // const pageSize = this.pageSize
    this.$axios.post('/api/member/list', {
      memberName: '', // 会员名字
      memberPhone: '', // 会员电话
      page: 1, // 当前页
      // pageSize: 10, // 页容量
      status: 0 // 状态
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.data)
      this.memberList = response.data.data.list
      this.pageData = response.data.data.data
      // this.pageSize = response.data.data.pageSize
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style scoped>
  li{
    list-style-type: none
  }
  .el-form{
    width: 100%;
  }
  .el-form .demo-form-inline .Search{
    width: 100%;
    height: 80px !important;
  }
  .Search{
    height: 40px!important;
    line-height: 40px;
    /*display: flex;*/
    /*align-content: center;*/
    margin-top: 30px;
    /*margin-bottom: 80px;*/
  }
  .el-form-item{
    float: left;
    width: 400px;
    height: 40px;
  }
  .el-form-item__content{
    float: left;
    width: 400px;
  }
  .demo-form-inline{
    display: block;
    overflow: hidden;
    height: 80px;
  }
  .memberinput{
    float: right !important;
  }
</style>
