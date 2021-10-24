<template>
  <div>
    <h1>这是<i>App.vue </i>根组件</h1>
    <h3>asdasd--{{ username }}</h3>
    <h2>{{ count }}</h2>
    <button @click='addCount'>add</button>
    <HelloWorld></HelloWorld>
    <hr>
    <global></global>
    <hr>
    <Myzujian></Myzujian>
    
  </div>
</template>
<script>


import global from './components/globalReg/global.vue'
import jubu from './components/privateReg/jubu.vue'


export default {
  components: { 
     global, 
    'Myzujian':jubu,
  },
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
  },
  
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