import axios from 'axios';
import path from './path';
//存放所有网络请求
const api = {
  // 成品详情地址
  getChengpin() {
    return axios.get(path.baseUrl + path.chengpin);
  }
};

export default api;