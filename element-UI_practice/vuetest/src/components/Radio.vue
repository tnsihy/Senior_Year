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
    <el-radio-group v-model="radio4" fill="red" text-color="green">
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
      <el-radio-button label="上海"></el-radio-button>
    </el-radio-group>
    <br>
    <el-radio v-model="radio5" label="big" border>大</el-radio>
    <el-radio v-model="radio5" label="small" border>小</el-radio>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data () {
    return {
      radio: '1',
      radio1: '选中并禁用',
      radio2: 3,
      radio4: '深圳',
      radio5: 'small'
    }
  }
}
</script>

<style scoped>
</style>
