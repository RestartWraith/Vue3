<template>
    <h3>方法事件处理器</h3>
    <button @click="addCount">add</button>
    <p>count:{{ count }}</p>
</template>

<script>
    export default{
        data(){
            return{
                count:0
            }
        },
        //所有的方法或者函数都放在这里
        methods:{
            addCount(e){
                //vue中的event对象 就是js中的event对象
                console.log(e.target.innerHtml = "Add"+this.count)
                //读取到data里面的数据的方案:this.data里面的属性名
                this.count++
            }
        }
    }
</script>