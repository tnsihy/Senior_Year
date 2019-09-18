<template>
  <div>
      <!-- el-container属性direction:vertial(有el-header等默认为vertial)/horizontal -->
      <el-container direction="vertial">
          <!-- el-header height顶栏高度 el-footer height底栏高度  el-main没有height-->
          <el-header height="10">Header</el-header>
          <el-main>Main</el-main>
          <el-footer height="10">Footer</el-footer>
      </el-container>
      <hr style="border:1px dashed black;margin:5px 0;">
      <el-container>
          <el-header>Header</el-header>
          <el-container>
              <!-- el-aside width侧边栏宽度 -->
              <el-aside width="100px">Aside</el-aside>
              <el-main>Main</el-main>
          </el-container>
          <el-footer>Footer</el-footer>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>
.el-container{
    /*display: flex;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0; */
    height:300px;
}
.el-header{
    background-color: rgb(169, 184, 250);
}
.el-main{
    /* flex:1; */
    background-color:rgb(113, 121, 243);
}
.el-footer{
    background-color: rgb(99, 73, 245);
}
</style>
