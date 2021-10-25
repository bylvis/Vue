<template>
  <input type="text" v-model.number="count">
  <p>{{ count }}*2={{ double }}</p>
</template>

<script>
export default {
    name:'Computed',
    data(){
        return{
            count:1,
        }
    },
    computed:{
        double(){
            return this.count*2
        }
    }
}
</script>

<style>

</style>