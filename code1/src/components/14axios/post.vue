<template>
  <div class="post">
        <button type="button" class="btn btn-primary" @click="Post">Post</button>
    </div>
</template>

<script>
export default {
    name:"MyPost",
    methods:{
        async Post(){
               const {data:res} = await this.$http.post('http://www.liulongbin.top:3006/api/post',{name:'zs',age:20}) 
               console.log(res);
        }
    }
}
</script>

<style scoped>
    .post{
        width: 300px;
        height: 300px;
        border: solid #ccc 1px;
       
    }
    .btn{
        position: relative;
        display: block;
        margin: 0 auto;
        top: 50%;
        transform: translate(0,-50%);
    }
</style>