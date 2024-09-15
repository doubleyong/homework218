import Vue from 'vue'
import VueRouter from 'vue-router'
import tables from "../components/index/table"
import chart from '../components/index/chart'
import add from '../components/index/addGoods'
import login from '../components/login'

Vue.use(VueRouter)

const routes = [
    {
        path: 'tables',
        name: 'tables',
        component: tables,
    },
    {
        path: 'login',
        name: 'login',
        component: login,
    },
    {
        path: '/',
        name: 'charts',
        component: chart,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: 'add',
        name: 'addGoods',
        component: add
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes
})
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//         if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//             next();
//         }
//         else {
//             next({
//                 path: '/login',
//                 query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
//         }
//     }
//     else {
//         next();
//     }
// })
export default router