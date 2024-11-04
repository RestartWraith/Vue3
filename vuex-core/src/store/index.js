import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    counter:0
  },
  getters:{
    getCounter(state){
      return state.counter > 0 ? state.counter : "counter数据异常"
    }
  },
  mutations:{
    addCounter(state,number){
      state.counter+=number;
    }
  },
  //为异步操作准备的
  actions:{
    asyncAddCounter({commit}){ //{ commit } 是一个解构赋值语法，用于从 context 对象中提取 commit 方法
      axios.get("http://iwenwiki.com/api/generator/list.php")
      .then(res => {
        commit("addCounter",res.data[0])
      })
    }
  }
})
