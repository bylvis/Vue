<template>
  <div>
    <my-table :data="goodslist">
      <template v-slot:header>
        <th>No</th>
        <th>name</th>
        <th>price</th>
        <th>title</th>
        <th>done</th>
      </template>
      <template v-slot:body="{ row, index }">
        <td>{{ index }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="form-control form-control-sm from-ipt"
            v-if="row.inputVisible"
            v-focus
            v-model.trim="row.inputValue"
            @blur="onInputConfirm(row)"
            @keyup.enter="onInputConfirm(row)"
          />
          <button
            class="btn btn-primary btn-sm"
            @click="row.inputVisible = 'true'"
            v-else
          >
            +Tag
          </button>
          <span
            class="badge badge-warning ml-2"
            v-for="item in row.tags"
            :key="item"
            >{{ item }}</span
          >
        </td>
        <td>
          <!-- 循环渲染标签 -->
          <button class="btn btn-danger btn-sm" @click="remove(row.id)">
            删除
          </button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from "./MyTable.vue";
export default {
  data() {
    return {
      goodslist: [],
    };
  },
  components: {
    MyTable,
  },
  created() {
    // 发起请求
    this.getGoodsList();
  },
  name: "MyApp",
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get("/api/goods");
      if (res.status !== 0) return console.log("获取列表失败！");
      console.log(res);
      this.goodslist = res.data;
    },
    remove(id) {
      console.log(id);
      this.goodslist = this.goodslist.filter((x) => x.id !== id);
    },
    onInputConfirm(row){
      const val = row.inputValue;
      row.inputValue = ''
      row.inputVisible = false
      // 检测是否为空 或 以及存在标签
      if(!val || row.tags.indexOf(val)!== -1) return
      console.log(val);
      row.tags.push(val)
    }
  },
  directives: {
    focus(el) {
      el.focus();
    },
  },
};
</script>

<style scoped lang="less">
.from-ipt {
  width: 80px;
  display: inline;
}
</style>