<template>
  <h1 style="text-align: center">App</h1>
  <hr />
  <div class="box">
    <my-get></my-get>
    <my-post></my-post>
  </div>
</template>

<script>

import MyGet from "./get.vue";
import MyPost from "./post.vue";
export default {
  name: "MyApp",
  components: {
    MyGet,
    MyPost,
  },
};
</script>

<style>
.box {
  display: flex;
  justify-content: space-evenly;
}
</style>