<template>
    <div>
        <el-checkbox v-model="checked" disabled>备选项</el-checkbox>
        <el-checkbox-group v-model="checklist">
            <el-checkbox label="A"></el-checkbox>
            <el-checkbox label="B"></el-checkbox>
            <el-checkbox label="C"></el-checkbox>
            <el-checkbox label="选中且禁用"></el-checkbox>
        </el-checkbox-group>
        <hr>

        <div>不确定状态，一般用于全选</div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :key="city" :label="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <hr>

        <div>:min="" :max="" 最多最少选几个</div>
        <el-checkbox-group v-model="checkedCities1" :min="1" :max="3">
            <el-checkbox v-for="city in cities1" :key="city" :label="city">{{city}}</el-checkbox>
        </el-checkbox-group>

    </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data () {
    return {
      checked: true,
      checklist: ['A', 'B', '选中且禁用'],
      cities: ['北京', '上海', '广州', '深圳'],
      checkedCities: ['北京', '上海'],
      cities1: ['北京', '上海', '广州', '深圳'],
      checkedCities1: ['北京', '上海'],
      isIndeterminate: true,
      checkAll: false
    }
  },
  methods: {
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleCheckAllChange (value) {
      this.checkedCities = value ? this.cities : []
      this.isIndeterminate = false
    }
  }
}
</script>

<style scoped>

</style>
