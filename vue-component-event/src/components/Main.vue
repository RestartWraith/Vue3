<template>
    <h3>Main主页面</h3>
    <SearchComponent @searchEvent="getSearch"/>
    <p>搜索内容为:{{ search }}</p>
</template>
<script>
import SearchComponent from './SearchComponent.vue';
    export default{
        data(){
            return{
                search:""
            }
        },
        components:{
            SearchComponent
        },
        methods:{
            getSearch(data){
                this.search=data
            }
        }
    }
</script>