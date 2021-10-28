<template>
  <h1>App</h1>
  <hr />
  <life-cycle v-if="flag1" v-show="flag2" :count='count'></life-cycle>
  <button @click="toggle1">点击v-if</button>
  <button @click="toggle2">点击v-show</button>
  <button @click="add">+1</button>
  {{ count }}
</template>

<script>
import lifeCycle from "./lifeCycle.vue";
export default {
  name: "MyApp",
  data() {
    return {
      flag1: true,
      flag2: true,
      count:0
    };
  },
  components: {
    lifeCycle,
  },
  methods: {
    toggle1() {
      this.flag1 = !this.flag1;
    },
    toggle2() {
      this.flag2 = !this.flag2;
    },
    add(){
        this.count++
    }
  },
};
</script>

<style>
</style>