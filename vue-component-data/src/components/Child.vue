<template>
    <h3>Child</h3>
    <p>{{ fullMessage }}</p>
    <p>{{ message }}</p>
    <p>{{ globalData }}</p>
  </template>
  
  <script>
  export default {
    inject: ["message", "globalData"], // 注入 globalData
    data() {
      return {
        fullMessage: this.message
      };
    }
  };
  </script>