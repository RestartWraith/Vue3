<template>
    <!-- 必须是唯一根元素 -->
    <h3>透传属性</h3>
</template>
<script>
    export default{
        //禁止继承
        inheritAttrs:false
    }
</script>
<style scoped>
.attr-container{
    color: aquamarine;
}
</style>