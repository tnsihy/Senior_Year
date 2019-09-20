<template>
    <div>
        <div>TimePicker时间选择器</div>

        <div>1.固定时间点select</div>
        <el-time-select
            v-model="value1"
            :picker-options="{
                start:'08:30',
                end:'18:30',
                step:'00:15'
            }"
            placeholder="固定时间点"
        ></el-time-select>

        <div>2.任意时间点picker 鼠标滚动</div>
        <el-time-picker
            v-model="value2"
            :picker-options="{
                selectableRange:'18:30:00-20:30:00'
            }"
            placeholder="任意时间点"
        ></el-time-picker>

        <div>2.任意时间点picker 上下按钮</div>
        <el-time-picker
            v-model="value2"
            :picker-options="{
                selectableRange:'18:30:00-20:30:00'
            }"
            placeholder="任意时间点"
            arrow-control
        ></el-time-picker>

        <div>3.固定时间范围 minTime:startTime</div>
        <el-time-select
            v-model="startTime"
            :picker-options="{
                start:'08:30',
                end:'18:30',
                step:'00:15'
            }"
            placeholder="开始时间"
        ></el-time-select>
        <el-time-select
            v-model="endTime"
            :picker-options="{
                start:'08:30',
                end:'18:30',
                step:'00:15',
                minTime:startTime
            }"
            placeholder="结束时间"
        ></el-time-select>

        <div>4.任意时间范围</div>
        <el-time-picker
            v-model="value3"
            is-range
            range-separator="-"
            start-placeholde="开始时间"
            end-placeholde="结束时间"
            placeholder="选择时间范围"
        ></el-time-picker>

        <hr>
        <div>DatePicker日期选择器</div>
        <div>1.选择日</div>
        <el-date-picker v-model="value3" placeholder="选择日期" type="date"></el-date-picker>
        <div>2.带快捷键</div>
        <el-date-picker v-model="value3" placeholder="选择日期" type="date" :picker-options="pickerOptions"></el-date-picker>
        <div>3.其他日期单位</div>
        <div>周</div>
        <el-date-picker v-model="value4" type="week" placeholder="选择周" format="yyyy 第WW周"></el-date-picker>
        <div>月</div>
        <el-date-picker v-model="value5" type="month" placeholder="选择月"></el-date-picker>
        <div>年</div>
        <el-date-picker v-model="value6" type="year" placeholder="选择年"></el-date-picker>
        <div>多个日期</div>
        <el-date-picker v-model="value7" type="dates" placeholder="选择一个或多个日期" ></el-date-picker>
        <br>
        <div>显示默认日期(类似订酒店)</div>
        <el-date-picker
            v-model="value8"
            type="daterange"
            start-placeholde="开始日期"
            end-placeholde="结束日期"
            :default-time="['00:00:00','23:59:59']"
        ></el-date-picker>
        <hr>
        <el-date-picker v-model="value9" type="datetime" placeholder="选择日期时间"></el-date-picker>
        <el-date-picker v-model="value9" type="datetime" placeholder="设置默认时间" default-time="12:00:00"></el-date-picker>
    </div>
</template>

<script>
export default {
  name: 'Picker',
  data () {
    return {
      value1: '',
      value2: new Date(2019, 9, 20, 15, 26),
      startTime: '',
      endTime: '',
      value3: [new Date(2019, 1, 1, 0, 0), new Date(2019, 12, 31, 23, 59)],
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      pickerOptions: {
        // 快捷键 今天 昨天 一周前
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }],
        // 禁用今天以后的日期
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
