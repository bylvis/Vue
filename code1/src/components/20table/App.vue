<template>
    <div>
        <my-table :data="goodslist"></my-table>
    </div>
</template>

<script>
import MyTable from './MyTable.vue'
export default {
    data(){
        return{
            goodslist:[]
        }
    },
    components:{
        MyTable
    },
    created(){
        // 发起请求
        this.getGoodsList()
    },
    name:'MyApp',
    methods:{
        async getGoodsList(){
            const{data:res}  = await this.$http.get('/api/goods')
            if(res.status!==0) return console.log('获取列表失败！');
            console.log(res);
            this.goodslist = res.data;
        }
    }
}
</script>

<style>

</style>