<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-date"></i> 表单相关
        </el-breadcrumb-item>
        <el-breadcrumb-item>文件上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <div class="content-title">支持拖拽</div>
      <el-upload action="">
        <div class="upload-border">
          <i class="el-icon-upload" style="font-size:50px;"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </div>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

      <!-- -------------------------------------------- -->
      <div class="content-title">支持裁剪</div>
      <div class="crop-demo">
        <img :src="cropImg" class="pre-img" />
        <div class="crop-demo-btn">
          选择图片
          <input class="crop-input" type="file" name="image" @change="setImage"/>
        </div>
      </div>

      <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
        <vue-cropper
          :src="imgSrc"
          style="width:100%;height:300px;"
          :ready="cropImage"
          :zoom="cropImage"
          :cropmove="cropImage"
        ></vue-cropper>
        <span class="dialog-footer">
          <el-button size="small">取消</el-button>
          <el-button size="small" type="primary">确定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
export default {
  name: 'Upload',
  components: {
    VueCropper
  },
  data () {
    return {
      cropImg: '',
      dialogVisible: false,
      imgSrc: '',
      defaultSrc: require('@/assets/img/user.jpg')
    }
  },
  created () {
    this.cropImg = this.defaultSrc
  },
  methods: {
    // 看不太懂?????
    setImage (e) {
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
.el-upload__text {
    color: #606266;
    font-size: 14px;
    text-align: center
}

.el-upload__text em {
    color: #00D1B2;
    font-style: normal
}
.el-upload__tip {
    font-size: 12px;
    color: #606266;
    margin-top: 7px
}
.upload-border{
  margin-top:10px;
  padding:40px;
  border:1px dashed #ccc;
  border-radius: 5px;
}
.upload-border:hover{
  border-color: #409EFF;
}
.crop-demo{
    display: flex;
    align-items: flex-end;
}
.crop-demo-btn{
    position: relative;
    width: 100px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    margin-left: 30px;
    background-color: #409eff;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
}
.pre-img{
    width: 100px;
    height: 100px;
    background: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 5px;
}
.crop-input{
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}
.content-title{
  margin:10px 0;
}
</style>
