import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../views/index.vue'
import Menber from '../components/AssociatorList.vue'
import Statistical from '../views/Statistical table.vue'
import AddGoodsInfo from '../views/AddGoodsInfo.vue'
import Goodsinfo from '../views/Goodsinfo.vue'
import AdminList from '../views/AdminList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/index',
    component: Index,
    children: [
      { path: '/AssociatorList', name: 'list', component: Menber },
      { path: '/Statistical', name: 'BIAO', component: Statistical },
      { path: '/AddGoodsInfo', name: 'ADD', component: AddGoodsInfo },
      { path: '/Goodsinfo', name: 'Goodsinfo', component: Goodsinfo },
      { path: '/AdminList', name: 'AdminList', component: AdminList }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
