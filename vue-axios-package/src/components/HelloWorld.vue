<script setup>
import { onMounted, ref } from 'vue'
import api from '../api/index'

defineProps({
  msg: String,
}),
onMounted(()=>{
  api.getChengpin().then(res=>{
    console.log(res.data);
  })
})

const count = ref(0)
</script>

<template>

  <div class="card">
    
  </div>

  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
