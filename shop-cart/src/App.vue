<template>
  <div class="app-contain">
    <es-header title='shop-cart'></es-header>
    <es-goods v-for="item in goodlist" :id="item.id" :key="item.id" :imgSrc="item.goods_img" :title="item.goods_name" :price="item.goods_price" :count="item.goods_count" :checked="item.goods_state" @countChange="onGoodsStateChange"></es-goods>
    <es-footer @fullChange="onFullStateChange" :amount="amount" :total="total"></es-footer>
  </div>
</template>

<script>
import EsHeader from "./components/EsHeader/EsHeader.vue";
import EsFooter from './components/EsFotter/EsFotter.vue'
import EsGoods from './components/EsGoods/EsGoods.vue'

export default {
  name: "App",
  components: {
    EsHeader,
    EsFooter,
    EsGoods,
},
  data(){
    return{
      goodlist:[]
    }
  },
  created(){
    this.getGoodlist()
  },
  methods:{
    async getGoodlist(){
      const {data:res} =  await this.$http.get('/api/cart')
      if (res.status!=200) return alert('数据请求失败')
      // console.log(res);
      this.goodlist = res.list
    },
    // 全选
    onFullStateChange(isfull){
      console.log(isfull);
      this.goodlist.forEach(x => {
        console.log(x);
        x.goods_state=isfull;
        console.log(x);
      })
    },
    onGoodsStateChange(e){
      const findRes = this.goodlist.find(x => x.id === e.id)
      if(findRes){
        findRes.goods_state = e.value
      }
    }
  },
  computed:{
    // 计算总价格
    amount(){
      let a = 0;
      this.goodlist.filter(x => x.goods_state).forEach(x=>{
        a+=x.goods_price*x.goods_count
      })
      return a;
    },
    total(){
      let a = 0;
      this.goodlist.filter(x => x.goods_state).forEach(x=>
      a+=1)
      return a
    }
  }
};
</script>
<style lang='less' scoped>
.app-contain{
  padding-top: 45px ;
}
</style>

