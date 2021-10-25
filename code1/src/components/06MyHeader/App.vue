<template>
  <div>
    <div class="box">
      <!-- <input type="text" :value="user.color" @input='updateValue($event.target.value)'> -->
      <input type="text" v-model="user.title" />
      <input type="text" v-model="user.color" />
    </div>

    <my-header
      :title="user.title"
      :color="user.color"
      :bgColor="user.bgColor"
    ></my-header>
  </div>
</template>

<script>
import MyHeader from "./MyHeader.vue";

export default {
  components: { MyHeader },
  name: "MyApp",
  el: ".box",
  data() {
    return {
      user: {
        bgColor: "hotpink",
        color: "white",
        title: "SUSE",
      },
    };
  },
  methods: {
    updateValue(val) {
      setTimeout(console.log(1), 30001);

      //   this.user.title = val
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  position: relative;
  top: 100px;
}
input {
  top: 100px;
  /* float: left; */
}
</style>