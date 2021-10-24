<template>
<h1>这是APP.vue</h1>
    <my-article :title="info.title" :author='info.author' pub-time=1989></my-article>
</template>

<script>
import MyArticle from './Article.vue'
export default {
    name:'MyApp',
    components:{
        MyArticle
    },
    
    data(){
        return{
            info:{
            title:'abc',
            author:'byl'
            }
        }
    }
}
</script>

<style>

</style>