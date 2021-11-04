<template>
        <slot name="header"></slot>
        <slot name="body"></slot>
</template>

<script>
export default {
    name:'MyTable',
    props:{
        data:{
            type:Array,
            required:true,
            default:[],
        }
    },
}
</script>

<style>

</style>