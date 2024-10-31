<template>
    <h3>事件修饰符</h3>
    <a href="http://www.baidu.com" @click.prevent="clickHandler">百度</a>
    <div @click="clickDiv">
        <p @click.stop="clickP">测试冒泡</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            clickHandler(e){
                // e.preventDefault();
                // alert('阻止默认行为');
                console.log('点击了')
            },
            clickDiv(){
                console.log('点击了div')
            },
            clickP(){
                console.log('点击了p')
            }
        }
    }
</script>