<template>
  <div>
    <span>:span占据列数 :gutter间隔数</span>
    <el-row :gutter="20">
        <el-col :span="8"><div class="dark"></div></el-col>
        <el-col :span="8"><div class="light"></div></el-col>
        <el-col :span="8"><div class="dark"></div></el-col>
    </el-row>

    <span>:offset偏移量</span>
    <el-row :gutter="20">
        <el-col :span="6" :offset="6"><div class="dark"></div></el-col>
        <el-col :span="6" :offset="6"><div class="light"></div></el-col>
    </el-row>

    <!-- 对齐方式:
        flex布局 justify基于水平排列:start center end space-between space-around
        :push 向右移动
        :pull 向左移动
    -->
    <span>对齐方式</span>
    <el-row type="flex" justify="space-around">
        <el-col :span="6" :push="2"><div class="dark"></div></el-col>
        <el-col :span="6"><div class="light"></div></el-col>
        <el-col :span="6"><div class="dark"></div></el-col>
    </el-row>

    <span>响应式布局</span>
    <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="dark"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="dark"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>
.el-row{
    margin-bottom:20px;
    &:last-child{
        margin-bottom:0;
    }
}
.dark{
    background-color:rgb(65, 133, 221);
    border-radius: 5px;
    height: 40px;
}
.light{
    background-color:rgb(132, 185, 235);
    border-radius: 5px;
    height: 40px;
}
</style>
