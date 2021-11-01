<template>
<div>
    <h1>APP</h1>
    
    <button type="button" class="btn btn-primary" @click="color='blue'">按钮{{ color }}</button>
    <son></son>
    </div>
</template>

<script>
import son from './son.vue'
import { computed } from 'vue'
import '../../assets/bootstrap.css'

export default {
  components: { son },
    name:'MyApp',
    data(){
        return{
            color:'pink', 
            count:1
        }
    },
    provide() {
        return {
            // 需要return 才能完成共享
            color: computed(() => { return this.color }),
            // count:this.count
        }
    }
}
</script>

<style>

</style>