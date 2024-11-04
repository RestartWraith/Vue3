<template>
    <h3>Parent</h3>
    <child :title="message" demo="test" :age="age" :names="names" :userinfo="userinfo"/>
</template>
<script>
import child from './child.vue';
    export default{
        data(){
            return{
                message:"动态数据",
                age:20,
                names:["Restart","RXW","SXX"],
                userinfo:{
                    name:"Restart",
                    age:21
                }
            }
        },
        components:{
            child
        }
    }
</script>
