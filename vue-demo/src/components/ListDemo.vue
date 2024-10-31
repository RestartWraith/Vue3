<template>
    <h3>列表渲染</h3>
    <p v-for="item in list">{{ item }}</p>
    <h3>列表渲染2</h3>
    <div v-for="(item,index) in list2" :key="item.id" >
        <p>id:{{ item.id }}</p> 
        <p>title:{{ item.title }}</p>
        <p>index:{{ index }}</p>
    </div>
    <h3>遍历对象</h3>
    <p v-for="item in userInfo">{{ item }}</p>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                    ['Restart','学堂','IT'],
                    ['Restart2','商城','MALL'],
                ],
                list2:[
                    {id:1,title:'Restart'},
                    {id:2,title:'Restart2'}
                ],
                userInfo:{
                    name:'张三',
                    age:18,
                    sex:"男"
                }
            }
        }
    }
</script>