<template>
  <div class="hello">
    <p>{{ message }}</p>
    <ul>
      <li v-for="(item,index) in names.list" :key="index">{{ item }}</li>
    </ul>
    <button @click="clickHandle">clickTest</button>
  </div>
</template>

<script>
import { ref,reactive } from 'vue';
  export default{
    name:"HelloWorld",
    props:{
      msg:String
    },
    //组合式Api
    setup(props,context){
      //setup中没有this 如果要用到当前对象,使用context
      console.log(this)
      console.log(context)
      //读取props传递的属性
      console.log(props.msg)

      // ref
      const message = ref("我是消息")
      // reactive 一般用于声明复杂类型 例如对象,数组类型数据
      const names = reactive({
        list:["Restart","Rxw","Frank"]
      })
      //在setup中声明的变量必须在return中返回
      function clickHandle(){
        //通过message的value去修改数据
        message.value="我是新的消息"
      }

      

      return{
        message,
        names,
        clickHandle
      }
    }
  }
</script>