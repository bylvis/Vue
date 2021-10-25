<template>
  <div>
    <h1>MyEvent</h1>
    <p>count:{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "MyEvent",
  props:['count'],
  emits:['update:count','countChange'],
  methods:{
      add(){
        //   触发事件 第二个参数作为 传递的参数 会给到前面countChange事件调用的方法作为参数
          this.$emit('update:count',this.count+1)
          this.$emit('countChange',this.count)
        // 不能直接对父组件的count进行操作
        //   this.count++
      }
  },
//   声名事件
  emits:['countChange']
};
</script>

<style>
</style>   