<template>
  <div>
    <el-radio v-model="radio" label="1">男</el-radio>
    <el-radio v-model="radio" label="2">女</el-radio>
    <br>
    <el-radio v-model="radio1" label="禁用" disabled>禁用</el-radio>
    <el-radio v-model="radio1" label="选中并禁用" disabled>选中并禁用</el-radio>
    <br>
    <el-radio-group v-model="radio2">
      <el-radio :label="3">大</el-radio>
      <el-radio :label="4">中</el-radio>
      <el-radio :label="5">小</el-radio>
    </el-radio-group>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data () {
    return {
      radio: '1',
      radio1: '选中并禁用',
      radio2: 3
    }
  }
}
</script>

<style scoped>
</style>
