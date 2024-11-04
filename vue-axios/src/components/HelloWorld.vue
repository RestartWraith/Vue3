<template>
  <div class="hello"></div>  
  <p>{{ chengpin.title }}</p>
</template>
<script>
import axios from 'axios';
import querystring from 'querystring'
  export default{
    name:"HelloWorld",
    data(){
      return{
        chengpin:{}
      }
    },
    mounted(){
    //   //get请求方式
    //   axios({
    //     method:"get",
    //     url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
    //   }).then(res=>{
    //     this.chengpin = res.data.chengpinDetails[0]
    //   })
    //   //post请求方式
    //   axios({
    //     method:"post",
    //     url:"http://iwenwiki.com/api/bluberrypai/login.php",
    //     data:querystring.stringify({
    //       user_id:"iwen@qq.com",
    //       password:"iwen123",
    //       vertification_code:"crfvw"
    //     })
    //   }).then(res=>{
    //     console.log(res.data)
    //   })
    // }
    
    //简洁方式
    axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
      .then(res => {
        console.log(res.data);
      })
    }

    axios.post("http://iwenwiki.com/api/bluberrypai/login.php",querystring.stringify({
        user_id:"iwen@qq.com",
        password:"iwen123",
        vertification_code:"crfvw"
    })).then(res => {
      console.log(res.dta)
    })
  }
</script>

<style scoped>

</style>
