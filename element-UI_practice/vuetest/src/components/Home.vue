<template>
  <div>
      <router-link to="/change_theme">1.更改颜色主题primary</router-link><br>
      <router-link to="/transition">2.内置过渡动画 fade淡入淡出 zoom缩放 collapse展开折叠</router-link><br>
      <router-link to="/layout">3.布局el-col</router-link><br>
      <router-link to="/container">4.布局容器el-container</router-link><br>
      <router-link to="/border">5.Border边框 关于阴影shadow</router-link><br>
      <router-link to="/button">6.Button按钮 Link文字链接</router-link><br>
      <router-link to="/radio">7.Radio单选框</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>
