<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <slot :user='info'></slot>
    </tbody>
  </table>

</template>

<script>
export default {
  name: "MyTable",
  data(){
    return{
      info:{
        num:1,
        name:'byl',
        age:20,
        height:180
      }
    }
  }
};
</script>

<style>
</style>