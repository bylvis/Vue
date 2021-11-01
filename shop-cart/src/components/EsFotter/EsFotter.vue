<template>
  <div class="footer-container">
    <!-- 全选区域 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="fullcheck" :checked="isfull" @change="onCheckBoxChange" />
      <label class="custom-control-label" for="fullcheck"
        >全选</label>
    </div>

    <!-- 合计区域 -->
    <div>
        <span>合计:</span>
        <span class="amount">${{amount.toFixed(2)}}</span>
    </div>
    <!-- 结算按钮 -->
    <button class="btn btn-primary btn-select" :disabled="total === 0">结算{{ total }}</button>
  </div>
</template>

<script>
export default {
    name:'EsFooter',
    props:{
        amount:{
            type:Number,
            default:0
        },
        total:{
            type:Number,
            default:0
        },
        isfull:{
            type:Boolean,
            default:false
        }
    },
    emits:['fullChange'],
    methods:{
        onCheckBoxChange(e){
            // console.log(e.target.checked);
            this.$emit('fullChange',e.target.checked)
        }
    },
    
};
</script>

<style scoped>
.footer-container {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  justify-content:space-between;
  padding: 0 10px;
  /* 内容垂直居中 */
  align-items: center;
}
.amount{
    font-weight: bold;
    color: red;
}
.btn-select{
    min-width: 90px;
    height: 38px;
    border-radius: 19px;
}
</style>