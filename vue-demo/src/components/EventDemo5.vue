<template>
    <h3>事件穿参</h3>
    <!-- 如果原本已经有了参数，还需要用到event事件，那么一定要在第二个参数加上$event -->
    <p @click="getNameHandler(item,$event)" v-for="(item,index) of names" :key="index">{{ item }}</p>
</template>

<script>
    export default{
        data(){
            return{
                names:["restart","rxw","white"]
            }
        },
        //所有的方法或者函数都放在这里
        methods:{
            getNameHandler(msg,e){
                console.log(msg);
                console.log(e)
            }
        }
    }
</script>