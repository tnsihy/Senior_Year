<template>
    <div>
        <el-select v-model="value" placeholder="请选择" clearable>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
            ></el-option>
        </el-select>
        <div>多选</div>
        <el-select v-model="value1" multiple>
            <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :label="item.label"
        ></el-option>
        </el-select>
        <div>自定义模板</div>
        <el-select v-model="value2">
            <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :label="item.label"
            >
                <span style="float:left">{{item.label}}</span>
                <span style="float:right">{{item.value}}</span>
            </el-option>
        </el-select>
        <div>分组</div>
        <el-select v-model="value3">
            <el-option-group
                v-for="group in options1" :key="group.label" :label="group.label">
                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-option-group>
        </el-select>
        <div>可搜索</div>
        <el-select v-model="value4" filterable>
            <el-option v-for="item in options" :key="item" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <div>创建条目</div>
        <el-select v-model="value5" filterable multiple allow-create default-first-option>
            <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.value"></el-option>
        </el-select>
    </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      value: '',
      value1: [],
      value2: '',
      value3: '',
      value4: '',
      value5: [],
      options: [{
        value: '1',
        label: '牛肉火锅',
        disabled: true
      }, {
        value: '2',
        label: '砂锅粥'
      }, {
        value: '3',
        label: '椰子鸡'
      }],
      options1: [{
        label: '热门城市',
        options: [{
          value: 'shanghai',
          label: '上海'
        }, {
          value: 'beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'shenzhen',
          label: '深圳'
        }, {
          value: 'guangzhou',
          label: '广州'
        }]
      }]
    }
  }
}
</script>

<style scoped>

</style>
