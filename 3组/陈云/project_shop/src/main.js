import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Axios from 'axios'
import Echars from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$echars = Echars
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
