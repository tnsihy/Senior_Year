<template>
    <div>
        <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            disabled
        ></el-switch>
        <br>
        <el-switch
            v-model="value"
            active-text="按年收费"
            inactive-text="按月收费"
        ></el-switch>

        <!-- :show-tooltip="false"隐藏tooltip -->
        <el-row style="margin-left:20px;">
            <el-col :span="11">
                隐藏tooltip<el-slider v-model="value1" :show-tooltip="false"></el-slider>
                格式化tooltip<el-slider v-model="value1" :format-tooltip="formatTooltip"></el-slider>
                离散值 不显示间断点<el-slider v-model="value2" :step="10"></el-slider>
                离散值 显示间断点<el-slider v-model="value2" :step="10" show-stops></el-slider>
                带有输入框<el-slider v-model="value3" show-input></el-slider>
                范围选择<el-slider v-model="value4" range show-stops :max="10"></el-slider>
                竖向模式<el-slider v-model="value1" vertical height="200px"></el-slider>
                展示标记<el-slider v-model="value5" :marks="marks"></el-slider>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Switch',
  data () {
    return {
      value: true,
      value1: 11,
      value2: 0,
      value3: 1,
      value4: [4, 8],
      value5: [30, 60],
      marks: {
        0: '0℃',
        8: '8℃',
        37: '37℃',
        50: {
          style: {color: 'red'},
          label: this.$createElement('strong', '50%')
        }
      }
    }
  },
  methods: {
    formatTooltip (value) {
      return value / 100
    }
  }
}
</script>

<style scoped>

</style>
