<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-rank"></i> 拖拽组件
        </el-breadcrumb-item>
        <el-breadcrumb-item>拖拽弹框</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <el-button type="primary" size="small" @click="visible=true">点我解析小君君是什么物种?</el-button>
    </div>
    <el-dialog v-dialogDrag title="拖拽弹框" :visible.sync="visible" center width="30%">
      <div>小君君是一只猪！千真万确！</div>
      <span class="dialog-footer">
        <el-button @click="visible=false" size="small">取消</el-button>
        <el-button @click="visible=false" size="small" type="primary">确定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
export default {
  name: 'DragDialog',
  data () {
    return {
      visible: false
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
.dialog-footer{
  display: block;
  margin-top:40px;
  text-align: center;
}
</style>
