<template>
    <div>
        后台首页
        <br>
        <el-button @click="addCount">{{count}}</el-button>
        <el-button @click="addCount2">{{form.count}}</el-button>
    </div>
</template>
<script setup>
import {reactive, ref} from "vue";

let count = ref(1)

function addCount() {
    count.value++
}

function addCount2() {
    form.count++
}

let form = reactive({
    count: 1
})

</script>