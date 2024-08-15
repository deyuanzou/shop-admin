<template>
    <div>
        后台首页

        {{ $store.state.user.username }}

        <el-button @click="handleLogout">退出登录</el-button>

    </div>
</template>
<script setup>
import {showModal, toast} from "~/composables/util.js";
import {logout} from "~/api/manager.js";
import {useRouter} from "vue-router";
import store from "~/store/index.js";

const router = useRouter()

function handleLogout() {
    showModal("是否退出登录？").then(res=>{
        logout().finally(()=>{
            store.dispatch("logout")
            router.push('/login')
            toast("退出登录成功")
        })
    })
}


</script>