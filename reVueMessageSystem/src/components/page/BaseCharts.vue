<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-pie-chart"></i> schart图表
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <div class="schart-box">
        <div class="content-title">柱状图</div>
        <schart
          class="schart"
          canvasId="bar"
          type="bar"
          :data='data1'
          :options='options1'
        ></schart>
      </div>

      <div class="schart-box">
          <div class="content-title">折线图</div>
          <schart
            class="schart"
            canvasId="line"
            type="line"
            :data='data2'
            :options='options2'
          ></schart>
      </div>

      <div class="schart-box">
          <div class="content-title">饼状图</div>
          <schart
            class="schart"
            canvasId="pie"
            type="pie"
            :data='data3'
            :options='options3'
          ></schart>
      </div>

      <div class="schart-box">
          <div class="content-title">环形图</div>
          <schart
            class="schart"
            canvasId="ring"
            type="ring"
            :data='data3'
            :options='options3'
          ></schart>
      </div>
    </div>
  </div>
</template>

<script>
import Schart from 'vue-schart'
export default {
  name: 'BaseCharts',
  data () {
    return {
      data1: [
        {name: '弟弟', value: 177},
        {name: '妹妹', value: 160},
        {name: '我', value: 153},
        {name: '妈妈', value: 160},
        {name: '爸爸', value: 160}
      ],
      options1: {
        title: '统计2019年家人身高值(cm)',
        showValue: false,
        bgColor: '#F9EFCC',
        fillColor: '#00887C',
        contentColor: 'rgba(46,199,201,0.3)',
        yEqual: 7
      },
      data2: [
        {name: '2019/05', value: 7000},
        {name: '2019/06', value: 5020},
        {name: '2019/07', value: 8080},
        {name: '2019/08', value: 4100},
        {name: '2019/09', value: 5000}
      ],
      options2: {
        title: '光光2019年5-9月工资总额',
        bgColor: '#F9EFCC',
        fillColor: '#00887C',
        contentColor: 'rgba(46,199,201,0.3)'
      },
      data3: [
        {name: '娃哈哈', value: 100},
        {name: '肥肠', value: 20},
        {name: '鸭爪', value: 50},
        {name: '益乐多', value: 70},
        {name: '泡面', value: 90}
      ],
      options3: {
        title: '小君日常最爱吃',
        bgColor: '#F9EFCC',
        fillColor: '#00887C',
        contentColor: 'rgba(46,199,201,0.3)'
      }
    }
  },
  components: {
    Schart
  }
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
.schart-box{
    display: block;
}
.schart{
    width: 400px;
    height: 300px;
}
.content-title{
    clear: both;
    line-height: 50px;
    font-size: 22px;
    color: #1f2f3d;
}
</style>
