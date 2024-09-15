<template>
  <div class="hello">
    <ul>
      <li :key="item.Id" v-for="item in productList">
        {{item.Id}}:{{item.ProductName}}:{{item.price}}
      </li>
    </ul>
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
