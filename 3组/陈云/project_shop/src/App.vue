<template>
  <div id="app">
    <!-- 路由显示位置-->
    <router-view v-if="isRouterAlice"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlice: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlice = false
      this.$nextTick(function () {
        this.isRouterAlice = true
      })
    }
  }
}
</script>

<style>

</style>
