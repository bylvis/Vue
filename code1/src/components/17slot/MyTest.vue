<template>
  <div>
      <h3>这是h3</h3>
      <slot :info="info" :msg="message"></slot>
  </div>
</template>

<script>
export default {
    name:'MyTest',
    data(){
        return{
            info:{
                phone:15181135197 ,
                adress:'四川宜宾'
            },
            message:'abc'
        }
    }
}
</script>

<style>

</style>