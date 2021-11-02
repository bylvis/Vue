<template>
  <div class="goodsBox">
      <!-- 选择按钮 -->
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" :id="id" :checked="checked" @change="getCountChange"/>
      <label class="custom-control-label" :for="id"></label>
    </div>
      <!-- 图片区 -->
      <div class="img">
          <img :src="imgSrc" alt="" class="imgSrc">
      </div>
      <!-- 商品信息区 -->
      <div class="info">
          <h5 class="title">{{ title }}</h5>
          <p class="price">${{ price.toFixed(2)*count }}</p>
          <es-counter class="count" :count="count" :min="1" @numChange="getNumChange" ></es-counter>
      </div>
  </div>
</template>

<script>
import EsCounter from '../EsCounter/EsCounter.vue'
export default {
    components:{
         EsCounter
    },
    name:'EsGoods',
    props:{
        id:{
            type:[String,Number],
            require:true
        },
        imgSrc:{
            type:String,
            require:true
        },
        title:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        count:{
            type:Number,
            require:true
        },
        checked:{
            type:Boolean,
            require:true
        }
    },
    emits:['countChange','numChange'],
    methods:{
      getCountChange(e){
        // console.log(e.target.checked);
        this.$emit('countChange',{
            id:this.id,
            value:e.target.checked
        })
      },
      getNumChange(num){
          console.log(num);
          this.$emit('numChange',{
              id:this.id,
              value:num
          })
      }
    }
}
</script>

<style scoped>
    .goodsBox{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100px;
        padding: 10px;
        /* background-color: purple; */
        border-bottom: 1px solid #ccc;
    }
    .img{
        width: 80px;
        height: 80px;
        /* background-color: pink; */
    }
    .info{
        position: relative;
        height: 80px;
        width: 270px;
        /* background-color: pink; */
    }
    .price{
        position:absolute;
        bottom: 0;
        left: 10px;
        margin: 0;
        font-weight: bold;
        color: red;   
    }
    .count{
        position: absolute;
        right: 0;
        bottom: 0;
        text-align: center;
    }
    .imgSrc{
        width: 100%;
        height: 100%;
    }
</style>