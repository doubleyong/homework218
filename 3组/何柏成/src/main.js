import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//导入字体图标文件
import './assets/font_p16uk9nmikm/iconfont.css'

//导入全局样式
import './assets/css/global.css'



//导入axios
import axios from 'axios'

//配置请求的根路径
axios.defaults.baseURL = 'http://106.12.22.92:8080/swagger-ui.html'
//请求拦截器 config为请求对象他包含很多属性  最后必须return config
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config

})



//然后挂载到vue原型上
Vue.prototype.$http = axios



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')