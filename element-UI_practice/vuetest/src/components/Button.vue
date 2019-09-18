<template>
  <div>
    <el-button type="primary">我是一个按钮</el-button>
    <el-button type="primary">我是一个按钮</el-button>
    <br>
    <el-link>我是一个链接</el-link>
    <el-link type="primary">我是一个链接</el-link>
    <el-link disabled>我是一个链接</el-link>
    <el-link :underline="false">我是一个链接</el-link>
  </div>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
</style>
