<template>
  <h1>right接收</h1>
  {{ num }}
</template>

<script>
import bus from './eventBus'
export default {
    name:'right',
    data(){
        return {
            num:0
        }
    },
    created(){
        // 接收方给 bus挂载一个事件 接收count 赋值给自己的num
        bus.on('countChange',count =>{
            this.num = count
        })
    }
}
</script>

<style>

</style>