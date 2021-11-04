<template>
  <h1>App</h1>
  <!-- <a href="#MyAbout">about</a>
  <a href="#MyMovie">Movie</a>
  <a href="#MyHome">Home</a> -->
  <component :is="comName"></component> -->
  <hr>
  <h1>vue-router</h1>
  <p>声名路由链接</p>
  <router-link to="/MyHome">home</router-link>&nbsp;
  <router-link to="/MyMovie">movie</router-link>&nbsp;
  <router-link to="/MyAbout">about</router-link>
  <router-view></router-view>
</template>

<script>


export default {
    name:'MyApp',
    data(){
        return{
            comName:'MyMovie'
        }
    },
    // created(){
    //     window.onhashchange = () => {
    //         switch(location.hash){
    //             case '#MyAbout':
    //                 this.comName = 'MyAbout'
    //                 break
    //             case '#MyHome':
    //                 this.comName = 'MyHome'
    //                 break
    //             case '#MyMovie':
    //                 this.comName = 'MyMovie'
    //                 break
    //         }
    //     }
    // }
}
</script>

<style>

</style>