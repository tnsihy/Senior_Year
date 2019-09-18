<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-date"></i> 表单相关
        </el-breadcrumb-item>
        <el-breadcrumb-item>三级菜单</el-breadcrumb-item>
        <el-breadcrumb-item>markdown编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <mavon-editor v-model="content" style="min-height: 400px"></mavon-editor>
      <el-button class="editor-btn" type="primary" size="small" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'Markdown',
  components: {
    mavonEditor
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    submit () {
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
.editor-btn{
  margin-top:20px;
}
</style>
