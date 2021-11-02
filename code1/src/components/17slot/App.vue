<template>
  <my-solt>
      <p>----插槽-----</p>
      <template v-slot:header>
          <h1>滕王阁序</h1>
      </template>
      <template #main>
          <h4>大江东去浪淘尽</h4>
      </template>
      <template #footer>
          <h2>王博</h2>
      </template>
  </my-solt>
  <hr>
  <!-- 使用自定义组件 -->
  <my-test >
      <template #default="scope">
          <h2>{{ scope }}</h2>
          <h3>{{ scope.info.adress }}</h3>
      </template>
  </my-test>
</template>

<script>
import MyTest from './MyTest.vue'
import MySolt from './solt.vue'
export default {
    name:'MyApp',
    components:{
        MySolt,
        MyTest
    }
}
</script>

<style>

</style>