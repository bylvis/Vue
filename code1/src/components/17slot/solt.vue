<template>
  <div class="card">
      <h1>solt</h1>
        <hr>
        <p>第一个P</p>
        <slot>这是后备内容</slot>
        <p>第二个p</p>
  </div>
  <hr>
  <div class="container">
      <!-- 页头 -->
      <header>标题
          <slot name="header"></slot>
      </header>
        
      <!-- 主要内容 -->
      <main>内容
          <slot name="main"></slot>
      </main>
        
      <!-- 页脚 -->
      <footer>作者
          <slot name="footer"></slot>
      </footer>
        
  </div>
</template>

<script>
export default {
  name: "MySolt",
};
</script>

<style>
    header,main,footer{
        height: 150px;
        border: 1px solid #ccc;
         margin:0px -1px -1px 0px
    }
</style>