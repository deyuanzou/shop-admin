<script setup>
import { reactive } from 'vue'
// import { User,Lock } from '@element-plus/icons-vue'

const form = reactive({
   username:"",
   password:""
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div>欢迎光临</div>
                <div>此站点是Vue3+Vite开发的商城后台</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
                <h2>欢迎回来</h2>
                <div>
                    <span></span>
                    <span>账号密码登录</span>
                    <span></span>
                </div>
                <el-form :model="form" class="w-250px">
                    <el-form-item>
                        <el-input v-model="form.username" placeholder="请输入用户名">
                            <template #prefix>
                                <el-icon class="el-input__icon"><user /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.password" placeholder="请输入密码">
                            <template #prefix>
                                <el-icon class="el-input__icon"><lock /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button round type="primary" class="w-250px" color="#626aef">登 录</el-button>
                    </el-form-item>
                </el-form>
        </el-col>
    </el-row>
</template>

<style scoped>
.login-container {
    @apply bg-indigo-500 min-h-screen;
}
.left {
    @apply flex items-center justify-center;
}
.right {
    @apply bg-light-50 flex items-center justify-center flex-col;
}
.left > div > div:first-child {
    @apply font-bold text-5xl text-light-50 mb-4;
}
.left > div > div:nth-child(2) {
    @apply text-gray-200 text-sm;
}
.right > h2 {
    @apply font-bold text-3xl text-gray-800;
}
.right > div {
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}
.right > div > span {
    @apply h-1px w-16 bg-gray-200;
}

</style>