<template>
    <div ref="container" class="container">{{ content }}</div>
    <button @click="getElementHandle">获取元素</button>
    <input type="text" ref="username">
</template>
<script>
    /**
     * 内容改变:{{ 模板语法 }}
     * 属性改变:v-bind: 指令
     * 事件:v-on:click
     * 
     * 如果没有特别的需求，不要操作DOM(ref)，消耗性能
     */
    export default{
        data(){
            return{
                content:"内容"
            }
        },
        methods:{
            getElementHandle(){
                //innerHtml:原生JS属性
                this.$refs.container.innerHTML="哈哈哈"
                console.log(this.$refs.username.value)
            } 
        }
    }
</script>