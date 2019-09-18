<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-date"></i> 表单相关
        </el-breadcrumb-item>
        <el-breadcrumb-item>基本表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <div class="form-box">
        <el-form label-width="80px">
          <el-form-item label="简历名称" size="small">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="应聘岗位" size="small">
            <el-select v-model="form.job" placeholder="请选择">
              <el-option key="java" label="后台Java工程师" value="java"></el-option>
              <el-option key="web" label="Web前端" value="web"></el-option>
              <el-option key="android" label="Android工程师" value="android"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" size="small">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              value-format="yyyy-mm-dd"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="现居住地" size="small">
            <el-cascader v-model="form.options" :options="options"></el-cascader>
          </el-form-item>
          <el-form-item label="是否毕业" size="small">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="兴趣爱好" size="small">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="篮球"></el-checkbox>
              <el-checkbox label="唱歌"></el-checkbox>
              <el-checkbox label="写法"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="性别" size="small">
            <el-radio-group v-model="form.sex">
              <el-radio label="男" name="nan"></el-radio>
              <el-radio label="女" name="nv"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="自我评价" size="small">
            <el-col :span="11">
              <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">表单提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseForm',
  data () {
    return {
      form: {
        name: '',
        job: '',
        date1: '',
        options: [],
        delivery: false,
        type: ['唱歌', '篮球'],
        sex: '男',
        desc: ''
      },
      options: [{
        value: 'guangdong',
        label: '广东省',
        children: [{
          value: 'guangzhou',
          label: '广州市',
          children: [{
            value: 'tianhe',
            label: '天河区'
          }, {
            value: 'haizhu',
            label: '海珠区'
          }]
        }, {
          value: 'shenzhen',
          label: '深圳市',
          children: [{
            value: 'nanshan',
            label: '南山区'
          }, {
            value: 'baoan',
            label: '宝安区'
          }]
        }]
      }, {
        value: 'beijing',
        label: '北京市'
      }]
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
      this.$message.success('提交成功')
    }
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
</style>
