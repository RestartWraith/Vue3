<template>
    <h3>条件渲染</h3>
    <div v-if="flag">你能看见我吗</div>
    <div v-else>那你还是看看我吧</div>
    <div v-if="type === 'A'">A</div>
    <div v-if="type === 'B'">B</div>
    <div v-if="type === 'C'">C</div>
    <div v-else>NOT A/B/C</div>
    <div v-show="flag">你能看见我吗2</div><!-- v-if有更高的切换开销，如果切换频繁，可以使用v-show,如果在运行时绑定条件很少改变,v-if比较合适 -->
</template>
<script>
    export default {
        data(){
            return{
                flag: true,
                type: "D"
            }
        }
    }
</script>