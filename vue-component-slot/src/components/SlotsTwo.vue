<template>
    <h3>slot续集</h3>
    <slot name="header">默认值，如果有参数传递则这段文本不显示</slot>
    <hr>
    <slot name="main">默认值，如果有参数传递则这段文本不显示</slot>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
