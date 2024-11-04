import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)
//将Axios挂载到全局
app.config.globalProperties.$axios =axios

app.mount('#app')
