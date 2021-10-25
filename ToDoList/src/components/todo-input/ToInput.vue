<template>
    <form class="form-inline" @submit.prevent="onFormSubmit">
        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
                <div class="input-group-text">任务</div>
            </div>
            <input type="text" v-model.trim='taskname' class="form-control"  placeholder="请输入任务信息" style="width:120px">
        </div>
        <button type="submit" class="btn btn-primary mb-2">添加新事件</button>
    </form>
</template>

<script>
export default {
    name:'ToInput',
    emits:['add'],
    data(){
        return{
            taskname:''
        }
    },
    methods:{
        onFormSubmit(){
            if(!this.taskname)return alert('任务不能为空！')
            this.$emit('add',this.taskname)
            this.taskname=''
        }
    }
}
</script>

<style lang='less' scoped>

</style>