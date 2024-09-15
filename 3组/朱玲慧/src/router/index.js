import Vue from 'vue'
import VueRouter from 'vue-router'
import Member from '../views/Member'
import index from '../views/index'
import Login from '../views/Login'
import goods from '../views/goods'

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

  // ,
  // {
  //   path: '/member',
  //   name: 'Member',
  //   component: () => import('../views/Member.vue')
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
