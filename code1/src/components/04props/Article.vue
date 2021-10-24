<template>
  <h1>标题:{{ title }}</h1>
  <h1>作者:{{ author }}</h1>
  <h5>发布时间:{{ pubTime }}</h5>
</template>

<script>
export default {
    name:'MyArticle',
    // 外界可以传递指定的数据，到当前的组件中
    props:['title','author','pubTime']
};
</script>

<style>
</style>