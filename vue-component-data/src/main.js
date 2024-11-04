// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//app:vue的示例对象
//在一个Vue项目中，有且只有一个Vue实例对象
const app = createApp(App)
//App:根组件
app.provide("globalData","我是全局数据")
//挂载应用
app.mount('#app')
