<template>
    <h3>ComponentA</h3>
    <ComponentB :title="title" :age="age" :names="names"/>
</template>
<script>
import ComponentB from './ComponentB.vue';
    export default{
        data(){
            return{
                title:"标题",
                age:20,
                names:["Restart","Alice","Mike"]
            }
        },
        components:{
            ComponentB
        }
    }
</script>