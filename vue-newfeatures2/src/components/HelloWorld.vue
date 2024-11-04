<template>
  <!-- 以前只允许一个外层根节点 -->
  <div class="hello">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue';

export default {
  name: 'HelloWorld',
  setup(){
    //比以前有优势，以前同一个生命周期函数只能存在一个，现在可以出现多个
    onMounted(()=>{
      console.log("生命周期1")
    })
    onMounted(()=>{
      console.log("生命周期2")
    })

    const message = inject("message")
    return{
      message
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
