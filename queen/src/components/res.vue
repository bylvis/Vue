<template>
  <h1 class="R">Res</h1>
  <!-- <h1 v-if="list.length!=0">{{ list }}</h1> -->
  <table border="1" cellspacing="0" class="resTable">
    <tbody class="resBody">
      <thead>
        <th>解法</th>
        <th>第1行</th>
        <th>第2行</th>
        <th>第3行</th>
        <th>第4行</th>
        <th>第5行</th>
        <th>第6行</th>
        <th>第7行</th>
        <th>第8行</th>
      </thead>
      <tr v-for="(item, index) in list">
        <td>{{ index }}</td>
        <td>{{ item[0] + 1 }}</td>
        <td>{{ item[1] + 1 }}</td>
        <td>{{ item[2] + 1 }}</td>
        <td>{{ item[3] + 1 }}</td>
        <td>{{ item[4] + 1 }}</td>
        <td>{{ item[5] + 1 }}</td>
        <td>{{ item[6] + 1 }}</td>
        <td>{{ item[7] + 1 }}</td>
      </tr>
    </tbody>
  </table>
  <h1 v-if="resCount != -1">一共有{{ resCount }}种解法</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      list: [],
    };
  },
  methods: {
    queen(arr, cur) {
      // 发现已经循环到最后一行了 并且flag为true 说明有结果 return 这一次成功的遍历结束
      // 继续上一层 queen(a,cur-1) 行的另外列继续遍历
      if (cur == arr.length) {
        console.log(arr);
        console.log(this.count);
        this.count++;
        return;
      }
      // 第一个循环 循环八次
      for (var i = 0; i < arr.length; i++) {
        // 每次循环 分别是 a[0] = 01234567
        arr[cur] = i;
        // flag 标记
        var flag = true;
        // 判断 行列 右斜 左斜是否相同 相同直接break 看下一个位置
        for (var j = 0; j < cur; j++) {
          var ab = i - arr[j];
          if (arr[j] == i || (ab > 0 ? ab : -ab) == cur - j) {
            flag = false;
            break;
          }
        }
        // flag为true 就往下一行继续遍历
        if (flag) {
          // 把每次 成功走了八次的结果 存到一个list里面
          if (cur == 7) {
            // console.log("arr", arr);
            // 必须要用一个变量中转 因为JS的缺陷 不能直接把a push到列表里 有递归作用域冲突的问题
            let temp = [...arr];
            this.list.push(temp);
          }
          // 到下一行进行遍历
          this.queen(arr, cur + 1);
        }
      }
    },
  },
  computed: {
    resCount() {
      return this.count - 1;
    },
  },
};
</script>
    
<style scoped>
.resBody {
    display: inline-block;
    width: 100%;
    overflow: auto;
    max-height: 600px;
}
.resTable{
    margin: 0 auto;
}
.R{
  margin: 0;
}
</style>