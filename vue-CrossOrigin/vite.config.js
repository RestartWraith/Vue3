import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  devServer:{
    proxy:{
      '/api':{
        target:'http://iwenwiki.com', //存放跨域的地址,放域名即可
        changeOrigin:true
      }
    }
  }
})
