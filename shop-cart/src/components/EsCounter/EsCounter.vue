<template>
  <div class="counter-container">
      <button type="button" class="btn btn-light btn-sm" @click="Del">-</button>
      <input type="number" class="form-control from-control-sm ipt-num" v-model.number.lazy="num"/>
      <button type="button" class="btn btn-light btn-sm" @click="Add">+</button>
  </div>
</template>

<script>
export default {
    name:'EsCounter',
    props:{
        count:{
            type:[Number],
            require:true
        },
        min:{
            type:Number,
            default:NaN
        }
    },
    data(){
        return{
            num:this.count
        }
    },
    emits:['numChange'],
    watch:{
        num(newVal){
            const parseRes = parseInt(newVal);
            if(isNaN(parseRes)||parseRes<1){
                this.num=1;
                return
            }
            if(String(newVal).indexOf('.') !== -1){
                this.num=parseRes
            }
            // console.log(newVal,parseRes);
            this.$emit('numChange',parseRes)
        }
    },
    // emits:['countAdd','countDel'],
    methods:{
        Add(){
           
            // if(!isNaN(this.min) && this.num-1 < this.min){
            //     return
            // }
            this.num++
        },
        Del(){
            if(!isNaN(this.min) && this.num-1 < this.min){
                return
            }
            this.num--
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