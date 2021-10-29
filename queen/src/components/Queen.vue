<template>
  <h1 class="Q">Queen</h1>
  <div class="box">
    <div class="row" v-for="item of 8" :key="item" :rows="item" >
      <div
        class="smallBox"
        v-for="inneritem of 8"
        :key="8"
        :cols="inneritem"
        :rows="item"
        :sumCR="inneritem + item"
        :flag=1
        @click="changeColor($event)"
      ></div>
    </div>
  </div>
  <p class="over Q">你走了{{ count }}步</p>
  <p v-if="count<8" class="over Q">未完成</p>
  <p v-if="count==8" style="color:red" class="over">成功!</p>
  <button @click="compute" >计算解法</button>
  <button @click="reset" >重置</button>
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
  emits:['sumRes'],
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      method: 0,
      map: Qlist,
    };
  },
  methods: {
    compute(){
      this.$emit('sumRes',1)
    },
    // 点击后 给格子改变颜色 flag=0红色 flag=1白色 flag=2粉色
    changeColor(e) {
      // 点击变色
      this.count++;
      // e.target.style.backgroundColor = "pink";
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
        // 所有的盒子和当前点击的盒子比 如果满足条件 就变flag 变红色
        //  满足三个条件 行相同 列相同 行列相加 行列相减 背景颜色改成红色 map 里面flag为0
        if (col == ecol || row == erow || edel == del || esum == sum) {
          this.map[col-1][row-1]=0;
          list[i].setAttribute("flag", 0);
          // list[i].classList.add("redBg");
        }
      }e.target.setAttribute('flag',2)
      this.refresh()
    },

    // 通过flag 刷新
    refresh(){  
        let list = document.querySelectorAll(".smallBox");
        for (let i=0 ;i<list.length; i++) {
          if(list[i].getAttribute('flag')==0){
            list[i].classList.add("redBg");
            list[i].classList.remove('pinkBg')
            list[i].classList.remove('whiteBg')
          } 
          else if(list[i].getAttribute('flag')==1){
            list[i].classList.add("whiteBg");
            list[i].classList.remove('pinkBg')
            list[i].classList.remove('redBg')
          } 
           else if(list[i].getAttribute('flag')==2){
            list[i].classList.add('pinkBg');
            list[i].classList.remove("whiteBg")
            list[i].classList.remove('redBg')
          } 
        }
    },
    // 重置 所有flag为1
    reset(){
       let list = document.querySelectorAll(".smallBox");
       for (let i=0 ;i<list.length; i++) {
         list[i].setAttribute('flag',1);
       }
       this.count = 0
       this.refresh()
    }
  },
};
</script>

<style scoped>
.box {
  padding: 10px;
  width: 580px;
  height: 560px;
  background-color: black;
}
.smallBox {
  width: 50px;
  height: 50px;
  background-color: white;
  margin: 10px;
  float: left;
}
.redBg {
  /* 设置成不可点击 */
  pointer-events: none;
  background-color: green;
}
.whiteBg {
  background-color: white;
}

.pinkBg {
  background: url(../assets/img/queen.jpg) no-repeat ;
  background-size: cover;
  pointer-events: none;
  /* background-color: pink; */
}
.over{
  font-size: 25px;
}
.Q{
  margin: 0;
}
</style>
