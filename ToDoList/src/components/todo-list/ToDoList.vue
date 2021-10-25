<template>
  <div>
    <ul class="list-group">
        <!-- 列表组 -->
        <li class="list-group-item d-flex justify-content-between align-items-center " v-for="item in list" :key="item.id">
            <!-- 复选框 -->
            <div class="custom-control custom-checkbox ">
                <input type="checkbox" class="custom-control-input" :id="item.id" v-model='item.done'/>
                <!-- label的for与id绑定 点击label相当于点击复选框 不设置 下面的复选框将无效 -->
                <label class="custom-control-label" :for="item.id" :class='item.done ? "delete"    :""' >{{ item.task }}</label>
            </div>
            <!-- 徽标 -->
            <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
            <span class="badge badge-warning badge-pill" v-else>未完成</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "ToDoList",
    props: {
        list:{
            type:Array,
            required:true,
            default:[],
        }
    }
};
</script>

<style lang='less' scoped>
    .list-group{
        width: 230px;
    }
    .delete{
        text-decoration: line-through;
        color: gray;
        font-style: italic;
    }
</style>