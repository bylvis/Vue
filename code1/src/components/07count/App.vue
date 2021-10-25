<template>
  <my-count :count="'89'" :name="'danger'"></my-count>
</template>

<script>
import MyCount from "./MyCount.vue";

export default {
  components: { MyCount },
  name: "MyApp",
  data() {
    return {
      count: 99,
      name: "baiyulong",
    };
  },
};
</script>

<style>
</style>