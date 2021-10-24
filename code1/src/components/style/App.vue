<template>
  <div>
    <h1>这是App组件</h1>
    <p>这是app中的p</p>
    <p>这是app中的p</p>
    <i>这是app中的i</i>
    <hr />
    <my-list></my-list>
  </div>
</template>
<script>
import MyList from "./List.vue";

export default {
  name: "MyApp",
  components: {
    MyList,
  },
};
</script>
<style  scoped lang="less">
    p {
    color: green;
    }
    :deep(i) {
    color: hotpink;
    }
</style>