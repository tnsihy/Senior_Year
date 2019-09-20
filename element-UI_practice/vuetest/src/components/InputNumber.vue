<template>
    <div>
        <el-input-number v-model="num" :min="1" :max="10" disabled></el-input-number>
        <el-input-number v-model="num2" step="2"></el-input-number>
        <div>严格步数 只能输入步数的倍数</div>
        <el-input-number v-model="num3" :step="2" step-strictly></el-input-number>
        <div>精度</div>
        <el-input-number v-model="num4" :step="0.1" :precision="2"></el-input-number>
        <div>按钮位置</div>
        <el-input-number v-model="num4" controls-position="right" :step="0.1" :precision="2"></el-input-number>
    </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data () {
    return {
      num: 1,
      num2: 1,
      num3: 2,
      num4: 1
    }
  }
}
</script>

<style scoped>

</style>
