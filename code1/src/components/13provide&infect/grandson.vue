<template>
   <h1>grandson</h1>
    <p>color{{ color.value }}</p>
</template>

<script>
export default {
    name:'GrandSon',
    inject:['color'],
    created(){
        console.log(this.color.value);
    }
}
</script>

<style>

</style>