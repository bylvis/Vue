<template>
  <div>
    <h3>watch 侦听器的用法</h3>
    <input type="text" class="form-control" v-model.trim="username" />

    <input type="text" v-model.trim='info.name' placeholder="用户名">
    <input type="password" name="" id="" v-model="info.password" placeholder="密码">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyWatch",
  data() {
    return {
      username: "admin",
      info:{
        name:'byl',
        password:'123456'
      }
    };
  },
  watch: {
    username: {
      // handler是一个指定用法 不能该名字
      async handler(newVal,oldVal) {
        console.log(`${oldVal} => ${newVal}`);
        const {data:res} = await axios.get(`https://www.escook.cn/api/finduser/${newVal}}`);
        console.log(res);
      },
      immediate:true
    },
    'info.name':{
      handler(newVal,oldVal){
        console.log(newVal);
      },
      // 监听对象里面属性的变化
      deep:true,
    }
  },
};
</script>

<style lang="less" scoped></style>
