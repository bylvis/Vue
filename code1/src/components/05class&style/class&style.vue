<template>
  <h1>style</h1>
  <h3 class="thin" :class="[isItalic ? 'italic' : '',bold ? 'bold' :'']">Mydeep</h3>
  <button @click="[isItalic = !isItalic,bold = !bold]">点击切换</button>
    <h3 :class="classObj">字体风格</h3>
    <button @click="classObj.italic = !classObj.italic">italic</button>
    <button @click="classObj.bold = !classObj.bold">bold</button>
    <div>
        <h1 :style="{color:active,fontSize:fsize+'px',backgroundColor:bgColor}">SUSE</h1>
    </div>
    <button @click="fsize++">+1</button>
    <button @click="fsize--">-   1</button>
</template>

<script>
export default {
  name: "style",
  data() {
    return {
      isItalic: true,
      bold:true,
      classObj:{
          italic:false,
          bold:false
      },
      active:'red',
      fsize:30,
      bgColor:'skyblue'
    };
  },
  methods: {
    change() {
      this.isItalic = !this.isItalic;
    },
  },
};
</script>

<style>
    .thin{
        font-weight: 400;
    }
    .italic{
        font-style: italic;
    }
    .bold{
        font-weight: 500;
    }

</style>