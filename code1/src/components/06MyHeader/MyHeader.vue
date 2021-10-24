<template>
    <div class="header-container" :style="{color:color,backgroundColor:bgColor}">{{ title }}</div>
</template>

<script>
export default {
    name:'MyHeader',
    props:['title','color','bgColor']
}
</script>

<style lang='less' scoped>
    .header-container{
        height:45px;
        background-color: pink;
        width: 100%;
        line-height: 45px;
        text-align: center;
        position: fixed;
        top:0;
        left:0;
        font-size: 20px;
        display: block;
    }
</style>