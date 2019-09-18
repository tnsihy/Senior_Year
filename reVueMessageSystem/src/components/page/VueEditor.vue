<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-date"></i> 表单相关
        </el-breadcrumb-item>
        <el-breadcrumb-item>三级菜单</el-breadcrumb-item>
        <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <quill-editor v-model="content" :options="editorOption"></quill-editor>
      <el-button class="editor-btn" type="primary" size="small" @click="onSubmit">提交</el-button>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {quillEditor} from 'vue-quill-editor'
export default {
  name: 'VueEditor',
  components: {
    quillEditor
  },
  data () {
    return {
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.content)
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
  margin-top:90px;
}
</style>
<style>
.quill-editor{
  height:300px;
}
</style>
