<template>
    <h3>监听器</h3>
    <p>{{ message }}</p> <!--响应式数据-->
    <button @click="updateHandle">修改数据</button>
</template>
<script>
export default {
    data(){
        return{
            message:'hello world'
        }
    },
    methods:{
        updateHandle(){
            this.message="update success! hello vue3"
        }
    },
    watch:{
        //newValue:新值(改变后),oldValue:旧值(改变前)
        message(newValue,oldValue){ //方法名需要和监听的数据名一致
            console.log('newValue:'+newValue,'oldValue:'+oldValue)
        }
    }
}

</script>
