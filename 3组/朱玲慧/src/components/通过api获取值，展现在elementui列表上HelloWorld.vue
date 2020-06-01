<template>
  <div class="hello">
    <el-table
      :data="productList"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="Id"
        label="Id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ProductName"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
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
      productList: []
    }
  },
  mounted () {
    this.$axios.post('/api/getProduct', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response)
      this.productList = response.data
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
