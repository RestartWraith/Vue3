<template>
    <p :style="{color:activeColor,fontSize:fontSize + 'px'}">Style绑定1</p>
    <p :style="styleObject">Style绑定2</p> <!-- 不需要加大括号了，因为本身就是一个对象 -->
    
</template>
<script>

export default{
    data(){
        return{
            activeColor:'green',
            fontSize:30,
            styleObject:{
                color:'red',
                fontSize:'30px'
            }
        }
    }
}
</script>
