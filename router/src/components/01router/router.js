// 1.导入两个方法
// creatRouter 方法用于创建路由的实例对象
// creatWebHashHistory 用于指定路由的工作模式（hash）
import {createRouter,createWebHashHistory} from 'vue-router'

import MyHome from "./MyHome.vue"
import MyMovie from './Movie.vue'
import MyAbout from './About.vue'

const router = createRouter({
    // 路由工作模式
    history:createWebHashHistory(),
    // 路由匹配规则
    routes:[
        {
            // path 是 hash地址 component是要展示的组件
            path:'/MyHome',component:MyHome,
            path:'/MyAbout',component:MyAbout,
            path:'/MyMovie',component:MyMovie
        }
    ]
})
export default router