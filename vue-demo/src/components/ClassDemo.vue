<template>
    <p :class="{'active':isActive,'text-danger':hasError}">Class样式绑定</p>
    <p :class="classObject">对象Class样式绑定</p>
    <p :class="[arrActive,arrHasError]">数组Class样式绑定</p>
    <p :class="[isActive?'active':'']">三目运算符样式绑定</p>
    <!-- 数组和对象嵌套时，只能是数组嵌套对象，不能实对象嵌套数组 <div :class="[{'active':isActive,errorClass}]"></div> -->
    <p :class="[isActive?'active':'',{'text-danger':hasError}]">数组嵌套对象样式绑定</p>
</template>
<script>
    export default{
        data(){
            return{ 
                isActive:true,
                hasError:false,
                classObject:{
                    'active':true,
                    'text-danger':true
                },
                arrActive:"active",
                arrHasError:"text-danger"
            }
        }
    }
</script>
<style>
    .active{
        font-size:20px;
    }
    .text-danger{
        color:red;
    }
</style>