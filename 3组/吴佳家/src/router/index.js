import Vue from 'vue'
import VueRouter from 'vue-router'
import Member from '../views/Member.vue'
import index from '../views/index.vue'
import Login from '../components/Login.vue'
import goods from '../views/goods.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  }, { path: '/Login', name: 'Login', component: Login },
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: '/Member',
        name: 'Member',
        component: Member
      },
      {
        path: '/goods',
        name: 'goods',
        component: goods
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
