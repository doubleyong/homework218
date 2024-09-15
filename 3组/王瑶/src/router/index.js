import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import index from '../views/index.vue'
import memberList from '../views/memberList.vue'
import goodsList from '../views/goodsList.vue'
import addGoods from '../views/addGoods.vue'
import Home from '../views/Home.vue'
import brandList from '../views/brandList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        path: '/memberList',
        name: 'memberList',
        component: memberList
      },
      {
        path: '/goodsList',
        name: 'goodsList',
        component: goodsList
      },
      {
        path: '/addGoods',
        name: 'addGoods',
        component: addGoods
      },
      {
        path: '/brandList',
        name: 'brandList',
        component: brandList
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
