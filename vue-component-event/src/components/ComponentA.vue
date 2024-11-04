<template>
    <h3>ComponentA</h3>
    <ComponentB :title="title" :OnEvent="dataFn"/>
    <p>父元素:{{ message }}</p>
</template>
<script>
import ComponentB from './ComponentB.vue'
    export default{
        data(){
            return{
                title:"标题",
                message:""
            }
        },
        components:{
            ComponentB
        },
        methods:{
            dataFn(data){
                console.log(data)
                this.message=data
            }
        }
    }
</script>