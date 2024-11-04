<template>
    <h3>Child</h3>
    <button @click="clickEventHandle">子给父传数据</button>
</template>
<script>
  export default{
    methods:{
        clickEventHandle(){
            //子传父:自定义事件this.$emit
            //父传子:props
            this.$emit("someEvent","child数据")
        }
    }
  }
</script>
