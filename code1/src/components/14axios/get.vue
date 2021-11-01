<template>
    <div class="get">
        <button type="button" class="btn btn-primary" @click="Get">Get</button>
    </div>
</template>

<script>
export default {
    name:'MyGet',
    methods:{
        async Get(){
            const {data:res} = await this.$http.get('http://www.liulongbin.top:3006/api/getbooks')   
            console.log(res);
        }
    }
}
</script>

<style scoped>
    .get{
        width: 300px;
        height: 300px;
        border: solid 1px #ccc;
        
        
    }
    .btn{
        position: relative;
        display: block;
        margin: 0 auto;
        top: 50%;
        transform: translate(0,-50%);
    }
</style>