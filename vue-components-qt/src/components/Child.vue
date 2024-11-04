<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <P>{{ demo }}</P>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
    </ul>
    <p>{{ userinfo }}</p>

</template>
<script>
    export default{
        data(){
            return{

            }
        },
        props:["title","demo","age","names","userinfo"]
    }
</script>
