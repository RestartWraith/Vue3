<template>
  <!-- <ComponentEvent/> -->
  <!-- <Main/> -->
   <!-- <ComponentA/> -->
    <AttrComponent class="attr-container"/>
</template>
<script>
import ComponentEvent from './components/ComponentEvent.vue';
import Main from './components/Main.vue';
import ComponentA from './components/ComponentA.vue'
import AttrComponent from './components/AttrComponent.vue';
export default{
  components:{
    ComponentEvent,
    Main,
    ComponentA,
    AttrComponent
  }
}
</script>
<style scoped>

</style>