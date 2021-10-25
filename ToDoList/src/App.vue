<template>
  <h1>App根组件</h1>
  <hr />
  <to-input @add='addNewTask'></to-input>
  <to-do-list :list="tasklist" class="mt-2"></to-do-list>
  <to-button v-model:active="activeBtnIndex"></to-button>
</template>

<script>
import ToDoList from "./components/todo-list/ToDoList.vue";
import ToInput from "./components/todo-input/ToInput.vue";
import ToButton from "./components/todo-button/ToButton.vue"
import "./components/assets/css/bootstrap.css";
import "./index.css";

export default {
  name: "MyApp",
  components: {
    ToDoList,
    ToInput,
    ToButton
  },
  data() {
    return {
      // 列表数据
      activeBtnIndex:0,
      nextId : 4,
      todolist: [
        { id: 1, task: "起床", done: true },
        { id: 2, task: "吃饭", done: false },
        { id: 3, task: "睡觉", done: false },
      ],
    };
  },
  methods:{
    addNewTask(val){
      console.log(val);
      this.todolist.push({
        id:this.nextId,
        task:val,
        done:false
      });
      this.nextId++
    }
  },
  computed:{
    tasklist(){
      switch(this.activeBtnIndex){
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x => x.done)
        case 2:
          return this.todolist.filter(x => !x.done)
      }
    }
  }
};
</script>
<style lang='less' scoped>
</style>
