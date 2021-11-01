<template>
  <div class="counter-container">
      <button type="button" class="btn btn-light btn-sm" @click="Add">+</button>
      <input type="number" class="form-control from-control-sm ipt-num" v-model.number="num"/>
      <button type="button" class="btn btn-light btn-sm">-</button>
  </div>
</template>

<script>
export default {
    name:'EsCounter',
    props:{
        count:{
            type:[Number],
            require:true
        }
    },
    data(){
        return{
            num:this.count
        }
    },
    // emits:['countAdd','countDel'],
    methods:{
        Add(){
            this.count++
            // this.$emit('countAdd',this.count)
        },
        Del(){
            this.count--
            // this.$emit('countDel',this.count)
        }
    }
}
</script>

<style lang='less' scoped>
    .counter-container{
        display: flex;
        
        .btn{
            width: 25px;
        }
        .ipt-num{
        width: 34px;
        text-align: center;

        margin: 0 4px;
    }
    }
</style>