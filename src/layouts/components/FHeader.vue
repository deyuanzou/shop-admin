<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1"><eleme-filled /></el-icon>
            蒂莎编程
        </span>
        <el-icon class="icon-btn">
            <fold/>
        </el-icon>
        <el-icon class="icon-btn">
            <refresh/>
        </el-icon>
        <div class="ml-auto droplist" >
            <el-icon class="icon-btn">
                <full-screen/>
            </el-icon>
            <el-dropdown>
                <span class="el-dropdown-link droplist">
                  <el-avatar :size="25" :src="store.state.user.avatar" class="mr-2"/>
                  {{store.state.user.username}}
                  <el-icon class="el-icon--right">
                    <arrow-down/>
                  </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

    </div>
</template>

<script setup>

import {ElemeFilled, Fold, FullScreen, Refresh} from "@element-plus/icons-vue";
import store from "~/store/index.js";


</script>

<style scoped>
.f-header {
    @apply flex bg-indigo-500 text-light-50 fixed top-0 left-0 right-0 items-center;
    height: 64px;
}

.logo {
    width: 250px;
    @apply flex justify-center items-center text-xl;
}

.droplist {
    @apply flex  items-center;
}

.icon-btn {
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
}

.icon-btn:hover {
    @apply bg-indigo-600;
}
</style>