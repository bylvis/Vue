<template>
  <div>
    <h3>watch 侦听器的用法</h3>
    <input type="text" class="form-control" v-model.trim="username" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyWatch',
  data() {
    return {
      username: 'admin',
    }
  },
  watch: {
     username(newVal,oldVal){
            console.log(`${oldVal} => ${newVal}`);
            const res = axios.get(`https://www.escook.cn/api/finduser/${this.username}`)
            console.log(res);
        }
  },
}
</script>

<style lang="less" scoped></style>
