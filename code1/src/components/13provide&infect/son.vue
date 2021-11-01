<template>
<div>
  <h1>SON</h1>
  <p>color{{ color.value }}</p>
  <grandson></grandson>
  </div>
</template>

<script>
import grandson from './grandson.vue'

export default {
    inject:['color'],
    data(){
        return{

        }
    },
    components: { grandson },
    name:'SON',
    
}
</script>

<style>

</style>