<template>
  <!-- 显示组件 -->
  <MyComponent/>
  <!-- 这种方式也可以 -->
  <my-component/>
  <div class="container">测试MyComponent中的style标签内的scoped属性</div>
</template>

<script>
//第一步 引入组件
import MyComponent from './components/MyComponent.vue';
export default{
  //第二步 注入组件
  components:{
    // mycompoent:MyComponent k-v形式
    MyComponent
  }
}
</script>
<style scoped>

</style>