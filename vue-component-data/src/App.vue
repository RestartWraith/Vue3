<template>
  <h3>祖宗</h3>
  <Parent/>
</template>
<script>
import Parent from './components/Parent.vue'
  export default{
    data(){
      return{
        message:"爷爷的财产!!!!!"
      }
    },
    // provide:{
    //   message:"爷爷的财产"
    // },
    provide(){
      //使用函数的形式
      return{
        message:this.message
      }
    },
    components:{
      Parent
    }
  }
</script>
