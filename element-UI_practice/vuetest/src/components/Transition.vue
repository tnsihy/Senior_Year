<template>
  <div>
    <span>fade淡入淡出</span>
    <el-button @click="show = !show">点击</el-button>
    <div style="display:flex">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>

    <span>zoom缩放</span>
    <el-button @click="show2 = !show2">点击</el-button>
    <div style="display:flex">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
      </transition>
      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>

    <span>collapse展开折叠</span>
    <el-button @click="show3 = !show3">点击</el-button>
    <el-collapse-transition>
      <div v-show="show3">
        <div class="transition-box">el-collapse-transition标签</div>
        <div class="transition-box">el-collapse-transition标签</div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'Transi',
  data () {
    return {
      show: true,
      show2: true,
      show3: true
    }
  }
}
</script>
<style>
  .transition-box {
    margin: 10px 0;
    width: 220px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
