<template>
  <!-- :id=v-bind:id 以此类推 -->
  <div :id="dynamicID" v-bind:class="msg" v-bind:title="dynamicTitle">测试</div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttr">复制对象属性</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "active",
      dynamicID: "dynamicID",
      dynamicTitle: "hha",//如果值为 null 或者 undefined那么div将会移除title属性
      isButtonDisabled: true,
      objectOfAttr: {
        dynamicID: "dynamicID",
        dynamicTitle: "wrapper",
      }
    }
  }
}
</script>
