<template>
  <h1>left发送{{ count }}</h1>
  <button @click="add">+1</button>
</template>

<script>
import bus from './eventBus'


export default {
    name:'left',
    data(){
        return{
            count:0
        }
    },
    methods:{
        add(){
            this.count++
            bus.emit('countChange',this.count)
        }
    }
    
}
</script>

<style>

</style>