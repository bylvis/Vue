<template>
    <h1>App根组件</h1>
    <hr>
    <queen></queen>
</template>

<script>
import Queen from './components/Queen.vue'

export default {
  name: 'App',
  components: {
    Queen
  }
}
</script>
