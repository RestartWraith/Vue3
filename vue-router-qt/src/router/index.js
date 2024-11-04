import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    //重定向:默认显示/about/us的页面
    redirect:"/about/us",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children:[
      {
        //二级导航的路径不要加 /
        path:'us',
        component:()=> import('../views/AboutSub/AboutUs.vue')
      },
      {
        //二级导航的路径不要加 /
        path:'info',
        component:()=> import('../views/AboutSub/AboutInfo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
