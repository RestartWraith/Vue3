<template>
  <!-- <SlotsBase>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </SlotsBase> -->
  <!-- <SlotsTwo>
     <template v-slot:header> v-slot:可以简写成#
    <template #header> 
      <h3>{{ message }}</h3>
    </template>
    <template v-slot:main>
      <p>内容</p>
    </template>
  </SlotsTwo> -->
  <SlotAttr>
    <template #header="slotProps">
      <h3>{{ currentTest }}-{{ slotProps.msg }}</h3>
    </template>
    <template #main="slotProps">
      <p>{{ slotProps.job }}</p>
    </template>
  </SlotAttr>
</template>
<script>
import SlotsBase from './components/SlotsBase.vue'
import SlotsTwo from './components/SlotsTwo.vue';
import SlotAttr from './components/SlotAttr.vue';
    export default{
      data(){
        return{
          message:"插槽内容续集",
          currentTest:"测试内容"
        }
      },
      components:{
        SlotsBase,
        SlotsTwo,
        SlotAttr
      }
    }
</script>
<style scoped>

</style>