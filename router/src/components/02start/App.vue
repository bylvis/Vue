<template>
  <h1>vue-router</h1>
  <p>声名路由链接</p>
  <router-link to="/MyHome">home</router-link>&nbsp;
  <router-link to="/MyMovie">movie</router-link>&nbsp;
  <router-link to="/MyAbout">about</router-link>
  <!-- 路由占位符 -->
  <router-view></router-view>
</template>

<script>

export default {
    name:'MyApp',
}
</script>

<style>

</style>