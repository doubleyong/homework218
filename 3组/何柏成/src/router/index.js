import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Login.vue'
import Login from '../components/Home.vue'



Vue.use(VueRouter)

const router =  new VueRouter({
  // 注意下面是routes，写错了，找了好久
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

//挂载一个导航守卫
//如果没有登录就访问页面，则要跳转到登录页面（这就是导航守卫
router.beforeEach((to, from, next) => {
  //to将要访问到路径
  //from从哪个路径跳转而来
  //next是一个函数，表示放行 next（）放行   next（‘/login’）强制跳转
  
  //login页面没有权限，谁都可以直接访问
  if(to.path === '/login') return next();

  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  //如果没有token就跳转到登录，有就通过
  if (!tokenStr) return next('/login')
  next()



} )


export default router