<template>
  <div class="hello">
    <h3>home</h3>
    <p>count = {{ $store.getters.getCounter }}</p>
    <p>{{ getCounter }}</p>
    <button @click="addClickHandle">增加</button>
    <button @click="addAsyncClickHandle">异步增加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters ,mapMutations} from "vuex"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    ...mapGetters(["getCounter"])
  },
  methods:{
    ...mapMutations(["addCounter"]),
    ...mapActions(["asyncAddCounter"]),
    addClickHandle(){
      //固定调用方式
      // this.$store.commit("addCounter",15)
      this.addCounter(20)
    },
    addAsyncClickHandle(){
        // this.$store.dispatch("asyncAddCounter")
        this.asyncAddCounter()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
