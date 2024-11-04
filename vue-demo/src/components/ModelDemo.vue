<template>
    <h3>表单输入绑定</h3>
    <form>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <!-- <input type="checkbox" id="checkbox" v-model.lazy="checked"> 失去焦点才改变 -->
        <label for="checkbox">{{ checked }}</label>
    </form>
</template>
<script>
    export default{
        data(){
            return{
                message:"",
                checked:false
            }
        }
    }
</script>