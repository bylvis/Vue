<template>
  <h1>{{ count }} *2={{ double }}</h1>
  <h5>{{ name }}</h5>
  <input type="text" v-model.number="number" />
</template>

<script>
export default {
  name: "MyCount",
  data(){
      return {
          number:1,
      }
  },
  props: {
    count: [Number, Object],
    name: {
      type: [Number, String],
      // required:true,
      default: "success",
      validator(value) {
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
};
</script>

<style>
</style>