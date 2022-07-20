import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let routes = [
    {
        path:  '/home',
        name: '主页',
        component: ()=>import('../components/home.vue')
    },
    {
        path:'*',
        redirect:'/home',
    }
]
var router = new VueRouter({
    mode: 'history',
    routes
})
export default router