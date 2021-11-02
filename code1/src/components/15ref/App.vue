<template>
  <h1>App</h1>
  <h3 ref="myh3">我是h3
  </h3>
  <button class="btn-primary" @click="getRef">获取ref</button>
  <my-ref ref="myref"></my-ref>
  <hr>
  <h3>控制文本框和按钮的按需切换</h3>
  <input type="text" v-if="inputVisable" ref="ipt" class="form-control">
  <button v-else @click="showInput" class="btn-primary btn">展示input</button>
</template>

<script>
import MyRef from './ref.vue'
export default {
    name:'MyApp',
    components:{
        MyRef
    },
    data(){
        return{
            inputVisable:false
        }
    },
    methods:{
        getRef(){
            console.log(this);
            console.log(this.$refs.myh3);
            this.$refs.myh3.style.color = 'red'
            this.$refs.myref.add()
        },
        showInput(){
            this.inputVisable = true
            // 数据更新 Dom是异步更新的 所以此时dom里面还没有渲染完成 无法访问到input元素
            this.$nextTick(()=>{
                this.$refs.ipt.focus()
            })
        }
    }
}
</script>

<style>

</style>