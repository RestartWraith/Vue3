<template>
    <h3>数组变化监听</h3>
    <button @click="addListHandle">添加数据</button>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                names:["iwen","xiaoming","xiaohong"]
            }
        },
        methods:{
            addListHandle(){
                //引起ui自动更新的方法
                // this.names.push("xiaozhang")

                //不会引起UI自动刷新 
                // 使用concat方法返回的新数组赋值给this.names 数组的concat方法不会改变原数组，而是返回一个新的数组
                this.names=this.names.concat(["sakura"])
                console.log(this.names)
            }
        }
    }
</script>
