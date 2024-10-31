<template>
  <h3>{{ msg }}</h3>
  <h3>{{ number + 1 }}</h3>
  <h3>{{ ok ? "yes" : "no" }}</h3>
  <h3>{{ message.split("").reverse().join("") }}</h3>
  <!-- 这是一个语句 会报错 <p3>{{ var a = 1 }}</p3> -->
   <p>{{ rawHtml }}</p>
   <p v-html="rawHtml"></p>
</template>

<script>
  export default{
    data(){
      return{
        msg: 'test msg............',
        number:10,
        ok: true,
        message:"大家好",
        rawHtml:"<a href='www.baidu.com'>百度</a"
      }
    }
  }
</script>

