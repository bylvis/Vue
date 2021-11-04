<template>
  <table class="table table-striped">
  <thead>
    <tr>
      <slot name="header"></slot>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in data" :key="item.id">
        <slot name="body" :row="item" :index="index"></slot>
    </tr>
  </tbody>
</table>
  
  
</template>

<script>
export default {
  name: "MyTable",
  props: {
    data: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style>
</style>