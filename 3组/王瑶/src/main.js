import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
