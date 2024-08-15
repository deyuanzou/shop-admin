<script setup>

</script>

<template>
  <!-- <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div> -->

  <!-- <button class="btn">
    按钮
  </button> -->
  
  <router-view></router-view>



</template>

<style scoped>
/* .btn {
  @apply bg-purple-500 text-indigo-50 px-4 py-2 rounded 
  my-4 mx-4 hover:(bg-purple-900) focus:(ring-2);
} */

#nprogress .bar {
    background-color: #f4f4f4 !important;
    height: 5px !important;
}
</style>
