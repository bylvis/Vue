<template>
  <h1>life-cycle</h1>
</template>

<script>
export default {
    name:'lifeCycle',
    props:['count'],
    created(){
        console.log('组件被创建');
    },
    mounted(){
        console.log('组件被渲染');
    },
    unmounted(){
         console.log('组件被销毁');
    },
    updated(){
        console.log('组件被更新');
    }
}
</script>

<style>

</style>