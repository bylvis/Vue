<template>
  <div class="card" style="width: 18rem">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
    <!-- <input type="text" class="form-control" v-focus> -->
    <div class="card-footer">Card footer</div>
  </div>
  
</template>

<script>
export default {
  name: "MyHome",
  directives:{
    //   focus:{
    //     //   el代表当前指令绑定的Dom元素
    //       mounted(el){
    //         //   自动获取焦点
    //           el.focus()
    //       }
    //   }
  }
};
</script>

<style>
</style>