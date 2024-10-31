<template>
    <h3>key属性添加到v-for中</h3>
    <P v-for="(item,index) in names" :key="index">{{item}}</P>
    <!-- key推荐使用id,即所有数据的唯一索引 -->
    <div v-for="(item,index) in list2" :key="item.id" > 
        <p>id:{{ item.id }}</p> 
        <p>title:{{ item.title }}</p>
        <p>index:{{ index }}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                names:["Restart","学堂","IT"],
                list2:[
                    {id:1,title:'Restart'},
                    {id:2,title:'Restart2'}
                ],
            }
        }
    }
</script>