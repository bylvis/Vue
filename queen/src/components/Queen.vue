<template>
  <h1>Queen</h1>
  <div class="box">
    <div class="row" v-for="item of 8" :key="item" :rows="item">
      <div
        class="smallBox"
        v-for="inneritem of 8"
        :key="8"
        :cols="inneritem"
        :rows="item"
        :sumCR="inneritem+item"
        @click="changeColor($event)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    changeColor(e) {
      // 点击变色
      e.target.style.backgroundColor = "pink";
      const ecol = e.target.getAttribute("cols")-0
      const erow = e.target.getAttribute("rows")-0
      const esum = ecol + erow;
      console.log("列",ecol);
      console.log("行",erow);
      console.log("行列相加",esum);
      // 找到所有的小格子
      let list = document.querySelectorAll('.smallBox')
      // 遍历 筛选
      for(let i in list){
        // 得到每个格子的行列属性
         const col = list[i].getAttribute('cols')-0
         const row = list[i].getAttribute('rows')-0
        // 和当前格子计算距离
        let dist = (col-ecol)**2 +(row-erow)**2
        //  满足三个条件 行相同 列相同 距离平方小于2 背景颜色改成红色
         if(col==ecol||row==erow||dist<=2){
           list[i].classList.add('redBg')
         }
      }
    },
  },
};
</script>

<style scoped>
.box {
  margin: 0 auto;
  width: 560px;
  height: 560px;
  background-color: black;
  padding: 10px;
}
.smallBox {
  width: 50px;
  height: 50px;
  background-color: white;
  margin: 10px;
  float: left;
}
.redBg{
  background-color: red;
}
</style>
