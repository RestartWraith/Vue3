<template>
  <!-- <Header />
  <Main />
  <Aside /> -->
  <!-- <Parent/> -->
   <ComponentA/>
</template>

<script>
// import Header from "./pages/Header.vue";
// import Main from "./pages/Main.vue";
// import Aside from "./pages/Aside.vue";
import Parent from './components/parent.vue';
import ComponentA from './components/ComponentA.vue';
export default {
  components: {
    // Header,
    // Main,
    // Aside
    // Parent,
    ComponentA
  }
}
</script>

<style scoped>

</style>