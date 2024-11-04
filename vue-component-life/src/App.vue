<template>
    <keep-alive>
      <component :is="tabComponent"></component>
    </keep-alive>
    <button @click="changeHandle">切换组件</button>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import ComponentA from './components/ComponentA.vue';
// import ComponentB from './components/ComponentB.vue';
const ComponentB = defineAsyncComponent(()=>{
  //异步加载组件
  import('./components/ComponentB.vue')
})
// import UserComponent from "./components/UserComponent.vue";
export default{
  data(){
    return{
      tabComponent:"ComponentA"
    }
  },
  components:{
    // UserComponent,
    ComponentA,
    ComponentB
  },
  methods:{
    changeHandle(){
      this.tabComponent = this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA"
    }
  }
}
</script>

<style scoped>

</style>