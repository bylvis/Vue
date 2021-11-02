<template>
  
    <button type="button" class="btn btn-success" @click="comName='MyHome'">首页</button>
    <button type="button" class="btn btn-primary" @click="comName='MyMovie'">电影</button>
  <!-- 使用组件 -->
  <!-- <my-home></my-home>
  <my-movie></my-movie> -->
  <!-- 保留组件生命 -->
  <keep-alive>
     <component :is="comName"></component>
  </keep-alive>
</template>

<script>
import MyHome from './home.vue'
import MyMovie from './movie.vue'

export default {
    name:'MyApp',
    data(){
        return{
            comName:'MyHome'
        }
    },
    components:{
        MyHome,
        MyMovie
    }
}
</script>

<style>

</style>