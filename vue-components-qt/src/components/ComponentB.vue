<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p>{{ names }}</p>
    <button @click="updateHandle">修改数据</button>
</template>
<script>
    export default{
        data(){
            return{
                
            }
        },
        props:{ 
            title:{
                type:[String,Number,Array,Object], //传入这几个类型都可以兼容
                Required:true //代表为必选项 必须填写
            },
            age:{
                type:Number,
                default:0
            },
            //数字和字符串可以直接使用default,但是如果是数组和对象,必须通过工厂函数返回默认值
            names:{
                type:Array,
                default(){
                    return ["空"]
                }
            }
        },
        methods:{
            updateHandle(){
                console.log(this.title)
                // this.title="新数据" props是只读的 不能修改,会报错。即不允许修改父元素传过来的数据
            }
        }
    }
</script>