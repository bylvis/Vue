<template>
    <my-table>
        <template #default="{ user }">
            <tr>
                <td>{{ user.num }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td><input type="checkbox"></td>
            </tr>
        </template>
    </my-table>
</template>



<script>
import MyTable from './MyTable.vue'
export default {
    name:'MyApp',
    components:{
        MyTable
    }
}
</script>

<style>

</style>