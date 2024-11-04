<template>
    <h3>Slot3再续集</h3>
    <slot name="header" :msg="childMessage"></slot>
    <!-- 子传父再传子 -->
     <slot name="main" :job="jobMessage"></slot>
</template>
<script>
    export default{
        data(){
            return{
                childMessage:"子组件数据",
                jobMessage:"job"
            }
        }
    }
</script>