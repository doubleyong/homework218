<template>
  <div id="app">
    <el-container>
      <el-aside width="200px"><ces /></el-aside>
      <el-container>
        <el-header><navs /></el-header>
        <el-main>  <router-view v-if="isRouterAlive" /></el-main>
      </el-container>
    </el-container>

<!--    <div>-->
<!--      {{count2}}-->
<!--      <button @click="add">+</button>-->
<!--      <button @click="sub">-</button>-->
<!--    </div>-->


<!--<login />-->
  </div>
</template>

<script>
  // import {mapGetters,mapActions} from 'vuex'
  // import login from './components/login'
  import navs from './components/index/nav'
  import ces from './components/index/ce'
  // import tables from './components/table'


export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
      return {
        isRouterAlive:true
      }
    },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick( () => {
        this.isRouterAlive = true;
      })
    }
  },
  /*
  data:function() {
    return {
      count2:sessionStorage.getItem('count')
    }
  },
   */

  components: {
    // student,



    // login
    navs,
    ces,

  },

  /*
  created: function() {
    sessionStorage.setItem('count' , '0')
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    // ...mapActions(['add','sub'])
    add() {
      var count = parseInt(sessionStorage.getItem('count'))
      count++
      sessionStorage.setItem('count' , count)
    },
    sub() {
      var count = parseInt(sessionStorage.getItem('count'))
      count--
      sessionStorage.setItem('count' , count)
    }
  }
   */

}
</script>

<style>
#app {

}
</style>
