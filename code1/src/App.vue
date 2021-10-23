<template>
  <div>
    <h1>这是<i>App.vue </i>根组件</h1>
    <h3>asdasd--{{ username }}</h3>
    <h2>{{ count }}</h2>
    <button @click='addCount'>add</button>
    <hello-world></hello-world
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  name:'MyApp',
  data(){
    return{
      username:'byl',
      count:0,
    }
  },
  methods:{
    addCount(){
      this.count++
    }
  }
}
</script>
<style lang='less'>
    h1{
      color:rgb(6, 77, 77);
      i{
        color:red;
        font-style:normal;
      }
    }
</style>