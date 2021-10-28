<template>
  <h1>Queen</h1>
  <div class="box">
    <div class="row" v-for="item of 8" :key="item" :rows="item" >
      <div
        class="smallBox"
        v-for="inneritem of 8"
        :key="8"
        :cols="inneritem"
        :rows="item"
        :sumCR="inneritem + item"
        :flag="1"
        @click="changeColor($event)"
      ></div>
    </div>
  </div>
  <p>你走了{{ count }}步</p>
  <button @click="autoFind">自动查找</button>
  <button @click="prev">上一步</button>
</template>

<script>
var Qlist = new Object()
for(let i=0;i<8;i++){
  Qlist[i] = new Object();
  for(let j=0;j<8;j++){
      Qlist[i][j] = 1
  }
}

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      method: 0,
      map: Qlist,
      oldMap:{},
      m:{}
    };
  },
  methods: {
    prev(){
      // 点击回到上一步
      // 通过oldMap里的值 重新给小格子的flag赋值
      var newObj1 = JSON.parse(JSON.stringify(this.oldMap));
      this.map.target = newObj1.target
      console.log(this.map.target);
      
      let list = document.querySelectorAll(".smallBox");
      // 遍历 samllbox 通过col row 确定坐标 然后得到oldMap对应坐标的flag
      for (let i=0 ;i<list.length; i++) {
        const col = list[i].getAttribute("cols") - 0;
        const row = list[i].getAttribute("rows") - 0;
        console.log("列", col,"行", row);
        list[i].setAttribute('flag',this.oldMap[col-1][row-1])
        // 根据flag重新渲染背景
        if(list[i].getAttribute('flag')==0){
          list[i].classList.add("redBg");
        }
        if(list[i].getAttribute('flag')==1){
          list[i].classList.add("whiteBg");
        }
      }
      console.log(1);
      // 刷新一整个格子
    }
    ,
    changeColor(e) {
      // 点击变色
      this.count++;
      e.target.style.backgroundColor = "pink";
      const ecol = e.target.getAttribute("cols") - 0;
      const erow = e.target.getAttribute("rows") - 0;
      const esum = ecol + erow;
      const edel = ecol - erow;
      console.log("列", ecol);
      console.log("行", erow);
      console.log("行列相加", esum);
      console.log("行列相减", edel);
      // 找到所有的小格子
      let list = document.querySelectorAll(".smallBox");

      // 深拷贝 记录上一次map的值到oldMap里面
      var newObj = JSON.parse(JSON.stringify(this.map));
      this.oldMap = newObj
  
      // 遍历 筛选
      for (let i=0 ;i<list.length; i++) {
        // 得到每个格子的行列属性
        const col = list[i].getAttribute("cols") - 0;
        const row = list[i].getAttribute("rows") - 0;
        // 和当前格子计算距离
        const del = col - row;
        const sum = col + row;
        //  满足三个条件 行相同 列相同 行列相加 行列相减 背景颜色改成红色 map 里面flag为0
        if (col == ecol || row == erow || edel == del || esum == sum) {
          this.map[col-1][row-1]=0;
          list[i].setAttribute("flag", 0);
        }
        // 如果flag为0 改变颜色
        if(list[i].getAttribute('flag')==0){
          list[i].classList.add("redBg");
        }
        if(list[i].getAttribute('flag')==1){
          list[i].classList.add("whiteBg");
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
.redBg {
  background-color: red;
}
.whiteBg {
  background-color: white;
}
</style>
