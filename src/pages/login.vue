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
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>
            <el-form :model="form" class="w-250px" :rules="rules" ref="formRef">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <user/>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <lock/>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round type="primary" class="w-250px" :loading="loading" color="#626aef"
                               @click="onSubmit">登 录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import {onBeforeUnmount, onMounted, reactive, ref} from 'vue'
// import {login} from "~/api/manager.js";
// import { User,Lock } from '@element-plus/icons-vue'
import {ElNotification} from 'element-plus'
// import {useCookies} from '@vueuse/integrations/useCookies'
import router from "~/router/index.js";
import {setToken,getToken,removeToken} from "~/composables/auth.js";
import {toast} from "~/composables/util.js";
import store from "~/store/index.js";


const form = reactive({
    username: "",
    password: ""
})

const formRef = ref(null)
const loading = ref(false)


const rules = {
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        },
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        }
    ]
}

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false
        }
        loading.value = true
        // login(form.username, form.password)
        //     .then(res => {
        //         console.log(res)
        //         // ElNotification({
        //         //     message: '请求成功',
        //         //     type: 'success',
        //         //     duration: 3000,
        //         //     position: 'top-right'
        //         // })
        //         toast('登录成功')
        //
        //         // const cookie = useCookies()
        //         // cookie.set("admin-token", res.token)
        //         setToken(res.token)
        //
        //         // getinfo().
        //         // then(res => {
        //         //     store.commit("setUserInfo",res)
        //         //     console.log(res)
        //         // })
        //
        //         router.push("/")
        //     })
        //     .finally(() => {
        //         loading.value = false
        //     })

        store.dispatch("login",form)
            .then(res=>{
                toast("登陆成功")
                router.push('/')
            })
            .finally(()=>{
                    loading.value = false
            })
    })
}

function onKeyUp(e) {
    if (e.key=='Enter') {
        onSubmit()
    }
}

onMounted(()=>{
    document.addEventListener("keyup",onKeyUp)
})

onBeforeUnmount(()=>{
    document.removeEventListener("keyup",onKeyUp)
})

</script>


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

.line {
    @apply h-1px w-16 bg-gray-200;
}

</style>