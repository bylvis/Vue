<template>
    <h1>八皇后</h1>
    <p>玩法：在8×8格的国际象棋上摆放8个皇后，使其不能互相攻击，即任意两个皇后都不能处于同一行、同一列或同一斜线上。</p>
    <hr>
    <div class="box">
      <div class="queen">
      <queen @sumRes="logRes" ></queen>
      </div>
      <div class="res">
        <res ref="res"></res>
      </div>
    </div>
</template>

<script>
import Queen from './components/Queen.vue'
import Res from './components/res.vue'
// import './assets/css/bootstrap.css'
export default {
  name: 'App',
  components: {
    Queen,
    Res
  },
  methods:{
      logRes(val){
        console.log('触发了sumRes',val);
        this.$refs.res.queen([1, 1, 1, 1, 1, 1, 1, 1], 0)
      }
  }
  
}
</script>
<style>
 .queen{
   margin-left: 10px;
   width: 600px;
   height: 600px;
   /* float: left; */
 }
 .res{
   width: 600px;
   height: 600px;
   /* float: right; */
 }
 .box{
   display: flex;
   justify-content: space-evenly;
 }
</style>
