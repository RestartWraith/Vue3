import {createRouter,createWebHashHistory} from "vue-router"
import HomeView from "@/views/HomeView.vue"
import About from "@/views/About.vue"
//路由配置文件

//配置信息中需要页面相关配置

const routes =[
    {
        path:"/",
        component:HomeView
    },
    {
        path:"/about",
        component:About
    }
]

const router =createRouter({
    /**
     * createWebHashHistory 访问home:http://localhost:8080/#/,访问about:http://localhost:8080/about
     * 原理:a标签锚点链接
     */
    /**
     * createWebHistory 访问home:http://localhost:8080/,访问about:http://localhost:8080/about
     * 此种方式需要配合后台做重定向，否则会出现404问题
     * 原理:H5 pushState()
     */
    history:createWebHashHistory(),
    routes
})

//导出 才能让外部引用
export default router