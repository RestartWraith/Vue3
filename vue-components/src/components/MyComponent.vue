<template>
    <!-- 组件中必须存在的是template 其他可以省略 -->
    <div class="container">{{ message }}</div>
  </template>
  <script>
    export default{
      data(){
        return{
          message:"组件基础组成"
        }
      }
    }
  </script>
  <!-- scoped:让当前样式只在当前组件生效 -->
  <style scoped>
    .container{
      font-size: 30px;
      color: red;
    }
  </style>