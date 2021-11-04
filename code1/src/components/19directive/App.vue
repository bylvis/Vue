<template>
    <h1 v-color="'red'">App</h1>
     <input type="text" class="form-control" v-focus>
     <hr>
     <p>count{{ count }}</p>
     <button class="btn btn-primary" @click="count+=1">+1</button>
    <my-home></my-home>
</template>

<script>
import MyHome from './Home.vue'
export default {
    data(){
        return{
            count:0
        }
    },
    name:'MyApp',
    components:{
        MyHome
    }
}
</script>

<style>

</style>