<template>
  <div class="hello">
    <el-table
      :data="memberList"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="memberName"
        label="memberName"
        width="180">
      </el-table-column>
      <el-table-column
        prop="memberPhone"
        label="memberPhone"
        width="180">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="price"-->
<!--        label="价格">-->
<!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      memberList: []
    }
  },
  mounted () {
    this.$axios.post('/api/member/list', {
      memberName: '',
      memberPhone: '',
      page: 1,
      pageSize: 10,
      status: 0
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.data)
      this.productList = response.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    list-style-type: none
  }
</style>
