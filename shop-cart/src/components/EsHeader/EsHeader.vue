<template>
<div class="header-container" :style="{backgroundColor:bgcolor,color:color,fontSize:fsize + 'px'}">
    {{ title }}
</div>
  
</template>

<script>
export default {
    name:'EsHeader',
    props:{
      title:{
        type:Number,
        default:'es-header'
      },
      bgcolor:{
        type:String,
        default:'skyblue'
      },
      color:{
        type:String,
        default:'white'
      },
      fsize:{
        type:Number,
        default:18
      }
    },
   
}
</script>

<style>
    .header-container{
        position: fixed;
        top:0;
        left:0;
        height: 45px;
        width: 100%;
        line-height: 45px;
        text-align: center;
        z-index: 999;
    }
</style>