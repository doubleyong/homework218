import Vue from 'vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/index.js';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue';
import router from './router'

//全局注册
Vue.directive('upper-word',(el,binding)=>{
  el.textContent = binding.value.toUpperCase();
})
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

// 拦截axios发起的所有请求，通过dispatch修改isLoading为true
axios.interceptors.request.use(
    config => {
      console.log('发起请求')
      return config
    },
    err => {
      return Promise.reject(err)
    }
);
// 拦截axios发起的所有响应，通过dispatch修改isLoading为false
axios.interceptors.response.use((config) => {
  console.log('响应回来')
  return config
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
