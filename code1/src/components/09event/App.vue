<template>
  <h1>App根组件</h1>
  <p>App的count:{{ count }}</p>
  <button @click="add">+1</button>
  <hr />
  <!-- 监听事件 -->
  <my-event @countChange="getCount" v-model:count="count"></my-event>
</template>

<script>
import MyEvent from "./Event.vue";
export default {
  name: "MyApp",
  components: { MyEvent },
  methods: {
    getCount(val) {
      console.log("触发了countChange事件",val);
    },
    add(){
        this.count++
    }
  },
  data(){
      return {
          count:0
      }
  }
};
</script>

<style>
</style>
// countChange是子组件里的一个自定义事件 在触发点击事件之后 调用add方法 就会触发这个事件 从而调用getCount方法