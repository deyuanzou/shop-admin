<template>
    <div>
        后台首页
        <el-button @click="set('foo')">设置</el-button>
        <el-button @click="get('foo')">读取</el-button>
        <el-button @click="remove('foo')">删除</el-button>

    </div>
</template>
<script setup>
import {useCookies} from '@vueuse/integrations/useCookies'

const cookie = useCookies()

console.log(cookie)

function set(name) {
    cookie.set(name, "123456")
}

function get(name) {
    console.log(cookie.get(name))
}

function remove(name) {
    cookie.remove(name)
}


</script>