<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-warning"></i> 错误处理
        </el-breadcrumb-item>
        <el-breadcrumb-item>权限测试</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <p>当登录页面用户名为tnsihy时，可访问到权限测试页面的内容</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Permission'
}
</script>

<style scoped>
.crumbs {
  margin: 10px 0;
}
.container {
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
