<template>
    <h3>{{ user.name }}</h3>
    <P>{{ userContent }}</P>
</template>
<script>
    export default{
        data(){
            return{
                user:{name:'张三1111111',age:18}
            }
        },
        //计算属性
        computed:{
            userContent(){
                return this.user.name>0 ? 'yes':'no'
            }
        },
        //放函数或者方法 计算不会缓存，如果有大量计算 推荐使用computed 一般来说用computed比较好
        methods:{
            userContent(){
                return this.user.name>0 ? 'yes':'no'
            }
        }
    }
</script>