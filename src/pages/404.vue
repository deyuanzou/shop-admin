<template>
    <div>
        <el-result icon="error" title="错误的路由" sub-title="请检查地址栏输入">
            <template #extra>
                <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
            </template>
        </el-result>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
div {}
</style>