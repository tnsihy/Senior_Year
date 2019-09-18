<template>
  <div class="login-wrap" ref="loginwrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>

      <!-- 对表单字段进行验证 在el-form添加:rules="rules" rules需定义 然后在el-form-item添加prop属性-->
      <el-form class="ms-content" :rules="rules" ref="login" :model="param">
        <el-form-item prop="username">
          <el-input placeholder="请输入账号..." v-model="param.username">
            <el-button slot="prepend">
              <i class="el-icon-user-solid"></i>
            </el-button>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <!-- vue中v-on:keyup键盘监听事件 .native为自定义组件添加原生事件-->
          <el-input placeholder="请输入密码..." v-model="param.password" type="password" @keyup.enter.native="submitForm()">
            <el-button slot="prepend">
              <i class="el-icon-lock"></i>
            </el-button>
          </el-input>
        </el-form-item>

        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      clientHeight: '',
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      param: {
        username: 'tnsihy',
        password: '112233'
      }
    }
  },
  mounted () {
    this.clientHeight = document.documentElement.clientHeight
    this.$refs.loginwrap.style.height = this.clientHeight + 'px'
  },
  methods: {
    submitForm () {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success('登录成功')
          localStorage.setItem('ms_username', this.param.username)
          this.$router.push('/')
        } else {
          this.$message.error('请输入账号和密码')
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  background-image: url(../../assets/img/login.jpg);
  background-size: 100%;
}
.ms-login {
  position: absolute;
  left: 15%;
  top: 20%;
  width: 300px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
</style>
