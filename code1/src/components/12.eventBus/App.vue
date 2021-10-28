<template>
  <h1>App</h1>
  <hr>
  <left></left>
  <right></right>
</template>

<script>
import left from './left.vue'
import right from './right.vue'
export default {
    name:'MyApp',
    components:{
        left,
        right
    }
}
</script>

<style>

</style>